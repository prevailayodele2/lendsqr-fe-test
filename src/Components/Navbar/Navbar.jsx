import React from 'react';
import classes from './Navbar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { RiArrowDownSFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className={classes.navbarContainer}>
        <div className={classes.left}>
          <div className={classes.logo}>
            <span>lendsqr</span>
          </div>
          <div className={classes.search}>
            <input type="text" className={classes.navbarInput} />
            <button className={classes.navbarSearchButton}>
              <AiOutlineSearch />
            </button>
          </div>
        </div>
        <div className={classes.right}>
          <Link to="/">Docs</Link>
          <div className={classes.notification}>
            <IoIosNotificationsOutline />
          </div>
          <div className={classes.navbarImage}>
            <img src="/images/user.png" alt="" />
          </div>
          <div className={classes.navbarUserName}>
            <Link to="/">Prevail</Link>
            <RiArrowDownSFill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
