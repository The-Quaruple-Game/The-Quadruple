import React, { useEffect, useState } from 'react';

function UserProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('access');

    fetch('http://127.0.0.1:8000/api/profile/', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => {
      if (!res.ok) throw new Error('Not authorized');
      return res.json();
    })
    .then(data => setUserData(data))
    .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {userData ? (
        <div>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          <p>User ID: {userData.id}</p>
        </div>
      ) : (
        <p>Loading or unauthorized...</p>
      )}
    </div>
  );
}

export default UserProfile;
