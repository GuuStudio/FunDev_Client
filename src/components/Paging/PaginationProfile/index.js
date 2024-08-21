import React, { useState, useEffect } from "react";
import Styles from "./PaginationProfile.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import { FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import NoProduct from "~/components/product/NoProduct";
import DropdownItemProduct from "../DropdownItemProduct";
import SelectProduct from "~/components/product/SelectProduct";


const PaginationProfile = ({ items, itemsPerPage, displayNone, resetProductList }) => {
  const [products, setProducts] = useState([])
  const disNone = displayNone;
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedItems, setPaginatedItems] = useState([]);

  useEffect(() => {
    if (items) {
      setProducts(items)
    }
  }, [items])
  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setPaginatedItems(products.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage, products, itemsPerPage]);

  const totalPages = Math.ceil(products.length / itemsPerPage);

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
          className={clsx({ [Styles.active]: currentPage === i })}
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
  function selectProduct(id) {
    setProducts(items);
    if ( id > 0) {
      var newProducts = items.filter(p => p.cateId === id)
      setProducts(newProducts)
    }
  }
  return (
    <div>
      <div className={clsx(Styles.pagination_header)}>
        <SelectProduct setProduct={selectProduct} />
        <button>
          <Link to="/addproduct">Add new product</Link>
        </button>
      </div>
      {products.length < 1 ? (
        <NoProduct />
      ) : (
        <ul className={clsx(Styles.home_product_list)}>
          {paginatedItems.map((item, index) => (
            <li key={index} className={clsx(Styles.home_product_list_item)}>
              <button onClick={() => handleNavigation(item.id)}>
                {/* img */}
                <div className={clsx(Styles.home_product_list_item_img)}>
                  <img width="100%" src={item.imageUrl} alt="Product"></img>
                </div>
                {/* info */}
                <div className={clsx(Styles.home_product_list_item_info)}>
                  <p className={clsx(Styles.home_product_list_item_price)}>
                    <FaDollarSign />
                    {item.price}
                  </p>
                  <p className={clsx(Styles.home_product_list_item_name)}>
                    {item.productName}
                  </p>
                  <p className={clsx(Styles.home_product_list_item_name)}>
                    {item.cateId}
                  </p>
                  <p
                    className={clsx(Styles.home_product_list_item_description)}
                  >
                    {item.description}
                  </p>
                  <p className={clsx(Styles.home_product_list_item_quantity)}>
                    {item.quantity} left in stock
                  </p>
                </div>
              </button>
              {/* Button */}
              <DropdownItemProduct item={item} resetProductList={resetProductList}/>
            </li>
          ))}
        </ul>
      )}
      <div
        className={clsx(Styles.perpages_list, {
          [Styles.display_none]: disNone,
        })}
      >
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

export default PaginationProfile;
