import React, { Component } from 'react';

/*
Nota

this.props: handleSubmit: f
this.state: {name: 'test', job:'test2'}
 */
class Form extends Component {
    initialState = {
        name: '',
        job: ''
    };

    state = this.initialState;

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        // to insert new record into the list
        this.props.handleSubmit(this.state);

        // to reset the form
        this.setState(this.initialState);
    }

    render() {
        const {name, job} = this.state;

        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange}
                />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange}
                />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;