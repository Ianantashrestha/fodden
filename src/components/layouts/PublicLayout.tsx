import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
interface PublicLayoutProps {
  children?: ReactNode;
}
const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default PublicLayout;
