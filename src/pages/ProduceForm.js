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

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Review & Submit'];

// Example form fields for each step
const StepContent = ({ step, formState, setFormState }) => {
  switch (step) {
    case 0:
      return (
        <>
         <Form.Group className='mb-3'>
          <Form.Label style={{color:'#242426'}}>Produce</Form.Label>
          <Form.Control type='text' value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })} required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}}/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label style={{color:'#242426'}}>Weight</Form.Label>
          <Form.Control type='text' value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })} required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}}/>
           <div className=" d-flex flex-column gap-2 mt-2">
                  <Form.Check
                    variant="primary"
                    label="1-5kg"
                    name="weight"
                    type="radio"
                    value="1-5kg"
                   
                  />
                  <Form.Check
                    variant="primary"
                    label="6-10kg"
                    name=""
                    type="radio"
                    value=""
                   
                  />
                  <Form.Check
                    variant="primary"
                    label="I am not sure"
                    name=""
                    type="radio"
                    value=""
                   
                  />
                  
                   
                  
                  
                </div>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label style={{color:'#242426'}}>Which of our services are you requesting</Form.Label>
        <div className=" d-flex flex-column gap-2">
                  <Form.Check
                    variant="primary"
                    label="Prepping"
                    name="serviceType"
                    type="checkbox"
                    value="prepping"
                   
                  />
                  <Form.Check
                    variant="primary"
                    label="Milling"
                    name="serviceType"
                    type="checkbox"
                    value="milling"
                   
                  />
                  <Form.Check
                    variant="primary"
                    label="Dehydration"
                    name="serviceType"
                    type="checkbox"
                    value="dehydration"
                   
                  />
                  <Form.Check
                    variant="primary"
                    label="Packaging"
                    name="serviceType"
                    type="checkbox"
                    value="packaging"
                   
                  />
                  <Form.Check
                    variant="primary"
                    label="Sales on our ecommerce"
                    name="serviceType"
                    type="checkbox"
                    value="sales"
                   
                  />
                  
                </div>
                </Form.Group>
        </>
       
          
          
         
      );
    case 1:
      return (
        <>
        <Form.Group className='mb-3'>
          <Form.Label style={{color:'#242426'}}>Do you have multiple produce to process</Form.Label>
        <div className=" d-flex flex-column gap-2">
                  <Form.Check
                    variant="primary"
                    label="Yes"
                    name="moreProduce"
                    type="radio"
                    value="yes"
                   
                  />
                  <Form.Check
                    variant="primary"
                    label="No"
                    name="moreProduce"
                    type="radio"
                    value="no"
                   
                  />
                  
                   
                  
                  
                </div>
                </Form.Group>
                <Form.Group className='mb-3'>
          <Form.Label style={{color:'#242426'}}>Produce</Form.Label>
          <Form.Control type='text' value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })} required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}}/>
        </Form.Group>
                </>

      );
      case 2:
      return (
        <TextField
          label="Email"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          fullWidth
        />
      );
      case 3:
      return (
        <TextField
          label="Email"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          fullWidth
        />
      );
      case 4:
      return (
        <TextField
          label="Email"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          fullWidth
        />
      );
      case 5:
        return (
          <TextField
            label="Email"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            fullWidth
          />
        );
    case 6:
      return (
        <div>
          <Typography>Name: {formState.name}</Typography>
          <Typography>Email: {formState.email}</Typography>
        </div>
      );
    default:
      return 'Unknown step';
  }
};

const ProduceForm = () => {
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
    <div style={{width:'22rem'}}>
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
      <div className='mt-5 mb-3'>
        <h2 className='mb-2'style={{fontFamily:'Outfit'}}>Produce</h2>
        <h6 style={{fontFamily:'Outfit', color:'#575F6E'}}  className='mb-4'>Fill this form to help us assist you in your journey.</h6>
        <div className='d-flex gap-3 p-2 align-items-center' style={{backgroundColor:'#F0F2F4'}}>
            <img src={lock} alt='lock'/>
            <p className='my-auto' style={{fontSize:'13px',color:'#242426'}}>We take privacy issues seriously. You can be sure that your personal data is securely protected.</p>
           <CloseButton/>
        </div>
      </div>
      <div className='my-5'>
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

export default ProduceForm;


