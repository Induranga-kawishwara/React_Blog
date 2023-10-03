import { useState, useEffect } from "react";

const Usefetch = (url) => {
  const [data, setdatas] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setdatas(data);
        setIsloading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setIsloading(false);
          setError(err.message);
        }
      });
    return () => abortCont.abort();
  }, [url]);
  return { data, isloading, error };
};

export default Usefetch;
