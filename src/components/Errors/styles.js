import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  
  .icon {
    font-size: 6rem;
    color: #dc3545;
    margin-bottom: 20px;
  }
  .error {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;


  h1, p {
    font-size: 24px;
    color: white;
    text-align: center;
    margin: 0;
  }
  }
`;