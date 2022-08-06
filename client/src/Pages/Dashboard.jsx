import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useUser from "../Hooks/useUser"
export default function Dashboard() {
  const navigate = useNavigate()
  const {user} = useUser()

  useEffect(() => {
    if (!user) 
      navigate('/login')
  })

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="flex ">
        Dashboard for logged in users.
      </div>
      <div>
        You can only be logged in to view this page.
        <span>Congrats, your log in was successful</span>
      </div>
    </div>
  )
}