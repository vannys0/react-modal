import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Modal from "./Modal.jsx"

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className='app'>
      {open ? <Modal onClose={() => setOpen(false)}/> : 
        <div className='d-flex flex-column align-items-center gap-2'>
          <span>This is a custom modal</span>
          <span>Click "Delete" to open Modal</span>
          <button className='btn btn-danger' onClick={() => setOpen(true)}>Delete</button>
        </div>}
    </div>
  )
}

export default App
