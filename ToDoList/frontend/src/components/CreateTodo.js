import React from 'react'
import {Redirect} from "react-router-dom";


class CreateTodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {title: '', text: '', created: false};
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    handleSubmit(event) {
        this.props.create_todo(this.state.title, this.state.text);
        this.state.created = true;
        event.preventDefault();
    }

    render() {
        return (
            <div className="form-create">
                <form className="form-create-area" onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                               placeholder="Enter the title of the todo..." value={this.state.title} name="title"
                               autoComplete="text" onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Text</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" name="text"
                                  placeholder="Enter the todo..." value={this.state.text} autoComplete="text"
                                  onChange={(event) => this.handleChange(event)}/>
                    </div>
                    {this.state.created ?
                        <Redirect to="/"/>
                        :
                        <button type="submit" className="submit-btn btn btn-create btn-success">Create</button>
                    }
                </form>
            </div>
        );
    }
}

export default CreateTodoForm;