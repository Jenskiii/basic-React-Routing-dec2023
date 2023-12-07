import { Link } from "react-router-dom";
import TeamMembers from "./teamMembers.json";

export function TeamNav() {
  return (
    <>
      {/* can use Link or NavLink, navlink auto adds .active class */}
      {/* if you want to disable this when clicked on child use 'end' */}
      <ul>
        {TeamMembers.map((member) => {
          return (
            <li key={member.id}>
              <Link to={member.id}>Team - {member.name}</Link>
            </li>
          );
        })}

        <li >
          <Link to="new">New Team Member</Link>
        </li>

        {/* nexted inside /team so dont need to use /team/joe , /team/sally
        <li>
          <NavLink to="joe" end>
            joe
          </NavLink>
        </li>
        <li>
          <Link to="sally">sally</Link>
        </li> */}

        {/* 
        // goes up one level same as ../ 
        <li>
          <Link to="..">.. Route</Link>
        </li>
        // goes to parent 
        <li>
          <Link to=".." relative="path">.. Path</Link>
        </li>
        // goes to parent 
        <li>
          <Link to=".">. Path</Link>
        </li> */}
      </ul>
    </>
  );
}
