import DefaultLayout from "~/components/Layout/DefaultLayout"
import OnlyHeaderLayout from "~/components/Layout/OnlyHeaderLayout"

// page
import Following from "~/pages/Following"
import Home from "~/pages/Home"
import Profile from "~/pages/Profile"
import Upload from "~/pages/Upload"
import Search from "~/pages/Search"

// Public Routes
export const publicRoutes = [
    {path: "/", component: Home, layout: DefaultLayout},
    {path: "/following", component: Following, layout: DefaultLayout},
    {path: "/profile", component: Profile , layout: DefaultLayout},
    {path: "/upload", component: Upload , layout: OnlyHeaderLayout},
    {path: "/search", component: Search , layout: null},
]

// Trường hợp đăng nhập hoặc quản trị viên mới thấy
export const privateRoutes = [

]