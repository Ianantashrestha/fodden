import {
  ActionButton,
  Column,
  ContainerBox,
  FormField,
  GridBox,
  Line,
} from "../../system";
import { PageHeader } from "../../components";
import { useNavigate } from "react-router-dom";

const CreateUpdateIntegration = () => {
  const navigate = useNavigate();
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
        <GridBox lg={5}>
          <Column sx={{ rowGap: 4, width: "70%", marginBottom: 5 }}>
            <FormField
              name="name"
              formType="text"
              label="Integration Name"
              placeholder="Integration Name"
            />
            <FormField
              name="description"
              multiline
              formType="text"
              label="Connector Description"
              placeholder="Connector Description"
              rows={6}
            />
          </Column>
          <Line />
          <ActionButton size="large" sx={{ width: "35%", marginTop: 5 }}>
            Create Integration
          </ActionButton>
        </GridBox>
      </GridBox>
    </ContainerBox>
  );
};

export default CreateUpdateIntegration;
