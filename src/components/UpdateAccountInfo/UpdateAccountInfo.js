import { useContext, useEffect, useState } from "react";

import api, { apiFormData } from "~/ultils/Api/api";
import Styles from "./UpdateAccountInfo.module.scss";
import clsx from "clsx";
import { ShowNotificationContext } from "~/components/PublicContext";
import { getCurrentUserId } from "~/services";

const UpdateAccountInfo = () => {
  const showNotificationTab = useContext(ShowNotificationContext);
  const [addressHome, setAddressHome] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [resetForm, setResetForm] = useState(false);

  useEffect(() => {
    const id = getCurrentUserId();
    api
      .get(`api/Users/${id}`)
      .then((response) => {
        setAddressHome(response.data.addressHome);
        setPhoneNumber(response.data.phoneNumber);
      })
      .catch((error) => console.log("Error" + error.data));
  }, [resetForm]);
  const handleUpdateAccount = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Id", getCurrentUserId());
    formData.append("addressHome", addressHome);
    formData.append("phoneNumber", phoneNumber);
    try {
      const response = await apiFormData.put(
        "/api/Users/UpdateAccount",
        formData
      );
      if (response.status === 200 || response.status === 201) {
        showNotificationTab("Success", response.data);
      } else {
        showNotificationTab(
          "Error",
          `${response.statusText} : ${response.data}`
        );
      }
    } catch {
      showNotificationTab("Error", "Number Phone or Address Home is not valid");
    }
  };
  return (
    <div className={clsx(Styles.wrap)}>
      <form
        onSubmit={handleUpdateAccount}
        className={clsx(Styles.updateAccountInfo_form)}
      >

        <div className={clsx(Styles.updateAccountInfo_form_item)}>
          <h1>Change your info</h1>
        </div>
        <div className={clsx(Styles.updateAccountInfo_form_item)}>
          <label>Address Home</label>
          <input
            value={addressHome}
            onChange={(e) => setAddressHome(e.target.value)}
            required
          />
        </div>
        <div className={clsx(Styles.updateAccountInfo_form_item)}>
          <label>Phone Number</label>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className={clsx(Styles.updateAccountInfo_form_item)}>
          <button type="submit">Save</button>
          <div
            className={clsx(Styles.form_cancel)}
            onClick={() => setResetForm(!resetForm)}
          >
            Cancel
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateAccountInfo;
