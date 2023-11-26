const getHighlights = async () => {
  return await fetch(
    "https://network-server-97072ea56d38.herokuapp.com/getHeadlines",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  ).then((res) => res.json());
};

export default getHighlights;
