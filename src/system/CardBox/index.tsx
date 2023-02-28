import { FC, memo, ReactNode } from "react";
import { styled, Card } from "@mui/material";
interface CardBoxProps {
  children?: ReactNode;
  sx?: any;
}
const StyledCard = styled(Card)`
  border-radius: 8px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.02);
`;
const CardBox: FC<CardBoxProps> = ({ children, ...restProps }) => {
  return <StyledCard {...restProps}>{children}</StyledCard>;
};

export default memo(CardBox);
