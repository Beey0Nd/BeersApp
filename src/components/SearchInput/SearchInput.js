const SearchInput = ({query, setQuery}) => {
    return(
        <input 
            className="beer-filter" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter a beer name"
            autoComplete="off" 
            type="text"
        />
    ) 
} 

export default SearchInput;