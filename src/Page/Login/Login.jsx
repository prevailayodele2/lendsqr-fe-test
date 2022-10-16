import React, { useState } from 'react';
import classes from './Login.module.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const Login = () => {
  const [loadingButton, setLoadingButton] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDeafult();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invaid Email').required('Required'),
      password: Yup.string()
        .min(4, 'Password is too weak')
        .required('Required'),
    }),
    onSubmit: (values) => {
      setLoadingButton(true)
      const data ={
        email: values.email,
         password: values.password
      }
      if (data.email == 'lendsqr@gmail.com' && data.password == "lendsqr"){
        localStorage.setItem("logindataEmail", data.email)
        localStorage.setItem("logindataPassword", data.password)
        window.location.reload()
      }
      else{
        setError(true)
        setLoadingButton(false)
      }
      handleSubmit()
      setLoadingButton(false)
    },
  });

 
  return (
    <>
      <div className={classes.loginContainer}>
        <div className={classes.loginbgImage}>
          <div className={classes.loginLogo}>lendsqr</div>
          <img src="/images/hero-04.png" alt="" />
        </div>
        <div className={classes.loginInputContainer}>
          <div className={classes.inputContainerHeader}>
            <h1>Welcome!</h1>
            <span>Enter details to login.</span>
          </div>
          <div className={classes.logininput}>
            <form onSubmit={formik.handleSubmit}>
              <div className={classes.inputs}>
                <input
                  type="text"
                  name='email'
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
               {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p>: ' ' }
              </div>
              <div className={classes.inputs}>
                <div className={classes.passwordInput}>
                  <input
                      type={!showPassword ? 'password' : 'text'}
                    name='password'
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {!showPassword ? <span onClick={() => setShowPassword(true)}>show</span> : <span onClick={() => setShowPassword(false)}>hide</span>}
                </div>
               {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p>: ' ' }
              </div>
              <div className={classes.div}>
                <span>forget password?</span>
                <button type="submit" disabled={loadingButton}>
                  {loadingButton ? 'Loading...' : 'Login'}
                </button>
              </div>
            </form>
            {error ? <p>Invalid Email or Password</p> : ' '}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
