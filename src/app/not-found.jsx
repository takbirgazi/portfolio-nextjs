"use client"

import Link from 'next/link';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='flex flex-col gap-5 items-center justify-center'>
                <h2 className='font-bold text-4xl text-center text-gray-200'>404 | Page Not Found</h2>
                <Link className='text-center font-bold border border-gray-700 rounded-md px-3 py-1 text-gray-200 bg-gradient-to-tr to-gray-800 from-slate-950' href="/">Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;