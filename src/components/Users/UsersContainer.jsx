import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { follow, setUsers, unFollow, setCurrentPage, toggleIsFetching, setTotalUsersCount } from "../../redux/users-reducer";
import axios from "axios";
import loader from '../../assets/images/loader.svg'
import Preloader from "../common/Preloader/Preloader";
class UsersContainer extends React.Component {

    onPageChanged = (currentPage) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetching(false)

        });
    }
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.toggleIsFetching(false)
        });
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
                    unFollow={this.props.unFollow}
                    follow={this.props.follow} />
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
        isFetching: state.usersPage.isFetching
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
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer)