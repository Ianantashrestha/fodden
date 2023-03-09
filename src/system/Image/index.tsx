import { Avatar, styled } from "@mui/material";
import { FC } from "react";
interface ImageProps {
  src?: any;
  sx?: any;
  variant?: "circular" | "rounded" | "square";
  objectFit?: any;
  onClick?: () => void;
}

const StyledAvatar = styled(Avatar)(
  ({ theme }) => `
    img{
      object-fit:initial
    }
   `
);
const Image: FC<ImageProps> = ({ variant = "square", ...restProps }) => {
  return <StyledAvatar variant={variant} {...restProps} />;
};

export default Image;
