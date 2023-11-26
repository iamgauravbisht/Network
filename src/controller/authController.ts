

const signup_post = async (
  username: string,
  email: string,
  password: string
) => {
  return await fetch("https://network-server-97072ea56d38.herokuapp.com/signup", {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const verifyAuth = async () => {
  return await fetch(`https://network-server-97072ea56d38.herokuapp.com/verifyAuth`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const login_post = async (email: string, password: string) => {
  return await fetch("https://network-server-97072ea56d38.herokuapp.com/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const Me = async (userId: string) => {
  return await fetch(`https://network-server-97072ea56d38.herokuapp.com/me`, {
    method: "POST",
    body: JSON.stringify({ userId }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const updateBio = async (userId: string, bio: string) => {
  return await fetch(`https://network-server-97072ea56d38.herokuapp.com/updateBio`, {
    method: "POST",
    body: JSON.stringify({ bio, userId }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    return res.json();
  });
};

const getBio = async (userId: string) => {
  return await fetch(`https://network-server-97072ea56d38.herokuapp.com/Bio`, {
    method: "POST",
    body: JSON.stringify({ userId }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    return res.json();
  });
};

const draft = async (post: string, userId: string) => {
  return await fetch(`https://network-server-97072ea56d38.herokuapp.com/draft`, {
    method: "POST",
    body: JSON.stringify({ post, userId }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    return res.json();
  });
};
const getDraft = async (userId: string) => {
  return await fetch(`https://network-server-97072ea56d38.herokuapp.com/getDraft`, {
    method: "POST",
    body: JSON.stringify({ userId }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    return res.json();
  });
};
const deleteDraft = async (userId: string, draftId: string) => {
  return await fetch(`https://network-server-97072ea56d38.herokuapp.com/deleteDraft`, {
    method: "POST",
    body: JSON.stringify({ userId, draftId }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    return res.json();
  });
};

const createPost = async (
  post: string,
  userId: string,
  username: string,
  _id: string
) => {
  return await fetch(`https://network-server-97072ea56d38.herokuapp.com/createPost`, {
    method: "POST",
    body: JSON.stringify({ post, userId, username, _id }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    return res.json();
  });
};
const getPosts = async (start: number, end: number) => {
  return await fetch(`https://network-server-97072ea56d38.herokuapp.com/getPosts`, {
    method: "POST",
    body: JSON.stringify({ start, end }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    return res.json();
  });
};

export {
  signup_post,
  login_post,
  Me,
  verifyAuth,
  updateBio,
  getBio,
  draft,
  getDraft,
  deleteDraft,
  createPost,
  getPosts,
};
