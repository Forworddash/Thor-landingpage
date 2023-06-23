import React from 'react';
import '../tailwind.css';

const Signup = ({ text, title }) => {
    return (
        <div className='flex flex-row justify-center my-12'>
            <div className='basis-1/2'>
                <h1 className='font-heading text-2xl font-bold'>{title}</h1>
                <p>{text}</p>
                <form className='mt-4'>
                    <div className='mb-4'>
                        <label className='block' htmlFor='name'>
                            Your Name<span className='text-red-500'>*</span>
                        </label>
                        <input
                            className='border rounded px-2 py-1'
                            type='text'
                            id='name'
                            name='name'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block' htmlFor='email'>
                            Your Email<span className='text-red-500'>*</span>
                        </label>
                        <input
                            className='border rounded px-2 py-1'
                            type='email'
                            id='email'
                            name='email'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block' htmlFor='phone'>
                            Your Phone Number
                        </label>
                        <input
                            className='border rounded px-2 py-1'
                            type='tel'
                            id='phone'
                            name='phone'
                        />
                    </div>
                    <button
                        className='bg-blue-500 text-white rounded px-4 py-2'
                        type='submit'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
