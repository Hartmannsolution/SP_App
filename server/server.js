import express from 'express';
import {AppError} from "./appError.js";
import jwt from 'jsonwebtoken';
import cors from 'cors';
import morgan from 'morgan';


const app = express();

app.use(morgan('dev'));
app.use(cors("*"));
app.use(express.json({ limit: '10kb' }));

const signToken = (id) =>
    jwt.sign({ id: id }, "Tay3M69s*!G7%*uK@2xqB8Ug*9JR&R@BBb69pzCf", {
        expiresIn:"1h",
    });

const createAndSendToken = (user, statusCode, res) => {
    const token = signToken(user.id);

    const cookieOptions = {
        expires: new Date(
            Date.now() + 90 * 24 * 60 * 60 * 1000,
        ),
        httpOnly: true,
    };

    if (process.env.production === 'production') cookieOptions.secure = true; // Will only be sent if send by https

    res.cookie('jwt', token, cookieOptions);

    // Remove password from output
    user.password = undefined;

    res.status(statusCode).json({
        status: 'succes',
        token,
        user,
    });
};

const login = async (req, res, next) => {
    // From user login
    const { email, password } = req.body;

    // 1) check if email and password is in req.body
    if (!email || !password) {
        return next(new AppError('Please provide email and password!', 400));
    }

    const id = email === "joerg@example.com" ? 1 : 2

    // 2) check if user exists && password is correct
    const user = await fetchUser(id)
    console.log("USER: ", user)

    if (!user || !(password === user.password)) {
        return next(new AppError('Incorrect email or password', 404));
    }

    // 3) if everything ok, send token to client
    createAndSendToken(user, 200, res);
};

const fetchUser = async (id) => {
    const res = await fetch(`http://localhost:3001/users/${id}`)
    return await res.json()
};

const fetchActivities = async () => {
    const res = await fetch(`http://localhost:3001/activities`)
    return await res.json()
}

const addCommentToActivity = async (id, comment, status) => {
    const res = await fetch(`http://localhost:3001/activities/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ comment, status }),
        headers: { 'Content-Type': 'application/json' },
    })
    return await res.json()
}

const activities = async (req, res, next) => {
    const activities = await fetchActivities()
    res.status(200).json({
        status: 'succes',
        data: activities,
    });
}


app.post('/login', login);
app.get('/activities', activities);
app.patch('/activities/:id', async (req, res, next) => {
    const { id } = req.params;
    const { comment, status } = req.body;

    const activity = await addCommentToActivity(id, comment, status)
    res.status(200).json({
        status: 'succes',
        activity,
    });
});

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});


app.listen(3000, () => {
    console.log('App running on port 3000...');
});