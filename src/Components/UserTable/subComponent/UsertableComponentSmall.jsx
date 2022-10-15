import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineUserAdd } from 'react-icons/ai'
import { BiUserCheck } from 'react-icons/bi'
import classes from './smallComponent.module.css'

const UsertableComponentSmall = ({id}) => {
  console.log(id)
  return (
    <>
        <div className={classes.smallComponent}>
              <Link to={`/user/${id}/personal-Info`}><AiOutlineEye style={{fontSize: '20px'}} /> view user</Link>
              <Link to='block'><AiOutlineUserAdd style={{fontSize: '20px'}}/> block user</Link>
              <Link to='/activate'><BiUserCheck style={{fontSize: '20px'}}/> activate user</Link>
        </div>
    </>
  )
}

export default UsertableComponentSmall