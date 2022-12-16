import axios from "axios";
import { useEffect, useState } from "react";

export const useAxiosGet = (url) => {
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setRequest({ loading: true, data: null, error: false });
    async function getRequest() {
      try {
        let res = await axios.get(url);
        setRequest({ loading: false, data: res.data, error: false });
      } catch (error) {
        setRequest({ loading: false, data: null, error: true });
      }
    }

    getRequest();
  }, [url]);

  return request;
};
