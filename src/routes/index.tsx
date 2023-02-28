import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../components/layouts/PublicLayout";
import PrivateLayout from "../components/layouts/PrivateLayouts";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/dashboard" element={<PrivateLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
