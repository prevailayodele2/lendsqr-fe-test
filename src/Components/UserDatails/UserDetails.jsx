import React, { useState } from 'react';
import classes from './Userdetails.module.css';
import { Link, useLocation } from 'react-router-dom';

const UserDetails = ({ user }) => {
  const { pathname } = useLocation();
  const activePersonalInfo = pathname.split('/')[3] == 'personal-Info';
  const activedocument = pathname.split('/')[3] == 'document';

  return (
    <>
      <div className={classes.userDetailContainer}>
        <div className="">
          <h2 className={classes.goback}><Link to='/user'>Go back</Link> </h2>
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
                <img src={user.profile.avatar} alt="" />
                <div className={classes.det}>
                  <span>
                    {user.profile.firstName + ' ' + user.profile.lastName}
                  </span>
                  <p>{user.accountNumber}</p>
                </div>
              </div>
              <div className={classes.second}>
                <span>user tier</span>
              </div>
              <div className={classes.third}>
                <span>{user.profile.currency + user.accountBalance}</span>
                <p>{user.phoneNumber + '/' + user.orgName}</p>
              </div>
            </div>
            <div className={classes.footer}>
              <Link to={`/user/${user.id}/personal-Info`}>
                <span className={activePersonalInfo ?  classes.activeClassName  : ' '}>
                  General Infomation
                </span>
              </Link>
              <Link to="/user/00/document">
                <span className={activedocument ? classes.activeClassName  : ' '}>
                  Document
                </span>
              </Link>
              <Link to="/bank">bank details</Link>
              <Link to="/loans">loans</Link>
              <Link to="savings">savings</Link>
              <Link to="/system">app system</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
