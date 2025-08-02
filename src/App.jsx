import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Modal from "./Modal.jsx"

function App() {
  const [open, setOpen] = useState(false)
  const [deleteItem, setDeleteItem] = useState(true)

  const onDelete = () => {
    setOpen(true)
  }

  return (
    <div className='app'>
      {open ? <Modal deleteItem = {() => setDeleteItem(false)} onClose={() => setOpen(false)}/> : 
        <div className='d-flex flex-column align-items-center gap-2'>
          <span>This is a custom modal</span>
          {deleteItem ? <span>Click "Delete" to open Modal</span> : <span>No item found!</span>}
          {deleteItem ? <button className='btn btn-danger gap-2 d-flex' onClick={onDelete}><i className='bi bi-trash'></i>Delete</button> : ""}
        </div>}
    </div>
  )
}

export default App
