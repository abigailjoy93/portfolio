// About me should contain a recent photo and short bio
import photoSelf from "../../assets/me.jpeg";

export default function AboutMe() {
  return (
    <div className="AboutMe" style={{ textAlign: "center" }}>
      <h1>About Me</h1>
      <img src={photoSelf} style={{ width: "25%" }}></img>
      <p style={{ fontSize: "25px" }}>About me blurb</p>
    </div>
  );
}
