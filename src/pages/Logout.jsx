import { redirect } from "react-router-dom";
export const action = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("image");
  return redirect("/");
};