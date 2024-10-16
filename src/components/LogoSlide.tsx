import { keyslider } from "../constants";
import LogoSlideMain from "./LogoSlideMain";

function  LogoSlide() {
    return (
      <section className="new-slide">
          <h2 className="main-head">Industries we've <span className="orange">excelled in</span></h2>
          <p className="para top">Our services are tailor-made and we are always striving to surpass your wildest expectations!</p>
          <ul className="hero">
            {/* <li>Hello</li> */}
            {keyslider.map((obj, index) => (
              <LogoSlideMain
                key={index}
                image={obj.image}
              />
            ))}
          </ul>
      </section>
    );
  }
export default LogoSlide;