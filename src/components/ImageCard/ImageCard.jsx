import PropTypes from "prop-types";
import css from "./ImageCard.module.css";

export default function ImageCard({ image, onImageClick }) {

  const onClick = (event) =>{
    onImageClick(image);
  } 

  return (
    <div className={css.image_card}>
      <img src={image.urls.small} alt={image.alt_description} onClick={onClick}/>
    </div>
  );
}

let Urls = PropTypes.shape({
  small: PropTypes.string,
  regular: PropTypes.string,
});

let Image = PropTypes.shape({
  id: PropTypes.string,
  alt_description: PropTypes.string,
  urls: Urls,
});

ImageCard.propTypes = {
  image: Image,
  onImageClick: PropTypes.any
};
