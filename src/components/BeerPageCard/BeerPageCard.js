const BeerPageCard = (
    {   
        image, 
        name, 
        tagline, 
        description, 
        abv, 
        foodPairing
    }
) => {
    return (
        <div className="beer-page">
            <div className="beer-page__image-wrapper">
                <img className="beer-page__image" src={image} alt="beer image" />
            </div>
            <div className="beer-page__info">
                <h1 className="beer-page__name">{name}</h1>
                <h2 className="beer-page__tagline">"{tagline}"</h2>
                <p className="beer-page__desc">{description}</p>
                <p className="beer-page__abv">
                    <span className="beer-page__abv-title">ABV: </span>
                    <span className="beer-page__abv-text">{abv}</span>
                </p>
                <div className="beer-page__food">
                    <p className="beer-page__food-title">Food Pairing: </p>
                    <ul className="beer-page__food-desc">
                        {foodPairing.map((food, id) => {
                            return <li key={id} className="beer-page__food-text">{food}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BeerPageCard;