import { useState } from 'react';
import { emailRegex } from './util/validator';

function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function handleClick() {
    const newError = {};
    

    if (email.length === 0) {
      newError.email = 'El email es requerido';
    } else if (!emailRegex.test(email)) {
      newError.email = 'El email es invalido';
    }

    if (Object.keys(newError).length === 0) {
      setEmail('');
      setError('');
    } else {
      setError(newError);
    }
  }
  return (
    <>
      <main className='mx-auto flex h-screen flex-col px-12 pt-14 md:max-w-4xl '>
        <div className='mb-12 flex w-full justify-center p-2'>
          <img
            src='/public/images/logo.svg'
            alt='Logo Landing'
          />
        </div>
        <section className='flex-1'>
          <div className='mb-12 flex flex-col gap-5 text-center'>
            <h1 className='text-4xl font-light text-gray md:mb-2 md:text-5xl'>
              We are launching <b className='font-bold text-black'>soon</b>!
            </h1>
            <p className='text-xl md:text-2xl'>Subscribe and get notified</p>
          </div>

          <div className='mb-24 flex flex-col items-start justify-start gap-3 md:flex-row '>
            <label
              htmlFor=''
              className={`w-full space-y-3`}
            >
              <input
                type='email'
                placeholder='Your email address...'
                className={`w-full rounded-full border border-blue/75 px-8 py-3 placeholder:text-blue/75 focus:outline-blue ${error.email ? '!border-red-400 placeholder:text-red-400' : null}`}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              {error.email && (
                <p className='italic text-red-400 ml-4'>{error.email}</p>
              )}
            </label>
            <button
              className='shrink-0 rounded-full bg-blue px-12 py-3 text-white transition hover:bg-blue/70'
              onClick={handleClick}
            >
              Notify Me
            </button>
          </div>

          <div>
            <img
              src='/public/images/illustration-dashboard.png'
              alt=''
            />
          </div>
        </section>
        <footer className='text-center'>
          <p className='p-12 text-gray'>
            &copy; Copyright Ping. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
