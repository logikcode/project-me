
import { Main} from './MainPageStyled';
import { PageSection } from './components/PageSectionStyled';
import { PageLeftSection } from './components/PageLeftSection';
import { Circled } from './components/Circle';
import { PageMainSection } from './components/PageMainSection';


function MainPage() {

const setting = [{top : "30rem", left:"4rem"}, {top: "2rem", right: "3rem"}]

  return (
   
    <>
    <Main>
     <PageSection>
        <PageLeftSection></PageLeftSection>
       <PageMainSection></PageMainSection>
     </PageSection>

    
    
    </Main>

    <Circled setting = {setting[0]} ></Circled>
    <Circled setting={setting[1]}></Circled>
    </>
  );
}

export default MainPage;
