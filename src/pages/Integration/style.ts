import { styled } from "@mui/material";

export const StyleCardRadioWrapper = styled("label")`
  background: #ffffff;
  border: 1px solid #ebf4fa;
  border-radius: 8px;
  width: 46%;
  position: relative;
`;

export const StyleRadioTarget = styled("div")`
  width: 100%;
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  jutify-content: center;
  align-items: center;
`;
export const StyleRadioInput = styled("input")`
  clip: rect(0 0 0 0);
  height: 100%;
  width: 100%;
  padding: 0;
  border: 0;
  display: none;
  &:checked + .custom-radio-wrapper {
    border: 1px solid black;
    border-radius: 4px;
  }
`;
export const StyleRadioIconWrapper = styled("div")`
  width: 40px;
  height: 40px;
  background: #ebf4fa;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
