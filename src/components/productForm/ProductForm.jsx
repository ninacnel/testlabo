import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const ProductForm = ({ onAddNewProduct }) => {
    const [nameEntered, setNameEntered] = useState('');
    const [priceEntered, setPriceEntered] = useState(0);
    const [stockEntered, setStockEntered] = useState(false);

    const handleNameChange = (event) => {
        setNameEntered(event.target.value);
    }

    const handlePriceChange = (event) => {
        setPriceEntered(event.target.value);
    }

    const handleStockChange = (event) => {
        setStockEntered(event.target.value);
    }

    const handleSubmitProduct = (event) => {
        event.preventDefault();

        const newItem = {
            name: nameEntered,
            price: priceEntered,
            isAvailable: stockEntered,
        };

        onAddNewProduct(newItem);

        setNameEntered("");
        setPriceEntered(0);
        setStockEntered(false);
    }

    return (
        <Container className="bg-dark rounded">
            <Form onSubmit={handleSubmitProduct}>
                <Form.Group controlId="product-name">
                    <Form.Label className="text-light">Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name..."
                        onChange={handleNameChange}
                        value={nameEntered}
                    />
                </Form.Group>
                <Form.Group controlId="product-price">
                    <Form.Label className="text-light">Price</Form.Label>
                    <Form.Control
                        type="number"
                        onChange={handlePriceChange}
                        value={priceEntered}
                    />
                </Form.Group>
                <Form.Group controlId="product-availability">
                    <Form.Check
                        type="checkbox"
                        className="text-light"
                        label="Available"
                        onChange={handleStockChange}
                        value={stockEntered}
                    />
                </Form.Group>
                <Button type="submit" variant="warning" className="mb-3 mt-2 ps-5 pe-5">
                    Add Product
                </Button>
            </Form>
        </Container>
    ) // Two-Way Data Binding
}

export default ProductForm