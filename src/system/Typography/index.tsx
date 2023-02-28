import { FC, memo, ReactNode } from "react";
import { Typography } from "@mui/material";
interface TypographyProps {
  children?: ReactNode;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit";
  component?: any;
  sx?: any;
  color?: string;
}
const TypographyText: FC<TypographyProps> = ({
  children,
  component = "h2",
  variant = "h2",
  ...restProps
}) => {
  return (
    <Typography variant={variant} component={component} {...restProps}>
      {children}
    </Typography>
  );
};

export default memo(TypographyText);
