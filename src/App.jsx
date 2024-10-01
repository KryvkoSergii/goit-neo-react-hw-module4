import "./App.css";
import Api from "./components/Api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

let emptyResult = () => {
  return { total: -1, results: [] };
};

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(() => {
    return emptyResult();
  });
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(() => {
    return { id: "", alt_description: "", urls: { regular: "" } };
  });

  const onSubmit = (event) => {
    event.preventDefault();
    setData(emptyResult());
    const queryValue = event.target[0].value;

    if (queryValue && queryValue.trim() !== "") {
      setQuery({
        page: 1,
        query: queryValue,
      });
    } else {
      toast.error("search query is empty");
    }
  };

  const onLoadMore = () => {
    setQuery({
      ...query,
      page: query.page + 1,
    });
  };

  const onError = (error) => {
    setErrorMessage(error.message);
  };

  useEffect(() => {
    if (!query || !query.query || query.query.trim() === "") {
      return;
    }

    async function fetchData() {
      setLoaderStatus(true);
      setErrorMessage(null);
      try {
        const response = await Api(query, onError);
        data.results.push(...response.results);
        response.results = data.results;
        setData(response);
      } finally {
        setLoaderStatus(false);
      }
    }

    fetchData();
  }, [query]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function onImageClick(image){
    setSelectedImage(image);
    openModal();
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <SearchBar onSubmit={onSubmit} />
      {data.results && data.results.length > 0 && (
        <ImageGallery list={data.results} onImageClick={onImageClick} />
      )}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {loaderStatus && <Loader />}
      {data.results && data.total > data.results.length && (
        <LoadMoreBtn onClick={onLoadMore} />
      )}
      
        <ImageModal
          image={selectedImage}
          isOpen={modalIsOpen}
          closeModal={closeModal}
        />
    </>
  );
}

export default App;
