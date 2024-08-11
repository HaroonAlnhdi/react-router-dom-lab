const MailboxDetails = () => {
  const { id } = useParams();
  const mailbox = useMailbox(id);

  if (!mailbox) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{mailbox.name}</h1>
      <p>{mailbox.description}</p>
    </div>
  );
}

export default MailboxDetails;