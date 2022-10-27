import styled from "styled-components";

export const PageMainSectionContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: space-evenly;
flex: 2;
margin: 3rem;



h1 {
    color: #426696;
    font-weight: 600;
    font-size: 3rem;
    opacity: 0.8;
}

h3{
color: #426696;
font-weight: 600;
opacity: 0.8;

}

h2, p{
    color: #658ec6;
    font-weight: 500;
    opacity: 0.8;

}


.status{
    margin-bottom: 3rem;
}

.status input{
    background: linear-gradient(to right bottom, rgba(255,255,255, 0.7), rgba(255,255,255,0.3));
    border: none;
    width: 50%;
    padding: 0.5rem;
    border-radius: 2rem;
}

`