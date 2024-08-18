import DefaultLayout from "~/components/layouts/DefaultLayout"
import HomeLayout from "~/components/layouts/HomeLayout"
// page
import Home from "~/pages/Home/Home"
import Shop from "~/pages/Shop/Shop"
import ProductDetail from "~/pages/ProductDetail/ProductDetail"

import AddProduct from "~/pages/AddProduct/AddProduct"
import UpdateProduct from "~/pages/UpdateProduct/UpdateProduct"
import AccountLayout from "~/components/layouts/AccountLayout/AccountLayout"
import ProfileProducts from "~/pages/ProfileProducts/ProfileProducts"
import ProfileInfo from "~/pages/ProfileInfo/ProfileInfo"
import Cart from "~/pages/Cart/Cart"
import Orders from "~/pages/order/Orders/Orders"
import Ordering from "~/pages/order/Ordering/Ordering"
import Store from "~/pages/Store/Store"
import Search from "~/pages/Search/Search"




// Public Routes
export const publicRoutes = [
    {path: "/", component: Home, layout: HomeLayout},
    {path: "/store/:id", component: Store, layout: HomeLayout},
    {path: "/addproduct", component: AddProduct, layout: HomeLayout},
    {path: "/updateproduct/:id", component: UpdateProduct, layout: HomeLayout},
    {path: "/shop", component: Shop, layout: DefaultLayout},
    {path: "/search/:name", component: Search, layout: DefaultLayout},
    {path: "/profileInfo", component: ProfileInfo , layout: AccountLayout},
    {path: "/profileProducts", component: ProfileProducts , layout: AccountLayout},
    {path: "/cart", component: Cart , layout: AccountLayout},
    {path: "/orders", component: Orders , layout: AccountLayout},
    {path: "/ordering", component: Ordering, layout: AccountLayout},
    {path: `/productdetail/:id`, component: ProductDetail , layout: HomeLayout},
]

// Trường hợp đăng nhập hoặc quản trị viên mới thấy
export const privateRoutes = [

]