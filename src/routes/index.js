import DefaultLayout from "~/components/Layouts/DefaultLayout"
import OnlyHeaderLayout from "~/components/Layouts/OnlyHeaderLayout"
import HomeLayout from "~/components/Layouts/HomeLayout"
// page
import Home from "~/pages/Home"
import Profile from "~/pages/Profile"
import Upload from "~/pages/Upload"
import Search from "~/pages/Search"
import Shop from "~/pages/Shop"
import ProductDetail from "~/pages/ProductDetail"
import Shoper from "~/pages/Shoper"
import AddProduct from "~/pages/AddProduct"


// Public Routes
export const publicRoutes = [
    {path: "/", component: Home, layout: HomeLayout},
    {path: "/shoper", component: Shoper, layout: HomeLayout},
    {path: "/addproduct", component: AddProduct, layout: HomeLayout},
    {path: "/shop", component: Shop, layout: DefaultLayout},
    {path: "/profile", component: Profile , layout: HomeLayout},
    {path: "/upload", component: Upload , layout: OnlyHeaderLayout},
    {path: "/search", component: Search , layout: null},
    {path: `/productdetail/:id`, component: ProductDetail , layout: HomeLayout},
]

// Trường hợp đăng nhập hoặc quản trị viên mới thấy
export const privateRoutes = [

]