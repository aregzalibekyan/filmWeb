import { useLocation,useParams } from "react-router-dom"
export default function Single() {
const location = useLocation();
const film = location.state;
console.log(film)
    return (
        <>
        <div>
            <h1>{film.title}</h1>
        </div>
        </>
    )
}