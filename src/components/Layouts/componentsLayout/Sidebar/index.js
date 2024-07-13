import clsx from "clsx";
import styles from './Sidebar.module.scss';



function Sidebar() {
    return (  
        <aside className={clsx(styles.wraper)}>
            <h1 className={clsx(styles.category_title)}><b>Category</b></h1>
            <ul className={clsx(styles.list_category)}>
                <li className={clsx(styles.item_category)}>Dày</li>
                <li className={clsx(styles.item_category)}>Túi</li>
                <li className={clsx(styles.item_category)}>Áo</li>
                <li className={clsx(styles.item_category)}>Ví</li>
                <li className={clsx(styles.item_category)}>Váy</li>
                <li className={clsx(styles.item_category)}>Điện thoại</li>
            </ul>
        </aside>
    );
}

export default Sidebar;