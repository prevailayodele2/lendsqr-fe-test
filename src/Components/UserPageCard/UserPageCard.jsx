import React from 'react'
import classes from './Userpagecard.module.css'

const UserPageCard = ({ id, icon, color, title, value}) => {
  return (
    <>
        <div key={id} className={classes.cardContainer}>
            <span className={color}>{icon}</span>
            <span className={classes.cardTitle}>{title}</span>
            <span className={classes.cardDetails}>{value}</span>
        </div>
    </>
  )
}

export default UserPageCard