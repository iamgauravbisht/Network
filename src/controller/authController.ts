// function getCookie(cookieName: string) {
//   const name = cookieName + "=";
//   const decodedCookie = decodeURIComponent(document.cookie);
//   const cookieArray = decodedCookie.split(";");

//   for (let i = 0; i < cookieArray.length; i++) {
//     let cookie = cookieArray[i];
//     while (cookie.charAt(0) === " ") {
//       cookie = cookie.substring(1);
//     }
//     if (cookie.indexOf(name) === 0) {
//       return cookie.substring(name.length, cookie.length);
//     }
//   }
//   return "";
// }

const signup_post = async (
  username: string,
  email: string,
  password: string
) => {
  return await fetch("http://localhost:3000/signup", {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const verifyAuth = async () => {
  return await fetch(`http://localhost:3000/verifyAuth`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const login_post = async (email: string, password: string) => {
  return await fetch("http://localhost:3000/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const Me = async (userId: string) => {
  return await fetch(`http://localhost:3000/me`, {
    method: "POST",
    body: JSON.stringify({ userId }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const updateBio = async (userId: string, bio: string) => {
  return await fetch(`http://localhost:3000/updateBio`, {
    method: "POST",
    body: JSON.stringify({ bio, userId }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    return res.json();
  });
};

const draft = async (post: string, userId: string) => {
  return await fetch(`http://localhost:3000/draft`, {
    method: "POST",
    body: JSON.stringify({ post, userId }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    return res.json();
  });
};
const getDraft = async (userId: string) => {
  return await fetch(`http://localhost:3000/getDraft`, {
    method: "POST",
    body: JSON.stringify({ userId }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    return res.json();
  });
};
const deleteDraft = async (userId: string, draftId: string) => {
  return await fetch(`http://localhost:3000/deleteDraft`, {
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
  return await fetch(`http://localhost:3000/createPost`, {
    method: "POST",
    body: JSON.stringify({ post, userId, username, _id }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    return res.json();
  });
};
const getPosts = async (start: number, end: number) => {
  return await fetch(`http://localhost:3000/getPosts`, {
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
  draft,
  getDraft,
  deleteDraft,
  createPost,
  getPosts,
};
