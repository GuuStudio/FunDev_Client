import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import Styles from "./ProfileInfo.module.scss";
import emptyAvatar from "~/assets/images/uploadImage.png";


import { useContext, useEffect, useState } from "react";
import { TbCameraShare } from "react-icons/tb";
import { apiFormData } from "~/ultils/Api/api";
import { ShowNotificationContext } from "~/components/PublicContext";
import { HiPencilSquare } from "react-icons/hi2";
import UpdateAccountInfo from "~/components/UpdateAccountInfo/UpdateAccountInfo";
import FollowersAccountInfo from "~/components/FollowersAccountInfo/FollowersAccountInfo";
import { getCurrentUserId } from "~/services";

function ProfileInfo() {
  const ShowNotificationTab = useContext(ShowNotificationContext);
  const [previewImage, setPreviewImage] = useState("");
  const [userName, setUserName] = useState("");
  const [changeUserNameState, setChangeUserNameState] = useState(true);

  useEffect(() => {
    const avatar = localStorage.getItem("UserAvatar");
    const name = localStorage.getItem("UserFullName");
    setPreviewImage(avatar);
    setUserName(name);
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("formFile", file);
    if (file != null) {
      try {
        const response = await apiFormData.put("/api/Users/avatar", formData);
        ShowNotificationTab("Success", "Success update avatar");
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
        localStorage.setItem("UserAvatar", response.data);
      } catch {
        ShowNotificationTab("Error", "Error change avatar");
      }
    }
  };
  const changeUserName = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", userName);
    if (userName === localStorage.getItem("UserFullName")) {
      ShowNotificationTab("Info" , "New user name same current user name")
    } else if  (userName != null && userName !== "") {
      try {
        var response = await apiFormData.put(
          "/api/Users/updateUsersName",
          formData
        );
        if (response.status === 200 || response.status === 201) {
          ShowNotificationTab("Success", "Success update user name");
          localStorage.setItem("UserFullName", userName);
          setChangeUserNameState(true);
        }
      } catch (error) {
        if (error.response) {
          // Lỗi từ server với status code
          ShowNotificationTab("Error", error.response.status);
        } else if (error.request) {
          // Yêu cầu được gửi nhưng không nhận được phản hồi
          ShowNotificationTab(
            "Error",
            "Không nhận được phản hồi:" + error.request
          );
        } else {
          // Lỗi khi thiết lập request
          ShowNotificationTab("Error", "Lỗi:" + error.response);
        }
      }
    } else {
      ShowNotificationTab("Info" , "New user name cant null")
    }
  };

  return (
    <div className={clsx(Styles.container)}>
      <div className={clsx(Styles.Shoper_info)}>
        <div className={clsx(Styles.Shoper_info_left)}>
          {/* Avatar */}
          <div className={clsx(Styles.Shoper_info_left_avt)}>
            {previewImage !== "" ? (
              <img width={200} height={200} src={previewImage} alt="avt" />
            ) : (
              <img width={200} height={200} src={emptyAvatar} alt="avt" />
            )}
            <label htmlFor="upload-file">
              <TbCameraShare />
            </label>
            <p></p>
            <input
              id="upload-file"
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              style={{ display: "none" }}
            />
          </div>
          <div className={clsx(Styles.Shoper_info_left_avt_item)}>
            {changeUserNameState ? (
              <div className={clsx(Styles.Shoper_info_left_avt_item_title)}>
                {userName}
                <button onClick={() => setChangeUserNameState(false)}>
                  <HiPencilSquare />
                </button>
              </div>
            ) : (
              <form
                onSubmit={changeUserName}
                className={clsx(Styles.Shoper_info_left_avt_item_title)}
              >
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <button
                  className={clsx(Styles.Shoper_info_left_avt_item_submit)}
                  type="submit"
                >
                  Save
                </button>
                <div
                  onClick={() => setChangeUserNameState(true)}
                  className={clsx(Styles.Shoper_info_left_avt_item_cancel)}
                >
                  Cancel
                </div>
              </form>
            )}
          </div>
        </div>
        <div className={clsx(Styles.Shoper_info_right)}>
            < FollowersAccountInfo userId={getCurrentUserId()}/>
        </div>
      </div>
      < UpdateAccountInfo />
    </div>
  );
}

export default ProfileInfo;
