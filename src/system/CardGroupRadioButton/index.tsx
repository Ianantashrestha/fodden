import { FC, ReactElement } from "react";
import { GridBox, TypographyText } from "..";
import {
  CardRadioButton,
  StyleRadioInput,
  StyleRadioTarget,
  StyleRadioIconWrapper,
} from "./style";
interface GroupDataProps {
  label: string;
  value: string;
  component?: ReactElement;
}
interface CardGroupRadioButtonProps {
  sx?: any;
  data?: GroupDataProps[];
  backgroundColor?: string;
  name: string;
  showTitle?: boolean;
  lg?: number;
  md?: number;
  xs?: number;
  sm?: number;
  spacing?: number;
  padding?: string | number;
  onCardChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  focus?: boolean;
}
const CardGroupRadioButton: FC<CardGroupRadioButtonProps> = ({
  sx,
  data,
  backgroundColor = "#fff",
  name,
  showTitle = true,
  spacing = 4,
  padding,
  focus = true,
  onCardChange,
  ...restProps
}) => {
  return (
    <GridBox container spacing={spacing}>
      {data?.map((radio: any) => (
        <GridBox key={radio?.label} item {...restProps}>
          <CardRadioButton id={radio?.value}>
            <StyleRadioInput
              type="radio"
              name={name}
              required
              id={radio?.value}
              value={radio?.value}
              onChange={onCardChange}
            />
            <StyleRadioTarget
              className="custom-radio-wrapper"
              backgroundColor={backgroundColor}
              padding={padding}
              focus={focus}
            >
              {radio?.component && (
                <StyleRadioIconWrapper>
                  {radio?.component}
                </StyleRadioIconWrapper>
              )}
              {showTitle && (
                <TypographyText
                  sx={{ fontSize: 16, fontWeight: 500, marginTop: 4 }}
                >
                  {radio?.label}
                </TypographyText>
              )}
            </StyleRadioTarget>
          </CardRadioButton>
        </GridBox>
      ))}
    </GridBox>
  );
};

export default CardGroupRadioButton;
