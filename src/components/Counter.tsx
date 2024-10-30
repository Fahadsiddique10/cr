import { Custom } from "../constants";
import CountMain from "./CountMain";

function Counter() {
  return (
    <section className="Revenue">
      <div className="container">
          <ul className="">
          {/* <li>Hello</li> */}
          {Custom.map((obj, index) => (
            <CountMain
              key={index}
              index={index}
              title={obj.title}
              description={obj.description}
            />
          ))}
        </ul>
        </div>

    </section>
  );
}

export default Counter;
