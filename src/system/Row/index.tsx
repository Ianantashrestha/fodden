import { FC, memo, ReactNode } from "react";
import styled from "styled-components";

interface RowProps {
  children?: ReactNode;
}
const StyleDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const Row: FC<RowProps> = ({ children }) => {
  return <StyleDiv>{children}</StyleDiv>;
};

export default memo(Row);
