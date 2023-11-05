'use client'
import React, { useState } from 'react';
import Link from "next/link"
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameError('');
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        setMessageError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nameValue = name;
        const emailValue = email;
        const messageValue = message;

        setNameError('');
        setEmailError('');
        setMessageError('');
        let formIsValid = true;

        if (!nameValue) {
            setNameError('*');
            formIsValid = false;
        } else {
            setNameError('');
        }

        if (!emailValue) {
            setEmailError('*');
            formIsValid = false;
        } else {
            setEmailError('');
        }

        if (!messageValue) {
            setMessageError('*');
            formIsValid = false;
        } else {
            setMessageError('');
        }

        if (formIsValid) {
            setIsLoading(true);

            const data = {
                name: nameValue,
                email: emailValue,
                message: messageValue,
            };

            console.log('Data to be sent:', data);

            try {

                await fetch("/api/contact", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                setName('');
                setEmail('');
                setMessage('');

                setSuccessMessage('Message sent successfully!');
                setTimeout(() => {
                    setSuccessMessage('');
                }, 5000);
                e.target.reset();
                setIsLoading(false);
            } catch (err) {
                console.log(err);
                setIsLoading(false);
            }
        } else {
            return;
        }


    };

    return (
        <div className='flex flex-col md:flex-row w-screen items-center py-16'>
            <div className='w-full md:w-1/2 items-center md:items-start flex flex-col px-16 py-16 md:pl-24 md:pr-16'>
                <h2 className="text-[20px] font-averiabold">IDEAS?</h2>
                <h1 className='text-4xl lg:text-6xl'>GET IN TOUCH</h1>
                <div className="w-[75%] h-[0.5px] mb-4 bg-rose-100" />
                <Link href='https://github.com/saboiii' className='flex text-xs flex-row items-center rounded-full pl-1 pr-2 py-1 hover:bg-[#331d25] transition duration-300 text-rose-200 font-pridimed'>
                    <AiFillGithub size={24} className='mr-2'/>
                    GitHub
                </Link>
            </div>

            <div className='w-full md:w-1/2 md:items-start flex flex-col px-16 md:pr-24 md:pl-0'>
                <form onSubmit={handleSubmit}>
                    <label className='font-taviraj text-xs mb-1 text-rose-100'>
                        NAME
                    </label>
                    <input
                        type="text"
                        name="name"
                        className={`w-full font-pridilight bg-gradient-to-r from-[#120c0e] to-[#1b0f13] text-rose-200 placeholder-rose-300 placeholder-opacity-30 px-4 p-2 rounded-2xl focus:outline-none transition ease-out duration-500 text-xs mb-2 ${(nameError) ? 'border-[0.5px] border-rose-200 animate-shake' : ''}`}
                        placeholder="Your name..."
                        value={name}
                        onChange={handleNameChange}
                    />

                    <label className='font-taviraj text-xs mb-1 text-rose-100'>
                        EMAIL
                    </label>
                    <input
                        type="email"
                        name="email"
                        className={`w-full font-pridilight bg-gradient-to-r from-[#120c0e] to-[#1b0f13] text-rose-200 placeholder-rose-300 placeholder-opacity-30 px-4 p-2 rounded-2xl focus:outline-none transition ease-out duration-500 text-xs mb-2 ${(emailError) ? 'border-[0.5px] border-rose-200 animate-shake' : ''}`}
                        placeholder="Your email..."
                        value={email}
                        onChange={handleEmailChange}
                    />

                    <label className='font-taviraj text-xs text-rose-100 mb-1'>
                        MESSAGE
                    </label>
                    <textarea
                        name="message"
                        className={`w-full font-pridilight bg-gradient-to-r from-[#120c0e] to-[#1b0f13] text-rose-200 placeholder-rose-300 placeholder-opacity-30 px-4 p-2 rounded-2xl focus:outline-none transition ease-out duration-500 text-xs mb-2 ${(messageError) ? 'border-[0.5px] border-rose-200 animate-shake' : ''}`}
                        placeholder="Your message..."
                        rows={4}
                        value={message}
                        onChange={handleMessageChange}
                    />
                    <button
                        className={`bg-gradient-to-b from-[#51343e] to-[#462732] transition duration-300 hover:scale-105 px-4 py-1 rounded-full font-averiabold text-rose-100 ${isLoading ? 'cursor-not-allowed' : ''
                            }`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'PROCESSING' : 'SUBMIT'}
                        {isLoading && (
                            <svg aria-hidden="true" class="inline w-4 h-4 ml-2 mb-1 animate-spin text-[#583641] fill-rose-200" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        )}
                    </button>
                </form>

                <div className="text-emerald-400 text-xs font-pridimedium my-4">
                    {successMessage && <p>{successMessage}</p>}
                </div>
            </div>


        </div>
    )
}

export default Contact