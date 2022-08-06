import CLIENT from "../client"

export default function useUser() {
  const DOMAIN = 'http://localhost:5000/api/'

  return {
    grabUser: async () => {
      try {
        const response = await CLIENT.get(DOMAIN + 'session')
        return Boolean(response.data.user)
      } catch (err) {
        return false
      }
    }
  }
}
