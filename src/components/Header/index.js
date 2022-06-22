import './styles.scss'
import { Link } from "react-router-dom"



export function Header() {
    return (
        <header>
            <div className="logo">
                <Link to="/">RadioL</Link>
            </div>
        </header>
    )
}