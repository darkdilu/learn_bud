import { useState } from "react";
import axios from "axios";

export function useNetworkRequest() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const sendRequest = async (
    url,
    method,
    content,
    includeCredentials = false
  ) => {
    setLoading(true);
    setError(null);
    const previousWithCredentials = axios.defaults.withCredentials;
    if (includeCredentials) {
      axios.defaults.withCredentials = true;
    }

    try {
      const response = await axios({
        url: url,
        method: method,
        data: content,
        withCredentials: includeCredentials ? true : undefined,
      });

      setData(response.data);
    } catch (err) {
      setData(null);
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
      axios.defaults.withCredentials = previousWithCredentials;
    }
  };

  return { data, error, loading, sendRequest };
}
