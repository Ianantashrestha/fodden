import { FC, memo } from "react";
import { styled, Divider } from "@mui/material";

interface LineProps {}
const StyledDivider = styled(Divider)(
  ({ theme }) => `
      hr{
        border-color:${theme.palette.primary}
      }
      `
);
const Line: FC<LineProps> = ({}: LineProps) => {
  return <StyledDivider />;
};

export default Line;
