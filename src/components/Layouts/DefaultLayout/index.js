

import clsx from "clsx";
import styles from './DefaultLayout.module.scss';
import Footer from "../../Footer/Footer";
import Sidebar from "~/components/sidebars/Sidebar";

function DefaultLayout({children}) {
    return ( 
        <div className={clsx(styles.wraper)}>
            <div className={clsx(styles.container)}>
                <Sidebar />
                <div className={clsx(styles.content)}>{children}</div>
            </div>
            <Footer />
        </div>
     );
}

export default DefaultLayout;