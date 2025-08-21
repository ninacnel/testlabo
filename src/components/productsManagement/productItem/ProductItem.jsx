import { Card } from "react-bootstrap";

const ProductItem = ({ name, price, isAvailable }) => {
    return (
        <Card>
            <Card.Header>
                <h2>{name}</h2>
                <h3>${price}</h3>
                <h4>{isAvailable ? 'Available' : 'Sold out'}</h4>
            </Card.Header>
        </Card>
    );
};

export default ProductItem;