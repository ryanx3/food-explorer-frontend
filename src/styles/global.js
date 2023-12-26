import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
}

body { 
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  font-smooth: always;
  background-color: ${({ theme }) => theme.COLORS.DARK_500}; 

  ::-webkit-scrollbar {
      width: 5px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.CAKE_100};
      border-radius: 5px;
      bottom: 0;
    }
}

button, a {
    cursor: pointer;
    transition: filter 0.2s;
    text-decoration: none;
  }

  button:hover, a:hover {
    filter: brightness(1.2);
  }
`