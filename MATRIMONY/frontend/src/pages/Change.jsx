

import React, { useState } from 'react';
import Header from '../components/HeaderAyas';

const Change = ({ Se }) => {
    const [formData, setFormData] = useState({
        password: '',
        newpass: '',
        confirm: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any field is empty
        const { password, newpass, confirm } = formData;
        if (!password || !newpass || !confirm) {
            alert('Please fill out all fields.');
            return; // Stop form submission if validation fails
        } else {
            alert('Your code is submitted');
            setFormData({
                password: '',
                newpass: '',
                confirm: '',
            });
        }

        // Proceed with form submission if all fields are filled
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header title={Se} />
            <div className=" py-4">
                <p className="font-light text-gray-700">
                    Feeling worried about your account being easily preyed on? Then change that password now!
                </p>
            </div>

            <div className="container mx-auto px-4 lg:px-8 flex-grow">
                <div className="flex justify-center">
                    <form onSubmit={handleSubmit} className="w-full max-w-md">
                        <div className="flex flex-col mb-6">
                            <label htmlFor="password" className="text-lg font-semibold mb-2 text-gray-700">
                                Current Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    className="border-b-2 border-purple-900 w-full py-2 pr-10"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <img
                                    src="/assets/Images/blackeye.webp"  // Replace with your image path
                                    alt="Icon"
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2 h-6 w-6"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col mb-6">
                            <label htmlFor="newpass" className="text-lg font-semibold mb-2 text-gray-700">
                                New Password
                            </label>
                            <div className="relative">
                                <input
                                    id="newpass"
                                    className="border-b-2 border-purple-900 w-full py-2 pr-10"
                                    type="password"
                                    name="newpass"
                                    value={formData.newpass}
                                    onChange={handleChange}
                                />
                                <img
                                    src="/assets/Images/blackeye.webp"  // Replace with your image path
                                    alt="Icon"
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2 h-6 w-6"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col mb-6">
                            <label htmlFor="confirm" className="text-lg font-semibold mb-2 text-gray-700">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    id="confirm"
                                    className="border-b-2 border-purple-900 w-full py-2 pr-10"
                                    type="password"
                                    name="confirm"
                                    value={formData.confirm}
                                    onChange={handleChange}
                                />
                                <img
                                    src="/assets/Images/blackeye.webp"  // Replace with your image path
                                    alt="Icon"
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2 h-6 w-6"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center mt-6">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-purple-900 text-white rounded-full hover:bg-purple-800 transition-colors"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Change;



