import DefaultLayout from "~/components/Layouts/DefaultLayout"
import OnlyHeaderLayout from "~/components/Layouts/OnlyHeaderLayout"
import LoginOfRegisterLayout from "~/components/Layouts/LoginOfRegisterLayout"
import HomeLayout from "~/components/Layouts/HomeLayout"
// page
import Home from "~/pages/Home"
import Profile from "~/pages/Profile"
import Upload from "~/pages/Upload"
import Search from "~/pages/Search"
import Login from "~/pages/Login"
import Register from "~/pages/Register"
import Shop from "~/pages/Shop"


// Public Routes
export const publicRoutes = [
    {path: "/", component: Home, layout: HomeLayout},
    {path: "/shop", component: Shop, layout: DefaultLayout},
    {path: "/profile", component: Profile , layout: DefaultLayout},
    {path: "/upload", component: Upload , layout: OnlyHeaderLayout},
    {path: "/search", component: Search , layout: null},
    {path: "/login", component: Login , layout: LoginOfRegisterLayout},
    {path: "/register", component: Register , layout: LoginOfRegisterLayout},
]

// Trường hợp đăng nhập hoặc quản trị viên mới thấy
export const privateRoutes = [

]