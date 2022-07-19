import React from 'react';
import User from '../components/User';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function Profile() {
  const { user } = useAuth();
  // console.warn(user);
  return (
    <div>
      <User
        image={user.photoURL}
        email={user.email}
        name={user.displayName}
        lastLogin={user.metadata.lastSignInTime}
      />
      <button type="button" className="btn btn-danger" onClick={signOut}>Sign Out</button>
    </div>
  );
}
