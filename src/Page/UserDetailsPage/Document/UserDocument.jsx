import React from 'react'
import classes from './UserDocument.module.css'
import UserDetails from './../../../Components/UserDatails/UserDetails';

const UserDocument = () => {
  return (
    <div className={classes.UserDocumentContainer}>
        <UserDetails/>
        <div>
          <h2>document</h2>
        </div>
    </div>
  )
}

export default UserDocument