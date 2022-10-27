import assassin from "../images/assassins.png"
import { PageMainSectionContainer } from "./PageMainSectionStyled";
import { SectionCard } from "./Card";

export const PageMainSection = () =>{

return(

    <PageMainSectionContainer>
    <div className="status">
      <h1>Activities</h1>
      <input type={`text`} />
    </div>
    <div className="cards">
        <SectionCard text={'FullStack Software Engineer'} info={'High Growth Accelerated Engineer'} percentage={'85%'}></SectionCard>
        <SectionCard text={'Backend Engineer(Java)'} info={'Java | SpringBoot Enterprise needs'} percentage={'80%'}> </SectionCard>
        <SectionCard text={'Frontend(JavaScript)'} info={'React for awesome frontend work'} percentage={'78%'}></SectionCard>
    </div>
    
     

     { 
    //     <div className="card">
    //     <img src={assassin} alt=''/>
    //     <div className="card-info">
    //       <h5>Java Developer</h5>
    //       <p>Highly Proficient in Java 11</p>
    //       <div className="progress"></div>
    //     </div>
    //     <h2 className="percentage">85%</h2>
    //   </div>
    }
    
    {
    // <div className="card">
    //     <img src={assassin} alt=''/>
    //     <div className="card-info">
    //       <h5>Java Developer</h5>
    //       <p>Highly Proficient in Java 11</p>
    //       <div className="progress"></div>
    //     </div>
    //     <h2 className="percentage">75%</h2>
    //   </div>
    }
   
  </PageMainSectionContainer>
);

}