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
export {
  search,
  sendFriendRequest,
  friends,
  recievedFriendRequests,
  sentFriendRequests,
  acceptFriendRequest,
  rejectFriendRequest,
};
