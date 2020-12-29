import React from 'react';
// import ProfileCSS from './ProfileInfo.module.css';
// import Preloader from '../../Common/Preloader/Preloader';

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
        
    }
    // if (!props.profile) {
    //     return <Preloader />
    // }

    componentDidUpdate (prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
      //debugger
      // let b = this.state;
       // let a =this.props;
    }
    render() {
        return (<>
            <div>
                {!this.state.editMode &&
                    <span onDoubleClick= {this.activateEditMode}> {this.props.status || "Нет статуса"}</span>
                }
            </div>
            <div>
                {this.state.editMode &&
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur= {this.deactivatedEditMode} value={this.state.status} />
                }
            </div>
        </>);
    }

}
export default ProfileStatus;