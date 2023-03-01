import { Container } from "@mui/material";
import { ReactNode, FC } from "react";
interface ContainerBoxProps {
  children?: ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg";
  sx?: any;
}

const ContainerBox: FC<ContainerBoxProps> = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default ContainerBox;
