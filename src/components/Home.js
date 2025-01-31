import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PopupForm from './PopupForm';
import Footer from './Footer';
import heroImage from '../assets/hero-image.png';
import logo from '../assets/fj.png';
import tutorData from '../data/tutorData';
import './Home.css';
import sanskritiImage from '../assets/class10cbse-1.jpg';
import poojaImage from '../assets/class10cbse-2.jpg';
import sohamImage from '../assets/class10cbse3.jpg';
import anjaliImage from '../assets/class10cbse-4.jpg';
import rohanImage from '../assets/class10cbse-5.jpg';
import nehaImage from '../assets/cbseclass12-1.jpg';
import amitImage from '../assets/cbseclass12-2.jpg';
import shrutiImage from '../assets/cbseclass12-3.jpg';
import vikramImage from '../assets/ICSEgrade10-1.jpg';
import sanyaImage from '../assets/ICSEgrade10-2.jpg';
import icseStudent3Image from '../assets/ICSEgrade10-3.jpg';
import icseStudent4Image from '../assets/ICSECLASS10.jpg';

function Home() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const highlightedTextStyle = {
    fontWeight: 'bold',
    color: '#f0f0f0',
    backgroundColor: '#1596ff',
    padding: '0.2rem',
    borderRadius: '0.2rem',
    display: 'inline-block', // Ensures the box wraps around the text
  };

  const toggleForm = () => {
    setFormOpen(!formOpen);
  };

  const handleBoardChange = (e) => {
    setSelectedBoard(e.target.value);
    setSelectedGrade('');
    setSelectedSubject('');
  };

  const handleGradeChange = (e) => {
    setSelectedGrade(e.target.value);
    setSelectedSubject('');
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const boards = Object.keys(tutorData);
  const grades = selectedBoard ? Object.keys(tutorData[selectedBoard]) : [];
  const subjects = selectedBoard && selectedGrade ? tutorData[selectedBoard][selectedGrade] : [];

  return (
    <Container maxWidth="lg" className="home">
      <Box className="logo-section animate-logo-slide-in">
        <img src={logo} alt="TutorU Logo" className="logo animate-logo-bounce" />
      </Box>

      {/* Hero Section */}
      <Box className="hero animate-hero-fade-in">
        <img
          src={heroImage}
          alt="Hero"
          className="hero-image absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full h-auto"
        />
        <div
          className="hero-content animate-hero-content text-center"
          style={{ marginTop: '-7rem' }}
        >
          <Typography variant="h3" component="h1" gutterBottom className="animate-text-pop-in">
            Welcome to tutorU
          </Typography>
          <Typography variant="h6" component="p" gutterBottom className="animate-text-pop-in">
            Find the Best Verified Home Tutor for Your Child in Navi Mumbai.
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            <span style={highlightedTextStyle}>
              At TutorU, we offer personalized one-to-one home tutoring with the best tutors for all
              subjects from Grade 1 to 12, including CBSE, ICSE, IB, IGCSE, and State Board, as well
              as entrance test preparation, across Navi Mumbai.
            </span>
          </Typography>
        </div>
      </Box>

      {/* Form Section */}
      <Box className="form-section bg-white shadow-lg rounded mt-8 w-full max-w-md md:max-w-3xl mx-auto animate-form-slide-up p-4">
        <div className="form-title text-center mb-4">
          <Typography variant="h4" component="h2">
          </Typography>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <select
            name="board"
            id="board"
            className="form-control w-full md:w-1/4 p-2 border border-gray-300 rounded transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            value={selectedBoard}
            onChange={handleBoardChange}
          >
            <option value="">Select Board</option>
            {boards.map((board) => (
              <option key={board} value={board}>
                {board}
              </option>
            ))}
          </select>
          <select
            name="grade"
            id="grade"
            className="form-control w-full md:w-1/4 p-2 border border-gray-300 rounded transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            value={selectedGrade}
            onChange={handleGradeChange}
            disabled={!selectedBoard}
          >
            <option value="">Select Grade</option>
            {grades.map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
          <select
            name="subject"
            id="subject"
            className="form-control w-full md:w-1/4 p-2 border border-gray-300 rounded transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            value={selectedSubject}
            onChange={handleSubjectChange}
            disabled={!selectedGrade}
          >
            <option value="">Select Subject</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          <Button
            variant="contained"
            size="large"
            onClick={toggleForm}
            className="w-full md:w-1/4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:scale-105 transition-transform duration-300 disabled:bg-blue-300"
            style={{ color: 'white' }}
            disabled={!selectedSubject}
          >
            Find Tutor
          </Button>
        </div>
      </Box>

      <PopupForm
        open={formOpen}
        handleClose={toggleForm}
        selectedBoard={selectedBoard}
        selectedGrade={selectedGrade}
        selectedSubject={selectedSubject}
      />

      {/* Infinite Moving Text Section */}
      <div className="moving-text-section animate-moving-text">
        <div className="moving-text">
          <p>Learn from the best tutors in the comfort of your home!</p>
          <p>Personalized 1-on-1 tutoring sessions available now!</p>
          <p>Boost your grades with our expert tutors!</p>
          <p>Achieve academic excellence with tutorU!</p>
        </div>
      </div>

     
      {/* Top Achievers Section */}
<div className="top-achievers-section">
  <h2 className="section-title">Scores in Subjects Taken with tutorU</h2>
  
  {/* State Board Students */}
  <h2 className="section-title">Class 10 CBSE</h2>
  <div className="achievers-container">
    <div className="achiever-card">
      <img src={poojaImage} alt="Pooja Patel" className="achiever-image" />
      <div className="achiever-info">
        {/* Achiever Info */}
      </div>
    </div>

    <div className="achiever-card">
      <img src={sohamImage} alt="Soham Deshmukh" className="achiever-image" />
      <div className="achiever-info">
        {/* Achiever Info */}
      </div>
    </div>

    <div className="achiever-card">
      <img src={anjaliImage} alt="Anjali Mehta" className="achiever-image" />
      <div className="achiever-info">
        {/* Achiever Info */}
      </div>
    </div>

    <div className="achiever-card">
      <img src={sanskritiImage} alt="Sanskriti Shetty" className="achiever-image" />
      <div className="achiever-info">
        {/* Achiever Info */}
      </div>
    </div>
  </div>

  {/* CBSE Students */}
  <h2 className="section-title">Class 12 CBSE</h2>
  <div className="achievers-container">
    <div className="achiever-card">
      <img src={rohanImage} alt="Rohan Verma" className="achiever-image" />
      <div className="achiever-info">
        {/* Achiever Info */}
      </div>
    </div>

    <div className="achiever-card">
      <img src={shrutiImage} alt="Shruti Singh" className="achiever-image" />
      <div className="achiever-info">
        {/* Achiever Info */}
      </div>
    </div>

    <div className="achiever-card">
      <img src={amitImage} alt="Amit Kumar" className="achiever-image" />
      <div className="achiever-info">
        {/* Achiever Info */}
      </div>
    </div>

    <div className="achiever-card">
      <img src={nehaImage} alt="Neha Gupta" className="achiever-image" />
      <div className="achiever-info">
        {/* Achiever Info */}
      </div>
    </div>
    </div>

  

  {/* ICSE Students */}
  <h2 className="section-title">Class 10 ICSE</h2>
  <div className="achievers-container">
    <div className="achiever-card">
      <img src={vikramImage} alt="Vikram Rathore" className="achiever-image" />
      <div className="achiever-info">
        {/* Achiever Info */}
      </div>
    </div>

    <div className="achiever-card">
      <img src={sanyaImage} alt="Sanya Kapoor" className="achiever-image" />
      <div className="achiever-info">
        {/* Achiever Info */}
      </div>
    </div>

    <div className="achiever-card">
      <img src={icseStudent3Image} alt="ICSE Student 3" className="achiever-image" />
      <div className="achiever-info">
        {/* Achiever Info */}
      </div>
    </div>

    <div className="achiever-card">
      <img src={icseStudent4Image} alt="ICSE Student 4" className="achiever-image" />
      <div className="achiever-info">
        {/* Achiever Info */}
      </div>
    </div>
  </div>
</div>



      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"tutorU has transformed my learning experience. My grades have improved significantly!"</p>
            <span>- Rahul</span>
          </div>
          <div className="testimonial">
            <p>"The tutors are very knowledgeable and patient. My child loves the sessions!"</p>
            <span>- Siddhi</span>
          </div>
          <div className="testimonial">
            <p>"Highly recommend tutorU for anyone looking for quality home tutoring."</p>
            <span>- Eshan</span>
          </div>
        </div>
      </div>

      {/* Core Benefits Section */}
      <div className="core-benefits-section animate-core-benefits-slide-in">
        <h2 className="section-title">Core Benefits</h2>
        <div className="benefits-container">
          <div className="benefit hover:scale-105 transition-transform duration-300">
            <h3>Personalized Learning</h3>
            <p>We tailor our teaching methods to suit your child's learning style.</p>
          </div>
          <div className="benefit hover:scale-105 transition-transform duration-300">
            <h3>Experienced Tutors</h3>
            <p>All our tutors are highly qualified and experienced professionals.</p>
          </div>
          <div className="benefit hover:scale-105 transition-transform duration-300">
            <h3>Flexible Scheduling</h3>
            <p>We work around your schedule to provide convenient learning sessions.</p>
          </div>
          <div className="benefit hover:scale-105 transition-transform duration-300">
            <h3>Proven Results</h3>
            <p>Our students consistently achieve better academic outcomes.</p>
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  );
}

export default Home;
