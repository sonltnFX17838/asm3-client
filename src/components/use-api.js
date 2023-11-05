import { useEffect, useState } from "react";

// lấy thông tin API
const useAPI = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await fetch(
          "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
        );
        if (!response.ok) {
          throw new Error("Something wrong!!");
        }
        const data = await response.json();
        setData(data);
        setLoading(false);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    }
    fetchAPI();
  }, []);
  return { data, loading, error };
};

export default useAPI;
