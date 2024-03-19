const search = async (name: string, userId: string) => {
  return await fetch("https://networkserver-3ewc.onrender.com/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, userId }),
  }).then((res) => res.json());
};
const sendFriendRequest = async (userId: string, friendId: string) => {
  return await fetch("https://networkserver-3ewc.onrender.com/sendFriendRequest", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, friendId }),
  }).then((res) => res.json());
};
const friends = async (userId: string) => {
  return await fetch("https://networkserver-3ewc.onrender.com/friends", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  }).then((res) => res.json());
};
const recievedFriendRequests = async (userId: string) => {
  return await fetch("https://networkserver-3ewc.onrender.com/recievedFriendRequests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  }).then((res) => res.json());
};
const sentFriendRequests = async (userId: string) => {
  return await fetch("https://networkserver-3ewc.onrender.com/sentFriendRequests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  }).then((res) => res.json());
};
const acceptFriendRequest = async (userId: string, friendId: string) => {
  return await fetch("https://networkserver-3ewc.onrender.com/acceptFriendRequest", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, friendId }),
  }).then((res) => res.json());
};
const rejectFriendRequest = async (userId: string, friendId: string) => {
  return await fetch("https://networkserver-3ewc.onrender.com/rejectFriendRequest", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, friendId }),
  }).then((res) => res.json());
};
const likePost = async (postId: string, userId: string) => {
  return await fetch("https://networkserver-3ewc.onrender.com/likepost", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId, userId }),
  }).then((res) => res.json());
};
const unlikePost = async (postId: string, userId: string) => {
  return await fetch("https://networkserver-3ewc.onrender.com/unlikepost", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId, userId }),
  }).then((res) => res.json());
};
const postComment = async (
  postId: string,
  userId: string,
  username: string,
  comment: string
) => {
  return await fetch("https://networkserver-3ewc.onrender.com/postcomment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId, comment, userId, username }),
  }).then((res) => res.json());
};
const getComment = async (postId: string) => {
  return await fetch("https://networkserver-3ewc.onrender.com/getcomment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId }),
  }).then((res) => res.json());
};

export {
  search,
  sendFriendRequest,
  friends,
  recievedFriendRequests,
  sentFriendRequests,
  acceptFriendRequest,
  rejectFriendRequest,
  unlikePost,
  likePost,
  postComment,
  getComment,
};
