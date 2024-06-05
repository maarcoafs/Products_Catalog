import { Product } from "./Product";

export function ProductList({data = []}) {
    return (
        <>
            {data.map((product) => (
                <Product 
                    key={product.id} 
                    item={product} 
                />
            ))}
        </>
    );
}