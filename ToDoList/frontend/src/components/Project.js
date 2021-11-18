import React from 'react'


const ProjectItem = ({project, users}) => {
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
                    {project.employees.map((employee1) => {
                        let employee = users.find((user) => {
                            if (user.id === employee1.id) {
                                return user
                            }
                        })

                        if (project.employees[-1] !== employee.id) {
                            return employee.first_name + ' ' + employee.last_name + ', ';
                        } else {
                            return employee.first_name + ' ' + employee.last_name;
                        }
                    })}
                </div>
            </div>
        </li>
    )
}

const ProjectList = ({projects, users}) => {
    console.log(users);

    return (
        <ul className="list-group list-group-flush">
            <div className="page-header"><h2>Projects</h2></div>
            {projects.map((project) => <ProjectItem project={project} users={users}/>)}
        </ul>
    )
}


export default ProjectList;
