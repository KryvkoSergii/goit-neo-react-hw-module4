import css from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({onClick}){
    return <div>
        <button onClick={onClick} className={css.load_more_btn}>Load more</button>
    </div>
}