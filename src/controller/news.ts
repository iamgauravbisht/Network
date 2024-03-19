const getHighlights = async () => {
  return await fetch(
    "https://networkserver-3ewc.onrender.com/getHeadlines",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  ).then((res) => res.json());
};

export default getHighlights;
