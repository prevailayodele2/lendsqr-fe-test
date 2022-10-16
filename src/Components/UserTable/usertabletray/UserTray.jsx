import React, { useState } from 'react';
import UsertableComponentSmall from '../subComponent/UsertableComponentSmall';
import classes from './Usertray.module.css';
//import { monthFormat } from '../../../utills';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const UserTray = ({ item, index, formatedDate }) => {
  const [showSmallComponent, setShowSmallComponent] = useState(false);
  const order = ['InActive', "Active", 'BlackListed', "Pending"]


  const Button = ({ type }) => {
    return <button className={type}>{type}</button>;
  };
  return (
    <>
      <div className={classes.usertabletrayContainer}>
        <tr key={index} className={classes.tableTr}>
          <th className={classes.organisation}>{item?.orgName}</th>
          <th className={classes.username}>{item?.userName}</th>
          <th className={classes.email}>{item?.email}</th>
          <th className={classes.phone}>{item?.phoneNumber}</th>
          <th className={classes.date}>
            {formatedDate(new Date(item?.lastActiveDate))}
          </th>
          <th className={classes.status}>
            <Button type={order[Math.floor((Math.random()*order.length))]} />
          </th>
          <th className={classes.statuss}>
            <BiDotsVerticalRounded
              onClick={() => setShowSmallComponent((show) => !show)}
            />
          </th>
        </tr>
      </div>
      {showSmallComponent && <UsertableComponentSmall id={item?.id} />}
    </>
  );
};

export default UserTray;
