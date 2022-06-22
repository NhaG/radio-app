import { useEffect, useState } from "react"
import { Radio } from "../../components/Country";
import './styles.scss';
import { Search } from "../../components/Search";


export function Home() {

    const [radios, setRadios] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function getRadios() {
            const response = await fetch('http://89.58.16.19/json/countries');
            const data = await response.json();

            setRadios(data);
        }
        getRadios()
    }, []);

    const filteredRadios = radios.filter(radio =>
        radio.name.toLowerCase().includes(search))

    function getSearchValue(e) {
        e.preventDefault()
        setSearch(e.target.value.toLowerCase())
    }

    const sortCount = [...radios].sort((a, b) => {
        return b.stationcount - a.stationcount;
    });

    const topRadios = sortCount[0]?.stationcount;



    return (
        <>
            <Search
                total={filteredRadios.length}
                search={getSearchValue}
            />
            <main className="home">

                    {filteredRadios.map(radio =>
                        <Radio
                            key={radio.iso_3166_1}
                            name={radio.name}
                            iso={radio.iso_3166_1}
                            stationcount={radio.stationcount}
                            topRadios={topRadios}
                            
                        />
                    )}
            </main>
        </>
    )
}