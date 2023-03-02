import { Row, TypographyText, Column } from "../../system";
import { ReactElement } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
interface PageHeaderProps {
  title: string;
  component?: ReactElement;
  back?: boolean;
  handleGoBack?: () => void;
  description?: string;
  action?: ReactElement;
}
const PageHeader = ({
  title,
  component,
  back,
  handleGoBack,
  action,
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
      <Column>
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
          {action && <Column>{action}</Column>}
        </Row>
        {description && (
          <TypographyText
            component="p"
            sx={{
              marginTop: 1,
              fontSize: 14,
              fontWeight: 400,
              maxWidth: 450,
              lineHeight: 1.5,
            }}
          >
            {description}
          </TypographyText>
        )}
      </Column>
      {component}
    </Row>
  );
};

export default PageHeader;
