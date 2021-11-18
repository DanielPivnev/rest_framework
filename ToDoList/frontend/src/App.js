import React from 'react';
import './App.css';
import UserList from "./components/User.js";
import axios from "axios";
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import ProjectList from "./components/Project.js";
import TodoList from "./components/Todo";

const NotFound404 = ({location}) => {
    return (
        <div>
            <h1>Страница по адресу '{location.pathname}' не найдена</h1>
        </div>
    )
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


    componentDidMount() {

        axios.get('http://127.0.0.1:8000/api/users/')
            .then(
                response => {
                    const users = response.data;

                    this.setState(
                        {
                            'users': users
                        }
                    )
                }).catch(e => {
            console.log(e)
        })

        axios.get('http://127.0.0.1:8000/api/projects/')
            .then(
                response => {
                    const projects = response.data;

                    this.setState(
                        {
                            'projects': projects.results
                        }
                    )
                }).catch(e => {
            console.log(e)
        })

        axios.get('http://127.0.0.1:8000/api/todos/')
            .then(
                response => {
                    const todos = response.data;

                    this.setState(
                        {
                            'todos': todos.results
                        }
                    )
                }).catch(e => {
            console.log(e)
        })

    }

    render() {
        return (
            <div className="App">
                <div>
                    <HashRouter>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-color">
                            <div className="container-fluid">
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
                                                <a className="nav-link" href="#">ToDo‘s</a>
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
                                    </ul>
                                </div>
                            </div>
                        </nav>


                        <Switch>
                            <Route exact path='/users' component={() => <UserList users={this.state.users}/>}/>
                            <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}
                                                                                        users={this.state.users}/>}/>
                            <Route exact path='/todos' component={() => <TodoList todos={this.state.todos}
                                                                                  projects={this.state.projects}
                                                                                  users={this.state.users}/>}/>
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
        )
    }
}


export default App;
