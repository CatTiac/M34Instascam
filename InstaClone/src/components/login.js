import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { createUser, login, tokenLogin } from "../utils";
import { LoginContainer, StyledLogo } from "../globalStyles";

export const Login = ({ user, setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [bool, setBool] = useState(false);

  //Below - useEffect runs tokenLogin immediately, sets user with token and will auto sign in
  useEffect(() => {
    if (localStorage.key("myToken")) {
      tokenLogin(setUser);
    }
  }, [setUser]);

  const submitHandler = (e) => {
    e.preventDefault();
    //if bool is true = login - if false = create new user
    if (bool) {
      login(username, pass, setUser);
    } else if (email && email.includes("@")) {
      createUser(username, email, pass, setUser);
      // setUser({
      //   username: username,
      //   email: email,
      //   pass: pass,})
    }
  };

  return (
    <>
      <LoginContainer>
        <StyledLogo>Instascam</StyledLogo>
        {user && <Navigate to="/home" />}
        <StyledForm onSubmit={submitHandler}>
          <input
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
          />
          {!bool && (
            <input
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              type="email"
            />
          )}
          <input
            onChange={(event) => setPass(event.target.value)}
            placeholder="Password"
            type="password"
          />
          <LogInButton type="submit">Log In</LogInButton>
        </StyledForm>
        <p>---------------- OR ----------------</p>
        <h5>Log in with Facebook</h5>
        <h6>Forgot password?</h6>
      </LoginContainer>
      <SubContainer>
        <h5>Don't have an account?</h5>
        <StyledButton onClick={() => setBool(!bool)}>
          Login or Sign Up?
        </StyledButton>
      </SubContainer>
      <h4>Get the app.</h4>
    </>
  );
};

export const StyledButton = styled.button`
  height: 35px;
  width: 80%;
  justify-content: center;
  border-radius: 5%;
  color: white;
`;

export const LogInButton = styled.button`
  margin: auto;
  padding: 5px;
  height: 35px;
  width: 40%;
  border-radius: 4px;
  color: white;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const SubContainer = styled.div`
margin: 15px auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid lightgray;
padding: 10px 10px;
`;
