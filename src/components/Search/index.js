import './styles.scss'
import { FaSearch } from 'react-icons/fa';

export function Search({ search, total }) {
    return (
        <div className="search">
            <div className="search-results">
                {total} Found
            </div>
            <form className="search-form">
                <FaSearch />
           
                <input
                    placeholder="Search"
                    type="text"
                    onChange={search}
                />
            </form>
        </div>
    )
}