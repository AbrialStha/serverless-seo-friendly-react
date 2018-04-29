import React, { Component } from 'react'
import axios from 'axios'

class Subscribe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            isLoading: false,
            error: '',
            message: ''
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({ isLoading: true })
        let data = {
            email: this.state.email
        }
        axios.post('https://blogback.herokuapp.com/subscribe', data).then(
            res => {
                this.setState({
                    email: '',
                    message: 'Your subscription is sucessful',
                    isLoading: false
                })
            },
            err => {
                let data
                try {
                    data = err.response.data
                    this.setState({ error: data.msg })
                } catch (error) {
                    console.log(error)
                }
                this.setState({ isLoading: false })
            })
    }
    render() {
        const { email, message, isLoading, error } = this.state
        return (
            < div className="col-md-8 col-md-offset-2" >
                <form id="mc-form" onSubmit={this.onSubmit}>

                    <div className="subscribe-form margin-top-20">
                        <input
                            value={email}
                            onChange={this.onChange}
                            id="mc-email"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="text-input"
                        />
                        <button
                            className="submit-btn"
                            type="submit"
                            disabled={isLoading}
                        >
                            {!isLoading ? 'Submit' : 'Submitting...'}
                        </button>
                    </div>
                    <p>Subscribe to my weekly newsletter</p>
                    <label htmlFor="mc-email" className="mc-label"></label>
                </form>
                {
                    message &&
                    <div className="alert alert-success">
                        <button className="close" data-dismiss="alert" aria-label="close">&times;</button>
                        <strong>Success!</strong> {message}.
                    </div>
                }
                {
                    error &&
                    <div className="alert alert-danger">
                        <button className="close" data-dismiss="alert" aria-label="close">&times;</button>
                        <strong>Error!</strong> {error}.
                    </div>
                }

            </div >
        )
    }
}
export default Subscribe