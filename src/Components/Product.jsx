import React, {useState} from 'react';
import ProductCard from './ProductCard';
import products from "../products";

function Product() {

    return (
        <section class="product" id="product">
             {/* sub heading  */}
            <h2>Our creations</h2>

             {/* product grid  */}
            <div class="product-grid">
            {products && products.map((product) => {
                return (
                <ProductCard
                key={product.id}
                mobileImg={product.mobileImg}
                desktopImg={product.desktopImg}
                title={product.title}
                 />
                )
            })}
            </div>

            <a href="#" class="button-primary">see all</a>
        </section>
    )


}

export default Product;