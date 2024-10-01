import ImageCard from "../ImageCard/ImageCard";
import PropTypes from "prop-types";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ list, onImageClick }) {
  return (
    <ul className={css.image_galary}>
      {list.map((image) => singleElement(image, onImageClick))}
    </ul>
  );
}

function singleElement(image, onImageClick) {
  return (
    <li key={image.id} className={css.image_galary_item}>
      <ImageCard image={image} onImageClick={onImageClick} />
    </li>
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

ImageGallery.propTypes = {
  list: PropTypes.arrayOf(Image),
  onImageClick: PropTypes.any
};
