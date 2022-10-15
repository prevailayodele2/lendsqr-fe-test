import React, { useState } from 'react';
import classes from './BigComponent.module.css';
import { MdKeyboardArrowDown } from 'react-icons/md';

const BigComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const options = ['Facebook', 'Twittetr', 'Instagram'];
  return (
    <>
      <div className={classes.bigComponent}>
        <div className={classes.organisation}>
          <span>Orgainsation</span>
          <div className={classes.dropdownContainer}>
            <div
              onClick={() => setShowDropdown((show) => !show)}
              className={classes.drop}
            >
              <p>{selectedText ? selectedText : 'Select..'}</p>
              <span>
                <MdKeyboardArrowDown
                  style={{ fontSize: '25px', height: '100%' }}
                />
              </span>
            </div>
            {showDropdown && (
              <div className={classes.dropdownContent}>
                {options.map((option) => (
                  <span
                    onClick={(e) => {
                      setSelectedText(option);
                      setShowDropdown(false);
                    }}
                    className={classes.dropdownItem}
                  >
                    {option}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={classes.username}>
          <span>username</span>
          <input type="text" />
        </div>
        <div className={classes.email}>
          <span>email</span>
          <input type="text" />
        </div>
        <div className={classes.date}>
          <span>date</span>
          <input type="text" />
        </div>
        <div className={classes.phone}>
          <span>phone number</span>
          <input type="text" />
        </div>
        <div className={classes.status}>
          <select name="" id="">
            <option value="">married</option>
            <option value="">single</option>
            <option value="">others</option>
          </select>
        </div>
        <div className={classes.buttons}>
          <button className={classes.reset}>reset</button>
          <button className={classes.filter}>filter</button>
        </div>
      </div>
    </>
  );
};

export default BigComponent;
