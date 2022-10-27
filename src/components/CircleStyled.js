import styled from "styled-components";

export const Circle = styled.div`
background: white;
background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
height: 20rem;
width: 20rem;
position: absolute;
top: ${(props) => props.settings.top};
left: ${(props) => props.settings.left? props.settings.left : ""};
right: ${(props)=> props.settings.right? props.settings.right : ""};
border-radius: 50%;


`