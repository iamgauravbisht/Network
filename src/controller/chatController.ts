const search = async (name: string, userId: string) => {
  return await fetch("http://localhost:3000/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, userId }),
  }).then((res) => res.json());
};
const sendFriendRequest = async (userId: string, friendId: string) => {
  return await fetch("http://localhost:3000/sendFriendRequest", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, friendId }),
  }).then((res) => res.json());
};
const friends = async (userId: string) => {
  return await fetch("http://localhost:3000/friends", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  }).then((res) => res.json());
};
const recievedFriendRequests = async (userId: string) => {
  return await fetch("http://localhost:3000/recievedFriendRequests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  }).then((res) => res.json());
};
const sentFriendRequests = async (userId: string) => {
  return await fetch("http://localhost:3000/sentFriendRequests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  }).then((res) => res.json());
};
const acceptFriendRequest = async (userId: string, friendId: string) => {
  return await fetch("http://localhost:3000/acceptFriendRequest", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, friendId }),
  }).then((res) => res.json());
};
const rejectFriendRequest = async (userId: string, friendId: string) => {
  return await fetch("http://localhost:3000/rejectFriendRequest", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, friendId }),
  }).then((res) => res.json());
};
const likePost = async (postId: string, userId: string) => {
  return await fetch("http://localhost:3000/likepost", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId, userId }),
  }).then((res) => res.json());
};
const unlikePost = async (postId: string, userId: string) => {
  return await fetch("http://localhost:3000/unlikepost", {
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
  return await fetch("http://localhost:3000/postcomment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId, comment, userId, username }),
  }).then((res) => res.json());
};
const getComment = async (postId: string) => {
  return await fetch("http://localhost:3000/getcomment", {
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
