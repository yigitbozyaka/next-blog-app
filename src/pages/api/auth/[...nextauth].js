import NextAuth, { NexthAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const options = {
    session: {
        strategy: 'jwt',
    },
    secret: process.env.AUTH_SECRET,
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'me@email.com' },
                password: { label: 'Password', type: 'password' }
            },
            authorize: async (credentials) => {
                const { email, password } = credentials;
    
                if (email !== 'fadimenurgulmez0@gmail.com' || password !== '123456') {
                    throw new Error('Email or password is incorrect');
                }
    
                return { id: 1, name: 'Fadime Nur Gülmez', email: 'fadimenurgulmez0@gmail.com' };
            }
        })
    ],

    pages: {
        signIn: '/auth/signin',
    },
}

export default (req, res) => NextAuth(req, res, options);