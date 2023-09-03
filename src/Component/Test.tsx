import React from 'react'
import styled from '@emotion/styled'

interface Iprops{
title:string
avater:any
text:string
bg:string
}

const Tean =styled.div<{bg:string}>`
    height: 130px;
    width: 250px;
    border-radius: 5px;
    background-color: ${(prop)=>prop.bg};
    cursor: pointer;

    :hover{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`
const Wrap =styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
gap: 40px;
margin: 0;
`
const H =styled.h5`
margin: 0;
`
const Icon =styled.img`
width: 20px;
`
const P =styled.p`
font-size: 15px;
/* width: 280px; */
padding-left: 10px

`

export const Test:React.FC<Iprops>= ({title, avater,text, bg}) => {
  return (
    <Tean bg={bg}>
        <Wrap>
        <H>{title}</H>
        <Icon src={avater} />
        </Wrap>
        <P>{text}</P>
    </Tean>
  )
}