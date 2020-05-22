export function getAuthHeader(token?: string): string {
  return token ? `Bearer ${token}` : ""
}
