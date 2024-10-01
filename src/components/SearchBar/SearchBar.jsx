import css from "./SearchBar.module.css";
import Icons from "../../assets/icon.svg";

export default function SearchBar({onSubmit}) {
  return (
    <header className={css.search_bar}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          <svg>
            {" "}
            <use xlinkHref={`${Icons}#search`}></use>
          </svg>{" "}
        </button>
      </form>
    </header>
  );
}
