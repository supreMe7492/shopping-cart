import { useState, useEffect } from "react";
export default function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          mode: "cors",
          signal,
        });

        const recievedData = await response.json();

        setData(recievedData);
      } catch (error) {
        console.error("Failed to fetch products:", error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  return { data, loading };
}
