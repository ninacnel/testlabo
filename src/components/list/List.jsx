import React, { useState } from 'react'
import ListItem from '../listItem/ListItem';

const List = () => {
    const [list, setList] = useState([
        { name: 'Bread', price: 200 },
        { name: 'Beef', price: 300 },
        { name: 'Milk', price: 250 },
    ]);

    return (
        <>
            {list.map((item) =>
                <ListItem
                    name={item.name}
                    price={item.price}
                />)}
        </>
    )
}

export default List