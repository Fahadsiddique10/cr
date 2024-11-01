import styles from './banner.module.css';

function Home() {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <h1>Revolutionizing Marketing for <span className={styles.orange}>Digital Advancement</span></h1>
        <p className={styles.para}>
          ConceptRecall takes pride in helping our clients achieve massive success, increase revenue, and take their businesses to new heights. Our strategies to catapult your business are simple yet powerful. We enjoy a distinguished reputation as a customer-oriented marketing agency, boasting 95.5% happy clients.
        </p>
      </div>
    </div>
  );
}

export default Home;
