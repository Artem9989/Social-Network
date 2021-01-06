import React from 'react';
import Profile from './Profile';
import {getUserProfile, updateStatus, requestStatus, savePhoto, saveProfile} from '../../redux/Profile-reducer';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {withAuthRedirect } from '../../HOC/withAuthRedirect'
import { getAuthorizedUserId, getProfile, getStatus, getIsAuth } from '../../redux/profile-selector';

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;

        if (!userId){
            userId = this.props.authorizedUserId;
            if(!userId) {
                    <Redirect to="/login" />
                    //this.props.history.push("/login")
            }
        }

//13241
       this.props.getUserProfile(userId);
       this.props.requestStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();

//13241

            // .then(response => {
            //     this.props.setUserProfile(response.data)
            // });
    }

    componentDidUpdate (prevProps, prevState, snapshot){
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }
    render() {

        return <div>
            <Profile {...this.props} profile = {this.props.profile} status = {this.props.status} updateStatus={this.props.updateStatus}   
              isOwner = {!this.props.match.params.userId} savePhoto={this.props.savePhoto} />

        </div>
        
    }

}

// compose(connect (mapStateToProps, {getUserProfile}),withAuthRedirect, withRouter) (ProfileContainer)




let mapStateToProps = (state) => ({
    profile: getProfile(state),
    status: getStatus(state),
    authorizedUserId: getAuthorizedUserId(state),
    isAuth: getIsAuth(state),
});


// let AuthRedurectComponent = withAuthRedirect(ProfileContainer);
// let WithUrlDataContainerComponenta = withRouter(AuthRedurectComponent);

// export default connect (mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponenta);

export default compose(connect (mapStateToProps, {getUserProfile, requestStatus, updateStatus, savePhoto, saveProfile}),withRouter , 
withAuthRedirect
) (ProfileContainer);