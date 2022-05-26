import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {

  if(!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png' />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props?.profile?.photos?.large} />
        ava + desc
        </div>
    </div>
  )
}



export default ProfileInfo