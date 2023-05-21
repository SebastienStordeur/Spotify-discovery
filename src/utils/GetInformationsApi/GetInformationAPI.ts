import axios from "axios";

const token = localStorage.getItem("token");

export const getDataFromAPI = async (url: string, setData: React.SetStateAction<any>, param?: string) => {
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
