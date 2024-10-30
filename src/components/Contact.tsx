import facebook from "./../assets/facbook.svg";
import instagram from "./../assets/insta.svg";
import linkedin from "./../assets/linkedin.svg";
import Button from "./Button";

function Contact() {
  const submit = () => {
    console.log("Form submitted");
  };

  return (
    <section className="Contact">
      <div className="top-head">
        <h2><span className="orange">Contact </span>Us</h2>
      </div>
      <div className="hero container">
        <div className="left-form">
          <div className="grid">
            <div className="contact-text-input">
              <div className="relative">
                <input id="firstName" type="text" placeholder="" />
                <label htmlFor="firstName" className="custom-placeholder">First Name</label>
              </div>
            </div>
            <div className="contact-text-input">
              <div className="relative">
                <input id="lastName" type="text" placeholder="" />
                <label htmlFor="lastName" className="custom-placeholder">Last Name</label>
              </div>
            </div>
            <div className="contact-text-input">
              <div className="relative">
                <input id="email" type="text" placeholder="" />
                <label htmlFor="email" className="custom-placeholder">Email Address*</label>
              </div>
            </div>
            <div className="contact-text-input">
              <div className="relative">
                <input id="phone" type="text" placeholder="" />
                <label htmlFor="phone" className="custom-placeholder">Phone No*</label>
              </div>
            </div>
            <div className="contact-text-input">
              <div className="relative">
                <input id="company" type="text" placeholder="" />
                <label htmlFor="company" className="custom-placeholder">Company</label>
              </div>
            </div>
            <div className="contact-text-input">
              <div className="relative">
                <input id="country" type="text" placeholder="" />
                <label htmlFor="country" className="custom-placeholder">Country</label>
              </div>
            </div>
          </div>
          <div className="tex-main">
            <div className="relative">
              <textarea id="message" name="message" className="messagefield"></textarea>
              <label htmlFor="message" className="custom-placeholder">Message<span>*</span></label>
              <div className="error-message-container"><span className="typography bg-auto error-message"></span></div>
            </div>
          </div>
        </div>
        <div className="right-form">
          <h2><span className="orange">Speak</span> to an Expert</h2>
          <p className="para">
            If you have any RFP requirements, please share them with us at <span className="orange">info@conceptrecall.com</span>. For career-related inquiries, please check our <span className="orange">Career</span> section.
          </p>
          <p className="para">Discover the perfect solution for your business needs with us! Let's join forces and unlock the path to success.</p>
          <div className="social-icons">
            <a href="#"><img className="social" src={facebook} alt="Facebook" /></a>
            <a href="#"><img className="social" src={instagram} alt="Instagram" /></a>
            <a href="#"><img className="social" src={linkedin} alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
      <div className="btn">
        <Button label="Send" onClick={submit} className="Letter-btn" />
      </div>
    </section>
  );
}

export default Contact;
