import { Column, ActionButton, Row, Image } from "../../../system";
import { PlayIcon, ArrowIcon } from "../../../images";
const EcoSystemIntegration = () => {
  return (
    <Column
      sx={{
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
      }}
    >
      <Column sx={{ width: "80%", alignItems: "center" }}>
        <Row sx={{ alignItems: "center" }}>
          <ActionButton>Select Source</ActionButton>
          <Column sx={{ position: "relative" }}>
            <Image
              src={ArrowIcon}
              sx={{
                height: 8,
                width: 350,
              }}
            />
            <Column>
              <Image />
            </Column>
          </Column>
          <ActionButton>Select Destination</ActionButton>
        </Row>
        <Column sx={{ alignItems: "center", marginTop: 8 }}>
          <Image src={PlayIcon} />
        </Column>
      </Column>
    </Column>
  );
};

export default EcoSystemIntegration;
