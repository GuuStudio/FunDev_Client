import clsx from "clsx";
import Styles from "./SelectProduct.module.scss";
import { useEffect, useState } from "react";
import api from "~/ultils/Api/api";

function SelectProduct({setProduct}) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    api.get("/api/Categories").then((res) => {
      setCategories(res.data);
    });
  }, []);
  const handleSelect = (id) => {
    let numId = Number(id)
    setProduct(numId);
  }
  return (
    <select
      className={clsx(Styles.category_container)}
      onChange={(e) => handleSelect(e.target.value)}
    >
      <option value={0}>All</option>
      {categories.map((item) => {
        return (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
}
export default SelectProduct;
