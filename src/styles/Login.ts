import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoginBox = styled.div`
  background: #fff;
  box-shadow: 0px 0px 5px 1px rgba(252, 252, 252, 0.5);
  padding: 60px 25px;
  width: 25%;
`;
export const LoginTitle = styled.h2`
  color: #000;
  font-weight: 800;
  font-size: 28px;
  text-align: center;
  margin-bottom: 30px;
`;

export const LoginInput = styled.input`
  height: 40px;
  border: 1px solid #ccc;
  width: 100%;
  margin-bottom: 20px;
  text-indent: 10px;
  border-radius: 4px;
`;

export const LoginForget = styled.a`
  font-size: 16px;
  color: #457b9d;
`;

export const LoginButton = styled.button`
  width: 100%;
  background: #457b9d;
  padding: 12px 0px;
  border: 0px;
  font-size: 16px;
  color: #fff;
  margin-top: 30px;
  border-radius: 4px;
`;
