import { useEffect, useState } from "react";

function useCurrencyInformation(currency) {
  const newapi = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
  // const api = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(newapi)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  return data;
}

export default useCurrencyInformation;
