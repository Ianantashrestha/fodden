import {
  ModalBox,
  CardBox,
  Row,
  TypographyText,
  ActionButton,
  NavLink,
} from "../../system";
import CloseIcon from "@mui/icons-material/Close";
interface DeleteModalProps {
  title: string;
  open?: boolean;
  description?: string;
  handleCloseModal?: () => void;
  handleOk?: () => void;
}
const DeleteModal = ({
  title,
  open,
  handleCloseModal,
  description,
  handleOk,
}: DeleteModalProps) => {
  return (
    <ModalBox open={open}>
      <CardBox sx={{ padding: "30px 20px", width: "30%" }}>
        <Row sx={{ justifyContent: "space-between" }}>
          <TypographyText sx={{ fontSize: 28, fontWeight: 600 }}>
            {title}
          </TypographyText>
          <CloseIcon
            sx={{ color: "rgba(14, 16, 26, 0.7)" }}
            onClick={handleCloseModal}
          />
        </Row>
        <Row sx={{ padding: "30px 0px" }}>
          <TypographyText component="p" sx={{ fontSize: 16 }}>
            {description}
          </TypographyText>
        </Row>
        <Row sx={{ columnGap: 2, alignItems: "center" }}>
          <NavLink
            sx={{
              color: "rgba(14, 16, 26, 0.7)",
              fontSize: 16,
              fontWeight: 500,
              marginLeft: "auto",
            }}
            onClick={handleCloseModal}
          >
            Cancel
          </NavLink>
          <ActionButton color="error" size="large" onClick={handleOk}>
            Delete
          </ActionButton>
        </Row>
      </CardBox>
    </ModalBox>
  );
};

export default DeleteModal;
