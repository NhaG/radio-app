import { Link } from "react-router-dom";
import './styles.scss';


export function Radio({ name, iso, stationcount, topRadios }) {

    const withBar = 100 * stationcount / topRadios;

    return (

        <article className="card">
            <Link to={`radios/${iso}`}>
                <div className="card-station-bar">
                    <div className="card-station-name">{name}  [{iso}]</div>
                    <div className="card-station-radios">{stationcount}</div>
                    <div
                        className="card-station-bar-content"
                        style={{ width: `${withBar}%` }}>
                    </div>
                </div>
            </Link>
        </article>

    )
}