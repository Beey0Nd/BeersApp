import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useBeerService from "../../services/useBeerService";
import BeerCard from "../BeerCard/BeerCard";
import SearchInput from "../SearchInput/SearchInput";
import Spinner from "../Spinner/Spinner";

const MainPage = () => {
    const [beers, setBeers] = useState(null);
    const [query, setQuery] = useState("");
    const { getAllBeers, loading, setLoading } = useBeerService();
    
    useEffect(() => {
        getAllBeers()
        .then(res => {
            setBeers(res);
            setLoading(false)
        })
    }, [])

    const filterBeers = () => {
        if(query) {
            return beers.filter(beer => beer.name.toLowerCase().includes(`${query}`.toLowerCase().trim()))
        }

        return beers;
    }

    const renderBeers = (beers) => beers.map(beer => {
        const {name, description, image, id } = beer;
        return(
            <BeerCard 
                name={name} 
                description={description} 
                image={image}
                id={id}
                key={id}
            />
        )
    })

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Main Page"
                />
                <title>Main Page</title>
            </Helmet>
            {loading ? null : 
                <SearchInput 
                query={query} 
                setQuery={setQuery}/>
            }
            <ul className="beer-list">
                {loading ? <Spinner/> : beers 
                ? renderBeers(filterBeers()) : null}
            </ul>
        </>
    )
}

export default MainPage;