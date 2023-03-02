import {
  ContainerBox,
  Column,
  FormField,
  Row,
  ActionButton,
} from "../../../system";
import { PageHeader } from "../../../components";
const RewardIntegration = () => {
  return (
    <ContainerBox>
      <PageHeader
        title="Project BCD"
        description="For every phase, we have come up with different sorts of solutions or preventive measures."
      />

      <form>
        <Column
          sx={{
            alignItems: "center",
            justifyContent: "center",
            height: "50vh",
          }}
        >
          <Row
            sx={{
              marginBottom: 4,
            }}
          >
            <FormField
              required
              type="password"
              formType="text"
              label="Generate API Keys"
              sx={{ width: 400 }}
            />
          </Row>
          <ActionButton type="submit">Generate</ActionButton>
        </Column>
      </form>
    </ContainerBox>
  );
};

export default RewardIntegration;
