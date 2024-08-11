
import { useState } from "react";
import NavBar from './components/NavBar';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetail from './components/MailboxDetails';

import './App.css';

// const initialState = {
//   email: '',
//   subject: '',
//   message: '',
// }

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailbox]);
  };
  return ( 
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<main><h1>Post Office</h1></main>} />
      <Route path='mailboxes' element={<MailboxList  mailboxes={mailboxes}/>} />
      <Route path='mailboxes/:mailboxId' element={<MailboxDetail mailboxes={mailboxes} />} />
      <Route path='mailboxes/new' element={<MailboxForm  addBox={addBox}/>} />
    </Routes>
    </>
  )
};

export default App;