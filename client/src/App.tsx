import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './layout/Header.tsx';
import Footer from './layout/Footer.tsx';
import ProtectedRoute from './features/auth/ProtectedRoute.tsx';
import AppLayout from './layout/AppLayout.tsx';
import Review from './pages/Review.tsx';
import CSV from './pages/CSV.tsx';
import Activities from './pages/Activities.tsx';
import Status from './pages/Status.tsx';
import Login from './features/auth/Login.tsx';
import Toast from './layout/Toast.tsx';
import {ToastProvider} from "./context/ToastContext.tsx";
import {ActivityProvider} from "./context/ActivityContext.tsx";
import {AuthProvider} from "./context/AuthContext.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";

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
              <Route path="*" element={<PageNotFound/>} />
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
