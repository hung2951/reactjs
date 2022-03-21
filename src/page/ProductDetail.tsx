import React from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../api/product';

type Props = {}

const ProductDetail = async (props: Props) => {
    const { id } = useParams();
    const { data } = await get(id);
    console.log(data.name);


    return (
        <div>
            <p>{data.name}</p>
        </div>
    )
}

export default ProductDetail