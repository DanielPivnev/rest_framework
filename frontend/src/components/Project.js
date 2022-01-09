import React from 'react'
import {Link} from "react-router-dom";


let search = '';

const handleDelete = (event) => {
    return [event.target.getAttribute('data-id'), event.target.getAttribute('data-user-id')];
}

const handleSearch = (event, load) => {
    search = event.target.value;
    load();
}

const ProjectItem = ({project, users, f_e, delete_project}) => {
    return (
        <li className="list-group-item">
            <div className="project">
                <div className="project-property">
                    {project.name}
                </div>
                <a href={project.project_link} className="project-property middle-property">
                    Go to project
                </a>
                <div className="project-property">
                    {project.employees.map((employee) => {
                        if (f_e) {
                            f_e = false;

                            return users.map((user) => {
                                if (user.id === employee) {
                                    return user.first_name + ' ' + user.last_name;
                                }
                            })
                        } else {
                            return users.map((user) => {
                                if (user.id === employee) {
                                    return ', ' + user.first_name + ' ' + user.last_name;
                                }
                            })
                        }
                    })}
                </div>
                <div className="btn btn-danger" onClick={(event) => {
                    delete_project(...handleDelete(event))
                }} data-id={project.id} data-user-id={project.leader}>
                    Delete
                </div>
            </div>
        </li>
    )
}

const ProjectList = ({projects, users, delete_project, load}) => {
    console.log(users);

    return (
        <ul className="list-group list-group-flush">
            <div className="page-header">
                <h2>Projects</h2>
                <input className="form-control me-2 search" type="search" placeholder="Search" aria-label="Search"
                       onChange={(event) => handleSearch(event, load)} value={search}/>
            </div>
            {projects.map((project) => {
                if (project.name.includes(search) || search === '') {
                    return <ProjectItem f_e={true} delete_project={(id, user_id) => {delete_project(id, user_id)}}
                                        project={project} users={users}/>
                }
            })}
            <Link className="btn btn-light" to="/create-project">Create project</Link>
        </ul>
    )
}


export default ProjectList;
