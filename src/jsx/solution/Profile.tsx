import React from 'react'

const Profile = () => {
    const person = {
        firstName: 'John',
        lastName: 'Doe',
        imageURL: 'https://i.imgur.com/7vQD0fPs.jpg'
      };

  return (
    <div>
        <img
          src={person.imageURL}
          alt="Profile" />
        <h2>{person.firstName} {person.lastName}</h2>
    </div>
  )
}

export default Profile