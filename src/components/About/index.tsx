import recall from './../../assets/recall.png';
import Button from './../Button';
import styles from './about.module.css'; // Importing the CSS module

function About() {
  const submit = () => {
    return;
  };

  return (
    <section className={`${styles.About} ${styles.container}`}>
      <div className={styles.topCont}>
        <h2 className={styles.mainHead}>
          <span className={styles.orange}>About </span>Us
        </h2>
        <p className={styles.para}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
        </p>
      </div>
      <div className={styles.hero}>
        <div className={styles.recallLeft}>
          <img src={recall} alt="" />
        </div>
        <div className={styles.recallRight}>
          <p className={styles.para}>
            We believe in surpassing expectations and satisfying our clientele to form lasting alliances. What makes this target attainable is thinking out of the box and gladly, our personnel does just that! We fuse creativity with technical expertise to foster impactful results and never fail to surprise our clients with it!
          </p>
          <Button label="Contact us" onClick={submit} className={styles.navBtn}></Button>
        </div>
      </div>
    </section>
  );
}

export default About;
