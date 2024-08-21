
import api from "~/ultils/Api/api";


export const fetchProducts = async () => {

    try {
        const res = await api.get('/api/Products') 
        if (res.status === 200 || res.status === 201) {
          return res;
        }
      } catch (error) {
        if (error.response) {
          // Lỗi từ server với status code
          console.log(  error.response.data);
        } else if (error.request) {
          // Yêu cầu được gửi nhưng không nhận được phản hồi
          console.log( "Không nhận được phản hồi:" + error.request);
        } else {
          // Lỗi khi thiết lập request
          console.log( "Lỗi:" + error.response.data);
        }
      }
} 