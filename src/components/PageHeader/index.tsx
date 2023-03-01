import { Row, TypographyText } from "../../system";
import { ReactElement } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
interface PageHeaderProps {
  title: string;
  component?: ReactElement;
  back?: boolean;
  handleGoBack?: () => void;
  description?: string;
}
const PageHeader = ({
  title,
  component,
  back,
  handleGoBack,
  description,
}: PageHeaderProps) => {
  return (
    <Row
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        padding: "30px 0px",
      }}
    >
      <Row sx={{ columnGap: 2, alignItems: "center" }}>
        {back && (
          <ArrowBackIcon
            sx={{ fontSize: 28, fontWeight: 800 }}
            onClick={handleGoBack}
          />
        )}
        <TypographyText sx={{ fontSize: 28, fontWeight: 600 }}>
          {title}
        </TypographyText>
        {description && (
          <TypographyText
            component="p"
            sx={{ marginTop: 2, fontSize: 14, fontWeight: 400 }}
          >
            {description}
          </TypographyText>
        )}
      </Row>
      {component}
    </Row>
  );
};

export default PageHeader;
