import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import Styles from "./Shoper.module.scss";
import { useEffect, useState } from "react";
import Pagination from "~/Services/Pagination";
import img from "~/assets/images/redmi.png";
import { BsShop } from "react-icons/bs";
import { SlPeople } from "react-icons/sl";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

function Shoper() {
  const [array, setArray] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7167/api/Products")
      .then((response) => response.json())
      .then((json) => setArray(json));
  }, []);
  return (
    <div className={clsx(Styles.container)}>
      <div className={clsx(Styles.Shoper_info)}>
        <div className={clsx(Styles.Shoper_info_left)}>
          <div className={clsx(Styles.Shoper_info_left_avt)}>
            <img width={72} height={72} src={img} alt="avt" />
            <div className={clsx(Styles.Shoper_info_left_avt_item)}>
              <div className={clsx(Styles.Shoper_info_left_avt_item_title)}>
                ZANISTO.VB
              </div>
              <div
                className={clsx(Styles.Shoper_info_left_avt_item_description)}
              >
                Online 4 phút trước
              </div>
            </div>
          </div>
          <div className={clsx(Styles.Shoper_info_left_btn)}>
            <div className={clsx(Styles.Shoper_info_left_btn_item)}>Follow</div>
            <div className={clsx(Styles.Shoper_info_left_btn_item)}>Chat</div>
          </div>
        </div>
        <div className={clsx(Styles.Shoper_info_right)}>
          <div className={clsx(Styles.Shoper_info_right_item)}>
            <p><BsShop></BsShop> Sản phẩm: 82</p>
            <p><SlPeople/> Số người theo dõi: 82</p>
            <p><IoChatboxEllipsesOutline /> Tỉ lệ phản hồi: 82</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className={clsx(Styles.Shoper_product)}>
        <div className={clsx(Styles.Shoper_product_container)}>
          <div className={clsx(Styles.Shoper_product_header)}>
            <div className={clsx(Styles.Shoper_product_header_title)}>
              Our Bestsellers
            </div>
            <p className={clsx(Styles.Shoper_product_header_content)}>
              Looking for something specific? Shop by category to find your
              perfect <br /> piece of jewellery!
            </p>
          </div>
          <div>
            <Pagination items={array} itemsPerPage={15} displayNone={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shoper;
