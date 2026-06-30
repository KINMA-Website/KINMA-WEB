import { Routes, Route } from "react-router-dom";

import App from "../App";
import AdminLogin from "../pages/AdminLogin";
import Dashboard from "../pages/Dashboard";

function AppRoutes() {

  return (

    <Routes>

      <Route
        path="/"
        element={<App />}
      />

      <Route
        path="/admin"
        element={<AdminLogin />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
/>

    </Routes>
    

  );

}

export default AppRoutes;