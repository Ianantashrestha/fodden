import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../components/layouts/PublicLayout";
import PrivateLayout from "../components/layouts/PrivateLayouts";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import CreateUpdateIntegration from "../pages/Integration/Form";
import RewardIntegration from "../pages/Integration/RewardIntegration";
import EcoSystemIntegration from "../pages/Integration/EcoSystemIntegration";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/" element={<PrivateLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="create/integration"
            element={<CreateUpdateIntegration />}
          />
          <Route path="reward/integration" element={<RewardIntegration />} />
          <Route path="eco/integration" element={<EcoSystemIntegration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
