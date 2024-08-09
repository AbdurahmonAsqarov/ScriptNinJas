import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const formRef = useRef();
    const navigate = useNavigate();
    const handlePost = async () => {
        const formData = new FormData(formRef.current);
        const new_user = {
            username: formData.get('username'),
            password: formData.get('password'),
        };

        try {
            const response = await fetch('https://sunnatakbarov0104.pythonanywhere.com/api/v1/login/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(new_user)
            });
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.access);
                localStorage.setItem('username', new_user.username);
                navigate('/Ish', { replace: true });
                window.location.reload();
            } else {
                console.error('Failed to log in:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="h-[100%] flex items-center justify-center log overflow-hidden">
            <div className="bg-[rgba(254,254,254,0.18)] border-[2px] border-[rgba(254,254,254,0.5)] p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
                <form ref={formRef}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handlePost}
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
