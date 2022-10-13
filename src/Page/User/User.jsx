import React from 'react';
import UserPageCard from '../../Components/UserPageCard/UserPageCard';
import UserTable from '../../Components/UserTable/UserTable';
import classes from './User.module.css';

const User = () => {
  return (
    <>
      <div className={classes.userContainer}>
        <div className={classes.title}>User</div>
        <div className={classes.contain}>
          <div className={classes.cardComponent}>
            <UserPageCard />
            <UserPageCard />
            <UserPageCard />
            <UserPageCard />
          </div>
          <div className={classes.userListTable}>
            <UserTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
