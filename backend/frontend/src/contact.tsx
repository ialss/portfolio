import React, { useState } from 'react';



function ContactForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState<{ [key: string]: string[] }>({});




    const handleInputChange = <T extends HTMLInputElement | HTMLTextAreaElement>(
        setter: React.Dispatch<React.SetStateAction<string>>
    ) => (event: React.ChangeEvent<T>) => {
        setter(event.target.value);
    
        const fieldName = event.target.name;
        setErrors(prevErrors => {
            const newErrors = { ...prevErrors };
            delete newErrors[fieldName]; 
            return newErrors;
        });
    };

    const postContact = async () => {
        const contactData = {
            firstName,
            lastName,
            email,
            message
        };
        try {
            const response = await fetch("http://127.0.0.1:8000/api/contacts/post/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contactData),
            });

            const data = await response.json()

            if (!response.ok) {
                setErrors(data);
            } else {
                setErrors({});
            }

        } catch (err) {
            console.log(err)
        }

    };


    return (

        <div className="bg-white/50 p-8 rounded-lg shadow-lg w-full max-w-lg justify-center">

            <h3 className=" text-2xl text-txtGreen text-center mb-5">Contact me via this form or at klaidaswik@gmail.com</h3>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); postContact(); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-txtGreen mb-1">First Name</label>
                        <input
                            type="text"
                            id="first-name"
                            name="firstName"
                            value={firstName}
                            onChange={handleInputChange(setFirstName)}
                            required
                            className="text-txtGreen w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                        <div className = "h-4">
                    {errors.firstName && errors.firstName.map((msg, i) => (
                        <label key={i} className="text-red-500 text-sm ml-0.5">{msg}</label>
                    ))}
                    </div>
                    </div>
                
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-txtGreen mb-1">Last Name</label>
                        <input
                            type="text"
                            id="last-name"
                            name="lastName"
                            value={lastName}
                            onChange={handleInputChange(setLastName)}
                            required
                            className="text-txtGreen w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                        <div className = "h-4">
                    {errors.lastName && errors.lastName.map((msg, i) => (
                        <label key={i} className="text-red-500 text-sm ml-0.5">{msg}</label>
                    ))}
                    </div>
                    </div>



                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-txtGreen mb-1">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange(setEmail)}
                        required
                        className="text-txtGreen w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                    <div className = "h-4">
                    {errors.email && errors.email.map((msg, i) => (
                        <label key={i} className="text-red-500 text-sm ml-0.5">{msg}</label>
                    ))}
                    </div>

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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm resize-none text-txtGreen"
                    ></textarea>
                </div>

                <button type="submit" className=" block mx-auto text-txtGreen w-fit px-10 py-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-200 outline">Send</button>
            </form>
        </div>



    );
}

export default ContactForm;