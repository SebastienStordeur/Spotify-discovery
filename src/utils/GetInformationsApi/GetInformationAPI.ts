import axios from "axios";

export const getDataFromAPI = async (url: string, setData: React.SetStateAction<any>, param?: string) => {
  const token = typeof localStorage !== "undefined" ? localStorage.getItem("token") : null;

  await axios
    .get(url, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      if (param) {
        setData((prev: any) => ({ ...prev, [param]: res.data }));
      } else {
        setData(res.data.items);
      }
    })
    .catch((err) => console.error(err));
};
