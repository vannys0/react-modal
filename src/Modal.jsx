import React from 'react'

function Modal({onClose, deleteItem}) {
    const handleDelete = (e) => {
        alert("Item deleted successfully!")
        onClose(false)
        deleteItem(false)
    }

  return (
    <div className='w-100 h-100 d-flex align-items-center justify-content-center'>
        <div className='container p-3 d-flex justify-content-center align-items-center flex-column' onClick={(e) => e.stopPropagation()}>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <h1><i className="bi bi-trash text-danger"></i></h1>
                <h2>Delete</h2>
            </div>
            <div>
                <p>Are you sure you want to delete this?</p>
            </div>
            <div className='w-100 gap-2 d-flex align-items-end justify-content-end'>
                <button onClick={() => onClose(false)} className='btn btn-secondary'>Cancel</button>
                <button onClick={handleDelete} className='btn btn-danger'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Modal