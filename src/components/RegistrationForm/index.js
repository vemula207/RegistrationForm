// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isInput: true,
    firstNameErr: false,
    lastNameErr: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onAnotherResponse = () => {
    this.setState({isInput: true, firstName: '', lastName: ''})
  }

  onSuccessPage = () => (
    <div className="form-container">
      <div className="success-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="tick-img"
        />
        <p className="success">Submitted Successfully</p>
        <button
          className="submit-another-btn"
          type="button"
          onClick={this.onAnotherResponse}
        >
          Submit Another Response
        </button>
      </div>
    </div>
  )

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isInput: false})
    } else {
      this.setState({
        firstNameErr: !isValidFirstName,
        lastNameErr: !isValidLastName,
        isInput: true,
      })
    }
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()
    this.setState({firstNameErr: !isValidFirstName})
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()
    this.setState({lastNameErr: !isValidLastName})
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  onRegisterForm = () => {
    const {firstName, lastName, firstNameErr, lastNameErr} = this.state
    const className = firstNameErr ? 'box error-box' : 'box'
    const classNames = lastNameErr ? 'box error-box' : 'box'

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <label htmlFor="firstName" className="name">
          FIRST NAME
        </label>
        <input
          type="text"
          value={firstName}
          id="firstName"
          className={className}
          placeholder="First Name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {firstNameErr && <p className="required">Required</p>}
        <label htmlFor="lastName" className="name">
          LAST NAME
        </label>
        <input
          type="text"
          value={lastName}
          id="lastName"
          className={classNames}
          placeholder="First Name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />

        {lastNameErr && <p className="required">Required</p>}
        <div className="button-cont">
          <button type="submit" className="submit">
            Submit
          </button>
        </div>
      </form>
    )
  }

  render() {
    const {isInput} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Registration Form</h1>
        {isInput ? this.onRegisterForm() : this.onSuccessPage()}
      </div>
    )
  }
}

export default RegistrationForm
