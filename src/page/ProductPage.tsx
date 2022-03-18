import React from 'react'
import { Link } from 'react-router-dom';
import { ProductType } from '../types/product'

type ProductProps = {
    products: ProductType[];
}

const ProductPage = (props: ProductProps) => {
    return (
        <div>

            <table>
                <tbody>
                    {props.products.map((item, index) => {
                        return <tr>
                            <td>{index + 1}</td>
                            <td><Link to="/product/">{item.name}</Link></td>
                            <td>{item.price}</td>
                            <td><button>Remove</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductPage