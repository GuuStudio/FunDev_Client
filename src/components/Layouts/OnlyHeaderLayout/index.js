import clsx from "clsx";
import Header from "../componentsLayout/Header";
import Styles from './OnlyHeaderLayout.module.scss';
function OnlyHeaderLayout({children}) {
    return ( 
        <div>
            <Header />
            <div className={clsx(Styles.container)}>
                <div className={clsx(Styles.content)}>{children}</div>
            </div>
        </div>
     );
}

export default OnlyHeaderLayout;