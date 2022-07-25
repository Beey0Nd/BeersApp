import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = ({beers, query, setQuery}) => {
    const [searchError, setSearchError] = useState("");
    const navigate = useNavigate();

    const onEnter = (e) => {
        if(e.key === "Enter") {
            if(!query) setSearchError("error")
            const beer = beers.find(beer => beer.name === query)
            if(beer) {
                navigate(`/beers/${beer.id}`)
            } else {
                setSearchError("error")
                setQuery("Not Found")
            }
        }
    }

    const onChange = (e) => {
        setQuery(e.target.value)
        if(searchError === "error") setSearchError("")
    } 

    const renderOptions = () => {
        return beers.map(beer => {
            return (
                    <option 
                        key={beer.id}
                        value={beer.name}/>
            )
        })
    }

    return(
        <>
            <input 
            onKeyDown={onEnter}
            className={`beer-filter ${searchError}`}
            value={query}
            onChange={onChange}
            placeholder="Enter a beer name"
            autoComplete="off" 
            type="text"
            list="beers"/>
            <datalist className="beer-filter__list" id="beers">
                {renderOptions()}
            </datalist>
        </>
    ) 
} 

export default SearchInput;