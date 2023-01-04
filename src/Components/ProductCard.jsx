import React from 'react';

function ProductCard(props) {
    return (
        <div class="product-card">
            <picture>
                <source media="(max-width:576px)" srcset={props.mobileImg}></source>
                <source media="(min-width:577px)" srcset={props.desktopImg}></source>
                <img src={props.desktopImg} alt=""></img>
            </picture>

            <h3>{props.title}</h3>
        </div>
    )
}

export default ProductCard;