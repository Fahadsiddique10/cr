import Button from "./Button"; // Import the reusable button component

interface SlideItemProps {
  title: string;
  description: string;
  image: string;
}

const SlideItem = ({ title, description, image }: SlideItemProps) => {
  return (
    <div className="slide-content">
      {/* Left side - Image */}
      <div className="solution">
        <img src={image} alt="Slide Image" />
      </div>

      {/* Right side - Text Content */}
      <div className="solution-cont">
        <h2>
          {title} <span className="orange"> Utilizing Technical</span>
        </h2>
        <p className="para">{description}</p>
        <Button label="View Case Study" className="nav-btn" />
      </div>
    </div>
  );
}

export default SlideItem;
