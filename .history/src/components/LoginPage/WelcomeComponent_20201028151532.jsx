import React from 'react';
import {} from 'react-bootstrap';

class WelcomeComponent extends React.Component {
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
                        <div class="col-2">
                            <div class="sidebar">
                                <a href="#home"><i className="fa fa-fw fa-msg"></i>Messages</a>
                                <a href="#clients"><i className="fa fa-fw fa-user"></i> Users</a>
                                <a href="#contact"><i className="fa fa-fw fa-settings"></i>Settings</a>
                            </div>
                        </div>
                        <div className="col-10 pr-0">
                            <div className="container">
                                <div className="w-100">
                                    <nav className="navbar navbar-dark bg-dark justify-content-end">
                                        <button className="btn btn-outline-success logout" type="submit" onClick={this.logout.bind(this)}>Logout</button>
                                    </nav>
                                </div>
                                <div className="w-100 main-text">
                                    <p>Welcome {username}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomeComponent;