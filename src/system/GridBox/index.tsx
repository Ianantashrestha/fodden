import { FC, memo, ReactNode } from "react";
import { Grid } from "@mui/material";
interface GridBoxProps {
  sx?: any;
  children?: ReactNode;
  container?: boolean;
  item?: boolean;
  xs?: number;
  md?: number;
  lg?: number;
  spacing?: number;
}
const GridBox: FC<GridBoxProps> = ({ children, ...restProps }) => {
  return <Grid {...restProps}>{children}</Grid>;
};

export default memo(GridBox);
