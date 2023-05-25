import React from 'react'

function CustomEmail() {
  return (
    <div className="email">
        <form action="#">
            <p>Want us to contact you?</p>
            <div className="form-box">
                <input type="email" name='email' placeholder='Email' required />
                <button type='submit'>Join</button>
            </div>
        </form>
    </div>
  )
}

export default CustomEmail