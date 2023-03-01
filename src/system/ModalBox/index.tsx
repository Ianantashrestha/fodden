import { ReactNode, FC, memo } from "react";
import { Modal } from "@mui/material";
interface ModalBoxProps {
  children?: ReactNode;
  open?: boolean;
  handleClose?: () => void;
}

const ModalBox: FC<ModalBoxProps> = ({
  children,
  open = false,
  handleClose,
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
      <>{children}</>
    </Modal>
  );
};

export default memo(ModalBox);
