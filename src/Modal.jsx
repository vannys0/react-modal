import React from 'react'

function Modal({onClose}) {
  return (
    <div className='w-100 d-flex'>
        <div className='container p-3 d-flex justify-content-center align-items-center flex-column'>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <h1><i className="bi bi-trash text-danger"></i></h1>
                <h1>Delete</h1>
            </div>
            <div>
                <p>Are you sure you want to delete this?</p>
            </div>
            <div className='w-100 gap-2 d-flex align-items-end justify-content-end'>
                <button onClick={() => onClose(false)} className='btn btn-secondary'>Cancel</button>
                <button className='btn btn-danger'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Modal