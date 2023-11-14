const search = async (name: string) => {
  return fetch("http://localhost:3000/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  }).then((res) => res.json());
};

export { search };
