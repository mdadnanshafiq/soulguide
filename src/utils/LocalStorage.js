import { toast } from "react-toastify";

export const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("donation")) || [];
  return data;
};

export const saveLocalStorage = (data) => {
  const savedData = JSON.parse(localStorage.getItem("donation")) || [];
  const exist = savedData.find((item) => item.id == data.id);
  if (!exist) {
    savedData.push(data);
    localStorage.setItem("donation", JSON.stringify(savedData));
    toast.success("Added");
  } else {
    toast.warn("Exist");
  }
};
