import React, { useState } from 'react';
import { Container,TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl,FormLabel,Select, MenuItem,InputLabel, Box,} from '@mui/material';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: '',
    });
  };

  return (
    <Container maxWidth="sm">
      <h2 className='text-success'>Higher Secondary Admission Registration</h2>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} required margin="normal"/>

        <TextField fullWidth label="Address"name="address" value={formData.address} onChange={handleChange} required  margin="normal"/>

        <TextField fullWidth label="Mobile" name="mobile" value={formData.mobile}onChange={handleChange} required margin="normal" type="tel"/>

        <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange}required margin="normal"type="email"/>

        <FormControl  margin="normal" required>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name="gender" value={formData.gender} onChange={handleChange}>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <TextField fullWidth  name="dob" value={formData.dob} onChange={handleChange} required margin="normal" type="date"  />

        <FormControl fullWidth margin="normal" required>
          <InputLabel>Course</InputLabel>
          <Select
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <MenuItem value="Biology">Biology</MenuItem>
            <MenuItem value="Computer Science">Computer Science</MenuItem>
            <MenuItem value="Commerce">Commerce</MenuItem>
            <MenuItem value="Humanities">Humanities</MenuItem>
          </Select>
        </FormControl>
        <Box display="flex" justifyContent="space-between" marginTop={2}>  
          <Button variant="contained" color="primary" type="submit">
            Register
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleCancel}>
            Cancel
          </Button>
         </Box> 
      </form>
    </Container>
  );
};

export default RegistrationForm;
