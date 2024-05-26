import { Routes, Route } from "react-router-dom";

import SignUp from "../views/signUp.view";
import SignIn from "../views/signIn.view";
import Application from "../views/application.view";
import ProtectedRoute from "../utils/ProtectedRoute";
import { AuthProvider } from "../utils/AuthContext";

function MainRouter() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/application"
          element={
            <ProtectedRoute>
              <Application />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default MainRouter;
