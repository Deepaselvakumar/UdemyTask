import React from 'react';

export const userData = {
  firstName: 'Maximilian', // feel free to replace the name value
  lastName: 'Schwarzmüller', // feel free to replace the name value
  title: 'Instructor', // feel free to replace the title value
};

// Edit the User component code to output the userData data
export default function Dyanamic() {
  return (
    <div id="user" data-testid="user">
      <h2>
        {userData.firstName}{userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
  );
}