import {
  ContainerBox,
  Row,
  ActionButton,
  FormField,
  Image,
  Column,
  TypographyText,
  NavLink,
} from "../../system";
import { PageHeader } from "../../components";
import { EmptyIcon } from "../../images";
const Dashboard = () => {
  return (
    <ContainerBox>
      <PageHeader
        title="All Integrations"
        component={
          <Row sx={{ columnGap: 6 }}>
            <FormField type="search" placeholder="Search Integrations" />
            <ActionButton size="large">Create New Integration</ActionButton>
          </Row>
        }
      />
      <Column
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <Image src={EmptyIcon} sx={{ width: 400, height: 250 }} />
        <TypographyText sx={{ fontSize: 22, fontWeight: 600, marginTop: 3 }}>
          No projects created yet.
        </TypographyText>

        <TypographyText sx={{ fontSize: 16, fontWeight: 600, marginTop: 1 }}>
          To get started <NavLink>click here.</NavLink>
        </TypographyText>
      </Column>
    </ContainerBox>
  );
};

export default Dashboard;
