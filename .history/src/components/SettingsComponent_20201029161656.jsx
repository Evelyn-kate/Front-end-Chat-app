import React from 'react';
import NavComponent from './NavComponent';
import SideComponent from './SideComponent';



class SettingsComponent extends React.Component {
    logout() {
        this.props.history.push('/logout');
    }
    render(){
        const {username} = this.props.match.params;
        console.log(username);
        return (
            <div>

                <div class="container-fluid">
                    <div class="row">
                        {/* <!-- The sidebar --> */}
                        <div class="col-3">
                            <div>
                                <SideComponent />
                            </div>
                        </div>
                        <div className="col-9 pr-0">
                           
                                {/*navbar component*/}
                               <NavComponent />
                                
                               <div className="container">
                                    <div className="panel panel-info">
                                        <div className="panel-heading">
                                            <h3> Settings</h3>
                                            <hr/>
                                        </div>

                                        <div className="panel-body">
                                       
                                            <div className="card bg-light mb-3">
                                                <div className="card-header">
                                                    GENERAL SETTINGS
                                                </div>
                                                <div className="card-body">
                                                    <p className="card-text">Message font size</p>
                                                    <p className="card-text">Text Message Limit.</p><br/>
                                                </div>
                                            </div>

                                            <div className="card bg-light mb-3">
                                                <div className="card-header">
                                                    SMS SETTINGS
                                                </div>
                                                <div className="card-body">
                                                    <p className="card-text">Request Delivery Report                         <input type="radio"/> </p><br/>
                                                    <p className="card-text">Edit Quick Text.</p><br/>
                                                    <p className="card-text">SMS Storage Location.</p><br/>
                                                    
                                                </div>
                                            </div>
                               
                                            <div className="card bg-light mb-3">
                                                <div className="card-header">
                                                    NOTIFICATIONS
                                                </div>
                                                <div className="card-body">
                                                    <input type="radio"/> Pop-Up Screen<br/>
                                                    <input type="radio"/> Message Notifications<br/>
                                                    <input type="radio"/> Mute<br/>
                                                    <input type="radio"/> Vibrate<br/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default SettingsComponent;