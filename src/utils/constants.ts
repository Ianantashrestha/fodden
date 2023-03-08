import {
  CSVIcon,
  IataIcon,
  UpIcon,
  FireIcon,
  XoIcon,
  AwareIcon,
} from "../images";
export function dataFormats() {
  const ecoData = [
    {
      label: "CSV Source",
      value: "csv",
      icon: CSVIcon,
    },
    {
      label: "Iata Source",
      value: "iata",
      icon: IataIcon,
    },
    {
      label: "Up Source",
      value: "up",
      icon: UpIcon,
    },
    {
      label: "Fire Source",
      value: "fire",
      icon: FireIcon,
    },
    {
      label: "Xo Source",
      value: "xo",
      icon: XoIcon,
    },
    {
      label: "Aware Source",
      value: "aware",
      icon: AwareIcon,
    },
  ];
  return ecoData;
}
