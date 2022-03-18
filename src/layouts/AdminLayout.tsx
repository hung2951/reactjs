import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
    return (
        <div>
            <header>Admin</header>

            <div className="col">
                <div className="col-2">
                    <aside>navbar
                        <div><a href="/admin/product/add">Thêm sản phẩm</a></div>
                    </aside>
                </div>
                <div className="col-10">{<Outlet />}</div>
            </div>
        </div>
    )
}

export default AdminLayout