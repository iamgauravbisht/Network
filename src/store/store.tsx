import React, { createContext, useReducer } from "react";

type IState = {
  appState: "auth" | "editor" | "home";
  chatState: "chat" | "chatroom" | "profile" | "friendList" | "nothing";
  homeState: "feed" | "profile" | "settings" | "draft";
  loginEmail: string;
  loginPassword: string;
  signupEmail: string;
  signupPassword: string;
  signupUsername: string;
  signupConfirmPassword: string;
  signupEmailError: string;
  signupPasswordError: string;
  signupConfirmPasswordError: string;
  signupUsernameError: string;
  loginEmailError: string;
  loginPasswordError: string;
  userId: string;
  user: {
    username: string;
    email: string;
  };
  chatDocument: {
    user1: string;
    user2: string;
  };
  chatName: string;
};
const initialState: IState = {
  appState: "auth",
  chatState: "nothing",
  homeState: "feed",
  loginEmail: "",
  loginPassword: "",
  signupEmail: "",
  signupPassword: "",
  signupUsername: "",
  signupConfirmPassword: "",
  signupEmailError: "",
  signupPasswordError: "",
  signupConfirmPasswordError: "",
  signupUsernameError: "",
  loginEmailError: "",
  loginPasswordError: "",
  userId: "",
  user: {
    username: "",
    email: "",
  },
  chatDocument: {
    user1: "",
    user2: "",
  },
  chatName: "",
};

// Define the context type
type MyContextType = {
  state: IState;
  dispatch: React.Dispatch<Action>;
};

export const MyContext = createContext<MyContextType | undefined>(undefined);

type Action =
  | { type: "SET_APPSTATE"; payload: IState["appState"] }
  | { type: "SET_LOGIN_EMAIL"; payload: IState["loginEmail"] }
  | { type: "SET_LOGIN_PASSWORD"; payload: IState["loginPassword"] }
  | { type: "SET_SIGNUP_EMAIL"; payload: IState["signupEmail"] }
  | { type: "SET_SIGNUP_PASSWORD"; payload: IState["signupPassword"] }
  | { type: "SET_SIGNUP_USERNAME"; payload: IState["signupUsername"] }
  | {
      type: "SET_SIGNUP_CONFIRMPASSWORD";
      payload: IState["signupConfirmPassword"];
    }
  | { type: "SET_SIGNUP_EMAIL_ERROR"; payload: IState["signupEmailError"] }
  | {
      type: "SET_SIGNUP_PASSWORD_ERROR";
      payload: IState["signupPasswordError"];
    }
  | {
      type: "SET_SIGNUP_CONFIRMPASSWORD_ERROR";
      payload: IState["signupConfirmPasswordError"];
    }
  | {
      type: "SET_SIGNUP_USERNAME_ERROR";
      payload: IState["signupUsernameError"];
    }
  | { type: "SET_LOGIN_EMAIL_ERROR"; payload: IState["loginEmailError"] }
  | { type: "SET_LOGIN_PASSWORD_ERROR"; payload: IState["loginPasswordError"] }
  | { type: "SET_USER_ID"; payload: IState["userId"] }
  | {
      type: "SET_USER";
      payload: IState["user"];
    }
  | { type: "SET_CHAT_STATE"; payload: IState["chatState"] }
  | { type: "SET_HOME_STATE"; payload: IState["homeState"] }
  | { type: "SET_CHAT_DOCUMENT"; payload: IState["chatDocument"] }
  | { type: "SET_CHAT_NAME"; payload: IState["chatName"] };

function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case "SET_APPSTATE":
      return { ...state, appState: action.payload };
    case "SET_LOGIN_EMAIL":
      return { ...state, loginEmail: action.payload };
    case "SET_LOGIN_PASSWORD":
      return { ...state, loginPassword: action.payload };
    case "SET_SIGNUP_EMAIL":
      return { ...state, signupEmail: action.payload };
    case "SET_SIGNUP_PASSWORD":
      return { ...state, signupPassword: action.payload };
    case "SET_SIGNUP_USERNAME":
      return { ...state, signupUsername: action.payload };
    case "SET_SIGNUP_CONFIRMPASSWORD":
      return { ...state, signupConfirmPassword: action.payload };
    case "SET_SIGNUP_EMAIL_ERROR":
      return { ...state, signupEmailError: action.payload };
    case "SET_SIGNUP_PASSWORD_ERROR":
      return { ...state, signupPasswordError: action.payload };
    case "SET_SIGNUP_CONFIRMPASSWORD_ERROR":
      return { ...state, signupConfirmPasswordError: action.payload };
    case "SET_SIGNUP_USERNAME_ERROR":
      return { ...state, signupUsernameError: action.payload };
    case "SET_LOGIN_EMAIL_ERROR":
      return { ...state, loginEmailError: action.payload };
    case "SET_LOGIN_PASSWORD_ERROR":
      return { ...state, loginPasswordError: action.payload };
    case "SET_USER_ID":
      return { ...state, userId: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_CHAT_STATE":
      return { ...state, chatState: action.payload };
    case "SET_HOME_STATE":
      return { ...state, homeState: action.payload };
    case "SET_CHAT_DOCUMENT":
      return { ...state, chatDocument: action.payload };
    case "SET_CHAT_NAME":
      return { ...state, chatName: action.payload };
    default:
      return state;
  }
}

//Provider
type Props = {
  children: React.ReactNode;
};
export function MyProvider({ children }: Props): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
}
