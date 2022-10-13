import React from 'react'
import classes from './Userpagecard.module.css'
import { FiUsers } from 'react-icons/fi';

const UserPageCard = () => {
  return (
    <>
        <div className={classes.cardContainer}>
            <span className={classes.cardIcon}><FiUsers /></span>
            <span className={classes.cardTitle}>Users</span>
            <span className={classes.cardDetails}>2,345</span>
        </div>
    </>
  )
}

export default UserPageCard