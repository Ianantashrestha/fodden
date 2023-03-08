import { useState, useEffect } from "react";
import {
  Column,
  ActionButton,
  Row,
  Image,
  CardBox,
  TypographyText,
  ContainerBox,
  ModalBox,
  NavLink,
  CardGroupRadioButton,
} from "../../../system";
import { PageHeader } from "../../../components";
import { Constants } from "../../../utils";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { PlayIcon, ArrowIcon, LogicIcon } from "../../../images";
const ecoData = Constants.dataFormats();
const EcoSystemIntegration = () => {
  const [openSourceModal, setOpenSourceModal] = useState<boolean>(false);
  const [openDestinationModal, setOpenDestinationModal] =
    useState<boolean>(false);
  const [source, setSource] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const selectedSource = ecoData?.find((item) => item?.value === source);
  const selectedDestination = ecoData?.find(
    (item) => item?.value === destination
  );
  const handleSource = () => {
    setOpenSourceModal(true);
  };
  const handleCloseSource = () => {
    setSource("");
    setOpenSourceModal(false);
  };
  const handleDestination = () => {
    setOpenDestinationModal(true);
  };
  const handleCloseDestination = () => {
    setDestination("");
    setOpenDestinationModal(false);
  };

  const handleSourceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSource(e.target.value);
  };
  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setDestination(e.target.value);
  };

  return (
    <ContainerBox>
      <PageHeader
        title="Project BCD"
        description="For every phase, we have come up with different sorts of solutions or preventive measures."
      />
      <Column
        sx={{
          alignItems: "center",
          justifyContent: "center",
          height: "65vh",
        }}
      >
        <Column sx={{ alignItems: "center", justifyContent: "center" }}>
          <Row sx={{ alignItems: "center", position: "relative" }}>
            <ActionButton onClick={handleSource}>Select Source</ActionButton>
            <Column sx={{ position: "relative" }}>
              <Image
                src={ArrowIcon}
                sx={{
                  height: 10,
                  width: 450,
                }}
              />
              <Column
                sx={{
                  position: "absolute",
                  width: "100%",
                  alignItems: "center",
                  bottom: -50,
                }}
              >
                <CardBox
                  sx={{
                    width: 80,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px 10px",
                  }}
                >
                  <Image src={LogicIcon} />
                  <TypographyText
                    color="primary"
                    sx={{ fontSize: 14, fontWeight: 500, marginTop: 2 }}
                  >
                    Add Logic
                  </TypographyText>
                </CardBox>
              </Column>
            </Column>
            <ActionButton onClick={handleDestination}>
              Select Destination
            </ActionButton>
          </Row>
          <Column sx={{ alignItems: "center", marginTop: 15 }}>
            <Image src={PlayIcon} />
          </Column>
        </Column>
      </Column>
      <ModalBox
        boxSx={{ width: 500 }}
        open={openSourceModal}
        header
        title="Add Source"
        handleClose={handleCloseSource}
      >
        <Column sx={{ marginBottom: 2 }}>
          {source && (
            <CardBox
              sx={{
                background: "#fafafa",
                marginBottom: 3,
                border: "1px solid #D1DDEA",
              }}
            >
              <Row
                sx={{
                  justifyContent: "space-between",
                  padding: "15px 20px",
                  alignItems: "center",
                }}
              >
                <Row sx={{ alignItems: "center", columnGap: 2 }}>
                  <Column
                    sx={{
                      backgroundColor: "#EBF4FA",
                      padding: "15px 15px",
                      borderRadius: 1,
                    }}
                  >
                    <Image
                      src={selectedSource?.icon}
                      sx={{ width: 20, height: 20 }}
                    />
                  </Column>
                  <TypographyText sx={{ fontSize: 16, fontWeight: 500 }}>
                    {selectedSource?.label}
                  </TypographyText>
                </Row>
                <DeleteOutlineIcon
                  color="error"
                  onClick={() => {
                    setSource("");
                  }}
                />
              </Row>
            </CardBox>
          )}

          <CardGroupRadioButton
            padding="10px 0px"
            showTitle={false}
            lg={3}
            md={4}
            sm={6}
            name="source"
            data={ecoData}
            backgroundColor="#EBF4FA"
            spacing={3}
            onCardChange={handleSourceChange}
            focus={false}
          />
        </Column>
        <Row sx={{ columnGap: 2, alignItems: "center", marginBottom: 4 }}>
          <NavLink
            sx={{
              color: "rgba(14, 16, 26, 0.7)",
              fontSize: 16,
              fontWeight: 500,
              marginLeft: "auto",
            }}
            onClick={handleCloseSource}
          >
            Cancel
          </NavLink>
          <ActionButton
            color="primary"
            size="medium"
            onClick={() => {
              setOpenSourceModal(false);
            }}
          >
            Add Source
          </ActionButton>
        </Row>
      </ModalBox>
      <ModalBox
        boxSx={{ width: 550 }}
        open={openDestinationModal}
        header
        title="Add Destination"
        handleClose={handleCloseDestination}
      >
        <Column sx={{ marginBottom: 2 }}>
          {destination && (
            <CardBox
              sx={{
                background: "#fafafa",
                marginBottom: 3,
                border: "1px solid #D1DDEA",
              }}
            >
              <Row
                sx={{
                  justifyContent: "space-between",
                  padding: "15px 20px",
                  alignItems: "center",
                }}
              >
                <Row sx={{ alignItems: "center", columnGap: 2 }}>
                  <Column
                    sx={{
                      backgroundColor: "#EBF4FA",
                      padding: "15px 15px",
                      borderRadius: 1,
                    }}
                  >
                    <Image
                      src={selectedDestination?.icon}
                      sx={{ width: 20, height: 20 }}
                    />
                  </Column>
                  <TypographyText sx={{ fontSize: 16, fontWeight: 500 }}>
                    {selectedDestination?.label}
                  </TypographyText>
                </Row>
                <DeleteOutlineIcon
                  color="error"
                  onClick={() => {
                    setDestination("");
                  }}
                />
              </Row>
            </CardBox>
          )}
          <CardGroupRadioButton
            padding="10px 0px"
            showTitle={false}
            lg={3}
            md={4}
            sm={6}
            name="source"
            data={ecoData}
            backgroundColor="#EBF4FA"
            spacing={3}
            onCardChange={handleDestinationChange}
            focus={false}
          />
        </Column>
        <Row sx={{ columnGap: 2, alignItems: "center", marginBottom: 4 }}>
          <NavLink
            sx={{
              color: "rgba(14, 16, 26, 0.7)",
              fontSize: 16,
              fontWeight: 550,
              marginLeft: "auto",
            }}
            onClick={handleCloseDestination}
          >
            Cancel
          </NavLink>
          <ActionButton
            color="primary"
            size="medium"
            onClick={() => {
              setOpenDestinationModal(false);
            }}
          >
            Add Destination
          </ActionButton>
        </Row>
      </ModalBox>
    </ContainerBox>
  );
};

export default EcoSystemIntegration;
