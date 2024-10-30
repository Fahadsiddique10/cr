import { LetterBox } from "../constants";
import Lettermain from "./Lettermain";
import Button from "./Button";

function Letter() {

  const submit = () => {
    submit
  }
  return (
    <section className="Letter-cont">
      <h2 className="main-head">Recent <span className="orange">News Letter</span></h2>
      <p className="para top">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
      <div className="container">
        <div className="hero">
          {/* <li>Hello</li> */}
          {LetterBox.map((obj, index) => (
            <Lettermain
              key={index}
              image={obj.image}
              title={obj.title}
              description={obj.description}
            />
          ))}
        </div>
        <div className="letter-btn">
        <Button label="View all blogs" onClick={() => submit()} className="Letter-btn"></Button>
        </div>
      </div>
    </section>
  );
}
export default Letter;