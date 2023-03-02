import { TextField, styled } from "@mui/material";

export const StyledTextField = styled(TextField)(
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
