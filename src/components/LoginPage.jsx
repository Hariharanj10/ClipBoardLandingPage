import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const LoginForm = styled.form`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;
const Label = styled.label`
  font-weight: bold;
`;
const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
const LoginPage = ({ setIsLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLogin(true);
    navigate("/TransactionPage");
  };
  return (
    <Container>
      <LoginForm onSubmit={handleLogin}>
        <Label htmlFor="username">Username:</Label>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" onClick={handleLogin}>
          Login
        </Button>
      </LoginForm>
    </Container>
  );
};
export default LoginPage;
