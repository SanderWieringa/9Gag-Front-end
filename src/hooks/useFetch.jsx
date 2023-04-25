// useFetch.jsx
import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogle = async (response) => {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ credential: response.credential }),
    })
    .then(response => response.json())
    .then(data => {
      setLoading(false);
      setData(data)
    })
    .then(() => {
      console.log("data: ", data)
      console.log("data.givenName: ", data.givenName)
      if (data?.givenName) {
        console.log("data.jwtId: ", data.jwtId)
        localStorage.setItem("user", JSON.stringify(data?.jwtId));
        //window.location.reload();
      }

      throw new Error(data?.message || data);
    })
    .catch((error) => {
      setError(error?.message);
    })
  };
  return { loading, error, handleGoogle };
};

export default useFetch;