import React from 'react'
import classes from './PersonalInfo.module.css'

const PersonalInfos = () => {
  return (
    <>
        <div className={classes.InfoContainer}>
          <div className={classes.personal}>
             <span className={classes.title}>Personal Infomation</span>
             <div className={classes.document}>
                 <div className={classes.name}>
                 <span>FirstName</span>
                 <p>Prevail Ayodele</p>
                 </div>
                 <div className={classes.phone}>
                     <span>Phone Number</span>
                     <p>08134760438</p>
                 </div>
                 <div className={classes.email}>
                     <span>Email address</span>
                     <p>prevailayodel@gmail.com</p>
                 </div>
                 <div className={classes.bvn}>
                     <span>BVN</span>
                     <p>010101010101</p>
                 </div>
                 <div className={classes.gender}>
                     <span>Gender</span>
                     <p>Male</p>
                 </div>
                 <div className={classes.status}>
                     <span>Marital Status</span>
                     <p>Single</p>
                 </div>
                 <div className={classes.children}>
                   <span>Children</span>
                   <p>none</p>
                 </div>
                 <div className={classes.recidence}>
                     <span>type of residence</span>
                     <p>Parent Apartment</p>
                 </div>
             </div>
          </div>
          <div className={classes.personal}>
             <span className={classes.title}>Education and Employment</span>
             <div className={classes.document}>
                 <div className={classes.name}>
                 <span>level education</span>
                 <p>Prevail Ayodele</p>
                 </div>
                 <div className={classes.phone}>
                     <span>employment status</span>
                     <p>08134760438</p>
                 </div>
                 <div className={classes.email}>
                     <span>sector of employment</span>
                     <p>prevailayodel@gmail.com</p>
                 </div>
                 <div className={classes.bvn}>
                     <span>duration of employment</span>
                     <p>010101010101</p>
                 </div>
                 <div className={classes.gender}>
                     <span>office email</span>
                     <p>Male</p>
                 </div>
                 <div className={classes.status}>
                     <span>monthly income</span>
                     <p>Single</p>
                 </div>
                 <div className={classes.children}>
                   <span>loan repayent</span>
                   <p>nonee</p>
                 </div>
             </div>
          </div>
          <div className={classes.personal}>
             <span className={classes.title}>socials</span>
             <div className={classes.document}>
                 <div className={classes.name}>
                 <span>twitter</span>
                 <p>Prevail Ayodele</p>
                 </div>
                 <div className={classes.phone}>
                     <span>facebook</span>
                     <p>08134760438</p>
                 </div>
                 <div className={classes.email}>
                     <span>instagram</span>
                     <p>prevailayodel@gmail.com</p>
                 </div>
             </div>
          </div>
          <div className={classes.personal}>
             <span className={classes.title}>guarantors</span>
             <div className={classes.document}>
                 <div className={classes.name}>
                 <span>full name</span>
                 <p>Prevail Ayodele</p>
                 </div>
                 <div className={classes.phone}>
                     <span>phone number</span>
                     <p>08134760438</p>
                 </div>
                 <div className={classes.email}>
                     <span>email address</span>
                     <p>prevailayodel@gmail.com</p>
                 </div>
                 <div className={classes.bvn}>
                     <span>relationship</span>
                     <p>010101010101</p>
                 </div>
                 
             </div>
          </div>
          <div className={classes.personal}>
             <span className={classes.title}>guarantors</span>
             <div className={classes.document}>
                 <div className={classes.name}>
                 <span>full name</span>
                 <p>Prevail Ayodele</p>
                 </div>
                 <div className={classes.phone}>
                     <span>phone number</span>
                     <p>08134760438</p>
                 </div>
                 <div className={classes.email}>
                     <span>email address</span>
                     <p>prevailayodel@gmail.com</p>
                 </div>
                 <div className={classes.bvn}>
                     <span>relationship</span>
                     <p>010101010101</p>
                 </div>
                 
             </div>
          </div>
          
        </div>
    </>
  )
}

export default PersonalInfos