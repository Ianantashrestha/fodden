import { useState } from "react";
import {
  ContainerBox,
  Row,
  ActionButton,
  FormField,
  CardBox,
  GridBox,
  TypographyText,
  ToolTipBox,
  Image,
  Column,
} from "../../system";
import { InfoIcon, CurveIcon, CrossIcon, EqualizerIcon } from "../../images";
import { PageHeader, Empty, DeleteModal } from "../../components";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";
const integrationData: any = [
  {
    title: "Integration 1",
    totalIssue: 4,
    totalStory: 23,
    image: CurveIcon,
  },
  {
    title: "Integration 2",
    totalIssue: 5,
    totalStory: 28,
    image: CrossIcon,
  },
];
const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(integrationData);
  const [open, setOpen] = useState<boolean>(false);
  const handleSearch = (value: string) => {
    const filterData = integrationData?.filter((item: any) =>
      item?.title.includes(value)
    );
    setData(filterData);
    console.log(filterData);
  };

  return (
    <ContainerBox>
      <DeleteModal
        open={open}
        title="Delete Integration"
        description="Are you sure want to delete this integration?"
        handleCloseModal={() => {
          setOpen(false);
        }}
        handleOk={() => {
          setOpen(false);
        }}
      />
      <PageHeader
        title="All Integrations"
        component={
          <Row sx={{ columnGap: 6 }}>
            <FormField
              sx={{ width: 400 }}
              formType="search"
              placeholder="Search Integrations"
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
            <ActionButton
              size="large"
              onClick={() => {
                navigate("/create/integration");
              }}
            >
              Create New Integration
            </ActionButton>
          </Row>
        }
      />
      {!!data?.length ? (
        <GridBox container spacing={4} sx={{ marginTop: 1 }}>
          {data?.map((item: any) => (
            <GridBox key={item?.title} item lg={3} md={6} xs={12}>
              <CardBox sx={{ padding: "15px 20px" }}>
                <Row
                  sx={{ justifyContent: "space-between", alignItems: "center" }}
                >
                  <TypographyText sx={{ fontSize: 16, fontWeight: 500 }}>
                    {item?.title}
                  </TypographyText>
                  <Column
                    sx={{
                      width: 35,
                      height: 35,
                      background: "#f2f2f2",
                      borderRadius: 50,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <DeleteOutlineIcon
                      color="error"
                      onClick={() => {
                        setOpen(true);
                      }}
                    />
                  </Column>
                </Row>
                <Column sx={{ alignItems: "center", marginTop: 3 }}>
                  <Image src={item?.image} />
                </Column>
                <Row sx={{ marginTop: 2, columnGap: 3 }}>
                  <Row sx={{ alignItems: "center", columnGap: 1 }}>
                    <ToolTipBox title="Total Issue">
                      <Image src={InfoIcon} sx={{ width: 15, height: 15 }} />
                    </ToolTipBox>
                    <TypographyText
                      sx={{ fontSize: 16, color: " #F2994A", fontWeight: 500 }}
                      component="p"
                    >
                      {item?.totalIssue}
                    </TypographyText>
                  </Row>
                  <Row sx={{ alignItems: "center", columnGap: 1 }}>
                    <ToolTipBox title="Total Issue">
                      <Image
                        src={EqualizerIcon}
                        sx={{ width: 15, height: 10 }}
                      />
                    </ToolTipBox>
                    <TypographyText
                      sx={{
                        fontSize: 16,
                        color: " rgba(14, 16, 26, 0.7)",
                        fontWeight: 500,
                      }}
                      component="p"
                    >
                      {item?.totalStory}
                    </TypographyText>
                  </Row>
                </Row>
              </CardBox>
            </GridBox>
          ))}
        </GridBox>
      ) : (
        <Empty title="No projects created yet." />
      )}
    </ContainerBox>
  );
};

export default Dashboard;
