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
       <span className={classes.topItem}> <GiHandBag /> <p>Switch Organisation</p> <MdKeyboardArrowDown /> </span>
       <span className={classes.topItem}><FaHome /> <p>Dashboard</p> </span>
       <div className={classes.Section}>
        <span className={classes.title}>Customers</span>
        {SidebarItem.Customer.map((item)=> (
          <div key={item.id}  className={classes.customerItem}>
          <NavLink to={item.link} activeClasName='active'> <span>{item.svg}</span><p>{item.name}</p></NavLink>
          </div>
        ))}
       </div>
       <div className={classes.Section}>
        <span className={classes.title}>Business</span>
        {SidebarItem.Business.map((item)=> (
          <div key={item.id} className={classes.customerItem}>
          <NavLink activeClasName='active' to={item.link}> <span>{item.svg}</span><p>{item.name}</p></NavLink>
          </div>
        ))}
       </div>
       <div className={classes.Section}>
        <span className={classes.title}>Settings</span>
        {SidebarItem.Settings.map((item)=> (
          <div key={item.id} className={classes.customerItem}>
          <Link to={item.link}> <span>{item.svg}</span><p>{item.name}</p></Link>
          </div>
        ))}
       </div>
     </div> 
    </>
  )
}

export default Sidebar
