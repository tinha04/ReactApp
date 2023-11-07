import React from 'react';

const productData = [
    {name: 'Product 1', description: 'This is product 1', rating: 4.5},
    {name: 'Product 2', description: 'This is product 1', rating: 5},
    {name: 'Product 3', description: 'This is product 1', rating: 4.5}
]
function ProductCard({name, description, rating})
{
    return (
        <div className='product-card'>
            <h2>{name}</h2>  
            <p>{description}</p> 
            <p>{rating}/5</p>         
        </div>
        );
}

function ProductList()
{
    return (
        <div className='product-list'>
            {
                productData.map((product, index) => (
                    <ProductCard
                        index = {index}
                        name = {product.name}
                        description = {product.description}
                        rating = {product.rating}
                     />
                ))
            }
        </div>
    );
}

export default ProductList;
