
import { useEffect, useState } from 'react';
import Styles from './FollowersAccountInfo.module.scss'
import clsx from "clsx";
import api from '~/ultils/Api/api';

const FollowersAccountInfo = () => {
  const [ followers , setFollowes] =useState([])
  const [ products , setProducts] =useState([])
  const [ following , setFollowing] =useState([])
  const [ createAt , setCreateAt] =useState("")
  useEffect (()=> {
    const id = localStorage.getItem("userId");
    const fetchUser = async () => {
        const response = await api.get(`api/Users/${id}`)
        setFollowes(response.data.followers)
        setProducts(response.data.productModels)
        setFollowing(response.data.following)
        setCreateAt(response.data.createAt.split('T')[0])
     };
     fetchUser()  
  },[])
  return (
    <div className={clsx(Styles.Shoper_info_right_item)}>
      <div className={clsx(Styles.Shoper_info_right_item_value)}>
        <p >{ followers.length ?? 0.0}</p>
        <div>Followers</div>
      </div>
      <div className={clsx(Styles.Shoper_info_right_item_value)}>
        <p >{ following.length ?? 0.0}</p>
        <div>Following</div>
      </div>
      <div className={clsx(Styles.Shoper_info_right_item_value)}>
        <p >{ products.length ?? 0}</p>
        <div>Products in stock</div>
      </div>
      <div className={clsx(Styles.Shoper_info_right_item_value)}>
        <p >{ createAt ?? 0.0}</p>
        <div>Join date</div>
      </div>


    </div>
  );
};
export default FollowersAccountInfo;