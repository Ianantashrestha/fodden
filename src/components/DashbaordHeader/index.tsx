import { useState } from "react";
import {
  CardBox,
  ContainerBox,
  Row,
  Column,
  TypographyText,
  Image,
} from "../../system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
const DashboardHeader = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <CardBox sx={{ height: 80, overflow: "visible" }}>
      <ContainerBox sx={{ height: "100%" }}>
        <Row
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            position: "relative",
          }}
        >
          <Column
            sx={{
              height: "100%",
              justifyContent: "center",
              width: "auto",
              borderBottom: "5px solid",
              borderColor: "primary.main",
              marginLeft: 30,
            }}
          >
            <TypographyText
              sx={{ fontSize: 16, fontWeight: 600 }}
              color="primary"
            >
              Integrations
            </TypographyText>
          </Column>
          <Column>
            <Row sx={{ alignItems: "center" }}>
              <Image
                variant="circular"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_149071&psig=AOvVaw2KDwK68gG_Dkm3lXafblLk&ust=1677745376737000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCICtr-Kmuv0CFQAAAAAdAAAAABAE"
              />
              <TypographyText
                sx={{ fontSize: 16, marginLeft: 1, fontWeight: 500 }}
              >
                John Doe
              </TypographyText>
              <KeyboardArrowDownIcon
                onClick={() => {
                  setOpen(!open);
                }}
              />
            </Row>
          </Column>
          {open && (
            <Column
              sx={{
                background: "white",
                position: "absolute",
                top: 80,
                right: 0,
                bottom: 0,
                zIndex: 111,
                boxShadow: "0px 0px 1px 1px rgba(252,252,252,0.5)",
              }}
            >
              <TypographyText
                sx={{
                  background: "#fff",
                  color: "black",
                  borderRadius: 0,
                  boxShadow: 0,
                  textAlign: "left",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "8px 20px",
                }}
              >
                Account Setting
              </TypographyText>
              <TypographyText
                onClick={() => {
                  navigate("/");
                }}
                sx={{
                  background: "#fff",
                  color: "black",
                  borderRadius: 0,
                  boxShadow: 0,
                  textAlign: "left",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "8px 20px",
                }}
              >
                Sign Out
              </TypographyText>
            </Column>
          )}
        </Row>
      </ContainerBox>
    </CardBox>
  );
};

export default DashboardHeader;
