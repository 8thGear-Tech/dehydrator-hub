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

const steps = ['Step 1', 'Step 2','Step 3','Step 4','Review & Submit'];

// Example form fields for each step
const StepContent = ({ step, formState, setFormState }) => {
  const handleChange = (event) => {
    const { name, value, type } = event.target;
    if (type === 'text' || type === 'email') {
      if (name === 'phoneNumber' || name === 'price') {
        // Allow changes only if the value is a number
        // For phoneNumber, additionally check if it's less than or equal to 11 characters
        const regex = name === 'phoneNumber' ? /^\d{0,11}$/ : /^\d*$/; // For 'price', allow any length of digits
        if (regex.test(value)) {
          setFormState(prevState => ({
            ...prevState,
            [name]: value,
          }));
        }
      } else {
        // Handle other text and email inputs normally
        setFormState(prevState => ({
          ...prevState,
          [name]: value,
        }));
      }
    }
  };
  
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
        </div>
      </div>
         <Form.Group className='mt-5 mb-4'>
          <Form.Label style={{color:'#575F6E'}}>What produce does your machine process? 
List them here and use a comma (,) to separate them</Form.Label>
          <Form.Control type='text' required placeholder='e.g. grains'style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='produceList' value={formState.produceList} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#242426'}}>Name of Machine</Form.Label>
          <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='machineName' value={formState.machineName} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#242426'}}>Category of processing your machine is capable of</Form.Label>
          <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} placeholder='e.g. milling, packaging, dehydrating' name='processingCategory' value={formState.processingCategory} onChange={handleChange}/>
        
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#242426'}}>Power specifications</Form.Label>
          <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='powerSpecifications' value={formState.powerSpecifications} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#242426'}}>Voltage</Form.Label>
          <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='voltage' value={formState.voltage} onChange={handleChange}/>
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
          <Form.Label style={{color:'#575F6E'}}> Machine Size</Form.Label>
          <Form.Control type='text' style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='machineSize' value={formState.machineSize} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#575F6E'}}>Machine Capacity/Output</Form.Label>
          <Form.Control type='text' style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='machineCapacity' value={formState.machineCapacity} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#575F6E'}}>Working time</Form.Label>
          <Form.Control type='text' style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='workingTime' value={formState.workingTime} onChange={handleChange}/>
        </Form.Group>
         <Form.Group className='mb-4'>
          <Form.Label style={{color:'#575F6E'}}> Tray Size and Quantity (if applicable)</Form.Label>
          <Form.Control type='text' style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='traySize' value={formState.traySize} onChange={handleChange}/>
        </Form.Group>
       
       
        </>

      );
      case 2:
        return (
          <>
          <div className='mb-4'>
          <h2 className=''style={{fontFamily:'Outfit'}}>Machine</h2>
         
        </div>
      
          
          <Form.Group className='mb-4'>
            <Form.Label style={{color:'#242426'}}>Temperature</Form.Label>
            <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='temperature' value={formState.temperature} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label style={{color:'#575F6E'}}>Model</Form.Label>
            <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='model' value={formState.model} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label style={{color:'#575F6E'}}>List other features</Form.Label>
            <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='features' value={formState.features} onChange={handleChange} />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label style={{color:'#242426'}}>Price</Form.Label>
            <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='price' value={formState.price} onChange={handleChange}/>
          </Form.Group>
          </>
  
        );
       
      case 3:
      return (
        <>
        <div className='mb-4'>
        <h2 className=''style={{fontFamily:'Outfit'}}>Personal Details</h2>
       
      </div>
         <Form.Group className='mb-4'>
          <Form.Label style={{color:'#575F6E'}}>Name</Form.Label>
          <Form.Control type='text' style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='name' value={formState.name} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#575F6E'}}>Email address</Form.Label>
          <Form.Control type='email' style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='email' value={formState.email} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#575F6E'}}>Phone Number</Form.Label>
          <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}}  
                 name='phoneNumber' value={formState.phoneNumber} onChange={handleChange} 
          />
        </Form.Group>
        
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#575F6E'}}>Location of Machine</Form.Label>
          <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='location' value={formState.location} onChange={handleChange}/>
        </Form.Group>
        <h6 style={{color:'#575F6E'}}>By clicking submit, you agree to our terms and conditions</h6>
        </>
      );
      case 4:
        return (
          <>
           <div>Review your information</div>
        <p>1. produe list:{formState.produceList}</p>
        <p>2. machineName: {formState.machineName}</p>
        <p>3. processingCategory:{formState.processingCategory}</p>
        <p>4. powerSpecifications:{formState.powerSpecifications}</p>
        <p>5. voltage:{formState.voltage}</p>
        <p>6. machineSize:{formState.machineSize}</p>
        <p>7. machineCapacity:{formState.machineCapacity}</p>
        <p>8. workingTime:{formState.workingTime}</p>
        <p>9. traySize:{formState.traySize}</p>
        <p>10. temperature:{formState.temperature}</p>
        <p>11. model:{formState.model}</p>
        <p>12. features:{formState.features}</p>
        <p>13. price:{formState.price}</p>
        <p>14. name:{formState.name}</p>
        <p>15. phoneNumber:{formState.phoneNumber}</p>
        <p>16. email:{formState.email}</p>
        <p>17. location:{formState.location}</p>
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
    produceList: '',
    machineName: '',
    processingCategory:'',
    powerSpecifications:'',
    voltage:'',
    machineSize:'',
    machineCapacity:'',
    workingTime:'',
    traySize:'',
    temperature:'',
    model:'',
    features:'',
    price:'',
    name:'',
    phoneNumber:'',
    email:'',
    location:'',
  });

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  const handleSubmit =  () => {
    console.log('Submitting:', formState.name, formState.email); // Debug log
  }

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


