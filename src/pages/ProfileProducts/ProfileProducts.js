import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import Styles from "./ProfileProducts.module.scss";
import { useEffect, useState } from "react";
import PaginationProfile from "~/components/Paging/PaginationProfile";
import api from "~/ultils/Api/api";
import { getCurrentUserId } from "~/services";

function ProfileProducts() {
  const [array, setArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await api.get('/api/Products').then((response) => response.data.filter(item => item.userId === getCurrentUserId()))
      .then((response) => setArray(response))
    }
      fetchData();
  }, []);
  function resetProductList () {
    const fetchData = async () => {
      await api.get('/api/Products').then((response) => response.data.filter(item => item.userId === getCurrentUserId()))
      .then((response) => setArray(response))
    }
      fetchData();
  }
  return (
    <div className={clsx(Styles.container)}>
      {/*  */}
      <div className={clsx(Styles.Shoper_product)}>
        <div className={clsx(Styles.Shoper_product_container)}>
          <div>
            <PaginationProfile items={array} itemsPerPage={15} displayNone={false} resetProductList={resetProductList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileProducts;
