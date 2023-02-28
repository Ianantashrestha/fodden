import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../components/layouts/PublicLayout";
import Login from "../pages/Login";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
