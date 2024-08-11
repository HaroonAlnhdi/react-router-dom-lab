import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const singleMail = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId));

    // if (!singleMail) {
    //      return <div>Mailbox not found or still loading...</div>;
    // }

    return (
        <>
            <h2>Mailbox Details</h2>
            <p>Email: {singleMail.email}</p>
            <p>Subject: {singleMail.subject}</p>
            <p>Message: {singleMail.message}</p>
        </>
    );
};

export default MailboxDetails;
