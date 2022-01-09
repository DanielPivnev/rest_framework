import React from 'react'
import {Link} from "react-router-dom";


const handleCreate = (event) => {
    return event.target.getAttribute('data-project-id');
}

const handleDelete = (event) => {
    return [event.target.getAttribute('data-todo-id'), event.target.getAttribute('data-user-id')];
}

const TodoItem = ({todo, users, delete_todo}) => {
    return (
        <ul className="list-group todo">
            <li className="list-group-item todo-header">{todo.title}</li>
            <li className="list-group-item">{todo.text}</li>
            <li className="list-group-item">Created from: {
                users.map((user) => {
                    if (user.id === todo.user) {
                        return user.first_name + ' ' + user.last_name;
                    }
                })}
            </li>
            <li className="list-group-item">Latest update at {todo.updated_timestamp}</li>
            <li className="list-group-item btn-delete btn-danger" data-todo-id={todo.id} data-user-id={todo.user}
                onClick={(event) => {
                    delete_todo(...handleDelete(event))
                }}>Delete
            </li>
        </ul>
    )
}

const TodoGroup = ({project, users, todos, set_project, delete_todo}) => {
    return (
        <div className="project-todos">
            <h3>{project.name}</h3>
            <div className="todos-group">
                {todos.map((todo) => {
                    if (todo.project === project.id && todo.active) {
                        return <TodoItem todo={todo} users={users} delete_todo={(id, todo_user_id) => {
                            delete_todo(id, todo_user_id)
                        }}/>;
                    }
                })}
            </div>
            <Link className="btn btn-light btn-todo" to="/create-todo" data-project-id={`${project.id}`}
                  onClick={(event) => {
                      set_project(handleCreate(event))
                  }}>Create todo</Link>
        </div>
    )
}

const TodoList = ({todos, projects, set_project, users, delete_todo}) => {

    return (
        <div className="todos">
            <div className="page-header"><h2>ToDo’s</h2></div>
            {projects.map((project) => <TodoGroup delete_todo={(id, todo_user_id) => {
                delete_todo(id, todo_user_id)
            }} users={users} project={project} todos={todos} set_project={set_project}/>)}
        </div>
    )
}


export default TodoList;