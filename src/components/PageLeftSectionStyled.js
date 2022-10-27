import styled from "styled-components";


export const LeftSection = styled.div`
//flex: 1;
width: 30%;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
justify-content: space-evenly;
background: linear-gradient(to right bottom, rgba(255,255,255, 0.7), rgba(255,255,255, 0.3) );
border-radius: 2rem;

.avatar{
    width: 50px;
    height: 50px;
    border-radius: 50%;

}
.links{
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: stretch;
}

.link{
    display: flex;
    margin: 1rem 0rem;
    padding: 1rem 0.5rem;
    align-items: center;
}
.link h2{
    padding: 0rem 2rem; 
    
}

.pro{
    background: linear-gradient(to right top, #65dfc9, #6cdbeb);
    border-radius: 2rem;
    color: white;
    padding: 1rem;
    margin-bottom: 0.5rem;
    /* width: 50%; */
    position: relative;
}

.pro img{
    position: absolute;
    top: -10%;
    right: 10%;
}
.pro h2{
    width: 50%;
    color: white;
    font-weight: 600;

}

`