import React, { useEffect } from 'react';
import UserPageCard from '../../Components/UserPageCard/UserPageCard';
import UserTable from '../../Components/UserTable/UserTable';
import classes from './User.module.css';
import axios from 'axios';
import { useState } from 'react'

const User = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalUser, setTotalUser] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      const users = await axios.get(
        'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
      );
      setUser(users.data);
      setTotalUser(users.data.length);
      setIsLoading(false);
    };
    getUsers();
  }, []);
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
            <UserTable user={user} isLoading={isLoading} totalUser={totalUser} />
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
