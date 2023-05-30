import { useState, useEffect } from "react";

const useFetch = (urlString: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch(urlString);
        const json = await response.json();
        setData(json.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchApiData();
  }, [urlString]);

  return { data, loading, error };
};

export default useFetch;
