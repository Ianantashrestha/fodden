import { FC, memo, ReactNode } from "react";
import { Stack, styled } from "@mui/material";
interface RowProps {
  children?: ReactNode;
  sx?: any;
}
const StyleRow = styled(Stack)(({}) => ({
  display: "flex",
  flexDirection: "row",
}));
const Row: FC<RowProps> = ({ children, ...restProps }) => {
  return <StyleRow {...restProps}>{children}</StyleRow>;
};

export default memo(Row);
