import { FC, memo, ReactNode } from "react";
import { Link, styled } from "@mui/material";
interface NavLinkProps {
  children?: ReactNode;
  color?: any;
  href?: any;
  sx?: any;
  onClick?: () => void;
}
const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;
const NavLink: FC<NavLinkProps> = ({ children, ...restProps }) => {
  return <StyledLink {...restProps}>{children}</StyledLink>;
};

export default memo(NavLink);
