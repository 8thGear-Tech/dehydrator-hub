import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import check from '../../assets/images/successful-icon.svg'
import error from '../../assets/images/icon-error.png'


export const SuccessfulModal = ({ showModal, closeModal, modalText,isSuccess}) => {

const navigate=useNavigate();
  return (
    <div>
    <div
      className={`modal fade px-3 ${showModal ? 'show' : ''}`}
      style={{ display: showModal ? 'block' : 'none'}}
      tabIndex='-1'
      role='dialog'
      onHide={closeModal}
    >
     
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content p-sm-5 p-3' style={{backgroundColor:''}}>
          
          <div className='modal-body text-center'>
           
              <div className='' role='alert'>
              <img src={isSuccess ? check : error} alt='check' style={{ width: '50px' }} />
                <h4 className='mt-4'style={{ fontWeight: '700' }}>{modalText}</h4>
               
                
               
              </div>
           
          </div>
        </div>
      </div>
    </div>
     <div
     className={`modal-backdrop fade ${showModal ? 'show' : ''}`}
     style={{ display: showModal ? 'block' : 'none' }}
   ></div>
   </div>
  );
};
export default SuccessfulModal
