

import clsx from "clsx";
import styles from './HomeLayout.module.scss';
import Footer from "../../Footer/Footer";

function HomeLayout({children}) {
    return ( 
        <div className={clsx(styles.wraper)}>
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.content)}>{children}</div>
            </div>
            <Footer />
        </div>
     );
}

export default HomeLayout;