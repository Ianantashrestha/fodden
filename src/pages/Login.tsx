import {
  Column,
  CardBox,
  TypographyText,
  FormField,
  ActionButton,
  Row,
  Line,
} from "../system";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <Column
      sx={{
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <CardBox
        sx={{
          padding: "40px 20px",
          border: "1px solid #EBF4FA;",
          borderRadius: 4,
          width: 350,
        }}
      >
        <TypographyText
          sx={{
            textAlign: "center",
            fontSize: 28,
            fontWeight: 600,
            marginBottom: 6,
          }}
        >
          SignIn
        </TypographyText>
        <Column sx={{ rowGap: 2.5 }}>
          <FormField
            label="Email"
            type="email"
            formType="text"
            placeholder="Enter your email address"
            name="email"
          />
          <FormField
            label="Password"
            type="password"
            formType="text"
            placeholder="Enter your password"
            name="password"
          />
          <TypographyText
            color="primary"
            sx={{ fontSize: 16, fontWeight: 500 }}
          >
            Forget Password ?
          </TypographyText>
          <ActionButton
            size="large"
            sx={{ marginTop: 1 }}
            onClick={() => {
              navigate("dashboard");
            }}
          >
            Sign In
          </ActionButton>
        </Column>
        <Column sx={{ position: "relative", marginTop: 5 }}>
          <Line />
          <Column
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TypographyText
              component="p"
              sx={{
                fontSize: 12,
                background: "white",
                width: 20,
                height: 20,
                borderRadius: 50,
                position: "absolute",
                top: -7,
              }}
            >
              OR
            </TypographyText>
          </Column>
        </Column>
        <Column sx={{ marginTop: 4 }}>
          <ActionButton
            size="large"
            sx={{ background: "white", color: "#616161" }}
          >
            Continue with Google
          </ActionButton>
        </Column>
        <Row sx={{ marginTop: 3, columnGap: 0.5 }}>
          <TypographyText component="p" sx={{ fontSize: 16, fontWeight: 600 }}>
            Don’t have an account ?
          </TypographyText>
          <TypographyText
            color="primary"
            sx={{ fontSize: 16, fontWeight: 600 }}
          >
            Sign up here.
          </TypographyText>
        </Row>
      </CardBox>
    </Column>
  );
};

export default Login;
