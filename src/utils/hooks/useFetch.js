import { useEffect, useState } from "react";

// const useFetch = url => {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     let mounted = true;
//     const abortController = new AbortController();
//     (async () => {
//       const res = await fetch(url, {
//         signal: abortController.signal
//       });
//       console.log("res", res);
//       const data = await res.json();
//       console.log("data2", data);
//       if (mounted) setData(data);
//     })();
//     const cleanup = () => {
//       mounted = false;
//       abortController.abort();
//     };
//     return cleanup;
//   }, [url]);
//   console.log("data", data);
//   return data;
// };

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.body;
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [options, url]);
  return { response, error };
};

export default useFetch;
