import "./index.css";
import female from "./images/female-img.svg";
import male from "./images/male-img.svg";
import { ReactComponent as InstaLogo } from "./assets/insta-logo.svg";
import { ReactComponent as FacebookLogo } from "./assets/facebook-logo.svg";
import { ReactComponent as TwitterLogo } from "./assets/twitter-logo.svg";
import { ReactComponent as Linkdin } from "./assets/linkdin-logo.svg";
import AttributeDeck from "../component/attribute-deck";
import CircleImg from "../component/circle-img";
import CyanButton from "../component/cyan-button";

function Home() {
  const common = {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/7c4c/ec3d/369ca4e8e5d93dc2438c5d127031ce08?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qsLSeEqmxsACr79Dz30z8b96Lu5r80r7~UUgIHWafsaHujCjBnXGKxT7Juz7WjJfVLT11VtMEPES6qwWsd9e0t5z-DXlYd5-GBjJKTjRwFxEyj9OWFF7qDV0slboB03ACpUDTftrH4FjVPrFE3wlSscoQXw1vRIPHZSRB6LaevsnSYiWI8a-puMvu7RsG-HE-zV362sWR9Ww8SfFbNKf8F6xfGtm7I-6p8YWRu1eceQCqtsf95daRYxL556NyyuGaqD1Cd6TOeXdguq7~XoJauCGo15nEWIPiyaJrbr-UFKJFrFA5FkUUOkyuMxlvHBdP~bv1bzHxbM261iMUuRj1A__",
    width: "588px",
    height: "588px",
  };
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
      <div id="contactNumber">
        <b>
          <span id="ContactNumberStyling">+919109864543</span>
        </b>
      </div>
      <AttributeDeck />
      <div className="about">
        <div className="rightSide">
          <div
            style={{
              width: "190px",
              height: "190px",
              background: "#101010",
              borderRadius: "50%",
              position: "absolute",
              left: "80px",
              top:"25px"
            }}
          ></div>
          <CircleImg imgProps={common} />
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "#47E4BF",
              borderRadius: "50%",
              position: "relative",
            }}
          ></div>
        </div>
        <div className="leftSide">
          <div
            style={{
              width: "8px",
              height: "8px",
              background: "#47E4BF",
              borderRadius: "50%",
              position: "relative",
            }}
          ></div>
          <span
            style={{
              top: "16px",
              position: "relative",
              fontFamily: "Plus Jakarta Sans",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "18px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#5D5D5D",
              width: "139px",
              height: "18px",
            }}
          >
            ABOUT THE AGENCY
          </span>
          <p
            style={{
              top: "-20px",
              position: "relative",
              fontFamily: "Plus Jakarta Sans",
              fontSize: "50px",
              fontWeight: "800",
              lineHeight: "63px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#FFFFFF",
              width: "580px",
              height: "189px",
            }}
          >
            We’re Top Notch & Best{" "}
            <span style={{ color: "#47E4BF" }}>Web Design & Social</span> Media
            Agency
          </p>
          <p
            style={{
              top: "-20px",
              position: "relative",
              fontFamily: "Plus Jakarta Sans",
              fontSize: "18px",
              fontWeight: "600",
              lineHeight: "22px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#47E4BF",
              width: "580px",
              height: "46px",
            }}
          >
            Transforming the Landscape of Your Product Development Experience
          </p>
          <p
            style={{
              position: "relative",
              fontFamily: "Plus Jakarta Sans",
              fontSize: "15px",
              fontWeight: "500",
              lineHeight: "18px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#5D5D5D",
              width: "580px",
              height: "57px",
            }}
          >
            We transform visions into digital realities. We're more than just a
            digital agency; we're your growth catalyst. With a passion for
            innovation and a commitment to excellence, we offer a comprehensive
            suite of services that empower businesses to thrive in the digital
            age.
          </p>
          <CyanButton position={"relative"} height={"64px"} width={"174px"} top={"20px"}/>
        </div>
      </div>
    </section>
  );
}

export default Home;
