import { Form } from "react-bootstrap"

const Search = ({
    entity = '',
    type = 'text',
    value,
    onChange
}) => {
    return (
        <Form.Group className="mb-5 w-25" controlId="search">
            <Form.Label>Search {entity}:</Form.Label>
            <Form.Control
                type={type}
                placeholder={`Search ${entity}...`}
                onChange={onChange}
                value={value}
            />
        </Form.Group>
    )
}

export default Search
