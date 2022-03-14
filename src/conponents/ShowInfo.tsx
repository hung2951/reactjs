import React from "react";
import { Product } from "../types/product";
type ShowInfo = {
    person: Product
}
const ShowInfo = (props: ShowInfo) => {
    console.log(props);

    return <div >
        ShowInfo
        <h2>Tên: {props.person.name}</h2>
        <h2>Tủi: {props.person.age}</h2>
    </div>
}

export default ShowInfo;