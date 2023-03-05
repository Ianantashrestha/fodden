import { styled } from "@mui/material";
type CardRadioButtonProps = {
  backgroundColor?: string;
  padding?: string | number;
  focus?: boolean;
};
export const CardRadioButton = styled("label")<CardRadioButtonProps>(
  ({ theme }) => ({
    position: "relative",
  })
);

export const StyleRadioInput = styled("input")`
  clip: rect(0 0 0 0);
  height: 100%;
  width: 100%;
  padding: 0;
  border: 0;
  display: none;
  &:checked + .custom-radio-wrapper {
    border-color: #457b9d;
    border-radius: 4px;
  }
`;

export const StyleRadioTarget = styled("div")<CardRadioButtonProps>(
  ({ backgroundColor, padding, focus }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
    border: focus ? "1px solid #ebf4fa" : "0px",
    borderRadius: 8,
    padding: padding,
  })
);
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
