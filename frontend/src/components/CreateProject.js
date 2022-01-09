
import React from 'react'


class CreateProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', link: '', employees: []};
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    handleUsersChange(event) {
        if (event.target.selectedOptions) {
            this.state.employees = [];

            for (let i=0; i < event.target.selectedOptions.length; i++) {
                this.state.employees.push(event.target.selectedOptions.item(i).value);
            }
        }
    }

    handleSubmit(event) {
        this.props.create_project(this.state.name, this.state.link, this.state.employees);
        event.preventDefault();
    }

    render() {
        return (
            <div className="form-create">
                <form className="form-create-area" onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                               placeholder="Enter the name of the project..." value={this.state.title} name="name"
                               autoComplete="text" onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Link</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                               placeholder="Enter the link to project..." value={this.state.title} name="link"
                               autoComplete="text" onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Employees</label>
                        <select onChange={(event) => this.handleUsersChange(event)} className="form-select form-select-sm" multiple aria-label=".form-select-sm example">
                            {this.props.users.map((user) => <option value={user.id}>{user.first_name + ' ' + user.last_name}</option>)}
                        </select>
                    </div>
                    <button type="submit" className="submit-btn btn btn-create btn-success">Create</button>
                </form>
            </div>
        );
    }
}

export default CreateProjectForm;