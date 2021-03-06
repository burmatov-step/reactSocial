import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from '../../assets/images/avatar.png'
import s from './users.module.css';
import axios from "axios";
import { userAPI } from "../../api/api";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (

        <div>
            <div>
                {pages.map(p => <span onClick={() => props.onPageChanged(p)} className={props.currentPage === p && s.selectedPage}>{p}</span>)}
            </div>
            {

                props.users.map(u => {
                    return <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img className={s.userPhoto} src={u.photos.small ?? userPhoto} alt="" />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed ? <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                    props.unFollow(u.id)
                                }}>Unfollow</button> : <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)
                                }}>follow</button>}

                            </div>
                        </span >
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>
                })
            }
        </div>
    )
}

export default Users