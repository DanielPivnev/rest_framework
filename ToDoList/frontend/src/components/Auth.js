import React from 'react'


class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {username: '', password: ''};
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    handleSubmit(event) {
        this.props.get_token(this.state.username, this.state.password);
        // console.log(this.state.username, this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <div className="form">
                <form className="form-area" onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="form-group form-part">
                        <label className="label" htmlFor="exampleInputEmail1">Username</label>
                        <input type="text" className="form-control" placeholder="Username"
                               name="username" value={this.state.username} autoComplete="username"
                               onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div className="form-group form-part">
                        <label className="label" htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" placeholder="Password"
                               name="password" value={this.state.password} autoComplete="password"
                               onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <button type="submit" className="submit-btn btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;