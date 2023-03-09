import { ReactNode, FC, memo } from "react";
import { Modal } from "@mui/material";
import { TypographyText, Row, CardBox, Column } from "..";
import CloseIcon from "@mui/icons-material/Close";

interface ModalBoxProps {
  children?: ReactNode;
  open?: boolean;
  handleClose?: () => void;
  boxSx?: any;
  header?: boolean;
  title?: string;
}

const ModalBox: FC<ModalBoxProps> = ({
  children,
  open = false,
  handleClose,
  boxSx,
  header,
  title,
  ...restProps
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      {...restProps}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardBox sx={boxSx}>
        {header && (
          <Row
            sx={{
              justifyContent: "space-between",
              padding: "15px 25px",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <TypographyText sx={{ fontSize: 28, fontWeight: 500 }}>
              {title}
            </TypographyText>
            <CloseIcon
              sx={{ color: "rgba(14, 16, 26, 0.7)" }}
              onClick={handleClose}
            />
          </Row>
        )}
        <Column sx={{ padding: "0px 25px", height: "100%" }}>{children}</Column>
      </CardBox>
    </Modal>
  );
};

export default memo(ModalBox);
