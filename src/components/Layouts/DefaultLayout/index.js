import Header from "../componentsLayout/Header";
import Sidebar from "../componentsLayout/Sidebar";
import clsx from "clsx";
import styles from './DefaultLayout.module.scss';
import Footer from "../componentsLayout/Footer";

function DefaultLayout({children}) {
    return ( 
        <div className={clsx(styles.wraper)}>
            <Header />
            <div className={clsx(styles.container)}>
                <Sidebar />
                <div className={clsx(styles.content)}>{children}</div>
            </div>
            <Footer />
        </div>
     );
}

export default DefaultLayout;