import { TextField, Stack, FormLabel, styled } from "@mui/material";
import { memo, FC } from "react";
interface FormFieldProps {
  type?: "checkbox" | "text";
  label?: string;
  placeholder?: string;
  name?: string;
}
const StyledTextField = styled(TextField)(
  ({ theme }) => `
    input{
        border: 1px solid #D1DDEA;
  }
      `
);

const FormField: FC<FormFieldProps> = ({ type, label, ...restProps }) => {
  return (
    <Stack>
      {label && (
        <FormLabel
          component="label"
          sx={{ marginBottom: 0.5, color: "#0e101a", fontSize: 14 }}
        >
          {label}
        </FormLabel>
      )}
      {type === "text" && <StyledTextField size="small" {...restProps} />}
    </Stack>
  );
};

export default memo(FormField);
