import clsx from "clsx";
import Styles from "./UpdateProduct.module.scss";
import { useEffect, useState } from "react";
import api, { apiFormData } from "~/ultils/Api/api";
import "bootstrap/dist/css/bootstrap.min.css"; // lấy styles của version bootstrap mà bạn install.
import { useNavigate, useParams } from "react-router-dom";
import uploadImage from "~/assets/images/uploadImage.png";
import { getCurrentUserId } from "~/services";

function UpdateProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [userId, setUserId] = useState(getCurrentUserId());
  const [cateId, setCateId] = useState(0);
  const [categories, setCategories] = useState([]);
  const [fileImage, setFileImage] = useState(undefined);
  const [previewImage, setPreviewImage] = useState(uploadImage);

  const addProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    setUserId(getCurrentUserId());
    const productData = {
      id,
      productName,
      description,
      price,
      quantity,
      fileImage,
      userId,
      cateId,
    };
    Object.keys(productData).forEach((key) => {
      formData.append(key, productData[key]);
    });
    formData.forEach((value, key) => {
      console.log(key, value);
    });
    try {
      await apiFormData.put(`/api/Products/${id}`, formData);

      alert("Product đã được cập nhật:");
      navigate(`/productdetail/${id}`);
      // Xử lý phản hồi ở đây (ví dụ: hiển thị thông báo thành công)
    } catch (error) {
      console.log(error);
      alert("Lỗi:", error.message);
      // Xử lý lỗi ở đây (ví dụ: hiển thị thông báo lỗi)
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileImage(file);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };
  useEffect(() => {
    api.get("/api/Categories").then((res) => {
      setCategories(res.data);
    });
    api.get(`/api/Products/${id}`)
        .then(res => res.data)
        .then(res => {  
          setFileImage(res.imageUrl);
          setPreviewImage(res.imageUrl);
          setProductName(res.productName);
          setDescription(res.description)
          setPrice(res.price);
          setQuantity(res.quantity);
          setCateId(res.cateId);
        })
  }, [id]);
  return (
    <div className={clsx(Styles.wrap)}>
      <div className={clsx(Styles.container)}>
        <form onSubmit={addProduct} className={clsx(Styles.container_form)}>
          <div className={clsx(Styles.Img_form)}>
            <div className={clsx(Styles.form_preview)}>
              <img src={previewImage} alt="Preview" />
            </div>
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              required
            />
          </div>
          <div className={clsx(Styles.text_form)}>
            <label htmlFor="productName">Name:</label>
            <input
              id="productName"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
              placeholder="Name"
            />
            <label htmlFor="Description">Description:</label>
            <textarea
              id="Description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Description"
            />
            <label htmlFor="Price">Price:</label>
            <input
              id="Price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              placeholder="Price"
            />
            <label htmlFor="Quantity">Quantity:</label>
            <input
              id="Quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
              placeholder="Quantity"
            />

            <label htmlFor="category">Choose a category:</label>
            <select
              name="categorty"
              id="category"
              value={cateId}
              onChange={(e) => setCateId(e.target.value)}
            >
              {categories.map((cate, index) => {
                return (
                  <option key={index} value={cate.id}>
                    {cate.name}
                  </option>
                );
              })}
            </select>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
