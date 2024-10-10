import posterImg from '../assets/Group 1216005671.png';

function About() {
  return (
    <section className="About container">
      <div className="main-video">
        <video 
          src={"https://cdn.conceptrecall.com/about-us/concept.mp4"} // Imported video file
          poster={posterImg} // Imported image file
          controls
          width="100%"
          height="auto"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default About;
