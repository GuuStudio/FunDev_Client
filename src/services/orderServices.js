import api from "~/ultils/Api/api";

export const fetchOrders = async () => {
    try {
      const res = await api.get('api/Order/orders') 
      if (res.status === 200 || res.status === 201) {
        return res;
      }
    } catch {
      console.log("error get api orders list")
    }
  }
export const fetchOrdering = async () => {
    try {
      const res = await api.get('api/Order/ordering') 
      if (res.status === 200 || res.status === 201) {
        return res;
      }
    } catch {
      console.log("error get api orders list")
    }
  }