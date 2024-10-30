import { Card } from "../constants";
import Award_card from "./Award_card";
import Button from './Button'

function Award() {

  const submit = () => {
    return
  }
  return (
    <section className="main-award container">
      <h2 className="main-head">Award-winning <span className="orange">Services we provide</span></h2>
      <p className="para top">Our services are tailor-made and we are always striving to surpass your wildest expectations!</p>
      <ul className="">
        {/* <li>Hello</li> */}
        {Card.map((obj, index) => (
          <Award_card
            key={index}
            icon={obj.icon}
            title={obj.title}
            description={obj.description}
          />
        ))}
      </ul>
      <Button label="View all services" onClick={() => submit()} className="nav-btn"></Button>
    </section>
  );
}

export default Award;
