import React, { useState } from 'react';
import './App.css';
import hicet from './hicet.png';
import image1 from './image1.jpg';
import image2 from './attend.png';
import image3 from './DIVITHKUMAR A.jpg';

function Student() {
  const [student, setStudent] = useState({
    name: 'Divithkumar',
    dob: '02/09/2003',
    age: 21,
    cgpa: 8.3,
    fatherName: 'Asokan P',
    motherName: 'Sellakili M',
    department: 'CSE',
    marks: '90/100',
    club: 'Cricket',
    contact: '1234567890',
  });

  return (
    <div className='dashboard-container'>
      <div className='dashboard'>
        <img src={hicet} className='hicet'></img>
        <a href=""><div className='vertical'>Dashboard</div></a>
        <a href=""><div className='vertical'>Profile</div></a>
        <a href=""><div className='vertical'>Classes</div></a>
        <a href=""><div className='vertical'>Grades</div></a>
        <a href=""><div className='vertical'>Assignment</div></a>
        <a href=""><div className='vertical'>Attendance</div></a>
        <a href=""><div className='vertical'>Payments</div></a>
        <a href=""><div className='vertical'>Year Calender</div></a>
        <a href=""><div className='vertical'>College Map</div></a>
        <a href=""><div className='vertical'>Email Student</div></a>
        <a href=""><div className='vertical'>Help</div></a>
      </div>
      <div className='content'>
        <div className='att'><img src={image2} className='att1'></img>Profile</div>
        <div className='att2'><img src={image2} className='att1'></img>Viewer</div>
        <div className='att3'><img src={image2} className='att1'></img>Grades</div>
      </div>
      <div className='box-container'>
        <img src={image3} className='student-image' />
        <p className='student'>Student Details</p>
        <div className='box'>Name: {student.name}</div>
        <div className='box'>Dob: {student.dob}</div>
        <div className='box'>Age: {student.age}</div>
        <div className='box'>Cgpa: {student.cgpa}</div>
        <div className='box'>Father's Name: {student.fatherName}</div>
        <div className='box'>Mother's Name: {student.motherName}</div>
        <div className='box'>Department: {student.department}</div>
        <div className='box'>Marks: {student.marks}</div>
        <div className='box'>Club: {student.club}</div>
        <div className='box'>Contact: {student.contact}</div>
      </div>
    </div>
  );
}

export default Student;

