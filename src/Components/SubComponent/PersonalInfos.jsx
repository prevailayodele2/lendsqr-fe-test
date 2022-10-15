import React from 'react'
import classes from './PersonalInfo.module.css'

const PersonalInfos = ({ user }) => {
  return (
    <>
        <div className={classes.InfoContainer}>
          <div className={classes.personal}>
             <span className={classes.title}>Personal Infomation</span>
             <div className={classes.document}>
                 <div className={classes.name}>
                 <span>FirstName</span>
                 <p>{user.profile.firstName + ' ' + user.profile.lastName}</p>
                 </div>
                 <div className={classes.phone}>
                     <span>Phone Number</span>
                     <p>{user.phoneNumber}</p>
                 </div>
                 <div className={classes.email}>
                     <span>Email address</span>
                     <p>{user.email}</p>
                 </div>
                 <div className={classes.bvn}>
                     <span>BVN</span>
                     <p>{user.profile.bvn}</p>
                 </div>
                 <div className={classes.gender}>
                     <span>Gender</span>
                     <p>{user.profile.gender}</p>
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
                     <p>{user.profile.address}</p>
                 </div>
             </div>
          </div>
          <div className={classes.personal}>
             <span className={classes.title}>Education and Employment</span>
             <div className={classes.document}>
                 <div className={classes.name}>
                 <span>level education</span>
                 <p>{user.education.level}</p>
                 </div>
                 <div className={classes.phone}>
                     <span>employment status</span>
                     <p>{user.education.employmentStatus}</p>
                 </div>
                 <div className={classes.email}>
                     <span>sector of employment</span>
                     <p>{user.education.sector}</p>
                 </div>
                 <div className={classes.bvn}>
                     <span>duration of employment</span>
                     <p>{user.education.duration}</p>
                 </div>
                 <div className={classes.gender}>
                     <span>office email</span>
                     <p>{user.education.officeEmail}</p>
                 </div>
                 <div className={classes.status}>
                     <span>monthly income</span>
                     <p>{user.education.monthlyIncome.length > 1 ? user.education.monthlyIncome[0] + " " + user.education.monthlyIncome[0] :user.education.monthlyIncome }</p>
                 </div>
                 <div className={classes.children}>
                   <span>loan repayent</span>
                   <p>{user.education.loanRepayment}</p>
                 </div>
             </div>
          </div>
          <div className={classes.personal}>
             <span className={classes.title}>socials</span>
             <div className={classes.document}>
                 <div className={classes.name}>
                 <span>twitter</span>
                 <p>{user.socials.twitter}</p>
                 </div>
                 <div className={classes.phone}>
                     <span>facebook</span>
                     <p>{user.socials.facebook}</p>
                 </div>
                 <div className={classes.email}>
                     <span>instagram</span>
                     <p>{user.socials.instagram}</p>
                 </div>
             </div>
          </div>
          <div className={classes.personal}>
             <span className={classes.title}>guarantors</span>
             <div className={classes.document}>
                 <div className={classes.name}>
                 <span>full name</span>
                 <p>{user.guarantor.firstName + " " + user.guarantor.lastName}</p>
                 </div>
                 <div className={classes.phone}>
                     <span>phone number</span>
                     <p>{user.guarantor.phoneNumber}</p>
                 </div>
                 <div className={classes.email}>
                     <span>address</span>
                     <p>{user.guarantor.address}</p>
                 </div>
                 <div className={classes.bvn}>
                     <span>gender</span>
                     <p>{user.guarantor.gender}</p>
                 </div>
                 
             </div>
          </div>
        </div>
    </>
  )
}

export default PersonalInfos