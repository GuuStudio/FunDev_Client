import React, { useState, useRef, useEffect, useContext } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import clsx from "clsx";
import Styles from "./DropdownItemProduct.module.scss";
import { apiFormData } from "~/ultils/Api/api";
import { useNavigate } from "react-router-dom";
import { ShowNotificationContext } from "~/services/PublicContext";

function DropdownItemProduct({ item , resetProductList }) {
  const ShowNotificateTab = useContext(ShowNotificationContext)
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleUpdate = (id) => {
    navigate(`/updateproduct/${id}`)
  }
  const handleDelete = async (item) => {
    const id = item.id
    const response = await  apiFormData.delete(`/api/Products/${id}`);
    if (response.status === 200 || response.status === 201) {
      ShowNotificateTab("Success", "Success delete product")
      resetProductList();
    } else {
      ShowNotificateTab("Warning", "Fail delete product")
    }
  }
  return (
    <div className={clsx(Styles.item_dropdown)} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        <BsThreeDotsVertical />
      </div>
      {isOpen && (
        <div className={clsx(Styles.item_dropdown_content)}>
          <button onClick={() => handleUpdate(item.id)}>
            <nav className={clsx(Styles.item_dropdown_content_btn_1)}>
              Update
            </nav>
          </button>
          <button onClick={() => handleDelete(item)}>
            <nav className={clsx(Styles.item_dropdown_content_btn_2)}>
              Delete
            </nav>
          </button>
        </div>
      )}
    </div>
  );
}

export default DropdownItemProduct;
