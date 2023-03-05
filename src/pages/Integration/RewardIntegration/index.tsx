import { useState } from "react";
import {
  ContainerBox,
  Column,
  FormField,
  Row,
  ActionButton,
} from "../../../system";
import { PageHeader } from "../../../components";
import { Helper } from "../../../utils";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const RewardIntegration = () => {
  const [key, setKey] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <ContainerBox>
      <PageHeader
        title="Project BCD"
        description="For every phase, we have come up with different sorts of solutions or preventive measures."
      />

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
            position: "relative",
          }}
        >
          <FormField
            required
            value={key}
            type={showPassword ? "text" : "password"}
            formType="text"
            label="Generate API Keys"
            sx={{ width: 400 }}
          />
          <RemoveRedEyeIcon
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            sx={{
              color: "#AFC1D5",
              fontSize: 18,
              position: "absolute",
              right: 10,
              top: 35,
            }}
          />
        </Row>
        <ActionButton
          type="submit"
          onClick={() => {
            setKey(Helper.uid());
          }}
        >
          Generate
        </ActionButton>
      </Column>
    </ContainerBox>
  );
};

export default RewardIntegration;
