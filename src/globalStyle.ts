import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: 'Source Sans Pro', sans-serif;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#root {
  width: 100%;
}
`;

export default GlobalStyle;