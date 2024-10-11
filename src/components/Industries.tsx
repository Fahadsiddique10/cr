import { Excel } from "../constants";
import IndusMain from "./IndusMain";
import Button from "./button";

function  Industries() {
 const submit = () => {
  
 }
    return (
      <section className="Indues">
          <h2 className="main-head">Industries we've <span className="orange">excelled in</span></h2>
          <p className="para top">Our services are tailor-made and we are always striving to surpass your wildest expectations!</p>
          <ul className="container">
            {/* <li>Hello</li> */}
            {Excel.map((obj, index) => (
              <IndusMain
                key={index}
                icon={obj.icon}
                title={obj.title}
                description={obj.description}
              />
            ))}
          </ul>
          <Button label="View all industries" onClick={() => submit()} className="nav-btn"></Button>
      </section>
    );
  }
export default Industries;