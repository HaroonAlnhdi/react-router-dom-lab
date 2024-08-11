

const MailboxDetails = () => {
  const { id } = useParams();
  const mailbox = useMailbox(id);

  if (!mailbox) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h2>Mailbox Details</h2>
      <p>Email: {mailbox.email}</p>
      <p>Subject: {mailbox.subject}</p>
      <p>Message: {mailbox.message}</p>
    </main>
  );
}

export default MailboxDetails;