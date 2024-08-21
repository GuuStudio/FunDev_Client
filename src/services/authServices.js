import { jwtDecode } from "jwt-decode";
import api from "~/ultils/Api/api";

export const login = async (email, password) => {
  const response = await api.post(`/api/Accounts/SignIn`, {
    email,
    password,
  });
  if (response.data) {
    await saveToken(response.data)
  }
  return response.data;
};

export const getCurrentUser = () => {
  const token = localStorage.getItem("authToken");
  if (token) return token;
  return null;
};

export const isTokenValid = () => {
  const user = getCurrentUser();
  if (user) {
    const decodedToken = jwtDecode(user);
    return decodedToken.exp * 1000 > Date.now();
  }
  return false;
};

export const getCurrentUserId = () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    const decodedToken = jwtDecode(token);
    return decodedToken[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ];
  }
  return null;
};
export const saveToken = async (token) => {
  localStorage.setItem("authToken", token);
  const decodedToken = jwtDecode(token);
  const id =
    decodedToken[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ];
  const response = await api.get(`/api/Users/${id}`);
  localStorage.setItem("UserAvatar", response.data.userImageUrl);
  localStorage.setItem("UserFullName", response.data.fullName);
};
