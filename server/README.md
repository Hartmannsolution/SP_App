# Studypoint Application backend server
## Techstack
- Typescript
- Node.js
- Express
- MongoDB
- Mongoose
- GraphQL
- Jest
- Docker
- Docker-compose
- Github Actions
- Digital Ocean
- Traefik

```sh
npm install --save-dev @types/node typescript ts-node nodemon
npm install --save express body-parser dotenv mongoose graphql @apollo/server
```


## GraphQL API
- [GraphQL API](https://cphbusinessaps.dk/graphql)
- Schema:
```gql
type Activity {
  _id: ID!
  name: String!
  description: String
  points: Int!
  session: Session!
}
type ActivityInput {
  name: String!
  description: String
  points: Int!
  session: ID!
}
type ClassName {
  _id: ID!
  name: String!
  moodleRoom: String
  githubRepo: String
  imgUrl: String
  sessions: [Session!]!
  students: [Student!]!
  teachers: [Teacher!]!
}
type ClassNameInput {
  name: String!
  moodleRoom: String
  githubRepo: String
  imgUrl: String
}
type User {
  _id: ID!
  username: String!
  email: String!
  password: String!
  roles: String!
}

type UserInput {
  username: String!
  email: String!
  password: String!
  roles: String!
}

type Student {
  User: User!
  name: String!
  imageUrl: String
  class: ClassName!
  activities: [Activity!]!
  approvedWork: [ApprovedWork!]!
}

type StudentInput {
  name: String!
  imageUrl: String
  class: ID!
}

type Teacher {
  User: User!
  name: String!
  zoomUrl: String
  classes: [ClassName!]!
}

type TeacherInput {
  name: String!
  zoomUrl: String
}

type ApprovedWork {
  _id: ID!
  student: Student!
  activity: Activity!
  handInUrl: String!
  comment: String
}

type ApprovedWorkInput {
  student: ID!
  activity: ID!
  handInUrl: String!
  comment: String
}

type Session {
  _id: ID!
  name: String!
  date: String!
  class: ClassName!
  activities: [Activity!]!
}

type SessionInput {
  name: String!
  date: String!
  class: ID!
}
```
### Queries 
```gql
type Query {
  activities: [Activity!]!
  activity(id: ID!): Activity!
  classNames: [ClassName!]!
  className(id: ID!): ClassName!
  students: [Student!]!
  student(id: ID!): Student!
  teachers: [Teacher!]!
  teacher(id: ID!): Teacher!
  sessions: [Session!]!
  session(id: ID!): Session!
  approvedWorks: [ApprovedWork!]!
  approvedWork(id: ID!): ApprovedWork!
}
```
### Mutations
```gql
type Mutation {
  createActivity(activityInput: ActivityInput): Activity!
  updateActivity(id: ID!, activityInput: ActivityInput): Activity!
  deleteActivity(id: ID!): Activity!
  createClassName(classNameInput: ClassNameInput): ClassName!
  updateClassName(id: ID!, classNameInput: ClassNameInput): ClassName!
  deleteClassName(id: ID!): ClassName!
  createStudent(studentInput: StudentInput): Student!
  updateStudent(id: ID!, studentInput: StudentInput): Student!
  deleteStudent(id: ID!): Student!
  createTeacher(teacherInput: TeacherInput): Teacher!
  updateTeacher(id: ID!, teacherInput: TeacherInput): Teacher!
  deleteTeacher(id: ID!): Teacher!
  createSession(sessionInput: SessionInput): Session!
  updateSession(id: ID!, sessionInput: SessionInput): Session!
  deleteSession(id: ID!): Session!
  createApprovedWork(approvedWorkInput: ApprovedWorkInput): ApprovedWork!
  updateApprovedWork(id: ID!, approvedWorkInput: ApprovedWorkInput): ApprovedWork!
  deleteApprovedWork(id: ID!): ApprovedWork!
  createUser(userInput: UserInput): User!
  updateUser(id: ID!, userInput: UserInput): User!
  deleteUser(id: ID!): User!
}
``` 

## Mongoose Models

### Schemas
```typescript
const activitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  points: {
    type: Number,
    required: true,
  },
  session: {
    type: Schema.Types.ObjectId,
    ref: "Session",
    required: true,
  },
});

const classNameSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  moodleRoom: {
    type: String,
  },
  githubRepo: {
    type: String,
  },
  imgUrl: {
    type: String,
  },
  sessions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Session",
    },
  ],
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  teachers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Teacher",
    },
  ],
});

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema({
  User: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: "ClassName",
    required: true,
  },
  activities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Activity",
    },
  ],
  approvedWork: [
    {
      type: Schema.Types.ObjectId,
      ref: "ApprovedWork",
    },
  ],
});

const teacherSchema = new Schema({
  User: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  zoomUrl: {
    type: String,
  },
  classes: [
    {
      type: Schema.Types.ObjectId,
      ref: "ClassName",
    },
  ],
});

const approvedWorkSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  activity: {
    type: Schema.Types.ObjectId,
    ref: "Activity",
    required: true,
  },
  handInUrl: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
});

const sessionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: "ClassName",
    required: true,
  },
  activities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Activity",
    },
  ],
});

```

### GraphQL Resolvers

#### User
```typescript
const { User } = require('../models/User');

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find();
      return users;
    },
    user: async (_, { id }) => {
      const user = await User.findById(id);
      return user;
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const user = new User(input);
      await user.save();
      return user;
    },
    updateUser: async (_, { id, input }) => {
      const user = await User.findByIdAndUpdate(id, input, { new: true });
      return user;
    },
    deleteUser: async (_, { id }) => {
      const user = await User.findByIdAndDelete(id);
      return user;
    },
  },
};

module.exports = resolvers;
```

##### create User example
```typescript
mutation {
  createUser(userInput: {
    username: "johndoe",
    email: "johndoe@example.com",
    password: "password",
    roles: "student"
  }) {
    _id
    username
    email
    roles
  }
}
```

#### ClassName
```typescript
const resolvers = {
  Query: {
    classNames: async () => {
      const classes = await ClassName.find();
      return classes;
    },
    className: async (_, { id }) => {
      const foundClass = await ClassName.findById(id);
      return foundClass;
    },
  },
  Mutation: {
    createClassName: async (_, { classNameInput }) => {
      const newClass = new ClassName(classNameInput);
      await newClass.save();
      return newClass;
    },
    updateClassName: async (_, { id, classNameInput }) => {
      const updatedClass = await ClassName.findByIdAndUpdate(
        id,
        classNameInput,
        { new: true }
      );
      return updatedClass;
    },
    deleteClassName: async (_, { id }) => {
      const deletedClass = await ClassName.findByIdAndDelete(id);
      return deletedClass;
    },
  },
};
```

#### Student
```typescript
import { StudentModel, StudentDocument } from '../models/student.model';
import { ClassNameModel } from '../models/classname.model';
import { ActivityModel } from '../models/activity.model';
import { ApprovedWorkModel } from '../models/approvedwork.model';

const studentResolver = {
  Query: {
    students: async () => {
      const students = await StudentModel.find().populate('class').populate('activities').populate('approvedWork');
      return students.map((student: StudentDocument) => student.toObject());
    },
    student: async (_, { id }) => {
      const student = await StudentModel.findById(id).populate('class').populate('activities').populate('approvedWork');
      return student?.toObject();
    },
  },

  Mutation: {
    createStudent: async (_, { studentInput }) => {
      const { class: classId, activities: activityIds, ...student } = studentInput;
      const newStudent = await StudentModel.create({
        ...student,
        class: classId ? await ClassNameModel.findById(classId) : undefined,
        activities: activityIds?.map((id: string) => ActivityModel.findById(id)).filter(Boolean),
      });
      await newStudent.populate('class').populate('activities').execPopulate();
      return newStudent.toObject();
    },

    updateStudent: async (_, { id, studentInput }) => {
      const { class: classId, activities: activityIds, ...update } = studentInput;
      const updatedStudent = await StudentModel.findByIdAndUpdate(id, {
        ...update,
        class: classId ? await ClassNameModel.findById(classId) : undefined,
        activities: activityIds?.map((id: string) => ActivityModel.findById(id)).filter(Boolean),
      }, { new: true }).populate('class').populate('activities');
      return updatedStudent?.toObject();
    },

    deleteStudent: async (_, { id }) => {
      const deletedStudent = await StudentModel.findByIdAndDelete(id).populate('class').populate('activities');
      return deletedStudent?.toObject();
    },
  },

  Student: {
    class: async (student: StudentDocument) => {
      const populated = await student.populate('class').execPopulate();
      return populated.class?.toObject();
    },

    activities: async (student: StudentDocument) => {
      const populated = await student.populate('activities').execPopulate();
      return populated.activities.map((activity) => activity.toObject());
    },

    approvedWork: async (student: StudentDocument) => {
      const approvedWorks = await ApprovedWorkModel.find({ student: student._id }).populate('activity');
      return approvedWorks.map((approvedWork) => approvedWork.toObject());
    },
  },
};

export default studentResolver;

```

#### Teacher
```typescript
import { ApolloError } from 'apollo-server-express';
import { ObjectId } from 'mongoose';
import TeacherModel, { TeacherDocument } from '../models/teacher';
import UserModel, { UserDocument } from '../models/user';
import { TeacherInput } from '../types/teacher';

const teacherResolver = {
  Query: {
    async teachers() {
      try {
        const teachers = await TeacherModel.find().populate('User');
        return teachers;
      } catch (err) {
        throw new ApolloError(err);
      }
    },
    async teacher(_, { id }) {
      try {
        const teacher = await TeacherModel.findById(id).populate('User');
        return teacher;
      } catch (err) {
        throw new ApolloError(err);
      }
    },
  },
  Mutation: {
    async createTeacher(_, { teacherInput }) {
      try {
        const { username, email, password, roles } = teacherInput.User;
        const user = new UserModel({ username, email, password, roles });
        const savedUser = await user.save();
        const { name, zoomUrl } = teacherInput;
        const teacher = new TeacherModel({ name, zoomUrl, User: savedUser._id });
        const savedTeacher = await teacher.save();
        return savedTeacher;
      } catch (err) {
        throw new ApolloError(err);
      }
    },
    async updateTeacher(_, { id, teacherInput }) {
      try {
        const { name, zoomUrl } = teacherInput;
        const teacher = await TeacherModel.findByIdAndUpdate(id, { name, zoomUrl }, { new: true }).populate('User');
        if (!teacher) {
          throw new ApolloError(`Teacher with id ${id} not found`);
        }
        return teacher;
      } catch (err) {
        throw new ApolloError(err);
      }
    },
    async deleteTeacher(_, { id }) {
      try {
        const deletedTeacher = await TeacherModel.findByIdAndDelete(id).populate('User');
        if (!deletedTeacher) {
          throw new ApolloError(`Teacher with id ${id} not found`);
        }
        return deletedTeacher;
      } catch (err) {
        throw new ApolloError(err);
      }
    },
  },
  Teacher: {
    async User(teacher: TeacherDocument) {
      try {
        const user = await UserModel.findById(teacher.User) as UserDocument;
        return user;
      } catch (err) {
        throw new ApolloError(err);
      }
    },
    async classes(teacher: TeacherDocument) {
      try {
        const classes = await ClassModel.find({ teachers: { $in: [teacher._id] } });
        return classes;
      } catch (err) {
        throw new ApolloError(err);
      }
    },
  },
};

export default teacherResolver;

```

#### Activity
```typescript
const ActivityModel = require('./models/activity');

const resolvers = {
  Query: {
    activities: () => ActivityModel.find(),
    activity: (_, { id }) => ActivityModel.findById(id),
  },
  Mutation: {
    createActivity: (_, { activityInput }) => {
      const activity = new ActivityModel(activityInput);
      return activity.save();
    },
    updateActivity: (_, { id, activityInput }) => ActivityModel.findByIdAndUpdate(id, activityInput, { new: true }),
    deleteActivity: (_, { id }) => ActivityModel.findByIdAndDelete(id),
  },
  Activity: {
    session: (parent) => SessionModel.findById(parent.session),
  },
};

module.exports = resolvers;

```

#### ApprovedWork
Schema example for ApprovedWork with typescript
```yaml
import mongoose, { Schema } from 'mongoose';

interface IApprovedWork {
  student: mongoose.Types.ObjectId;
  activity: mongoose.Types.ObjectId;
  handInUrl: string;
  comment?: string;
}

const ApprovedWorkSchema = new Schema<IApprovedWork>({
  student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  activity: { type: Schema.Types.ObjectId, ref: 'Activity', required: true },
  handInUrl: { type: String, required: true },
  comment: { type: String },
});

export default mongoose.model<IApprovedWork>('ApprovedWork', ApprovedWorkSchema);
```

`type-graphql` is a library for building GraphQL APIs in TypeScript, which provides decorators and classes to define GraphQL types and resolvers. It simplifies the creation of GraphQL schemas and resolvers by providing a TypeScript-first approach, allowing developers to define the schema using TypeScript classes and decorators. This helps reduce boilerplate and ensures type safety throughout the development process:

```typescript
import { ApolloError } from 'apollo-server';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import ApprovedWork, { IApprovedWork } from '../models/approved-work.model';

@Resolver()
class ApprovedWorkResolver {
  @Query(() => [ApprovedWork])
  async approvedWorks(): Promise<IApprovedWork[]> {
    try {
      const approvedWorks = await ApprovedWork.find();
      return approvedWorks;
    } catch (err) {
      throw new ApolloError(`Failed to find approved works: ${err.message}`, '500');
    }
  }

  @Mutation(() => ApprovedWork)
  async createApprovedWork(
    @Arg('student') student: string,
    @Arg('activity') activity: string,
    @Arg('handInUrl') handInUrl: string,
    @Arg('comment', { nullable: true }) comment?: string,
  ): Promise<IApprovedWork> {
    try {
      const approvedWork = await ApprovedWork.create({ student, activity, handInUrl, comment });
      return approvedWork;
    } catch (err) {
      throw new ApolloError(`Failed to create approved work: ${err.message}`, '500');
    }
  }

  @Mutation(() => ApprovedWork)
  async updateApprovedWork(
    @Arg('id') id: string,
    @Arg('approvedWork') approvedWork: Partial<IApprovedWork>,
  ): Promise<IApprovedWork> {
    try {
      const updatedApprovedWork = await ApprovedWork.findByIdAndUpdate(id, approvedWork, { new: true });
      if (!updatedApprovedWork) {
        throw new Error('Approved work not found');
      }
      return updatedApprovedWork;
    } catch (err) {
      throw new ApolloError(`Failed to update approved work: ${err.message}`, '500');
    }
  }

  @Mutation(() => ApprovedWork)
  async deleteApprovedWork(@Arg('id') id: string): Promise<IApprovedWork> {
    try {
      const deletedApprovedWork = await ApprovedWork.findByIdAndDelete(id);
      if (!deletedApprovedWork) {
        throw new Error('Approved work not found');
      }
      return deletedApprovedWork;
    } catch (err) {
      throw new ApolloError(`Failed to delete approved work: ${err.message}`, '500');
    }
  }
}

export default ApprovedWorkResolver;
```

#### Session
```typescript
const SessionModel = require('./models/Session');

const sessionResolvers = {
  Query: {
    sessions: async () => {
      try {
        const sessions = await SessionModel.find();
        return sessions;
      } catch (error) {
        throw new Error(`Error getting sessions: ${error}`);
      }
    },
    session: async (parent, args) => {
      try {
        const session = await SessionModel.findById(args.id);
        return session;
      } catch (error) {
        throw new Error(`Error getting session: ${error}`);
      }
    },
  },
  Mutation: {
    createSession: async (parent, args) => {
      const { name, date, class: classId } = args.sessionInput;
      try {
        const session = new SessionModel({
          name,
          date,
          class: classId
        });
        await session.save();
        return session;
      } catch (error) {
        throw new Error(`Error creating session: ${error}`);
      }
    },
    updateSession: async (parent, args) => {
      const { id, sessionInput } = args;
      const { name, date, class: classId } = sessionInput;
      try {
        const session = await SessionModel.findByIdAndUpdate(
          id,
          { name, date, class: classId },
          { new: true }
        );
        return session;
      } catch (error) {
        throw new Error(`Error updating session: ${error}`);
      }
    },
    deleteSession: async (parent, args) => {
      const { id } = args;
      try {
        const session = await SessionModel.findByIdAndDelete(id);
        return session;
      } catch (error) {
        throw new Error(`Error deleting session: ${error}`);
      }
    },
  },
  Session: {
    class: async (parent) => {
      try {
        const populatedSession = await parent.populate('class').execPopulate();
        return populatedSession.class;
      } catch (error) {
        throw new Error(`Error populating class for session: ${error}`);
      }
    },
    activities: async (parent) => {
      try {
        const populatedSession = await parent.populate('activities').execPopulate();
        return populatedSession.activities;
      } catch (error) {
        throw new Error(`Error populating activities for session: ${error}`);
      }
    },
  },
};

module.exports = sessionResolvers;
```

#### Activity
(Done by Copilot)
```typescript
const activityResolver = {
  activities: async () => {
    try {
      const activitiesFetched = await Activity.find();
      return activitiesFetched.map((activity) => {
        return {
          ...activity._doc,
          _id: activity.id,
          session: session.bind(this, activity._doc.session),
        };
      });
    } catch (err) {
      throw err;
    }
  },
  activity: async (args) => {
    try {
      const activityFetched = await Activity.findById(args.id);
      return {
        ...activityFetched._doc,
        _id: activityFetched.id,
        session: session.bind(this, activityFetched._doc.session),
      };
    } catch (err) {
      throw err;
    }
  },
  createActivity: async (args) => {
    const activity = new Activity({
      name: args.activityInput.name,
      description: args.activityInput.description,
      points: args.activityInput.points,
      session: args.activityInput.session,
    });
    try {
      const result = await activity.save();
      const sessionFetched = await Session.findById(args.activityInput.session);
      if (!sessionFetched) {
        throw new Error("Session not found");
      }
      sessionFetched.activities.push(activity);
      await sessionFetched.save();
      return {
        ...result._doc,
        _id: result.id,
        session: session.bind(this, result._doc.session),
      };
    } catch (err) {
      throw err;
    }
  },
  updateActivity: async (args) => {
    try {
      const activityFetched = await Activity.findByIdAndUpdate(
        args.id,
        {
          name: args.activityInput.name,
          description: args.activityInput.description,
          points: args.activityInput.points,
          session: args.activityInput.session,
        },
        { new: true }
      );
      return {
        ...activityFetched._doc,
        _id: activityFetched.id,
        session: session.bind(this, activityFetched._doc.session),
      };
    } catch (err) {
      throw err;
    }
  },
  deleteActivity: async (args) => {
    try {
      const activityFetched = await Activity.findById(args.id);
      const sessionFetched = await Session.findById(activityFetched.session);
      if (!sessionFetched) {
        throw new Error("Session not found");
      }
      sessionFetched.activities.pull
        await sessionFetched.save();
        await Activity.deleteOne({ _id: args.id });
        return "Activity deleted";

    } catch (err) {
        throw err;
        }
    },
};
```

## How to run
- `npm install`
- `npm run dev`

#### Random code snippets
In this example, we define a Mongoose schema for Address and Person. We use the populate() method in the personSchema.post('save') middleware to automatically populate the address field with the actual Address document when we save a Person document. Instead of only storing the ObjectId of the address, we can now store the entire address document in the person document. The full Address object will be attached to the Person object automatically when you fetch it. This can save you the extra step of manually fetching the Address object separately, and can make your code cleaner and more efficient:

```typescript
import mongoose, { Schema } from 'mongoose';

const addressSchema = new Schema({
  street: String,
  city: String,
  state: String,
  zip: String
});

const personSchema = new Schema({
  name: String,
  address: {
    type: Schema.Types.ObjectId,
    ref: 'Address'
  }
});

personSchema.post('save', function(doc, next) {
  this.populate({
    path: 'address'
  }).then(() => next());
});

const Address = mongoose.model('Address', addressSchema);
const Person = mongoose.model('Person', personSchema);

// Now you can create and save a person with an address:
const address = new Address({
  street: '123 Main St',
  city: 'Anytown',
  state: 'CA',
  zip: '12345'
});

address.save().then(() => {
  const person = new Person({
    name: 'John Doe',
    address: address._id
  });

  person.save().then(() => {
    console.log('Person saved with address populated:', person);
  });
});
```




