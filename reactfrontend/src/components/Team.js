import React from 'react';
import '../styles/team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Import images
import AlicePhoto from '../images/AlicePhoto.jpeg';
import JakePhoto from '../images/JakePhoto.JPG';
import MattPhoto from '../images/MattPhoto.jpg';
import JorrisPhoto from '../images/JorrisPhoto.jpg';
import JenniferAzer from '../images/JenniferAzer.jpg';

// Team members data
const teamMembers = [
  {
    name: 'Alice Gonzalez',
    bio: 'With over 10 years of experience in the healthcare industry, Alice combines her technical expertise with a deep understanding of user needs. Her strong investigative skills and problem-solving abilities allow her to tackle complex challenges, ensuring that the solutions she develops are not only functional but also intuitive for users.',
    photo: AlicePhoto,
    linkedinUrl: 'https://www.linkedin.com/in/alicegonzalezcodes/',
  },
  {
    name: 'Jake Brennan',
    bio: 'Jake is an aspiring Software Developer who has experience in retail, with customer service and UX assessment skills.',
    photo: JakePhoto,
    linkedinUrl: 'https://www.linkedin.com/in/jacob-brennan/',
  },
  {
    name: 'Jennifer Azer',
    bio: 'Jennifer is a Junior Developer, committed to bringing value to customers with her vast customer experience of 8 years from Banking, Travel, and the Aviation sector.',
    photo: JenniferAzer,
    linkedinUrl: 'https://www.linkedin.com/in/jennifer-azer/',
  },
  {
    name: 'Jorris Ekoloko',
    bio: 'Jorris is an Aspiring Software Developer with over 6 years in the culinary industry where he honed customer and teamwork skills and will apply them into the advancement of the tech field.',
    photo: JorrisPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/jorrisekoloko/',
  },
  {
    name: 'Matthew Kramer',
    bio: 'Matt is a Junior Software Developer with over 15 years in Aircraft maintenance and Controls Automation',
    photo: MattPhoto,
    linkedinUrl: 'https://www.linkedin.com/in/matthewkramer1230/',
  },
];

function Team() {
  return (
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
          <img src={member.photo} alt={member.name} className="member-photo" />
          <div className="member-info">
            <h3>{member.name}</h3>
            <p>{member.bio}</p>
            <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;
