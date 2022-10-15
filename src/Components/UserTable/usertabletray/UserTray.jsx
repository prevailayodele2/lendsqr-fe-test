import React, { useState } from 'react';
import UsertableComponentSmall from '../subComponent/UsertableComponentSmall';
import classes from './Usertray.module.css';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const UserTray = ({item, index, formatedDate}) => {
    const [showSmallComponent, setShowSmallComponent] = useState(false);
    console.log(item)
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
          <th className={classes.status}>ooooo</th>
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
