import clsx from "clsx";
import styles from "./Sidebar.module.scss";
import { useEffect, useState } from "react";
import api from "~/ultils/Api/api";

function Sidebar() {
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect (() => {
    api.get("/api/Categories").then((res) => {setCategories(res.data)});
    api.get("/api/Users").then((res) => {setUsers(res.data.slice(0,5))});
  },[])
  return (
    <aside className={clsx(styles.wraper)}>
      <div>
        <h3 className={clsx(styles.category_title)}>
          Category
        </h3>
        <ul className={clsx(styles.list_category)}>
          {categories.map((cate, index) => {
              return(<li key={index} className={clsx(styles.item_category)}>{cate.name}</li>)
          })}
        </ul>
      </div>
      <div>
        <h3 className={clsx(styles.category_title)}>
          Store
        </h3>
        <ul className={clsx(styles.list_category)}>
          {users.map((user, index) => {
            return (<li className={clsx(styles.item_category)} key={index}>{user.fullName}</li>)
          })}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
