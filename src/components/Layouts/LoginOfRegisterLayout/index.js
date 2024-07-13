import clsx  from "clsx";
import Styles from './LoginResisterLayout.module.scss';

function LoginOfRegisterLayout({children}) {
    return ( 
        <div>
            <div className={clsx(Styles.container)}>
                <div className={clsx(Styles.content)}>{children}</div>
            </div>
        </div>
     );
}

export default LoginOfRegisterLayout;