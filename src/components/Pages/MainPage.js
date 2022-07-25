import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useBeerService from "../../services/useBeerService";
import BeerCard from "../BeerCard/BeerCard";
import Navigation from "../Navigation/Navigation";
import SearchInput from "../SearchInput/SearchInput";
import Spinner from "../Spinner/Spinner";

const MainPage = () => {
    const [beers, setBeers] = useState(null);
    const [query, setQuery] = useState("");
    const [pages, setPages] = useState({
        currentPage: 1,
        totalPages: 0
    });
    const { getAllBeers, loading, setLoading } = useBeerService();
    
    useEffect(() => {
        getAllBeers()
        .then(res => {
            setBeers(res);
            setPages({
                ...pages,
                totalPages: Math.ceil(res.length / 3)
            });
            setLoading(false)
        })
    }, [])

    const paginate = () => {
        return beers.slice(3 * (pages.currentPage - 1), 3 * pages.currentPage)
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
            {beers && !loading ?  
                <SearchInput 
                beers={beers}
                query={query} 
                setQuery={setQuery}/> : null
            }
            <ul className="beer-list">
                {loading ? <Spinner/> : beers 
                ? 
                    <>
                        {renderBeers(paginate())}
                    </> : null
                }
            </ul>
            {beers && !loading ? <Navigation pages={pages} setPages={setPages}/> : null}
        </>
    )
}

export default MainPage;