import { useSelector, useDispatch } from "react-redux";
import {
  setQuery,
  clearResults,
  fetchSearchResults,
  getResult,
} from "../features/searchSlice";

export default function searchBar() {
  const dispatch = useDispatch();
  const { query, isLoading, results } = useSelector(
    (state: any) => state.search
  );
  function handleSearch(e: any) {
    console.log(e.target.value)
    dispatch(setQuery(e.target.value));
    if (query) {
      dispatch<any>(fetchSearchResults(e.target.value));
      console.log(results)
    }
  }
 
  const styles = {
    display: query ? "inline-block" : "none ",
  };
  return (
    <div className="header--search">
      <div className="header--search--bar">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Type the movie title here"
          className="header--search--input"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="ipc-icon ipc-icon--magnify header--search--icon"
          viewBox="0 0 24 24"
          fill="black"
          role="presentation"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
      </div>
      <div className="header--search--result" style={styles}>
        <ol>
          {
            results.map((film:any) => (
              <>
            <li key={film.id}>
              <div className="result--img">
                <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} className="result--poster"/>
                </div>
              <div className="result--data">
                <h3>{film.title}</h3>
                <p>{film.release_date}</p>
                <p className="result--overview">{film.overview}</p>
                </div>
              </li>
              <hr className="result--hr"/>
              </>
          ))
          }
        </ol> 
      </div>
    </div>
  );
}
