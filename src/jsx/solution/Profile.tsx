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
          src={!person.imageURL ? 'blank-profile.jpg' : person.imageURL}
          alt="Profile"
          className='rounded'
          style={{ width: 100, height: 100 }}
          />
        <h2>{person.firstName} {person.lastName}</h2>
    </div>
  )
}

export default Profile