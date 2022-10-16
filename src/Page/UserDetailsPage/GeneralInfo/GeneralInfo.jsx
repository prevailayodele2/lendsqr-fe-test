import React, { useEffect, useState } from 'react';
import classes from './GeneralInfo.module.css';
import PersonalInfos from '../../../Components/SubComponent/PersonalInfos';
import UserDetails from '../../../Components/UserDatails/UserDetails';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GeneralInfo = () => {
  const { id } = useParams();
  const [selectedUserInfo, setSelectedUserInfo] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  // const location = useLocation();
  // const path = location.pathname.split('/')[2];

  const getUsers = async () => {
    const res = await axios.get(
      'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
    );
    if (res.data) {
      const userInfo = res.data.find((p) => p.id == id);
      setSelectedUserInfo(userInfo);
    }
  };

  useEffect(() => {
    setIsFetching(true);
    getUsers();
    setIsFetching(false);
  }, []);


  if (selectedUserInfo) {
    return (
      <>
        {isFetching ? (
          <div className={classes.loading}>
            <span>Loading...</span>
          </div>
        ) : (
          <div className={classes.GeneralInfoContainer}>
            <UserDetails user={selectedUserInfo} />
            <div className={classes.Userinfos}>
              <PersonalInfos user={selectedUserInfo} />
            </div>
          </div>
        )}
      </>
    );
  }
};

export default GeneralInfo;
