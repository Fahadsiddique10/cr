import { keyslider } from "../constants";
import LogoSlideMain from "./LogoSlideMain";
import Marquee from "react-fast-marquee";

function  LogoSlide() {
    return (
  
      <section className="new-slide">
         <Marquee>
          <ul className="hero">
            {/* <li>Hello</li> */}
            {keyslider.map((obj, index) => (
              <LogoSlideMain
                key={index}
                image={obj.image}
              />
            ))}
          </ul>
       </Marquee>
     </section>
    );
  }
export default LogoSlide;