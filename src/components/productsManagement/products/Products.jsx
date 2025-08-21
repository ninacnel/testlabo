import { useState } from "react";
import { allProducts } from "./../../data/products";
import ProductItem from "../productItem/ProductItem";
import { Button, Col, Container, Row } from "react-bootstrap";
import ProductForm from "../productForm/ProductForm";
import ChangeDollar from "../../changeDollar/ChangeDollar";

const Products = ({ onLogout }) => {
    const [products, setProducts] = useState(allProducts);
    const [dollar, setDollar] = useState(1);
    const [showDollar, setShowDollar] = useState(true);

    const handleAddNewProduct = (newProduct) => {
        const randomCode = Math.random();
        const productWithCode = { ...newProduct, code: randomCode };

        setProducts([...products, productWithCode]);
    }

    const handleChangeDollar = (newPrice) => {
        setDollar(newPrice);
    }

    return (
        <Container>
            <Row md={4} className="d-flex align-items-center flex-column">

                <Button className="me-3" onClick={onLogout}>Cerrar sesión</Button>
            </Row>
            <Row className="mt-5">
                {products.map((product) => (
                    <Col md={4} key={product.code} className='mb-2'>
                        <ProductItem
                            code={product.code}
                            name={product.name}
                            price={product.price * dollar}
                            isAvailable={product.isAvailable}
                        />
                    </Col>
                ))}
            </Row>
            <Row md={4} className="d-flex align-items-center flex-column">
                <ProductForm onAddNewProduct={handleAddNewProduct} />
                <div className="d-flex flex-column mt-2 mb-2">
                    <Button onClick={() => setShowDollar(!showDollar)}>Show dollar form</Button>
                    {showDollar && <ChangeDollar dollar={dollar} onChangeDollar={handleChangeDollar} />}
                </div>
            </Row>
        </Container>
    );
};

export default Products;