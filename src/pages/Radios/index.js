import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';
import { Search } from "../../components/Search";

export function Radios() {
    const { country } = useParams()
    const [countryRadios, setCountryRadios] = useState([]);

    useEffect(() => {
        async function getCountryRadios() {
            const response = await fetch(`https://at1.api.radio-browser.info/json/stations/bycountrycodeexact/${country}`);
            const data = await response.json();
            setCountryRadios(data);
        }
        getCountryRadios()
    }, [country]);


    const [search, setSearch] = useState("");

    const filteredCountryRadios = countryRadios.filter( countryRadio =>
        countryRadio?.name.toLowerCase().includes(search))

    function getSearchValue(e) {
        e.preventDefault()
        setSearch(e.target.value.toLowerCase())
    }

    return (

        <main className='radios'>
        <Search
                total={filteredCountryRadios.length}
                search={getSearchValue}
            />
            <div className="radios-container">
                {filteredCountryRadios.map(countryRadio =>
                    <article key={countryRadio?.changeuuid} className='card'>
                        <div className='card-circle'>
                            <a href={countryRadio?.homepage} target="_blank" rel="noreferrer">
                                <div className="card-image"
                                    style={{
                                        backgroundImage: `url(${countryRadio?.favicon})`
                                    }}
                                ></div> </a>
                        </div>
                        <div className="card-name">{countryRadio?.name}</div>
                        <div className="card-tags">{countryRadio?.tags}</div>
                    </article>
                )}
            </div>
        </main>
      
    )
}
