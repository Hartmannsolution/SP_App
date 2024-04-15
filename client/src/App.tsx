import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/layout/Header.tsx';
import Footer from './components/layout/Footer.tsx';
import ProtectedRoute from './components/auth/ProtectedRoute.tsx';
import AppLayout from './components/layout/AppLayout.tsx';
import Review from './components/pages/Review.tsx';
import CSV from './components/pages/CSV.tsx';
import Activities from './components/pages/Activities.tsx';
import Status from './components/pages/Status.tsx';
import Login from './components/auth/Login.tsx';
import Toast from './components/layout/Toast.tsx';
import {ToastProvider} from "./context/ToastContext.tsx";
import {ActivityProvider} from "./context/ActivityContext.tsx";
import {AuthProvider} from "./context/AuthContext.tsx";

const student = {
  email: 'jorg@mail.com',
  role: 'student',
};

const admin = {
  email: 'thomas@mail.com',
  role: 'admin',
};

function App() {
  return (
    <AuthProvider>
      <ActivityProvider>
        <ToastProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route index element={<Login />} />
              <Route
                path="admin"
                element={
                  <ProtectedRoute role="admin">
                    <AppLayout role="admin" />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="review" />} />
                <Route path="review" element={<Review />} />
                <Route path="csv" element={<CSV />} />
              </Route>
              <Route
                path="student"
                element={
                  <ProtectedRoute role="student">
                    <AppLayout role="student" />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="activities" />} />
                <Route path="activities" element={<Activities />} />
                <Route path="status" element={<Status />} />
              </Route>
              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
            <Toast />
            <Footer />
          </BrowserRouter>
        </ToastProvider>
      </ActivityProvider>
    </AuthProvider>
  );
}

export default App;
