import { useState } from "react";
import axios from "axios";

export default function Register() {

    const [organization, setOrganization] = useState('');
    const [roleName, setRoleName] = useState('');
    const [description, setDescription] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = (e: any) => {

    }

    return (
        <div className="min-h-screen bg-black">
            <div className="h-screen w-full flex flex-col place-items-center justify-evenly">
                <div className="w-2/3 border-2 border-theme-blue rounded-lg bg-cozy-gray shadow-[0_0_60px_10px_#89A8C6] p-8">
                    <form onSubmit={(e) => {handleSubmit(e)}} className="flex flex-col gap-4">
                        <h2 className="w-full text-center">Create a Volunteer Opportunity</h2>
                        <p className="text-center text-pretty">We want the volunteer opportunities featured on our website to make a positive impact on the community, so make sure to explain that in your description! </p>
                        <div>
                            <p className={`select-none ${organization != '' ? "text-white" : "text-cozy-gray"} transition-all duration-200`}>Organization</p>
                            <input 
                                type="text"
                                value={organization}
                                placeholder="Organization"
                                onChange={(e) => setOrganization(e.target.value)}
                                className="outline-none text-white text-[1.5em] bg-cozy-gray border-0 border-b-4 border-cozy-gray hover:border-theme-blue/50 focus:border-theme-blue transition-all duration-200"
                            />
                        </div>
                        <div>
                            <p className={`select-none ${roleName != '' ? "text-white" : "text-cozy-gray"} transition-all duration-200`}>Organization</p>
                            <input
                                type="text"
                                value={roleName}
                                placeholder="Role Name"
                                onChange={(e) => setRoleName(e.target.value)}
                                className="outline-none text-white text-[1.5em] bg-cozy-gray border-0 border-b-4 border-cozy-gray hover:border-theme-blue/50 focus:border-theme-blue transition-all duration-200"
                            />
                        </div>
                        <div>
                            <p className={`select-none ${description != '' ? "text-white" : "text-cozy-gray"} transition-all duration-200`}>Description</p>
                            <textarea
                                value={description}
                                placeholder="Description"
                                onChange={(e) => setDescription(e.target.value)}
                                className="outline-none text-white text-[1.5em] bg-cozy-gray border-0 border-b-4 border-cozy-gray hover:border-theme-blue/50 focus:border-theme-blue transition-all duration-200"
                            />
                        </div>
                        <div>
                            <p className={`select-none ${email != '' ? "text-white" : "text-cozy-gray"} transition-all duration-200`}>Email</p>
                            <input
                                type="text"
                                value={email}
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="outline-none text-white text-[1.5em] bg-cozy-gray border-0 border-b-4 border-cozy-gray hover:border-theme-blue/50 focus:border-theme-blue transition-all duration-200"
                            />
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    );
}