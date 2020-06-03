export const APP_NAME = "todoapp"
export const SERVER_URI =
  process.env.REACT_APP_SERVER_URI || "http://localhost:3001/graphql"
export const JWT_SESSION_STORAGE_KEY = `${APP_NAME}_jwt`
