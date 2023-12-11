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
}

button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(1.2);
  } 
`