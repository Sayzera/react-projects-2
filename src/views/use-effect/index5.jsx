import React, { useEffect, useState } from 'react'

function SearchBarUseEffect() {

    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    useEffect(() => {


        if (query.length < 2) {
            console.log(query, "QUERYYYYYYYYYYYYYYYY")
            // setResults([])
            return;
        }

        const time = setTimeout(() => {
            fetch('https://api.tvmaze.com/search/shows?q=' + query)
                .then(res => res.json())
                .then(data => {
                    setResults(data)
                })
        }, 500);

        return () => clearTimeout(time);

    }, [query])

    const handleChange = (e) => {
        setQuery(e.target.value)
        console.log(query, "query")                     //query state'ini görmek için ekledim güncel değer yok
        console.log(e.target.value, "e parameter")      //içeriye yazdığımız değer doğru mu kontrol etmek için ekledim
        console.log(results, " RESULTSS")               //results'un altındaki property'leri görmek için ekledim böylelikle result.show.name yapabildim
    }

    return (
        < div >
            <div>
                <input
                    type="text"
                    value={query}
                    placeholder='Ara'
                    onChange={handleChange}
                />
            </div>
            <ul>
                {results.map((result) => (
                    <li key={result.show.id}>Results: {result.show.name}</li>
                ))}
            </ul>
        </div >
    )
}

export default SearchBarUseEffect


