import React, { useState } from 'react';



function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');





    const handleInputChange = <T extends HTMLInputElement | HTMLTextAreaElement>(
        setter: React.Dispatch<React.SetStateAction<string>>
    ) => (event: React.ChangeEvent<T>) => {
        setter(event.target.value);
    };


    return (

        <div className="bg-white/50 p-8 rounded-lg shadow-lg w-full max-w-lg justify-center">

            <h3 className=" text-2xl text-txtGreen text-center mb-5">Contact me via this form or at klaidaswik@gmail.com</h3>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-txtGreen mb-1">First Name</label>
                        <input
                            type="text"
                            id="first-name"
                            name="first-name"
                            value={firstName}
                            onChange={handleInputChange(setFirstName)}
                            required
                            className="text-txtGreen w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  transition duration-150 ease-in-out"
                        />
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-txtGreen mb-1">Last Name</label>
                        <input
                            type="text"
                            id="last-name"
                            name="last-name"
                            value={lastName}
                            onChange={handleInputChange(setLastName)}
                            required
                            className="text-txtGreen w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  transition duration-150 ease-in-out"
                        />
                    </div>



                </div>
                <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-txtGreen mb-1">Email</label>
                    <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        value={email}
                        onChange={handleInputChange(setEmail)}
                        required
                        className="text-txtGreen w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  transition duration-150 ease-in-out"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-txtGreen mb-1 ">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={message}
                        onChange={handleInputChange(setMessage)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm transition duration-150 ease-in-out resize-none text-txtGreen"
                    ></textarea>
                </div>
            </form>
        </div>



    );
}

export default ContactForm;