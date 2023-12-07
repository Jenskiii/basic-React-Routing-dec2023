import { useParams } from "react-router-dom"
import TeamMembers from "../teamMembers.json"

export function TeamMember() {
  // imports member id from routing , must be same name as asigned name in routing
  const { memberId } = useParams()
  const member = TeamMembers.find(m => m.id === memberId)
  return (
    <>

    <h1>Team Member - {member?.name}</h1>
    </>
  )
}
