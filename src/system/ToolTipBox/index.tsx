import { FC } from "react";
import { Tooltip } from "@mui/material";
interface ToolTipBoxProps {
  children?: any;
  title?: string;
  enterDelay?: number;
  leaveDelay?: number;
  placement?: "top" | "bottom";
}
const ToolTipBox: FC<ToolTipBoxProps> = ({
  children,
  title,
  placement = "bottom",
  ...restProps
}) => {
  return (
    <Tooltip placement={placement} title={title} {...restProps}>
      <>{children}</>
    </Tooltip>
  );
};

export default ToolTipBox;
