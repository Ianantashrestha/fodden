import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface PrivateLayoutProps {
  children?: ReactNode;
}
const PrivateLayout = ({ children }: PrivateLayoutProps) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateLayout;
