import { FC, ReactNode } from "react";
import { Link } from "@mui/material";
interface NavLinkProps {
  children?: ReactNode;
  color?: any;
  href?: any;
}

const NavLink: FC<NavLinkProps> = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

export default NavLink;
