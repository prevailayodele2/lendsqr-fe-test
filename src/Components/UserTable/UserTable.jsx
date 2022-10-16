import React, { useState } from 'react';
//import { monthFormat } from '../../utills';
import classes from './Usertable.module.css';
import { FaBars } from 'react-icons/fa';
import BigComponent from './subComponent/BigComponent';
import { Pagination } from 'antd';
import UserTray from './usertabletray/UserTray';

const UserTable = ({ user, isLoading, totalUser }) => {
  //pagination
  const [page, setPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState(9);
  //const [monthSyntax, setMonthSyntax] = useState(null)

  //Pop up component
  const [showUsertableFilterComponent, setShowUsertableFilterComponent] =
    useState(false);

  const indexOfLastPage = page + userPerPage;
  const indexOfFirstPage = indexOfLastPage - userPerPage;
  const currentUsers = user.slice(indexOfFirstPage, indexOfLastPage);

  const onShowSizeChange = (current, pageSize) => {
    setUserPerPage(pageSize);
  };

  return (
    <>{ isLoading ? <div className={classes.loading}><span>Loading...</span></div> : (
      <div className={classes.tableContainer}>
        <table className={classes.usetTableContainer}>
          <tr className={classes.tableTr}>
            <th className={classes.tableTh}>
              Organisation
              <FaBars
                onClick={() => setShowUsertableFilterComponent((show) => !show)}
              />
            </th>
            <th className={classes.tableTh}>
              Username
              <FaBars
                onClick={() => setShowUsertableFilterComponent((show) => !show)}
              />
            </th>
            <th style={{flex: 0.7, marginLeft: '-20px'}} className={classes.tableTh}>
              Email
              <FaBars
                onClick={() => setShowUsertableFilterComponent((show) => !show)}
              />
            </th>
            <th style={{marginLeft: '40px'}} className={classes.tableTh}>
              Phone Number
              <FaBars
                onClick={() => setShowUsertableFilterComponent((show) => !show)}
              />
            </th>
            <th className={classes.tableTh}>
              Date Joined
              <FaBars
                onClick={() => setShowUsertableFilterComponent((show) => !show)}
              />
            </th>
            <th className={classes.tableTh}>
              Status
              <FaBars
                onClick={() => setShowUsertableFilterComponent((show) => !show)}
              />
            </th>
            {/* <th clasaName={classes.tableTh}>lendsqr</th> */}
          </tr>
          {currentUsers && currentUsers.length > 0
            ? currentUsers.map((item, i) => {
                function formatdDate(date) {
                  let year = date.getFullYear();
                  let month = (1 + date.getMonth()).toString().padStart(2, 0);
                  {/* let newmonth = monthFormat.find((item) => item.id == month ? setMonthSyntax(item.name): '') */}
                  let day = (1 + date.getDate()).toString().padStart(2, 0);
                  return month + '/' + day + '/' + year;
                }
                return (
                  <>
                      <UserTray
                        item={item}
                        index={i}
                        formatedDate={formatdDate}
                      />
                  </>
                );
              })
            : ''}
        </table>
        <div className={classes.pagination}>
          <Pagination
            pageSize={userPerPage}
            total={totalUser}
            current={page}
            onChange={(value) => setPage(value)}
            onShowSizeChange={onShowSizeChange}
          />
        </div>
        {showUsertableFilterComponent && <BigComponent />}
      </div>
      )}
    </>
  );
};

export default UserTable;
