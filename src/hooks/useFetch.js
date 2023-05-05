import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useFetch = (url) => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("user") || false)
  );

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
      localStorage.setItem("user", JSON.stringify(data?.token));
      setLoading(false);
      setData(data)
      console.log("/profile")
      navigate("/profile")
    })
    .catch((error) => {
      setError(error?.message);
    })
  };
  return { loading, error, handleGoogle };
};

export default useFetch;