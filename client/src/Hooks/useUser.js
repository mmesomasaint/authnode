import { CLIENT } from "./useForm"

export default async function useUser() {
  const DOMAIN = 'http://localhost:5000/api/'
  const grabUser = async () => {
    try {
      const response = await CLIENT.get(DOMAIN + 'session')
      if (response.data.user) return response.data.user
    } catch (err) {
      console.log(err)
    }
  }
  return {
    user: await grabUser()
  }
}
