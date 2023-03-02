import {
  ActionButton,
  Column,
  ContainerBox,
  FormField,
  GridBox,
  Line,
  Row,
  Image,
  TypographyText,
} from "../../system";
import { PageHeader } from "../../components";
import { useNavigate } from "react-router-dom";
import {
  StyleCardRadioWrapper,
  StyleRadioIconWrapper,
  StyleRadioInput,
  StyleRadioTarget,
} from "./style";
import { RewardIcon, EcoIcon } from "../../images";
const CreateUpdateIntegration = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      description: { value: string };
      integrationType: { value: string };
    };
    const data = {
      name: target.name.value,
      description: target.description.value,
      integrationType: target.integrationType.value,
    };
    if (data?.integrationType === "reward") {
      navigate("/reward/integration");
    }
    if (data?.integrationType === "eco") {
      navigate("/eco/integration");
    }
  };
  return (
    <ContainerBox>
      <PageHeader
        back
        title="Create New Integration"
        handleGoBack={() => {
          navigate("/dashboard");
        }}
      />
      <GridBox container>
        <GridBox item lg={5}>
          <form onSubmit={handleSubmit}>
            <Column sx={{ rowGap: 4, width: "70%", marginBottom: 5 }}>
              <FormField
                required
                name="name"
                formType="text"
                label="Integration Name"
                placeholder="Integration Name"
              />
              <FormField
                required
                name="description"
                multiline
                formType="text"
                label="Connector Description"
                placeholder="Connector Description"
                rows={6}
              />
              <Row sx={{ justifyContent: "space-between" }}>
                <StyleCardRadioWrapper id="reward">
                  <StyleRadioInput
                    type="radio"
                    name="integrationType"
                    required
                    id="reward"
                    value="reward"
                  />
                  <StyleRadioTarget className="custom-radio-wrapper">
                    <StyleRadioIconWrapper>
                      <Image src={RewardIcon} sx={{ width: 20, height: 20 }} />
                    </StyleRadioIconWrapper>
                    <TypographyText
                      sx={{ fontSize: 16, fontWeight: 500, marginTop: 4 }}
                    >
                      Reward Integration
                    </TypographyText>
                  </StyleRadioTarget>
                </StyleCardRadioWrapper>
                <StyleCardRadioWrapper id="eco">
                  <StyleRadioInput
                    type="radio"
                    name="integrationType"
                    required
                    id="eco"
                    value="eco"
                  />
                  <StyleRadioTarget className="custom-radio-wrapper">
                    <StyleRadioIconWrapper>
                      <Image src={EcoIcon} sx={{ width: 20, height: 20 }} />
                    </StyleRadioIconWrapper>
                    <TypographyText
                      sx={{ fontSize: 16, fontWeight: 500, marginTop: 4 }}
                    >
                      Ecosystem Integration
                    </TypographyText>
                  </StyleRadioTarget>
                </StyleCardRadioWrapper>
              </Row>
            </Column>
            <Line />
            <ActionButton
              type="submit"
              size="large"
              sx={{ width: "35%", marginTop: 5 }}
            >
              Create Integration
            </ActionButton>
          </form>
        </GridBox>
      </GridBox>
    </ContainerBox>
  );
};

export default CreateUpdateIntegration;
