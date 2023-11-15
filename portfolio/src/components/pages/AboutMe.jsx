// About me should contain a recent photo and short bio
import photoSelf from "../../assets/me.jpeg";

export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={photoSelf}></img>
      <p>About me blurb</p>
    </div>
  );
}
