import React from 'react'
import classes from './Sidebar.module.css'
import { SidebarItem } from './../../utills';
import { Link, NavLink } from 'react-router-dom';
import { GiHandBag } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Sidebar = () => {
  return (
    <>
     <div className={classes.sidebarContainer}>
       <span className={classes.topItem}> <GiHandBag /> Switch Organisation <MdKeyboardArrowDown /> </span>
       <span className={classes.topItem}><FaHome /> Dashboard</span>
       <div className={classes.Section}>
        <span className={classes.title}>Customers</span>
        {SidebarItem.Customer.map((item)=> (
          <div key={item.id}  className={classes.customerItem}>
          <Link to={item.link} activeClasName='act'> <span>{item.svg}</span>{item.name}</Link>
          </div>
        ))}
       </div>
       <div className={classes.Section}>
        <span className={classes.title}>Business</span>
        {SidebarItem.Business.map((item)=> (
          <div key={item.id} className={classes.customerItem}>
          <NavLink activeClasName='active' to={item.link}> <span>{item.svg}</span>{item.name}</NavLink>
          </div>
        ))}
       </div>
       <div className={classes.Section}>
        <span className={classes.title}>Settings</span>
        {SidebarItem.Settings.map((item)=> (
          <div key={item.id} className={classes.customerItem}>
          <Link to={item.link}> <span>{item.svg}</span>{item.name}</Link>
          </div>
        ))}
       </div>
     </div> 
    </>
  )
}

export default Sidebar
