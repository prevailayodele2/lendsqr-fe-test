import React from 'react';
import PersonalInfos from '../../Components/SubComponent/PersonalInfos';
import classes from './Userdetails.module.css';
import { Link, NavLink } from 'react-router-dom';

const UserDetails = () => {
  let activeClassName = {
    color: '#39cdcc',
    borderBottom: '2px solid #39CDCC'
  }
  return (
    <>
      <div className={classes.userDetailContainer}>
        <div className="">
          <h2 className={classes.goback}>Go back</h2>
          <div className={classes.top}>
            <span className={classes.title}>User Details</span>
            <div className={classes.buttons}>
              <button className={classes.blacklist}>blacklist User</button>
              <button className={classes.activate}>Activate user</button>
            </div>
          </div>
          <div className={classes.userOverview}>
            <div className={classes.one}>
              <div className={classes.first}>
                <img src="/images/user.png" alt="" />
                <div className={classes.det}>
                  <span>Prevail Ayodele</span>
                  <p>nooncnonoe</p>
                </div>
              </div>
              <div className={classes.second}>
                <span>user tier</span>
              </div>
              <div className={classes.third}>
                <span>$200,000.00</span>
                <p>010101010001/previous Bank</p>
              </div>
            </div>
            <div className={classes.footer}>
               <NavLink exact to='/user/09/personal_info'>{({isActive})=> (<span className={isActive ? activeClassName : undefined}>General Infomation</span>)}</NavLink>
               <NavLink exact to='/user/00/document'>{({isActive})=> (<span className={isActive ? activeClassName : undefined}>Document</span>)}</NavLink>
               <Link to='/bank'>bank details</Link>
               <Link to='/loans'>loans</Link>
               <Link to='savings'>savings</Link>
               <Link to='/system'>app system</Link>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default UserDetails;
