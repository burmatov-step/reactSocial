import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props?.match?.params?.userId
        this.props.getUserProfile(userId ?? 2);
    }
    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'} />
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) =>({
    profile: state?.profilePage?.profile,
    isAuth: state.auth.isAuth
})


let WithRouteDataContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps,{getUserProfile} )(WithRouteDataContainer) 