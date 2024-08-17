

import clsx from "clsx";
import styles from './AccountLayout.module.scss';
import SidebarAccount from "~/components/sidebars/SidebarAccount";


function AccountLayout({children}) {
    return ( 
        <div className={clsx(styles.wraper)}>
            <div className={clsx(styles.container)}>
                <SidebarAccount />
                <div className={clsx(styles.content)}>{children}</div>
            </div>
        </div>
     );
}

export default AccountLayout;