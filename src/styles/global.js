import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .Toastify__toast {
  font-size: 16px; 
  } 

  .Toastify__progress-bar {
  background-color: #00ff00;
}

span,
h1,
h2,
h3,
h4,
h5,
h6,
p
{
  caret-color: transparent;
}


  :root {
    font-size: 62.5%;

    ::-webkit-scrollbar {
      width: 6px;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.CAKE_100};
      border-radius: 5px;
      bottom: 0;
    }
  }

  body {
    font-family: 'Poppins', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.COLORS.DARK_500};
    overflow-x: hidden;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
    text-decoration: none;
  }

  button:hover, a:hover {
    filter: brightness(1.2);
  }
`;
