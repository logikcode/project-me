import styled from "styled-components";

export const Card = styled.div`
display: flex;
background: linear-gradient(to left top, rgba(255,255,255, 0.8), rgba(255,255,255,0.5));
    display : flex;

    border-radius: 1rem;
    margin: 2rem 0rem;
    padding: 2rem; 
    justify-content: space-between;
    /* bos shadow property to make the card pop out */
    box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.2);

.card {
    /* background: linear-gradient(to left top, rgba(255,255,255, 0.8), rgba(255,255,255,0.5));
    display : flex;

    border-radius: 1rem;
    margin: 2rem 0rem;
    padding: 2rem; 
    justify-content: space-between;
    /* bos shadow property to make the card pop out */
    box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.2); 
}

.progress {
    background: linear-gradient(to right top, #65dfc9, #6cdbeb);
    width: 100%;
    height: 25%;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;

}
/* adding percentage fill to the progress bar */
.progress::after {
    content: "";
    width: 100%;
    height: 100%;
    background: rgb(236, 236, 236);
    position: absolute;
    left: 80%;
    /* border-radius: 1rem; */
}

.card-info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
/* making the percentage appear in gradient */
.percentage{
    font-weight: bold;
    background: linear-gradient(to right top, #65dfc9, #6cdbeb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

`