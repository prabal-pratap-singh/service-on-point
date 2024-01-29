import "./index.css";
import female from "./images/female-img.svg";
import male from "./images/male-img.svg";
import { ReactComponent as InstaLogo } from "./assets/insta-logo.svg";
import { ReactComponent as FacebookLogo } from "./assets/facebook-logo.svg";
import { ReactComponent as TwitterLogo } from "./assets/twitter-logo.svg";
import { ReactComponent as Linkdin } from "./assets/linkdin-logo.svg";

function Home() {
  return (
    <section className="home">
      <h1 id="heading1">More than just a design agency</h1>
      <img src={female} className="female image" alt="img" />
      <img src={male} className="male image" alt="img" />
      <button id="homeButton">
        <span id="homeButtonText">Let's Talk</span>
      </button>
      <div id="socialMediaHandles">
        <TwitterLogo />
        <FacebookLogo />
        <Linkdin />
        <InstaLogo />
      </div>
      <div id="contactNumber"><b><span id="ContactNumberStyling">+919109864543</span></b></div>
    </section>
  );
}

export default Home;
