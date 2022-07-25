import { Link } from "react-router-dom";

const BeerCard = ({name, description, image, id}) => {
    const formatDescription = () => {
        return description.length > 140 ? 
        `${description.slice(0, 140)}...` : description;
    }
    
    return (
        <li className="beer-card">
            <Link className="beer-card__link" to={`/beers/${id}`}>
                <img className="beer-card__image" src={image} alt="beer image" />
                <div className="beer-card__info">
                    <h2 className="beer-card__name">{name}</h2>
                    <p className="beer-card__desc">{formatDescription()}</p>
                </div>
            </Link>
        </li>
    )
}

export default BeerCard;