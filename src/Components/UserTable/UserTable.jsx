import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { monthFormat } from '../../utills';
import classes from './Usertable.module.css';
import { FaBars } from 'react-icons/fa';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import UsertableComponentSmall from './subComponent/UsertableComponentSmall';

const UserTable = () => {
  const [user, setUser] = useState([]);
  const [showSmallComponent, setShowSmallComponent] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      const users = await axios.get(
        'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
      );
      setUser(users.data);
    };
    getUsers();
  }, []);
  return (
    <>
      <div className={classes.tableContainer}>
        <table className={classes.usetTableContainer}>
          <tr className={classes.tableTr}>
            <th className={classes.tableTh}>
              Organisation <FaBars />{' '}
            </th>
            <th className={classes.tableTh}>
              Username <FaBars />
            </th>
            <th className={classes.tableTh}>
              Email <FaBars />
            </th>
            <th className={classes.tableTh}>
              Phone Number <FaBars />
            </th>
            <th className={classes.tableTh}>
              Date Joined <FaBars />
            </th>
            <th className={classes.tableTh}>
              Status <FaBars />
            </th>
          </tr>
          {user.slice(0, 15).map((item, i) => {
            function formatdDate(date) {
              let year = date.getFullYear();
              let month = (1 + date.getMonth()).toString().padStart(2, 0);
              //let newmonth = monthFormat.find((item) => item.id === month ? setMonthSyntax(item): '')
              //console.log(monthSyntax)
              let day = (1 + date.getDate()).toString().padStart(2, 0);
              return month + ' ' + day + ' ' + year;
            }
            return (
              <>
                <tr key={i} className={classes.tableTr}>
                  <th className={classes.organisation}>{item?.orgName}</th>
                  <th className={classes.username}>{item?.userName}</th>
                  <th className={classes.email}>{item?.email}</th>
                  <th className={classes.phone}>{item?.phoneNumber}</th>
                  <th className={classes.date}>
                    {formatdDate(new Date(item?.lastActiveDate))}
                  </th>
                  <th className={classes.status}></th>
                  <th className={classes.status}>
                    <BiDotsVerticalRounded  onClick={()=> setShowSmallComponent((show) => !show)}/>
                    
                  </th>
                </tr>
              </>
            );
          })}
          {showSmallComponent &&  <UsertableComponentSmall />}
        </table>
      </div>
    </>
  );
};

export default UserTable;
