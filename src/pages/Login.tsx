import {
  LoginBox,
  LoginInput,
  LoginTitle,
  LoginWrapper,
  LoginForget,
  LoginButton,
} from "../styles/Login";
const Login = () => {
  return (
    <LoginWrapper>
      <LoginBox>
        <LoginTitle>Sign In</LoginTitle>
        <LoginInput placeholder="Username" />
        <LoginInput placeholder="Password" />
        <LoginForget>Forget Password</LoginForget>
        <LoginButton>SignIn</LoginButton>
      </LoginBox>
    </LoginWrapper>
  );
};

export default Login;
