import CLIENT from '../client'

export default function useSession() {
  return {
    getUser: async () => {
      try {
        const response = await CLIENT.get('session')
        return response.data.user
      } catch (err) {
        return false
      }
    },
    deleteUser: async () => {
      try {
        const response = await CLIENT.delete('session')
        return response.data.user
      } catch (err) {
        return false
      }
    },
  }
}
