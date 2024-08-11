import { Link } from "react-router-dom";

const MailboxList = (props) => {
  const mailboxes = useMailboxes();
  return (
    <main>
      <h2>Mailboxes</h2>
      <ul>
        {props.mailboxes.map(mailbox => (
          <li key={mailbox.id}>
            <Link to={`/mailboxes/${mailbox.id}`}>{mailbox.email}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default MailboxList;