import { FC, ReactNode, memo } from "react";
import { Button, styled } from "@mui/material";
interface ActionButtonProps {
  title?: string;
  children?: ReactNode;
  disabled?: boolean;
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  sx?: any;
  onClick?: () => void;
}
const StyledButton = styled(Button)(
  ({ theme }) => `
   button{
        border:0px;
   } `
);
const ActionButton: FC<ActionButtonProps> = ({
  children,
  title,
  variant = "contained",
  size = "medium",
  color = "primary",
  ...restProps
}) => {
  return (
    <StyledButton size={size} variant={variant} color={color} {...restProps}>
      {title || children}
    </StyledButton>
  );
};

export default memo(ActionButton);
