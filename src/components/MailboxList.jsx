import { Link } from "react-router-dom";

const MailboxList = (props) => {
  return (
 <>
      <h2>Mailboxes</h2>
      <ul>
        {props.mailboxes.map(currentMailbox => (
          <li key={currentMailbox.id}>
            <Link to={`/mailboxes/${currentMailbox.id}`}>{currentMailbox.email}</Link>
          </li>
        ))}
      </ul>
  </>
  );
}

export default MailboxList;