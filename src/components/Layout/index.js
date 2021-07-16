
import React from "react"
import { createGlobalStyle } from "styled-components";
import Nav from '../Nav/index'
// import Skills from '../Skills/index'


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Dosis&family=Rajdhani:wght@300&display=swap');

body {
  text-align: center;
  text-decoration: none !important;
  background: black;
  color: #32bacc;
  /* -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black; */
  /* font-family: 'Unica One'; */
  font-family: 'Rajdhani';
}

h1 {
  font-size: 60px;
  background: -webkit-linear-gradient(#fa914d, #32bacc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Rajdhani;
}
`


export const Layout = ({ children }) => {

  return (
      <div>
          <GlobalStyle />
          <Nav />
          <section>{children}</section>
          {/* <Skills /> */}
      </div>
  );
};

