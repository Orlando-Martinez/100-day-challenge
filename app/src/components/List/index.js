import React from 'react';
import './styles.scss';

const List = ({items, inline}) => {
    const isInline = () => ( inline ? 'inline': 'list' )
    return (
        <ul className={isInline()}>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

export default List;