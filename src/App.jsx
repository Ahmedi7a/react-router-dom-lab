import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';

function App() {
  return(
    <>
    <NavBar />
    <h1>MailBox Dynamic title</h1>
    </>
  )
}

export default App;
