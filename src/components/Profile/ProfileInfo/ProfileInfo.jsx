import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png' />
      </div>
      <div className={s.descriptionBlock}>ava + desc</div>
    </div>
  )
}



export default ProfileInfo