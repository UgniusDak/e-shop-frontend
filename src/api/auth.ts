import axios from "axios";

type loginArguments = {
  email: string;
  password: string;
};

type User = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  postCode: string;
  _id: string;
};

type loginResponse = {
  token: string;
  user: User;
};

const API_HOST = import.meta.env.VITE_API_HOST;

export async function handleLogin({ email, password }: loginArguments) {
  const response = await axios.post<loginResponse>(`${API_HOST}/login`, {
    email,
    password,
  });
  const data = response.data;

  return data;
}
