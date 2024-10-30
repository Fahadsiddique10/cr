import { Fotter } from "../constants";
import Footer from "./Footer";
import phone from "./../assets/phone.svg"
import Email from "./../assets/message.svg"
import location from "./../assets/location.svg"
import Button from "./Button";
import recall from "./../assets/logomain.png"

function FooterColumn() {
  const submit = () => {
    
  }
  return (
    <section className="Footer">
      <div className="foot-top container">
        <img src={recall} alt="" />
      </div>
      <div className="foot-main flex container">
        <ul className="col-1">
          <h3>Our Links</h3>
          {/* <li>Hello</li> */}
          {Fotter.map((obj, index) => (
            <Footer
              key={index}
              description={obj.description}
            />
          ))}
        </ul>
        < ul className="col-2">
          <h3>Contact Us</h3>
          <li>
            <div className="icons">
              <img src={phone} alt="" />
              Phone
            </div>
            <a className="main" aria-label="Contact us on phone" href="tel:923167856990">(+92) 316 7856 990</a>
          </li>
          <li>
            <div className="icons">
              <img src={Email} alt="" />
              Email
            </div>
            <a className="main" aria-label="Contact us on email" href="mailto:info@conceptrecall.com">info@conceptrecall.com</a>
          </li>
          <li>
            <div className="icons">
              <img src={location} alt="" />
              Location
            </div>
            <a className="main" target="_blank" aria-label="Our Address" href="https://maps.app.goo.gl/KdVHxbGvy7H9WWHG6">B-219, Block 10 Gulshanh -e-Iqbal, Karachi, Karachi City, Sindh 75300</a>
          </li>
        </ul>
        < ul className="col-3">
          <h3>News Letter</h3>
          <p className="para foot">Stay in tune for latest news from Concept Recall</p>
          <div className="email-box">
            <div className="form">
            <input id="email" type="email" placeholder="Enter your Email Address" name="email"/>
            </div>
            <Button label="Send" onClick={() => submit()} className="Letter-btn"></Button>
          </div>
        </ul>
      </div>
      <div className="foot-bottom hero">
        <p className="para">© Copyrights 2024 All Rights Reserved.</p>
        <ul className="foot">
          <li>Terms & Conditions</li>
          <li>Privacy & Policy</li>
          <li>FAQS</li>
        </ul>
      </div>
    </section>
  );
}
export default FooterColumn;