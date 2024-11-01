import styles from './contact.module.css';
import facebook from "./../../assets/facbook.svg";
import instagram from "./../../assets/insta.svg";
import linkedin from "./../../assets/linkedin.svg";
import Button from "./../Button";

function Contact() {
    const submit = () => {
      console.log("Form submitted");
    };
  
    return (
      <section className={styles.Contact}>
        <div className={styles.topHead}>
          <h2><span className={styles.orange}>Contact </span>Us</h2>
        </div>
        <div className={`${styles.hero} ${styles.container}`}>
          <div className={styles.leftForm}>
            <div className={styles.grid}>
              <div className={styles.contactTextInput}>
                <div className={styles.relative}>
                  <input id="firstName" type="text" placeholder="" />
                  <label htmlFor="firstName" className={styles.customPlaceholder}>First Name</label>
                </div>
              </div>
              <div className={styles.contactTextInput}>
                <div className={styles.relative}>
                  <input id="lastName" type="text" placeholder="" />
                  <label htmlFor="lastName" className={styles.customPlaceholder}>Last Name</label>
                </div>
              </div>
              <div className={styles.contactTextInput}>
                <div className={styles.relative}>
                  <input id="email" type="text" placeholder="" />
                  <label htmlFor="email" className={styles.customPlaceholder}>Email Address*</label>
                </div>
              </div>
              <div className={styles.contactTextInput}>
                <div className={styles.relative}>
                  <input id="phone" type="text" placeholder="" />
                  <label htmlFor="phone" className={styles.customPlaceholder}>Phone No*</label>
                </div>
              </div>
              <div className={styles.contactTextInput}>
                <div className={styles.relative}>
                  <input id="company" type="text" placeholder="" />
                  <label htmlFor="company" className={styles.customPlaceholder}>Company</label>
                </div>
              </div>
              <div className={styles.contactTextInput}>
                <div className={styles.relative}>
                  <input id="country" type="text" placeholder="" />
                  <label htmlFor="country" className={styles.customPlaceholder}>Country</label>
                </div>
              </div>
            </div>
            <div className={styles.texMain}>
              <div className={styles.relative}>
                <textarea id="message" name="message" className={styles.messageField}></textarea>
                <label htmlFor="message" className={styles.customPlaceholder}>Message<span>*</span></label>
                <div className={styles.errorMessage}></div>
              </div>
            </div>
          </div>
          <div className={styles.rightForm}>
            <h2><span className={styles.orange}>Speak</span> to an Expert</h2>
            <p className={styles.para}>If you have any RFP requirements, please share them with us at <span className={styles.orange}>info@conceptrecall.com</span> and if you are looking for a career-related enquiry please check our Career section</p>
            <p className={styles.para}>Discover the perfect solution for your business needs with us! Let's join forces and unlock the path to success</p>
            <div className={styles.socialIcons}>
              <a href="#"><img className={styles.social} src={facebook} alt="Facebook" /></a>
              <a href="#"><img className={styles.social} src={instagram} alt="Instagram" /></a>
              <a href="#"><img className={styles.social} src={linkedin} alt="LinkedIn" /></a>
            </div>
          </div>
        </div>
        <div className={styles.btn}>
          <Button label="Send" onClick={submit} />
        </div>
      </section>
    );
  }

export default Contact;
