
import React from 'react';

const initialState = {
  email: '',
  subject: '',
  message: '',
}
const MailboxForm = (props) => {

  const navigate = useNavigate();  
  const [formData, setFormData] = useState(initialState);

  const hadleSubmit = (e) => {
    e.preventDefault();
    props.addBox(formData);
    setFormData(initialState);
    navigate('/mailboxes');
  }

  const handleChange = ({target}) => {
    setFormData({...formData, [target.name]: target.value});
  }
  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={hadleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Create</button>
      </form>

    </main>
  );
}

export default MailboxForm;