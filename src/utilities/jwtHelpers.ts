import { JWT_SESSION_STORAGE_KEY } from "../config"

export function setJwt(jwt: string): void {
  sessionStorage.setItem(JWT_SESSION_STORAGE_KEY, jwt)
}

export function resetJwt(): void {
  setJwt("")
}

export function getJwt(): string | null {
  return sessionStorage.getItem(JWT_SESSION_STORAGE_KEY)
}
