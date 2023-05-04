import React, {useState} from "react";

export default function FunctionGreeting() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const handleFirstNameChange = (firstName) => {
        setFirstName(firstName);
    }
    const handleLastNameChange = (lastName) => {
        setLastName(lastName)
    }
    return (
        <div className={"container"}>
            <h1 className={"d-flex justify-content-center my-3"}>Enter name</h1>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">First Name</span>
                <input type="text" className="form-control" placeholder="First Name" aria-label="Username"
                       aria-describedby="basic-addon1"
                       value={firstName}
                       onChange={firstName => handleFirstNameChange(firstName.target.value)}/>
            </div>
            <br/>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">First Name</span>
                <input type="text" className="form-control" placeholder="Last Name" aria-label="Username"
                       aria-describedby="basic-addon1"
                       value={lastName}
                       onChange={lastName => handleLastNameChange(lastName.target.value)}/>
            </div>
            <p>
                Hello,{' '}
                <span>
                        {firstName} {lastName}
                    </span>
            </p>
        </div>
    )
}