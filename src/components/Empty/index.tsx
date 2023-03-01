import { Image, TypographyText, NavLink, Column } from "../../system";
import { EmptyIcon } from "../../images";

interface EmptyProps {
  title?: string;
  link?: string;
}
const Empty = ({ title, link }: EmptyProps) => {
  return (
    <Column
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      <Image src={EmptyIcon} sx={{ width: 400, height: 250 }} />
      <TypographyText sx={{ fontSize: 22, fontWeight: 600, marginTop: 3 }}>
        {title}
      </TypographyText>

      <TypographyText sx={{ fontSize: 16, fontWeight: 600, marginTop: 1 }}>
        To get started <NavLink>click here.</NavLink>
      </TypographyText>
    </Column>
  );
};

export default Empty;
