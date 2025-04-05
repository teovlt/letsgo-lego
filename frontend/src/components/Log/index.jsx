import React, { useState } from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

const Log = props => {
    const [signInModal, setSignInModal] = useState(props.signin)
    const [signUpModal, setSignUpModal] = useState(props.signup)

    const handleModals = () => {
        setSignInModal(!signInModal)
        setSignUpModal(!signUpModal)
    }

    return (
        <div>
            {signInModal && <SignInForm handleModals={handleModals} />}
            {signUpModal && <SignUpForm handleModals={handleModals} />}
        </div>
    )
}

export default Log
