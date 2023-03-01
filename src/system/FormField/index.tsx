import { TextField, Stack, FormLabel, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { memo, FC } from "react";
interface FormFieldProps {
  type?: string;
  label?: string;
  placeholder?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: any;
  formType?: "checkbox" | "text" | "search";
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
}
const StyledTextField = styled(TextField)(
  ({ theme }) => `
  .MuiOutlinedInput-root{
    padding:0px;
  }
    input{
        border: 1px solid #D1DDEA ;
        outline:none;
        background:white;
      ::placeholder{
        font-size:14px;
      }
  }
  textarea{
    border: 1px solid #D1DDEA ;
    outline:none;
    background:white;
    font-size:14px;
    padding:5px 15px;
  }
      `
);
const FormField: FC<FormFieldProps> = ({ formType, label, ...restProps }) => {
  return (
    <Stack>
      {label && (
        <FormLabel
          component="label"
          sx={{
            marginBottom: 0.5,
            color: "#0e101a",
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          {label}
        </FormLabel>
      )}
      {formType === "text" && <StyledTextField size="small" {...restProps} />}
      {formType === "search" && (
        <Stack sx={{ position: "relative" }}>
          <StyledTextField size="small" {...restProps} />
          <SearchIcon
            sx={{
              fontSize: 24,
              position: "absolute",
              right: 5,
              top: 10,
              color: "rgba(14, 16, 26, 0.5)",
            }}
          />
        </Stack>
      )}
    </Stack>
  );
};

export default memo(FormField);
