import React from 'react';
import classes from './GeneralInfo.module.css'
import PersonalInfos from '../../../Components/SubComponent/PersonalInfos';
import UserDetails from '../../../Components/UserDatails/UserDetails';

const GeneralInfo = () => {
  return (
    <div className={classes.GeneralInfoContainer}>
      <UserDetails />
      <div className={classes.Userinfos}>
        <PersonalInfos />
      </div>
    </div>
  );
};

export default GeneralInfo;
