import React from 'react';

const Social = ({image, url}) => (
    <div>
        <a href={url}>
            <img src={image} />
        </a>
    </div>
);

export default Social;