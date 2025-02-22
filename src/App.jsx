import { useState } from 'react'
// import './App.css'
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';

function App() {

  const initSate=[
    {_id: 1, boxholder: 'Alex', boxSize: 'Small', }
    
  ]

  const [mailBoxes, setMailBoxes]=useState(initSate);

  function addMailBox(formData){
    formData._id= mailBoxes.length + 1
    setMailBoxes([...mailBoxes,formData])
  }

  return (
    <>

      <NavBar />
      <Routes>
        <Route path={'/'} element={<main><h1>Post Office</h1></main>} />
        <Route path={'/mailboxes'} element={<MailboxList mailBoxes={mailBoxes} />} />
        <Route path={'/mailboxes/:mailboxId'} element={<MailboxDetails mailBoxes={mailBoxes}/>} />
        <Route path={'/new-mailbox'} element={<MailboxForm addMailBox={addMailBox} />} />
      </Routes>
    </>
  )
}

export default App;
