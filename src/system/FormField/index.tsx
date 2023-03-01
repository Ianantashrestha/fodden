import { TextField, Stack, FormLabel, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { memo, FC } from "react";
interface FormFieldProps {
  type?: "checkbox" | "text" | "search";
  label?: string;
  placeholder?: string;
  name?: string;
  onChange?: () => void;
  sx?: any;
}
const StyledTextField = styled(TextField)(
  ({ theme }) => `
    input{
        border: 1px solid #D1DDEA ;
        outline:none;
      ::placeholder{
        font-size:14px;
      }
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
      {type === "search" && (
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
