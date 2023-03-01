import { Row, TypographyText } from "../../system";
import { ReactElement } from "react";
interface PageHeaderProps {
  title: string;
  component?: ReactElement;
}
const PageHeader = ({ title, component }: PageHeaderProps) => {
  return (
    <Row
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        padding: "30px 0px",
      }}
    >
      <TypographyText sx={{ fontSize: 28, fontWeight: 600 }}>
        {title}
      </TypographyText>
      {component}
    </Row>
  );
};

export default PageHeader;
