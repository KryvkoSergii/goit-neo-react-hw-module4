import ReactModal from "react-modal";
import PropTypes from "prop-types";
import Icons from "../../assets/icon.svg";
import css from "./ImageModal.module.css";

export default function ImageModal({ image, isOpen, closeModal }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={customStyles}
      contentLabel={image.alt_description}
    >
      <button onClick={closeModal} className={css.close_button}>
        <svg>
          <use xlinkHref={`${Icons}#close`}></use>
        </svg>
      </button>
      <div>
        <img src={image.urls.regular} />
      </div>
    </ReactModal>
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

ImageModal.propTypes = {
  image: Image,
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};
