import React from 'react';
import './App.css';
import UserList from "./components/User.js";
import ProjectList from "./components/Project.js";
import TodoList from "./components/Todo.js";
import LoginForm from "./components/Auth.js";
import axios from "axios";
import {HashRouter, Link, Redirect, Route, Switch} from 'react-router-dom';
import Cookies from 'universal-cookie';
import Home from "./components/Home.js";
import CreateTodoForm from "./components/CreateTodo";
import CreateProjectForm from "./components/CreateProject";


const NotFound404 = ({location}) => {
    return (
        <div>
            <h1 className="NotFound404">Site at path '{location.pathname}' wasn't found</h1>
        </div>
    );
}

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'todos': [],
            'token': '',
            'user': '',
            'project': ''
        }
    }

    set_user(username) {
        this.state.users.map((user) => {
            if (user.username === username) {
                const cookies = new Cookies();
                cookies.set('user', user.id);
                this.setState({'user': user}, () => this.load_data());
            }
        })
    }

    get_user_from_storage() {
        const cookies = new Cookies();
        const user = cookies.get('user');
        this.setState({'user': user}, () => this.load_data());
    }

    set_project(project) {
        this.state.project = project;
        console.log(this.state.project)
    }

    create_todo(title, text) {
        if (this.is_authenticated() && !!title && !!text) {
            const headers = this.get_headers();
            const data = {
                title: title,
                text: text,
                project: this.state.project,
                user: this.state.user
            }
            console.log(data)
            axios.post('http://127.0.0.1:8000/api/todos/', data, {headers})
                .then(response => {
                    this.load_data();
                }).catch(error => console.log(error))
        } else {
            alert("You aren't login or title and text are empty...")
        }
    }

    delete_todo(id, todo_user_id) {
        if (this.is_authenticated() && this.state.user === todo_user_id) {
            const headers = this.get_headers();

            axios.delete(`http://127.0.0.1:8000/api/todos/${id}`, {headers})
                .then(response => {
                    this.load_data();
                }).catch(error => console.log(error))
        } else {
            alert("You aren't login or it isn't your todo...")
        }
    }

    delete_project(id, user_id) {
        if (this.is_authenticated() && this.state.user === user_id) {
            const headers = this.get_headers();

            axios.delete(`http://127.0.0.1:8000/api/projects/${id}`, {headers})
                .then(response => {
                    this.load_data();
                }).catch(error => console.log(error))
        } else {
            alert("You aren't login or your aren't the leader of this project...")
        }
    }

    create_project(name, link, employees) {
        if (this.is_authenticated() && !!name && !!link && employees.length > 0) {
            const headers = this.get_headers();
            const data = {
                name: name,
                link: link,
                employees: employees,
                user: this.state.user
            }
            console.log(data);
            axios.post('http://127.0.0.1:8000/api/projects/', data, {headers})
                .then(response => {
                    this.load_data();
                }).catch(error => console.log(error))
        } else {
            alert("You aren't login or some fields are empty...")
        }
    }

    set_token(token) {
        const cookies = new Cookies();
        cookies.set('token', token);
        this.setState({'token': token}, () => this.load_data());
    }

    is_authenticated() {
        return !!this.state.token;
    }

    logout() {
        this.set_token('');
        this.load_data();
        console.log(this.state.token);
    }

    get_token_from_storage() {
        const cookies = new Cookies();
        const token = cookies.get('token');
        this.setState({'token': token}, () => this.load_data());
    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password})
            .then(response => {
                this.set_token(response.data['token']);
                this.set_user(username);
            }).catch(error => alert('Неверный логин или пароль'));
    }

    get_headers() {
        let headers = {
            'Content-Type': 'application/json;',
            'Authorization': ''
        };
        if (this.is_authenticated()) {
            headers['Authorization'] = 'Token ' + this.state.token;
        }
        return headers;
    }


    load_data() {
        const headers = this.get_headers();
        console.log(headers)
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
        this.get_user_from_storage();
    }

    render() {
        return (
            <div className="App">
                <div>
                    <HashRouter>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-color main-nav navigation">
                            <a className="navbar-brand" href="#">ToDo List</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav"
                                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/'>
                                            <a className="nav-link" href="#">Home</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/todos'>
                                            <a className="nav-link" href="#">Todos</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/projects'>
                                            <a className="nav-link" href="#">Projects</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/users'>
                                            <a className="nav-link" href="#">Users</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        {
                                            this.is_authenticated() ?
                                                <Link className="nav-link">
                                                    <a className="nav-link" onClick={() => this.logout()}>Logout</a>
                                                    <Redirect to='/'/>
                                                </Link>
                                                :
                                                <Link className="nav-link" to='/login'>
                                                    <a className="nav-link" href="#">Login</a>
                                                </Link>
                                        }
                                    </li>
                                </ul>
                            </div>
                        </nav>


                        <Switch>
                            <Route exact path='/' component={() => <Home/>}/>
                            <Route exact path='/users' component={() => <UserList users={this.state.users}/>}/>
                            <Route exact path='/projects' component={() => <ProjectList
                                projects={this.state.projects} users={this.state.users}
                                delete_project={(id, user_id) => this.delete_project(id, user_id)}
                                load={() => this.load_data()}/>
                            } />
                            <Route exact path='/todos' component={() => <TodoList
                                todos={this.state.todos} projects={this.state.projects} users={this.state.users}
                                set_project={(project) => {this.set_project(project)}}
                                delete_todo={(id, todo_user_id) => {this.delete_todo(id, todo_user_id)}}/>}/>
                            <Route exact path='/create-todo' component={() => <CreateTodoForm
                                create_todo={(title, text) => this.create_todo(title, text)}/>}/>
                            <Route exact path='/create-project' component={() => <CreateProjectForm
                                create_project={(name, link, employees) => this.create_project(name, link, employees)}
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
