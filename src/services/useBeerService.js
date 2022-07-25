import useRequest from "./useRequest";

const useBeerService = () => {
    const { request, loading, setLoading } = useRequest();
    const _apiBase = "https://api.punkapi.com/v2/beers"

    const _transformBeers = (beer) => {
        const {name, id, description, image_url} = beer;

        return {
            name, 
            description,
            image: image_url,
            id
        }
    }

    const _transformBeer = (beer) => {
        const {image_url, name, tagline, description, abv, food_pairing} = beer;
   
        return {
            image: image_url, 
            name, 
            tagline, 
            description, 
            abv, 
            foodPairing: food_pairing
        }
    }

    const getAllBeers = async () => {
        const data = await request(_apiBase)

        return data.map(_transformBeers)
    }

    const getBeer = async (id) => {
        const data = await request(`${_apiBase}/${id}`);
        
        return _transformBeer(data[0]);
    }

    return {getAllBeers, getBeer, loading, setLoading}
}

export default useBeerService;