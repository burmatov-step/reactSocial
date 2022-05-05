import React from "react";
import s from'./Post.module.css'

const Post = (props) =>{
    return(
        <div className={s.item}>
            <img src="https://cyberofsport.com/wp-content/uploads/2022/02/mgidarccontentnick.comc008fa9d_d.0.jpg" alt="" />
            {props.message}
            <div>
                like
                {props.likesCount}
            </div>
        </div>
    )
}



export default Post