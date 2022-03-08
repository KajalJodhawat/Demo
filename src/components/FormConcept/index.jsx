import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function Form() {

    let history = useHistory();

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    // console.log("Email:" + Email);
    // console.log("password:" + Password);

    const submithandler = () => {
        console.log("Email:" + Email);
        console.log("Password:" + Password);
        const formdata = {
            Email: Email,
            Password: Password
        }

        if (Email == null || Email == "") {
            console.log("Email can't be blank");
        } else if (Password.length < 8) {
            console.log("Password must be at least 8");

        }
        else {
            console.log("formdata" + JSON.stringify(formdata));

            history.push("/About")

        }


    }

    return (

        <div className="form-row container">
            <div className="col-xs-4">
                <label htmlFor="inputPassword6" className="col-form-label" style={{ fontWeight: 'bold' }}>
                    E-mail
                </label>
            </div>
            <div className="col-xs-4">
                <input
                    type="E-mail"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='col-xs-4'>
                <label htmlFor="inputPassword6" className="col-form-label" style={{ fontWeight: 'bold' }} >
                    Password
                </label>
            </div>

            <div className="col-auto">
                <input
                    type="password"
                    id="inputPassword6"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    onChange={(e) => setPassword(e.target.value)}

                />
            </div>
            <button type='submit' onClick={submithandler} style={{
                width: '90px', backgroundColor: 'burlywood',
                fontFamily: 'cursive', marginTop: '10px'
            }}>
                Submit
            </button>

            {/* <div className="col-auto">
      <span id="passwordHelpInline" className="form-text">
        Must be 8-20 characters long.
      </span>
    </div> */}

        </div>
    )
}
