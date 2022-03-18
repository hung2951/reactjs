import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type Inputs = {// kiểu dữ liệu của thẻ input
    name: string,
    price: number,
    img: string,
    category: string,
    desc: string

};

type ProductAddProps = {

    onAdd: (product: Inputs) => void
}

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        // console.log(dataInput); // 
        props.onAdd(dataInput)
        // chuyển trang
        navigate("/product")
    }
    //register: lấy dữ liệu từ thẻ input
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('name')} placeholder='Tên sản phẩm' />
                <input type="text"{...register('price')} placeholder='Giá sản phẩm' />
                <input type="text"{...register('img')} placeholder='Ảnh sản phẩm' />
                <input type="text"{...register('category')} placeholder='Danh mục sản phẩm' />
                <input type="text"{...register('desc')} placeholder='mô tả sản phẩm' />
                <button>Thêm</button>
            </form>
        </div>
    )
}

export default ProductAdd