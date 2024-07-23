import React, { useState, useEffect } from "react";
import Styles from "./Pagination.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import img from "~/assets/images/cosmetics.jpg";
import { FaDollarSign } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Pagination = ({ items, itemsPerPage, displayNone }) => {
  const disNone = displayNone;
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedItems, setPaginatedItems] = useState([]);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setPaginatedItems(items.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage, items, itemsPerPage]);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    let pageNumbers = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);

    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={currentPage === i}
          className={clsx({[Styles.active]: currentPage === i})}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };
  const handleNavigation = (id) => {
    // Chuyển đến route mới và truyền giá trị
    navigate(`/productdetail/${id}`);
  };
  return (
    <div>
      <ul className={clsx(Styles.home_product_list)}>
        {paginatedItems.map((item, index) => (
          <li key={index} className={clsx(Styles.home_product_list_item)}>
            <button onClick={() => handleNavigation(item.id)}>
              <div className={clsx(Styles.home_product_list_item_img)}>
                <img width="100%" src={img} alt="Product"></img>
              </div>
              <div className={clsx(Styles.home_product_list_item_info)}>
                <p className={clsx(Styles.home_product_list_item_price)}>
                  <FaDollarSign />
                  {item.price}
                </p>
                <p className={clsx(Styles.home_product_list_item_name)}>
                  {item.productName}
                </p>
                <p className={clsx(Styles.home_product_list_item_quantity)}>
                  {item.quantity} left in stock
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>
      <div className={clsx(Styles.perpages_list , {[Styles.display_none]: disNone})}>
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
