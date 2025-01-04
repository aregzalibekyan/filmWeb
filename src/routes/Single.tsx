import { useLocation,useParams } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function Single() {
const location = useLocation();
const film = location.state?.film;
    return (
        <>
        <div>
            <h1>{film?.title}</h1>
            <div style={{width:"54px",height:"54px"}}>
            <CircularProgressbar value={Math.round(film?.vote_average * 10)} />
            </div>
        </div>
        </>
    )
}