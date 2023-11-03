import create from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
import { signup, signin } from "./services/api/users";

const useAuth = create(persist((set) => ({
  user: null,
  token: "",
}), {
  name: "auth-storage",
  storage: createJSONStorage(() => sessionStorage),
}));
export const signout = () => {
  sessionStorage.removeItem("auth-storage")
};
export const signinUser = async (data) => {
    const res = await signin(data.email, data.password)
    useAuth.setState({ user: res.data, token: res.token });
};
export const signupUser = async (data) => {
  await signup(
    data.lastname,
    data.firstname,
    data.name,
    data.email,
    data.password,
    data.isSubscribe
  );
};

export default useAuth;
