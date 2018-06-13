import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

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

List.propTypes = {
    items: PropTypes.array,
    inline: PropTypes.bool,
};

export default List;