import Header from "../componentsLayout/Header";

import clsx from "clsx";
import styles from './HomeLayout.module.scss';
import Footer from "../componentsLayout/Footer";

function HomeLayout({children}) {
    return ( 
        <div className={clsx(styles.wraper)}>
            <Header />
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.content)}>{children}</div>
            </div>
            <Footer />
        </div>
     );
}

export default HomeLayout;