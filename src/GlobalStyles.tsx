import React from 'react'
import {Global, css} from "@emotion/react"

export const GlobalStyle:React.FC = () => {
  return (
    <Global
    styles={css`
    
 
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;600;700;800&display=swap');

body{
    font-family: "Manrope";
    margin: 0;
    padding: 0;
}

    `}
    />
  )
}