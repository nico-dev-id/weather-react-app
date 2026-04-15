import { useState } from "react"

function Search({ setCity, getWeather, setError }) {

    const [input, setInput] = useState("");
    
    const handleSearch = (e) => {
        e.preventDefault()

        if (!input) {
            setError("Masukkan Nama Kota !!!")
            return
        }

        setCity(input)
        getWeather(input)
        setError("")
        setInput("")
    }

    //console.log(input)
    return (
        <form className="search-container" onSubmit={handleSearch}>
            <input type="text" 
            placeholder="Cari Kota..."
            value={input}
            onChange={(e) => setInput (e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
        
    )
}

export default Search