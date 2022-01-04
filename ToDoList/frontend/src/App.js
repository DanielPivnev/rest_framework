import React from 'react';
import './App.css';
import UserList from "./components/User.js";
import ProjectList from "./components/Project.js";
import TodoList from "./components/Todo";
import LoginForm from "./components/Auth.js";
import axios from "axios";
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import Cookies from 'universal-cookie';


const NotFound404 = ({location}) => {
    return (
        <div>
            <h1>Страница по адресу '{location.pathname}' не найдена</h1>
        </div>
    );
}

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'todos': []
        }
    }

    set_token(token) {
        const cookies = new Cookies();
        cookies.set('token', token);
        this.setState({'token': token});
    }

    is_authenticated() {
        return this.state.token !== '';
    }

    logout() {
        this.set_token('');
    }

    get_token_from_storage() {
        const cookies = new Cookies();
        const token = cookies.get('token');
        this.setState({'token': token});
    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password})
            .then(response => {
                this.set_token(response.data['token']);
            }).catch(error => alert('Неверный логин или пароль'));
    }

    get_headers() {
        let headers = {
            'Content-Type': 'application/json'
        }
        if (this.is_authenticated()) {
            headers['Authorization'] = 'Token ' + this.state.token;
        }
        return headers;
    }


    load_data() {

        const headers = this.get_headers()
        axios.get('http://127.0.0.1:8000/api/users/', {headers})
            .then(
                response => {
                    const users = response.data;

                    this.setState(
                        {
                            'users': users
                        }
                    )
                }).catch(e => {
            console.log(e);
        });

        axios.get('http://127.0.0.1:8000/api/projects/', {headers})
            .then(
                response => {
                    const projects = response.data;

                    this.setState(
                        {
                            'projects': projects.results
                        }
                    )
                }).catch(e => {
            console.log(e);
        });

        axios.get('http://127.0.0.1:8000/api/todos/', {headers})
            .then(
                response => {
                    const todos = response.data;

                    this.setState(
                        {
                            'todos': todos.results
                        }
                    )
                }).catch(e => {
            console.log(e);
        });
    }

    componentDidMount() {
        this.get_token_from_storage();
        this.load_data();
    }

    render() {
        return (
            <div className="App">
                <div>
                    <HashRouter>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-color main-nav">
                            <a className="navbar-brand" href="#">ToDo List</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav"
                                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to='/'>
                                            <a className="nav-link active" href="#">Home</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/todos'>
                                            <a className="nav-link" href="#">Todos</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/projects'>
                                            <a className="nav-link" href="#">Projects</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/users'>
                                            <a className="nav-link" href="#">Users</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/login'>
                                            {this.is_authenticated() ?
                                                <a className="nav-link" onClick={() => this.logout()}>Login</a>
                                                :
                                                <Link to='/login'><a className="nav-link" href="#">Login</a></Link>
                                            }
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>


                        <Switch>
                            <Route exact path='/users' component={() => <UserList users={this.state.users}/>}/>
                            <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}
                                                                                        users={this.state.users}/>}/>
                            <Route exact path='/todos' component={() => <TodoList todos={this.state.todos}
                                                                                  projects={this.state.projects}
                                                                                  users={this.state.users}/>}/>
                            <Route exact path='/login' component={() => <LoginForm
                                get_token={(username, password) => this.get_token(username, password)}/>}/>
                            <Route component={NotFound404}/>
                        </Switch>
                    </HashRouter>
                </div>

                <footer className="bg-light text-center text-lg-start">
                    <div className="text-center p-3 footerH">
                        © 2021 ToDo List
                    </div>
                </footer>
            </div>
        );
    }
}


export default App;
