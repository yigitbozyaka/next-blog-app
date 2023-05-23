import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function SignIn() {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });
    const handleEmailChange = (e) => {
        setUserInfo({ ...userInfo, email: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setUserInfo({ ...userInfo, password: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await signIn("credentials", {
            email: userInfo.email,
            password: userInfo.password,
            redirect: {
                destination: "/admin",
            },
            callbackUrl: "/admin",

        });

        console.log(res)
    };
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center space-y-4">
            <h1 className="text-2xl font-bold underline text-center">
                Sign In
            </h1>
            <div className="container mx-auto flex items-center justify-center">
                <form className="flex flex-col gap-4 w-1/3">
                    <input
                        className='border-2 border-gray-400 p-2 rounded-lg'
                        type="email"
                        value={userInfo.email}
                        placeholder="johndoe@gmail.com"
                        onChange={handleEmailChange}
                    />
                    <input
                        className='border-2 border-gray-400 p-2 rounded-lg'
                        type="password"
                        value={userInfo.password}
                        placeholder="********"
                        onChange={handlePasswordChange}
                    />
                    <input
                        className='cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg'
                        type="submit"
                        value="Login"
                        onClick={handleSubmit}
                    />
                </form>
            </div>
        </div>
    )
}