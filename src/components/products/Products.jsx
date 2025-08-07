import { useState } from "react";
import { allProducts } from "../data/products";
import ProductItem from "../productItem/ProductItem";
import { Col, Container, Row } from "react-bootstrap";
import ProductForm from "../productForm/ProductForm";

const Products = () => {
    const [products, setProducts] = useState(allProducts);

    const handleAddNewProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    }

    return (
        <Container>
            <h1>List of Products</h1>
            <Row>
                {products.map((product) => (
                    <Col md={4} key={product.code} className='mb-2'>
                        <ProductItem
                            code={product.code}
                            name={product.name}
                            price={product.price}
                            isAvailable={product.isAvailable}
                        />
                    </Col>
                ))}
            </Row>
            <Row md={4}>
                <ProductForm onAddNewProduct={handleAddNewProduct}/>
            </Row>
        </Container>
    );
};

export default Products;