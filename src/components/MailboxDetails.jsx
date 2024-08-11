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
            <h2 className='detialsHead'>Mailbox Details</h2>
            <div className='detials'>
            <p> From Email: <span>{singleMail.email}</span></p>
            <p>Subject: {singleMail.subject}</p>
            <p>Message: {singleMail.message}</p>
            </div>
        </>
    );
};

export default MailboxDetails;
