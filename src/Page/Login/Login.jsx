import React from 'react'
import classes from './Login.module.css'

const Login = () => {
  return (
    <>
        <div className={classes.loginContainer}>
          <div className={classes.loginbgImage}>

          </div>
          <div className={classes.loginInputContainer}>
            <div className={classes.logininput}>
              <input type="text" />
            </div>
          </div>
        </div>
    </>
  )
}

export default Login