import { Stack, FormLabel } from "@mui/material";
import { StyledTextField } from "./style";
import SearchIcon from "@mui/icons-material/Search";

import { memo, FC } from "react";
interface FormFieldProps {
  type?: string;
  label?: string;
  placeholder?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.SyntheticEvent) => void;
  sx?: any;
  formType?: "checkbox" | "text" | "search" | "file";
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  required?: boolean;
  value?: string;
  accept?: string;
}

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
      {formType === "file" && <StyledTextField {...restProps} type="file" />}
    </Stack>
  );
};

export default memo(FormField);
