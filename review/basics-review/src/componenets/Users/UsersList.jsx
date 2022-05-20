import { Card } from "../UI/Card";
import classes from "./UsersList.module.css";

export const UsersList = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((e) => {
          return (
            <li>
              {e.name}({e.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
