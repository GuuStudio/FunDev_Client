import clsx from "clsx";
import styles from "./Sidebar.module.scss";
import { useEffect, useState } from "react";
import api from "~/Services/Api/api";

function Sidebar() {
  const [categories, setCategories] = useState([]);
  useEffect (() => {
    api.get("/api/Categories").then((res) => {setCategories(res.data)});
  },[])
  return (
    <aside className={clsx(styles.wraper)}>
      <div>
        <h1 className={clsx(styles.category_title)}>
          <b>Category</b>
        </h1>
        <ul className={clsx(styles.list_category)}>
          {categories.map((cate, index) => {
              return(<li key={index} className={clsx(styles.item_category)}>{cate.name}</li>)
          })}
        </ul>
      </div>
      <div>
        <h1 className={clsx(styles.category_title)}>
          <b>Store</b>
        </h1>
        <ul className={clsx(styles.list_category)}>
          <li className={clsx(styles.item_category)}>Người dùng 1</li>
          <li className={clsx(styles.item_category)}>Người dùng 2</li>
          <li className={clsx(styles.item_category)}>Người dùng 3</li>
          <li className={clsx(styles.item_category)}>Người dùng 4</li>
          <li className={clsx(styles.item_category)}>Người dùng 5</li>
          <li className={clsx(styles.item_category)}>Người dùng 6</li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
