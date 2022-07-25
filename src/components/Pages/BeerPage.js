import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import useBeerService from "../../services/useBeerService";
import BeerPageCard from "../BeerPageCard/BeerPageCard";
import Spinner from "../Spinner/Spinner";

const BeerPage = () => {
    const [beer, setBeer] = useState(null);
    const { beerId } = useParams();
    const { getBeer, loading, setLoading } = useBeerService();

    useEffect(() => {
        getBeer(beerId)
        .then(res => {
            setBeer(res)
            setLoading(false)
        })
    }, [])
    
    return(
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Beer Page"
                />
                <title>Beer Page</title>
            </Helmet>
            {loading ? <Spinner/> : beer ? 
            <BeerPageCard 
                {...beer}
            /> : null}
        </>
    )
}

export default BeerPage;