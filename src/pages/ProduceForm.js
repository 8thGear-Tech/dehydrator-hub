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


const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];


const StepContent = ({ step, formState, setFormState }) => {
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
  
    // Handling for radio buttons specifically for the 'moreProduce' field
    if (name === 'moreProduce') {
      const isMultipleProduces = value === 'yes';
      setFormState(prevState => ({
        ...prevState,
        hasMultipleProduces: isMultipleProduces,
      }));
    }
    // Handling for text and email fields
    else if (type === 'text' || type === 'email') {
      if (name === 'phoneNumber') {
        // Allow changes only if the value is a number and less than or equal to 11 characters
        if (/^\d{0,11}$/.test(value)) {
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
    // Handling for checkboxes
    else if (type === 'checkbox') {
      setFormState(prevState => ({
        ...prevState,
        [`${name}Preference`]: checked ? value : '', // Or however you wish to handle unchecked state
      }));
    }
  };
 
  const handleSingleProduceChange = (event) => {
    const { name, type, value, checked } = event.target;
  
    let newState = { ...formState };
  
    if (name === 'weight') {
      if (type === 'radio') {
        newState.singleProduce.predefinedWeight = value;
        newState.singleProduce.customWeight = '';
      } else { // Assuming type is 'text' for customWeight
        newState.singleProduce.customWeight = value;
        newState.singleProduce.predefinedWeight = '';
      }
    } else if (name === 'serviceType') {
      // Assuming you want to keep the checkbox but allow only one selection
      if (checked) {
        newState.singleProduce.serviceType = value;
      } else {
        newState.singleProduce.serviceType = '';
      }
    } else {
      newState.singleProduce[name] = value;
    }
  
    setFormState(newState);
  };
  // const addMoreProduce = () => {
  //   setFormState(prevState => ({
  //     ...prevState,
  //     multipleProduce: [...prevState.multipleProduce, { produce: '', customWeight: '', predefinedWeight: '', serviceType: '' }]
  //   }));
  // };
  
//   const handleMultipleProduceChange = (index, event) => {
//     const { name, value, type, checked } = event.target;
//     // Determine if the change is for weight or serviceType based on the name attribute
//     let fieldName = name.split('-')[0]; // Extracts 'weight' or 'serviceType'
    
//     const updatedProduce = formState.multipleProduce.map((item, idx) => {
//       if (idx === index) {
//         if (fieldName === 'weight') {
//           // Handle weight selection
//           return { ...item, predefinedWeight: value, customWeight: '' };
//         } else if (fieldName === 'serviceType') {
//           // Handle serviceType selection
//           return { ...item, serviceType: value };
//         } else {
//           // Handle other inputs
//           return { ...item, [name]: type === 'checkbox' ? checked : value };
//         }
//       }
//       return item;
//     });

//     setFormState(prevState => ({ ...prevState, multipleProduce: updatedProduce }));
// };
const handleMultipleProduceChange = (e) => {
  const { name, value } = e.target;
  setFormState({
    ...formState,
    multipleProduce: {
      ...formState.multipleProduce,
      [name]: value
    }
  });
};

 
  switch (step) {
    case 0:
      return (
        <>
         <div className=' mb-5'>
        <h2 className='mb-2'style={{fontFamily:'Outfit'}}>Produce</h2>
        <h6 style={{fontFamily:'Outfit', color:'#575F6E'}}  className='mb-4'>Fill this form to help us assist you in your journey.</h6>
        <div className='d-flex gap-3 p-2 align-items-center' style={{backgroundColor:'#F0F2F4'}}>
            <img src={lock} alt='lock'/>
            <p className='my-auto' style={{fontSize:'13px',color:'#242426'}}>We take privacy issues seriously. You can be sure that your personal data is securely protected.</p>
        
        </div>
      </div>
         <Form.Group className='mb-3'>
          <Form.Label style={{color:'#242426'}}>Produce</Form.Label>
          <Form.Control type='text' name='produce' value={formState.singleProduce.produce}
          onChange={handleSingleProduceChange} required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}}/>
        </Form.Group>
        <Form.Group className='mb-3'>
  <Form.Label style={{color:'#242426'}}>Weight</Form.Label>
  
  <div className="d-flex flex-column gap-2 mt-2">
    {["1-5kg", "6-10kg", "I am not sure"].map((weightOption) => (
      <Form.Check
        key={weightOption}
        variant="primary"
        label={weightOption}
        name="weight"
        type="radio"
        value={weightOption}
        checked={formState.singleProduce.predefinedWeight === weightOption}
        onChange={handleSingleProduceChange}
       
      />
    ))}
  </div>
</Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label style={{color:'#242426'}}>Which of our services are you requesting</Form.Label>
          <div className="d-flex flex-column gap-2">
            {['Prepping','Milling','Dehydration','Packaging','Sales on our ecommerce'].map((service)=>(
                <Form.Check
                key={service}
                variant="primary"
                label={service}
                name="serviceType"
                type="checkbox"
                value={service}
                checked={formState.singleProduce.serviceType === service}
                onChange={handleSingleProduceChange}
              />
            ))}
             
              </div>
                </Form.Group>
                <Form.Group className='mb-3'>
          <Form.Label style={{color:'#242426'}}>Do you have multiple produce to process</Form.Label>
        <div className=" d-flex flex-column gap-2">
                  <Form.Check
                    variant="primary"
                    label="Yes"
                    name="moreProduce"
                    type="radio"
                    value="yes"
                    checked={formState.hasMultipleProduces === true}
                    onChange={handleChange}
                   
                  />
                  <Form.Check
                    variant="primary"
                    label="No"
                    name="moreProduce"
                    type="radio"
                    value="no"
                    checked={formState.hasMultipleProduces === false}
                    onChange={handleChange}

              
                   
                  />
                  
                   
                  
                  
                </div>
                </Form.Group>
        </>
       
          
          
         
      );
    case 1:
      return (
        <>
         <div className=' mb-5'>
        <h2 className='mb-2'style={{fontFamily:'Outfit'}}>Select more produce</h2>
        <h6 style={{fontFamily:'Outfit', color:'#575F6E'}}  className='mb-4'>List all other produce and their weight here and use a comma (,) to separate them</h6>
        </div>
        
        <Form.Group className='mb-4'>
        <Form.Label style={{ color: '#242426' }}>Produce and Weight</Form.Label>
        <Form.Control 
          type='text'
          name='produce'
          value={formState.multipleProduce.produce}
          onChange={(e) => handleMultipleProduceChange(e)}
          required
          placeholder="E.g., Tubers 5kg, Grains 3kg"
          style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: '0px' }}
       />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label style={{ color: '#242426' }}>List the services you require consecutively</Form.Label>
        <Form.Control
          type='text'
          value={formState.multipleProduce.serviceType}
          onChange={(e) => handleMultipleProduceChange(e)}
          name="serviceType"
          required
          placeholder="E.g., Prepping, Milling"
          style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: '0px' }}
        />
      </Form.Group>


                </>

      );
      case 2:
        return (
          <>
           <div className=' mb-5'>
          <h2 className='mb-2'style={{fontFamily:'Outfit'}}>Pick up Location</h2>
          <h6 style={{fontFamily:'Outfit', color:'#575F6E'}}  className='mb-4'>We would love to know your preference for pickup</h6>
          </div>
          
         
         
          <Form.Group className='mb-4'>
          
          <div className=" d-flex flex-column gap-2">
          {['Home pickup','Pickup Station near you'].map((pickup)=>(
                <Form.Check
                key={pickup}
                variant="primary"
                
                label={pickup}
                name="pickUp" 
                type="checkbox"
                value={pickup}
                checked={formState.pickUpPreference === pickup}
                onChange={handleChange}
              />
            
            ))}
         
                    
                  </div>
                  </Form.Group>
  
                  <Form.Group className='mb-3'>
            <Form.Label style={{color:'#242426'}}>Home Address</Form.Label>
            <Form.Control type='text' name='homeAddress' value={formState.homeAddress}
            onChange={handleChange} required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}}/>
             
          </Form.Group>
                  </>
  
        );
      case 3:
        return (
          <>
           <div className=' mb-5'>
          <h2 className='mb-2'style={{fontFamily:'Outfit'}}>Drop-off  Location</h2>
          <h6 style={{fontFamily:'Outfit', color:'#575F6E'}}  className='mb-4'>We would love to know your preference for drop-off</h6>
          </div>
          
         
         
          <Form.Group className='mb-3'>
          
          <div className=" d-flex flex-column gap-2">
          {['Home pickup','Pickup Station near you'].map((dropoff)=>(
                <Form.Check
                key={dropoff}
                variant="primary"
                
                label={dropoff}
                name="dropOff" // Notice how 'name' is used to group checkboxes
                type="checkbox"
                value={dropoff}
                checked={formState.dropOffPreference === dropoff}
                onChange={handleChange}
              />
            
            ))}
            
  </div>
                  </Form.Group>
  
                 
                  </>
  
        );
      case 4:
        return (
          <>
          <div className='mb-4'>
          <h2 className=''style={{fontFamily:'Outfit'}}>Personal Details</h2>
         
        </div>
           <Form.Group className='mb-4'>
            <Form.Label style={{color:'#575F6E'}}>Name</Form.Label>
            <Form.Control type='text' name='name'style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}}  value={formState.name}
  onChange={handleChange}/>
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label style={{color:'#575F6E'}}>Email </Form.Label>
            <Form.Control type='email' name='email' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}}  value={formState.email}
  onChange={handleChange} />
          </Form.Group>
          
          <Form.Group className='mb-4'>
            <Form.Label style={{color:'#575F6E'}}>Phone number</Form.Label>
            <Form.Control type='text' required style={{borderTop:'none', borderLeft:'none', borderRight:'none', borderRadius:'0px'}} name='phoneNumber'  value={formState.phoneNumber}
  onChange={handleChange}/>
          </Form.Group>
          <h6 style={{color:'#575F6E'}}>By clicking submit, you agree to our terms and conditions</h6>
          </>
        );
    
    default:
      return 'Unknown step';
  }
};

const ProduceForm = () => {
  const theme = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [formState, setFormState] = React.useState({
    singleProduce: { // Renamed for clarity that this is a single produce entry
      produce: '',
      predefinedWeight: '',
      serviceType: ''
    },
    multipleProduce:  { // Renamed for clarity that this is a single produce entry
      produce: '',
      predefinedWeight: '',
      serviceType: ''
    },
    // Additional form fields
    name: '',
    email: '',
    phoneNumber: '',
    pickUpPreference: '',
    dropOffPreference: '',
    homeAddress: '',
    hasMultipleProduces: null,
   
  });

  // const handleNext = () => {
  //   console.log(formState.hasMultipleProduces);
  //   if (activeStep === 0 && !formState.hasMultipleProduces) {
  //     setActiveStep(activeStep + 2); 
  //   } else {
  //     setActiveStep(activeStep + 1);
  //   }
  // };
  const handleNext = () => {
    // Assume form is valid initially
    let formIsValid = true;

    switch (activeStep) {
        case 0:
          
            if (!formState.singleProduce.produce || !formState.singleProduce.predefinedWeight || !formState.singleProduce.serviceType || formState.hasMultipleProduces === null) {
                formIsValid = false;
            }
            break;
        
        case 2:
           
            if (!formState.pickUpPreference || !formState.homeAddress) {
                formIsValid = false;
            }
            break;
        case 3:
           
            if (!formState.dropOffPreference) {
                formIsValid = false;
            }
            break;
        case 4:
            // Example validation for step 4
            if (!formState.name || !formState.email || !formState.phoneNumber) {
                formIsValid = false;
            }
            break;
        default:
            // No validation needed for other steps or default case
            break;
    }

    if (formIsValid) {
        
        if (activeStep === 0 && !formState.hasMultipleProduces) {
            setActiveStep(activeStep + 2);
        } else {
            setActiveStep(activeStep + 1);
        }
    } else {
        
        alert("Please fill in all required fields.");
    }
};

  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      // If we're currently at step 2 and `hasMultipleProduces` is false, go back to step 0.
      if (prevActiveStep === 2 && formState.hasMultipleProduces === false) {
        return 0;
      } else {
        // For all other cases, just go back one step.
        return prevActiveStep - 1;
      }
    });
  };
  
 
  const handleSubmit = async () => {
    // Base URL for your Google Form submission endpoint
    const formActionURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScmAbgMXdYTxGlnbEE5OYWdknC0IDg4FNi_NpLdOpkVhB6R7A/formResponse';
    
      const nameID= "entry.1751775736";
      const emailID= "entry.1001750187";
      const phoneNumberID= "entry.713383938";
      const pickUpPreferenceID= "entry.1792302000";
      const dropOffPreferenceID= "entry.178694116";
      const homeAddressID= "entry.863571984";
      // Single Produce
      const singleProduceProduceID= "entry.233741404";
      
      const singleProducePredefinedWeightID= "entry.304421428";
      const singleProduceServiceTypeID= "entry.1576905676";
      const hasMultipleProducesID="entry.757648597";
      const multipleProduceProduceID= "entry.1919515752";
      const multipleProduceServiceTypeID= "entry.318454957";
  
    // Create a new FormData object
    const formData = new FormData();
  
    // Append single produce details to formData
    formData.append(singleProduceProduceID, formState.singleProduce.produce);
    
    formData.append(singleProducePredefinedWeightID, formState.singleProduce.predefinedWeight);
    
    formData.append(singleProduceServiceTypeID, formState.singleProduce.serviceType);
  
    // Append user details to formData
    formData.append(nameID, formState.name);
    formData.append(emailID, formState.email);
    formData.append(phoneNumberID, formState.phoneNumber);
    formData.append(pickUpPreferenceID, formState.pickUpPreference);
    formData.append(dropOffPreferenceID, formState.dropOffPreference);
    formData.append(homeAddressID, formState.homeAddress);
    formData.append(hasMultipleProducesID, formState.hasMultipleProduces ? "Yes" : "No");
   
      if(formState.multipleProduce.produce !== undefined && formState.multipleProduce.produce !== null && formState.multipleProduce.produce !== ''){
        formData.append(multipleProduceProduceID, formState.multipleProduce.produce);
      }
     
     if (formState.multipleProduce.serviceType !== undefined && formState.multipleProduce.serviceType !== null && formState.multipleProduce.serviceType !== ""){
      formData.append(multipleProduceServiceTypeID, formState.multipleProduce.serviceType);
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
  
 
  return (
    <div><GuestNavbar/>
    {loading ? <div
        className="justify-content-center align-items-center text-center"
        style={{ paddingTop: "250px" }}
      >
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div> : (
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
      )}
    
    <SuccessfulModal
        showModal={showModal}
       isSuccess={isSuccessful}
        closeModal={()=> setShowModal(false)}
        modalText={message}
       
      />
   </div>
    
  );
};

export default ProduceForm;


