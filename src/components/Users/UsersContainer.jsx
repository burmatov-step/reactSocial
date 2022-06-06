import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { followSuccess, unFollowSuccess, setCurrentPage, getUsers, follow, unFollow } from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    onPageChanged = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize)
    }
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    render() {


        return (
            <>
                {this.props.isFetching && <Preloader />}

                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    unFollowSuccess={this.props.unFollowSuccess}
                    followingProgress={this.props.followingProgress}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    followSuccess={this.props.followSuccess} />
            </>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress,

    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAc(userId))
//         },
//         unFollow: (userId) => {
//             dispatch(unFollowAc(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAc(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAc(currentPage))
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCountAc(totalUsersCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAc(isFetching))
//         }
//     }
// }





export default connect(mapStateToProps, {
    followSuccess,
    unFollowSuccess,
    setCurrentPage,
    getUsers,
    follow,
    unFollow
})(UsersContainer)