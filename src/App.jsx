
import { useState } from "react";
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom";

import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetail from './components/MailboxDetails';

import './App.css';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailbox) => {
    newMailbox.id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailbox]);
  };
  return ( 
  <>
    <NavBar />
    <Routes>
      <Route path='/' element={<main><h1>Post Office</h1></main>} />
      <Route path='mailboxes' element={<MailboxList  mailboxes={mailboxes}/>} />
      <Route path='mailboxes/:mailboxId' element={<MailboxDetail />} />
      <Route path='new-mailbox' element={<MailboxForm  addBox={addBox}/>} />
    </Routes>

    </>
  )
};

export default App;