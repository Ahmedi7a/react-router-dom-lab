import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';

function App() {
  return (
    <>

      <NavBar />
      <Routes>
        <Route path={'/'} element={<main><h1>Post Office</h1></main>} />
        <Route path={'/mailboxes'} element={<MailboxList />} />
        <Route path={'/new-mailbox'} element={<MailboxForm />} />
      </Routes>
    </>
  )
}

export default App;
