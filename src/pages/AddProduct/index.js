import clsx from "clsx";
import Styles from "./AddProduct.module.scss";
import { useEffect, useState } from "react";
import api from "~/Services/Api/api";
import "bootstrap/dist/css/bootstrap.min.css"; // lấy styles của version bootstrap mà bạn install.
import { useNavigate } from 'react-router-dom'; 

function AddProduct() {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [cateId, setCateId] = useState(0);
  const [categories, setCategories] = useState([]);

  const addProduct = async (e) => {
    e.preventDefault();
    setUserId(localStorage.getItem("userId"));
    const productData = {
      id : "0",
      productName,
      description,
      price,
      quantity,
      userId,
      cateId,
    };
    console.log( "Before request : ");
    console.log( productData);
    try {
      // const response = await fetch('https://localhost:7167/api/Products', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${localStorage.getItem("authToken")}`
      //   },
      //   body: JSON.stringify(productData)
      // });
      const response = await api.post("/api/Products", productData )
      console.log("Api:")
      console.log(response.data);
      const id = response.data.id;
      navigate(`/productdetail/${id}`);
      alert("Product đã được thêm:", );
      setProductName("")
      setDescription("")
      setPrice(0)
      setQuantity(0)
      // Xử lý phản hồi ở đây (ví dụ: hiển thị thông báo thành công)
    } catch (error) {
      console.log(error.message)
      alert("Lỗi:", error.message);
      // Xử lý lỗi ở đây (ví dụ: hiển thị thông báo lỗi)
    }
  };
  useEffect(() => {
    api.get("/api/Categories").then((res) => {setCategories(res.data ); });
    api.get("/api/Categories/1").then((res) => {setCateId(res.data.id ); });
  }, []);
  return (
    <div className={clsx(Styles.wrap)}>
      <div className={clsx(Styles.container)}>
        <form onSubmit={addProduct} className={clsx(Styles.container_form)}>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            placeholder="Name"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Description"
          />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            placeholder="Price"
          />
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            placeholder="Quantity"
          />
          
          <label htmlFor="category">Choose a category</label>
          <select name="categorty" id="category" value={cateId} onChange={e => setCateId(e.target.value)}>
            {categories.map((cate, index) => {
              return <option key={index} value={cate.id} >{cate.name}</option>
            })}
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
