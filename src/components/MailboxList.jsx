const MailboxList = () => {
  const mailboxes = useMailboxes();
  return (
    <ul>
      {mailboxes.map((mailbox) => (
        <li key={mailbox.id}>{mailbox.name}</li>
      ))}
    </ul>
  );
}

export default MailboxList;