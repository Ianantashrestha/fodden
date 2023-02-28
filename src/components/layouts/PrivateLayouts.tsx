import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../DashbaordHeader";
interface PrivateLayoutProps {
  children?: ReactNode;
}
const PrivateLayout = ({ children }: PrivateLayoutProps) => {
  return (
    <>
      <DashboardHeader />
      <Outlet />
    </>
  );
};

export default PrivateLayout;
