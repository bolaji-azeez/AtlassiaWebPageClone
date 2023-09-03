import React from 'react'
import styled from '@emotion/styled'
import Pic from "../assets/Image/logos-atlassian-logo-gradient-horizontal-neutral.svg"

const Image =styled.img`
height: 20px;
margin-top: 20px;
`
const Product =styled.div`
display: flex;
flex-direction: column;
h4{
    font-weight: 800;
}
nav{
    color: #3232fb;
    cursor: pointer;
}

a{
    margin-bottom: 10px;
    text-decoration: none;
    color: gray;
    cursor: pointer;
    :hover{
        text-decoration: underline;
    }
}
`
const Resources =styled.div`
display: flex;
flex-direction: column;

h4{
    font-weight: 800;
}
nav{
    color: #3232fb;
    cursor: pointer;
}


a{
    margin-bottom: 10px;
    text-decoration: none;
    color: gray;
    cursor: pointer;
    :hover{
        text-decoration: underline;
    }
}
`
const Expand =styled.div`
display: flex;
flex-direction: column;

h4{
    font-weight: 800;
}
nav{
    color: #3232fb;
    cursor: pointer;
}


a{
    margin-bottom: 10px;
    text-decoration: none;
    color: gray;
    cursor: pointer;
    :hover{
        text-decoration: underline;
    }
}
`
const About =styled.div`
display: flex;
flex-direction: column;

h4{
    font-weight: 800;
}
nav{
    color: #3232fb;
    cursor: pointer;
    margin-bottom: 60px;
}


a{
    margin-bottom: 10px;
    text-decoration: none;
    color: gray;
    cursor: pointer;
    :hover{
        text-decoration: underline;
    }
}
`

const Foot =styled.div`
display: flex;
justify-content: space-around;
`
export const Footer:React.FC = () => {
  return (
    <Foot>
        <Image src={Pic} />
        <Product>
            <h4>PRODUCTS</h4>
            <a href="">Jira Software</a>
            <a href="">Jira Align</a>
            <a href="">Jira Service Management</a>
            <a href="">Jira Product Discovery</a>
            <a href="">Confluence</a>
            <a href="">Trello</a>
            <a href="">Bitbucket</a>
            <nav>Veiw all product</nav>
        </Product>
        <Resources>
            <h4>RESOURCES</h4>
            <a href="">Technical Support</a>
            <a href="">Purchasing & licensing</a>
            <a href="">Atlassian Community</a>
            <a href="">Knownledge base</a>
            <a href="">Marketplace</a>
            <a href="">My Account</a>
            <nav>Create support ticket</nav>
        </Resources>
        <Expand>
            <h4>EXPAND & LEARN</h4>
            <a href="">Partners</a>
            <a href="">Training & Certification</a>
            <a href="">Documentation</a>
            <a href="">Developer Resources</a>
            <a href="">Enterprise service</a>
            <nav>View all resources</nav>
        </Expand>
        <About>
            <h4>ABOUT ATLASSIAN</h4>
            <a href=''>Company</a>
            <a href=''>Careers</a>
            <a href=''>Events</a>
            <a href=''>Blogs</a>
            <a href=''>Atlassian Foundation</a>
            <a href=''>Investor Relations</a>
            <a href=''>Trust & Security</a>
            <nav>Contact us</nav>
        </About>

    </Foot>
  )
}