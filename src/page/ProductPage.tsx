import React from 'react'
import { list } from '../api/product'

type Props = {}

const ProductPage = async (props: Props) => {
    const { data } = await list();
    console.log(data);

    return (
        <div>
            {data.map((item, index) => <div></div>)}
        </div>
    )
}

export default ProductPage;