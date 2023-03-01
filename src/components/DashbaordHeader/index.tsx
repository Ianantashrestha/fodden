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
const DashboardHeader = () => {
  return (
    <CardBox sx={{ height: 80 }}>
      <ContainerBox sx={{ height: "100%" }}>
        <Row
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
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
              <KeyboardArrowDownIcon />
            </Row>
          </Column>
        </Row>
      </ContainerBox>
    </CardBox>
  );
};

export default DashboardHeader;
