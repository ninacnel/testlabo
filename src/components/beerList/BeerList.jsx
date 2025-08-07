import { beers } from '../data/beers'

const BeerList = () => {
    const dollar = 1200;
    return (
        <div>
            <h3>Beer List</h3>
            {beers.map((beer) =>
                <h4>{beer.beerName} - {beer.price * dollar}</h4>
            )}
        </div>
    )
}

export default BeerList