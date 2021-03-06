import React from 'react';

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
                    <div class="col-2">
                    
                    </div>
                    <div className="col-10 pr-0">
                            <div className="container">
                                <div className="w-100">
                                    <nav className="navbar navbar-dark bg-dark">
                                        <button className="btn btn-outline-success" type="submit" onClick ={this.logout.bind(this)}>Logout</button> 
                                    </nav>
                                </div>
                                <p3>
                                    <span className="font-weight-bolder">Welcome {username}</span>
                                </p3>
                            </div>
                    </div>
                </div>
                </div>
            </div>
            
        );
    }
}

export default WelcomeComponent;