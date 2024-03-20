import React, {useState} from 'react';
import {   Stepper, Step, StepLabel,  Typography, TextField, styled } from '@mui/material';
import { Button, CloseButton, Form } from 'react-bootstrap';
import { useTheme } from '@mui/material/styles';
import GuestNavbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';

import lock from '../assets/images/lock.svg'
import SuccessfulModal from '../components/Cards/Cards';
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

const steps = ['Step 1', 'Step 2','Step 3','Step 4'];

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
List them here and use a comma (,) to separate them <sup className='text-danger'>*</sup></Form.Label>
          <Form.Control type='text' required placeholder='e.g. grains'style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='produceList' value={formState.produceList} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#242426'}}>Name of Machine <sup className='text-danger'>*</sup></Form.Label>
          <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='machineName' value={formState.machineName} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#242426'}}>What category of processing your machine is capable of? <sup className='text-danger'>*</sup> </Form.Label>
          <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} placeholder='e.g. milling, packaging, dehydrating' name='processingCategory' value={formState.processingCategory} onChange={handleChange}/>
        
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#242426'}}>Power specifications </Form.Label>
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
            <Form.Label style={{color:'#242426'}}>Price <sup className='text-danger'>*</sup></Form.Label>
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
          <Form.Label style={{color:'#575F6E'}}>Name <sup className='text-danger'>*</sup></Form.Label>
          <Form.Control type='text' style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='name' value={formState.name} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#575F6E'}}>Email address <sup className='text-danger'>*</sup></Form.Label>
          <Form.Control type='email' style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='email' value={formState.email} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#575F6E'}}>Phone Number <sup className='text-danger'>*</sup></Form.Label>
          <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}}  
                 name='phoneNumber' value={formState.phoneNumber} onChange={handleChange} 
          />
        </Form.Group>
        
        <Form.Group className='mb-4'>
          <Form.Label style={{color:'#575F6E'}}>Location of Machine <sup className='text-danger'>*</sup></Form.Label>
          <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='location' value={formState.location} onChange={handleChange}/>
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
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
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

  const handleSubmit = async () => {
    // Base URL for your Google Form submission endpoint
  
    const formActionURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSek-VrZWC4vv1S6Wvr9rJcKuu3w8wxm06o_29O_nXnRTukzbQ/formResponse';
    
      const nameID= "entry.779608215";
      const emailID= "entry.1963235232";
      const phoneNumberID= "entry.424179971";
      const locationID= "entry.1399496027";
      const priceID= "entry.183339369";
      const featuresID= "entry.1985969060";
      const modelID= "entry.290116003";
      
      const temperatureID= "entry.945709986";
      const traySizeID= "entry.19213939";
      const workingTimeID="entry.204124882";
      const machineCapacityID= "entry.1847563438";
      const machineSizeID= "entry.504234711";
      const voltageID= "entry.789553865";
      const powerSpecificationsID= "entry.1651722451";
      const processingCategoryID="entry.1904876327";
      const machineNameID= "entry.1287296541";
      const produceListID= "entry.1043679774";
  
    // Create a new FormData object
    const formData = new FormData();
  
   
    formData.append(produceListID, formState.produceList);
    
    formData.append(machineNameID, formState.machineName);
    
    formData.append(processingCategoryID, formState.processingCategory);
  
    // Append user details to formData
    formData.append(nameID, formState.name);
    formData.append(emailID, formState.email);
    formData.append(phoneNumberID, formState.phoneNumber);
    formData.append(locationID, formState.location);
    formData.append(priceID, formState.price);
   
    
   
      if(formState.features !== undefined && formState.features !== null && formState.features !== ''){
        formData.append(featuresID, formState.features);
      }
     
     if (formState.model !== undefined && formState.model !== null && formState.model !== ""){
      formData.append(modelID, formState.model);
     }
     if(formState.temperature !== undefined && formState.temperature !== null && formState.temperature !== ''){
      formData.append(temperatureID, formState.temperature);
    }
   
   if (formState.traySize !== undefined && formState.traySize !== null && formState.traySize !== ""){
    formData.append(traySizeID, formState.traySize);
   }
   if(formState.workingTime !== undefined && formState.workingTime !== null && formState.workingTime !== ''){
    formData.append(workingTimeID, formState.workingTime);
  }
 
 if (formState.machineCapacity !== undefined && formState.machineCapacity !== null && formState.machineCapacity !== ""){
  formData.append(machineCapacityID, formState.machineCapacity);
 }
 if(formState.machineSize !== undefined && formState.machineSize !== null && formState.machineSize !== ''){
  formData.append(machineSizeID, formState.machineSize);
}

if (formState.voltage !== undefined && formState.voltage !== null && formState.voltage !== ""){
formData.append(voltageID, formState.voltage);
}
if(formState.powerSpecifications !== undefined && formState.powerSpecifications !== null && formState.powerSpecifications !== ''){
  formData.append(powerSpecificationsID, formState.powerSpecifications);
}


      
    
  setLoading(true)
    try {
      // Make a POST request with the formData
      const response = await fetch(formActionURL, {
        method: 'POST',
        mode: 'no-cors', // Required to avoid CORS errors, but note that response will be opaque
        body: formData,
      });
      setLoading(false);
     

 setMessage("Form Submitted Successfully");

 setIsSuccessful(true);
 setShowModal(true);
 setTimeout(() => {
  setShowModal(false); 
  window.location.href = "https://calendly.com/funmi-p0u/30min"; 
}, 3000);
     
    } catch (error) {
      console.error('Form submission error:', error);
      setLoading(false)
      setMessage(`Error Submitting Form, ${error}`);

      setIsSuccessful(false);
      setShowModal(true);
    }
  };

  const handleNext = () => {
    // Assume form is valid initially
    let formIsValid = true;

    switch (activeStep) {
        case 0:
          
            if (!formState.produceList || !formState.machineName || !formState.processingCategory) {
                formIsValid = false;
            }
            break;
        
        case 2:
           
            if (!formState.price ) {
                formIsValid = false;
            }
            break;
       
        case 3:
            // Example validation for step 4
            if (!formState.name || !formState.email || !formState.phoneNumber || !formState.location) {
                formIsValid = false;
            }
            break;
        default:
            // No validation needed for other steps or default case
            break;
    }

    if (formIsValid) {
       setActiveStep(activeStep + 1);
        
    } else {
        
        alert("Please fill in all required fields.");
    }
};
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);


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
      
    <SuccessfulModal
        showModal={showModal}
       isSuccess={isSuccessful}
        closeModal={()=> setShowModal(false)}
        modalText={message}
       
      />
   </div>
    
  );
};

export default MachineryForm;


