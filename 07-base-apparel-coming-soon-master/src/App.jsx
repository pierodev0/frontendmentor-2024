import { useState } from 'react';
import { emailRegex } from './util/validator';

function App() {
  const [errors, setErrors] = useState('');
  const [email, setEmail] = useState('');

  const newError = {};
  if (!email.trim().length) {
    newError.email = 'El campo email esta vacio';
  } else if (!emailRegex.test(email))
    newError.email = 'El email ingresado no es valido';
  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(newError).length === 0) {
      setErrors('');
      setEmail('');
    } else {
      setErrors(newError);
    }
  }

  return (
    <>
      <main className='max-w-8xl h-screen sm:flex'>
        <section className='flex flex-col gap-5 sm:flex-1 sm:px-10 sm:py-20 lg:px-48'>
          <nav className='px-4 py-6 sm:p-0 '>
            <div className=''>
              <img
                src='/public/images/logo.svg'
                alt='Logo web'
                className='h-6'
              />
            </div>
          </nav>

          <div className='sm:hidden'>
            <img
              src='/public/images/hero-mobile.jpg'
              alt=''
              className='w-full sm:h-screen sm:object-cover'
            />
          </div>

          <div className='flex-1 space-y-6 px-10 text-center  sm:flex  sm:flex-col  sm:justify-center  sm:px-0 sm:text-left'>
            <h1 className=' text-4xl font-bold uppercase tracking-[.2em] sm:text-5xl  sm:tracking-[.4em]'>
              <span className='font-light text-desaturated-red'>We're</span>{' '}
              coming soon
            </h1>
            <p className='leading-5 text-desaturated-red'>
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
            <form
              className='space-y-2'
              onSubmit={handleSubmit}
            >
              <label
                htmlFor=''
                className='relative block'
              >
                <input
                  type='text'
                  placeholder='Email Address'
                  className={`w-full rounded-full border border-desaturated-red px-6 py-2.5 placeholder:text-desaturated-red focus:outline-none ${errors.email ? "!border-red-500 border-2" : null}`}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <img
                  src='/public/images/icon-error.svg'
                  className={`absolute right-20 top-3 sm:right-24 ${!errors.email ? 'hidden' : null}`}
                  alt=''
                />
                <button type='submit'>
                  <img
                    src='/public/images/icon-arrow.svg'
                    alt=''
                    className='absolute right-0  top-0 h-full rounded-full bg-desaturated-red px-7 py-3 hover:bg-soft-red sm:px-9'
                  />
                </button>
              </label>
              {errors.email && (
                <p className='px-6 text-left text-sm text-red-400 absolute'>
                  {errors.email}
                </p>
              )}
            </form>
          </div>
        </section>

        <div className='hidden sm:block sm:w-2/5'>
          <img
            src='/public/images/hero-desktop.jpg'
            className='h-full w-full object-cover'
            alt=''
          />
        </div>
      </main>
    </>
  );
}

export default App;
