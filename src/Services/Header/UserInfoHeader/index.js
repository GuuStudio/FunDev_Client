import clsx from "clsx";
import Styles from './UserInfoHeader.module.scss'
import { Link } from "react-router-dom";
const UserInfoHeader = ({info , startLoginOrRegister}) => {
    const logOut = () => {
        localStorage.clear();
        startLoginOrRegister("logout");
    }
    return (
        <div className={clsx(Styles.wrap)}>
            <button></button>
            <Link to="/profile" className={clsx(Styles.logo_user)}>{info}</Link>
            <button onClick={logOut}>Log Out</button>
        </div>
    );
}

export default UserInfoHeader;