import { useState, FormEvent } from "react";
import axios from "axios";
import { set } from "@project-serum/anchor/dist/cjs/utils/features";

export default function Register() {

    const [organization, setOrganization] = useState('');
    const [roleName, setRoleName] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!organization || !roleName || !description || !email || !phoneNumber || !city) {
            setErrorMessage('Please fill in all required fields.');
            return;
        }

        const validateEmail = (email: string) => {
            // Use a regex to validate the email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        if (!validateEmail(email)) {
            setEmailError('Invalid email address.');
            return;
        } else {
            setEmailError('');
        }

        try {
            const registrationResponse = await axios.post(`/api/create-opportunity`, { organization: organization, roleName: roleName, description: description, email: email, phoneNumber: phoneNumber, city: city });

            if (registrationResponse.status === 201) {                
                setOrganization('');
                setRoleName('');
                setDescription('');
                setEmail('');
                setPhoneNumber('');
                setCity('');
            }

        } catch (error: any) {
            setErrorMessage(error.message);
            console.log(error.message);
        }
    }

    return (
        <div className="min-h-screen bg-black">
            <div className="h-screen w-full flex flex-col place-items-center justify-evenly">
                <div className="w-2/3 border-2 border-theme-blue rounded-lg bg-cozy-gray shadow-[0_0_60px_10px_#89A8C6] p-8">
                    <form className="flex flex-col gap-4">
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
                                required
                            />
                        </div>
                        <div>
                            <p className={`select-none ${roleName != '' ? "text-white" : "text-cozy-gray"} transition-all duration-200`}>Role Name</p>
                            <input
                                type="text"
                                value={roleName}
                                placeholder="Role Name"
                                onChange={(e) => setRoleName(e.target.value)}
                                className="outline-none text-white text-[1.5em] bg-cozy-gray border-0 border-b-4 border-cozy-gray hover:border-theme-blue/50 focus:border-theme-blue transition-all duration-200"
                                required
                            />
                        </div>
                        <div>
                            <p className={`select-none ${description != '' ? "text-white" : "text-cozy-gray"} transition-all duration-200`}>Description</p>
                            <textarea
                                value={description}
                                placeholder="Description"
                                onChange={(e) => setDescription(e.target.value)}
                                className="outline-none text-white text-[1.5em] bg-cozy-gray border-0 border-b-4 border-cozy-gray hover:border-theme-blue/50 focus:border-theme-blue transition-all duration-200"
                                required
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
                                required
                            />
                        </div>
                        <div>
                            <p className={`select-none ${phoneNumber != '' ? "text-white" : "text-cozy-gray"} transition-all duration-200`}>Phone Number</p>
                            <input
                                // type="tel"
                                value={phoneNumber}
                                placeholder="Phone Number"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="outline-none text-white text-[1.5em] bg-cozy-gray border-0 border-b-4 border-cozy-gray hover:border-theme-blue/50 focus:border-theme-blue transition-all duration-200"
                                required
                            />
                        </div>
                        <div>
                            <p className={`select-none ${city != '' ? "text-white" : "text-cozy-gray"} transition-all duration-200`}>City</p>
                            <input
                                // type="tel"
                                value={city}
                                placeholder="City"
                                onChange={(e) => setCity(e.target.value)}
                                className="outline-none text-white text-[1.5em] bg-cozy-gray border-0 border-b-4 border-cozy-gray hover:border-theme-blue/50 focus:border-theme-blue transition-all duration-200"
                                required
                            />
                        </div>
                        <div className="w-full flex justify-center my-8">
                            <button onClick={(e) => {handleSubmit(e)}} className="text-theme-blue border-2 border-theme-blue rounded-lg p-8 hover:bg-theme-blue hover:text-white transition-all duration-200">
                                <h2>Publish</h2>
                            </button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    );
}