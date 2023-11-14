const getHighlights = async () => {
  return await fetch("http://localhost:3000/getHeadlines", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export default getHighlights;
