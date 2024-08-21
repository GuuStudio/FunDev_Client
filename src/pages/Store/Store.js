import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import Styles from "./Store.module.scss";
import { useContext, useEffect, useState } from "react";
import Pagination from "~/components/Paging/Pagination";
import img from "~/assets/images/redmi.png";

import { useParams } from "react-router-dom";
import api, { apiFormData } from "~/ultils/Api/api";
import FollowersAccountInfo from "~/components/FollowersAccountInfo/FollowersAccountInfo";
import { ShowNotificationContext } from "~/components/PublicContext";

function Store() {
  const ShowNotificationTab = useContext(ShowNotificationContext)
  const {id} = useParams();
  const [array, setArray] = useState([]);
  const [storeInfo, setStoreInfo ] = useState({});
  const [isFollow , setIsFollow] = useState(false)
   useEffect(() => {
      const fetchUser = async () => {
          const response = await api.get(`/api/Users/${id}`)
          if (response.status === 200 ) {
            setStoreInfo(response.data)
          }
       };
       fetchUser()  
    api.get("/api/Products")
    .then(res => res.data) 
    .then(res => setArray(res.filter( p => p.userId === id )))
    const checkFollow = async() => {
      const formdata = new FormData()
      formdata.append('StoreId', id)
      const follow = await apiFormData.post('/api/UserFollows/check', formdata)
      if (follow.status === 200 || follow.status ===201) {
        setIsFollow(follow.data)
      }
    }
    if (localStorage.getItem("authToken") != null) {
      checkFollow()
    }


  }, [id]);
  const handleFollow =  async () => {
    try {
      const formdata = new FormData()
      formdata.append('StoreId', id)
      const result = await apiFormData.post('/api/UserFollows', formdata)
      if (result.status === 200 || result.status ===201) {
        if (result.data) {
          setIsFollow(result.data)
          ShowNotificationTab("Success", "You just followed this store")
        } else {
          setIsFollow(result.data)
          ShowNotificationTab("Info" , "You just unfollowed this store")
        }
      }
    } catch {
      ShowNotificationTab("Error", "Error follow this store")
    }

  }
  return (
    <div className={clsx(Styles.container)}>
      <div className={clsx(Styles.Shoper_info)}>
        <div className={clsx(Styles.Shoper_info_left)}>
          <div className={clsx(Styles.Shoper_info_left_avt)}>
            <img width={180} height={180} src={img} alt="avt" />
            <div className={clsx(Styles.Shoper_info_left_avt_item)}>
              <div className={clsx(Styles.Shoper_info_left_avt_item_title)}>
                {storeInfo.fullName}
              </div>
              <div
                className={clsx(Styles.Shoper_info_left_avt_item_description)}
              >
                Online 4 phút trước
              </div>
            </div>
          </div>
          <div className={clsx(Styles.Shoper_info_left_btn)}>
            {isFollow ? (<div  onClick={handleFollow}  className={clsx(Styles.Shoper_info_left_btn_item , Styles.following)}>Following</div>) :
            (<div  onClick={handleFollow}  className={clsx(Styles.Shoper_info_left_btn_item)}>Follow</div>) }
            <div className={clsx(Styles.Shoper_info_left_btn_item)}>Chat</div>
          </div>
        </div>
        <div className={clsx(Styles.Shoper_info_right)}>
            <FollowersAccountInfo userId={id}/>
        </div>
      </div>
      {/*  */}
      <div className={clsx(Styles.Shoper_product)}>
        <div className={clsx(Styles.Shoper_product_container)}>
          <div className={clsx(Styles.Shoper_product_header)}>
            <div className={clsx(Styles.Shoper_product_header_title)}>
              Products 
            </div>
          </div>
          <div>
            <Pagination items={array} itemsPerPage={15} displayNone={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
