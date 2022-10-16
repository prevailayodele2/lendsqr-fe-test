import React, { useEffect } from 'react';
import UserPageCard from '../../Components/UserPageCard/UserPageCard';
import UserTable from '../../Components/UserTable/UserTable';
import classes from './User.module.css';
import axios from 'axios';
import { useState } from 'react'
import { FiUsers } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import { GiReceiveMoney } from 'react-icons/gi';
import { FaCoins } from 'react-icons/fa';

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
  const card = [
    {id: 1 , color: 'pink', icon: <BiUser /> ,title: 'users', value: user.length},
    {id: 2 , color: 'purple', icon: <FiUsers /> ,title: 'active users', value: '2,500'},
    {id: 3 , color: 'yellow', icon: <GiReceiveMoney /> ,title: 'users with loans', value: '12,433'},
    {id: 4 , color: 'red', icon: <FaCoins /> ,title: 'users with savings', value: '100,203'},
  ]
  return (
    <>
      <div className={classes.userContainer}>
        <div className={classes.title}>User</div>
        <div className={classes.contain}>
          <div className={classes.cardComponent}>
            {card.map((item)=> ( <UserPageCard id={item.id} color={item.color} icon={item.icon} title={item.title} value={item.value} />))}
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
