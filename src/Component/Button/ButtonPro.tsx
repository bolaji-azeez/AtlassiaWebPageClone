import styled from '@emotion/styled'
import React from 'react'
// import { BsPlayBtnFill } from 'react-icons/bs'

interface Iprops{
    title:string
    bg:string
    btn:()=>void

}

const Butt =styled.a<{bg:string}>`
height: 90px;
width: 280px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50px;
border: none;
cursor: pointer;
background-color: ${(prop)=>prop.bg};
font-size: 18px;
font-weight: 800;
color: #2481FC;

:hover{
    color: white;
    background-color: #2481FC;
    
}

`
export const ButtonPro:React.FC <Iprops>= ({title, bg, btn}) => {
  return (
    <Butt  onClick={btn}
    bg={bg}>{title}</Butt>
  )
}