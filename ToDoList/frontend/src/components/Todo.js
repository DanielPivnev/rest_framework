import React from 'react'


const TodoItem = ({todo, users}) => {
    return (
        <ul className="list-group">
            <li className="list-group-item todo-header">{ todo.title }</li>
            <li className="list-group-item">{ todo.text }</li>
            <li className="list-group-item">Created from: {users.map((user) => {
                user = users.find((user) => user.id === todo.user);

                return user.first_name + ' ' + user.last_name;
            })}
            </li>
            <li className="list-group-item">Latest update at { todo.updated_timestamp }</li>
        </ul>
    )
}

const TodoGroup = ({todos, project, users}) => {
    return (
        <div className="project-todos">
            <h3>{project.name}</h3>
            {todos.map((todo) => {
                todo = todos.find((todo) => todo.project === project.id);

                return <TodoItem todo={todo}/>})}
        </div>
    )
}

const TodoList = ({todos, projects, users}) => {

    return (
       <div className="todos">
            <div className="page-header"><h2>ToDo’s</h2></div>
           {projects.map((project) => {
               return <TodoGroup project={project} todos={todos} users={users}/>
           })}
       </div>
    )
}


export default TodoList;