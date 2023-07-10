import React, { useState , useEffect} from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import './ApplicationForm.css';

const ApplicationForm = ({ open, setOpen }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');       
    const [highSchool, setHighSchool] = useState('');
    const [age, setAge] = useState('');
    const [gpa, setGpa] = useState('');
    const [nationality, setNationality] = useState('');
    const [resume, setResume] = useState(null);
    const [transcript, setTranscript] = useState(null);


    const handleClose = () => {
       setOpen(false);
    };

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleHighSchoolChange = (event) => {
        setHighSchool(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleGpaChange = (event) => {
        setGpa(event.target.value);
    };

    const handleNationalityChange = (event) => {
        setNationality(event.target.value);
    };

    const handleResumeChange = (event) => {
        const file = event.target.files[0];
        setResume(file);
    };

    const handleTranscriptChange = (event) => {
        const file = event.target.files[0];
        setTranscript(file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform any necessary actions with the form data (e.g., submit to a server)

        // Reset the form fields
        setFirstName('');
        setLastName('');
        setHighSchool('');
        setAge('');
        setGpa('');
        setNationality('');
        setResume(null);
        setTranscript(null);

        // Close the form
        handleClose();
    };
    console.log(open);
    return (
       
        <div>
            
            <Dialog open={open} onClose={handleClose}>
                 <DialogContent>
                    <form onSubmit={handleSubmit} className="form-container">
                        <TextField
                            label="First Name"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            required
                            className="form-field"
                        />
                        <TextField
                            label="Last Name"
                            value={lastName}
                            onChange={handleLastNameChange}
                            required
                            className="form-field"
                        />
                        <TextField
                            label="High School"
                            value={highSchool}
                            onChange={handleHighSchoolChange}
                            required
                            className="form-field"
                        />
                        <TextField
                            label="Age"
                            type="number"
                            value={age}
                            onChange={handleAgeChange}
                            inputProps={{ inputMode: 'numeric' }}
                            required
                            className="form-field"
                        />
                        <TextField
                            label="GPA"
                            type="number"
                            step={0.1}
                            value={gpa}
                            onChange={handleGpaChange}
                            required
                            className="form-field"
                        />
                        <TextField
                            label="Nationality"
                            value={nationality}
                            onChange={handleNationalityChange}
                            required
                            className="form```jsx
              form-field"
                        />
                        <div className="choose-file-section">
                            <label htmlFor="resume-input" className="choose-file-label">
                                Upload Resume:
                            </label>
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                id="resume-input"
                                onChange={handleResumeChange}
                                style={{ display: 'none' }}
                            />
                            <input
                                type="text"
                                value={resume ? resume.name : ''}
                                disabled
                                style={{ marginLeft: '1rem', background: 'none', border: 'none' }}
                            />
                            <label htmlFor="resume-input">
                                <Button component="span">Choose File</Button>
                            </label>
                        </div>

                        <div className="choose-file-section">
                            <label htmlFor="transcript-input" className="choose-file-label">
                                Upload Transcript:
                            </label>
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                id="transcript-input"
                                onChange={handleTranscriptChange}
                                style={{ display: 'none' }}
                            />
                            <input
                                type="text"
                                value={transcript ? transcript.name : ''}
                                disabled
                                style={{ marginLeft: '1rem', background: 'none', border: 'none' }}
                            />
                            <label htmlFor="transcript-input">
                                <Button component="span">Choose File</Button>
                            </label>
                        </div>



                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" variant="contained" color="primary">
                                Submit
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ApplicationForm
