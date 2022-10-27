import { LeftSection } from "./PageLeftSectionStyled";
import user from "../images/Emmanuel-Olad.jpg";
import twitch from "../images/twitch.png";
import steam from "../images/steam.png";
import upcoming from "../images/upcoming.png";
import library from "../images/library.png"
import controller from "../images/controller.png"
export const PageLeftSection = () =>{

return(
<LeftSection>

<div className="user">
<img src={user} className="avatar" alt="" />
<h3>Olah Emmanuel</h3>
<p>Pro Developer</p>
</div>

<div className="links">

<div className="link">
  <img src={twitch} className='user' alt="" />
  <h2>Java</h2>
  </div>
  <div className="link">
    <img src={steam} alt="" />
    <h2>SpringBoot</h2>
  </div>
  <div className="link">
    <img src={upcoming} alt="" />
    <h2>SQL</h2>
  </div>

  <div className="link">
    <img src={ library} alt="" />
    <h2>React</h2>
  </div>
</div>
<div className="pro">
<h2>Join me in the fun!</h2>
<img src={controller} alt=''/>
</div>

</LeftSection>

);


}