import api from "./api";

export const loginUser = async (username: string, password: string) => {
  const res = await api.post("/api/login/", {
    username,
    password,
  });

  return res.data;
};