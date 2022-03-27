import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid lightgray;
`;

export const StyledHeader = styled.h1`
font-family: 'Satisfy', cursive;
background-image: linear-gradient(
  234deg,
  rgba(59, 14, 113, 1) 0%,
  rgba(143, 29, 159, 1) 35%,
  rgba(242, 232, 8, 1) 100%
);
padding: 5px 20px;
`;

export const StyledLogo = styled.h1`
font-family: 'Satisfy', cursive;
padding-bottom: 30px;
font-size: 50px;
`;
