import { FC, memo, ReactNode } from "react";
import { Stack, styled } from "@mui/material";
interface ColumnProps {
  children?: ReactNode;
  sx?: any;
}
const StyleColumn = styled(Stack)`
  display: flex;
  flex-direction: column;
`;
const Column: FC<ColumnProps> = ({ children, ...restProps }) => {
  return <StyleColumn {...restProps}>{children}</StyleColumn>;
};

export default memo(Column);
