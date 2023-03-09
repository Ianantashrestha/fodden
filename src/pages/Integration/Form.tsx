import {
  ActionButton,
  Column,
  ContainerBox,
  FormField,
  GridBox,
  Line,
  CardGroupRadioButton,
} from "../../system";
import { PageHeader } from "../../components";
import { useNavigate } from "react-router-dom";
import { RewardIcon, EcoIcon } from "../../images";

const IntegrationType = [
  {
    label: "Reward Integration",
    value: "reward",
    icon: RewardIcon,
  },
  {
    label: "Ecosystem Integration",
    value: "eco",
    icon: EcoIcon,
  },
];
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

              <CardGroupRadioButton
                padding="40px 0px"
                lg={6}
                md={6}
                sm={12}
                data={IntegrationType}
                name="integrationType"
              />
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
