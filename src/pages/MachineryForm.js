import React from 'react';
import {   Stepper, Step, StepLabel,  Typography, TextField, styled } from '@mui/material';
import { Button, CloseButton, Form } from 'react-bootstrap';
import { useTheme } from '@mui/material/styles';
import GuestNavbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';

import lock from '../assets/images/lock.svg'
// Adjusted CustomStepIcon
const CustomStepIcon = styled('div')(({ theme, color }) => ({
  width: 20, // Adjust size if needed
  height: 20, // Adjust size if needed
  borderRadius: '50%',
  backgroundColor: color,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const steps = ['Step 1', 'Step 2','Review & Submit'];

// Example form fields for each step
const StepContent = ({ step, formState, setFormState }) => {
  switch (step) {
    case 0:
      return (
        <>
        <div className='mb-3'>
        <h2 className='mb-2'style={{fontFamily:'Outfit'}}>Machine</h2>
        <h6 style={{fontFamily:'Outfit', color:'#575F6E'}}  className='mb-4'>Fill this form to help us assist you in your journey.</h6>
        <div className='d-flex gap-3 p-2 align-items-center' style={{backgroundColor:'#F0F2F4'}}>
            <img src={lock} alt='lock'/>
            <p className='my-auto' style={{fontSize:'13px',color:'#242426'}}>We take privacy issues seriously. You can be sure that your personal data is securely protected.</p>
           <CloseButton/>
        </div>
      </div>
         <Form.Group className='mt-5 mb-4'>
          <Form.Label style={{color:'#575F6E'}}>Do you have multiple products your machine process? List them here and use a comma (,) to separate them</Form.Label>
          <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}}/>
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#242426'}}>Name of Machine</Form.Label>
          <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}}/>
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#242426'}}>Category</Form.Label>
          <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}}/>
           <div className=" d-flex flex-column gap-2 mt-2">
                  <Form.Check
                    variant="primary"
                    label="Milling"
                    type="radio"
                    
                   
                  />
                  <Form.Check
                    variant="primary"
                    label="Dehydrator"
                    type="radio"
                   
                   
                  />
                  <Form.Check
                    variant="primary"
                    label="Milling"
                    type="radio"
                   
                   
                  />
                  
                   
                  
                  
                </div>
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#242426'}}>Power/IPC</Form.Label>
          <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}}/>
        </Form.Group>
        </>
       
          
          
         
      );
    case 1:
      return (
        <>
        <div className='mb-4'>
        <h2 className=''style={{fontFamily:'Outfit'}}>Machine</h2>
       
      </div>
         <Form.Group className='mb-4'>
          <Form.Label style={{color:'#575F6E'}}>Drying Tray Size</Form.Label>
          <Form.Control type='text' style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}}/>
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#575F6E'}}>Voltage</Form.Label>
          <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}}/>
        </Form.Group>
        
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#575F6E'}}>Price</Form.Label>
          <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} onChange={(event) => {
                  const numericValue = event.target.value.replace(/\D/g, "");
                  
                }}/>
        </Form.Group>
        </>

      );
      case 2:
      return (
        <>
        <div className='mb-4'>
        <h2 className=''style={{fontFamily:'Outfit'}}>Personal Details</h2>
       
      </div>
         <Form.Group className='mb-4'>
          <Form.Label style={{color:'#575F6E'}}>Name</Form.Label>
          <Form.Control type='text' style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}}/>
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#575F6E'}}>Phone Number</Form.Label>
          <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}}  onChange={(event) => {
                  const numericValue = event.target.value.replace(/\D/g, "");
                  
                }}/>
        </Form.Group>
        
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#575F6E'}}>Location of Machine</Form.Label>
          <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} />
        </Form.Group>
        <h6 style={{color:'#575F6E'}}>By clicking submit, you agree to our terms and conditions</h6>
        </>
      );
  
    default:
      return 'Unknown step';
  }
};

const MachineryForm = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [formState, setFormState] = React.useState({
    produceName: '',
    weight: '',
  });

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  const handleSubmit =  () => {
    console.log('Submitting:', formState.name, formState.email); // Debug log
  }
//   const handleSubmit = async () => {
//     console.log('Submitting:', formState.name, formState.email); // Debug log
  
//     const formActionURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScmAbgMXdYTxGlnbEE5OYWdknC0IDg4FNi_NpLdOpkVhB6R7A/formResponse';
//     const nameEntryId = 'entry.233741404';
//     const emailEntryId = 'entry.304421428';
  
//     const formData = new FormData();
//     formData.append(nameEntryId, formState.name);
//     formData.append(emailEntryId, formState.email);
  
//     try {
//       const response = await fetch(formActionURL, {
//         method: 'POST',
//         mode: 'no-cors',
//         body: formData,
//       });
  
//       console.log('Form submitted successfully.');
//     } catch (error) {
//       console.error('Form submission error:', error);
//     }
//   };
 

  return (
    <div><GuestNavbar/>
    <div className='d-flex justify-content-center align-items-center py-5 px-3'>
    <div style={{width:'27rem'}}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={() => (
                <CustomStepIcon
                  color={activeStep >= index ? theme.palette.primary.main : theme.palette.grey[400]}
                />
              )}
            >
              
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      
      <div className='my-5'>
      <div className='my-3'>
        <h6 style={{color:'#575F6E'}}>Vendor&nbsp;<i className='bi bi-chevron-right'></i>&nbsp;Submit Machine</h6>
      </div>
        {/* Render the current step content */}
        <StepContent step={activeStep} formState={formState} setFormState={setFormState} />
      </div>
      <div>
        <Button
          variant="btn-secondary"
          disabled={activeStep === 0}
          onClick={handleBack}
          style={{ marginRight: '8px' }}
        >
          Back
        </Button>
        <Button
          variant="primary"
          color="primary"
          onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
        >
          {activeStep === steps.length - 1 ? 'Submit' : 'Continue'}
        </Button>
      </div>
    </div>
    </div>
   </div>
    
  );
};

export default MachineryForm;


