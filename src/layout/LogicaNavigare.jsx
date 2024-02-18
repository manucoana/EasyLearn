import { useState, useEffect } from "react";

const useLogicaNavigare = (userData) => {
  const [activePage, setActivePage] = useState("");
  const [pageHistory, setPageHistory] = useState([]);

  const onClick = (page) => {
    setPageHistory((prevHistory) => [...prevHistory, activePage]);
    setActivePage(page);
  };

  const goBack = () => {
    if (pageHistory.length > 0) {
      const previousPage = pageHistory[pageHistory.length - 1];
      setPageHistory((prevHistory) => prevHistory.slice(0, -1));
      setActivePage(previousPage);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      goBack();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return { activePage, onClick, goBack };
};

export default useLogicaNavigare;