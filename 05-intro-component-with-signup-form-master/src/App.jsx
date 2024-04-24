import { useState } from 'react';

function App() {
  return (
    <>
      <main className='h-screen bg-red2 pt-[0.1px] '>
        <section className=' mt-20 flex flex-col  px-8 text-white md:mx-auto md:flex-row md:gap-12  lg:max-w-6xl'>
          <div className='flex flex-1 flex-col md:mt-32 md:h-fit'>
            <h1 className='mb-4 text-center text-3xl font-bold md:text-left md:text-5xl '>
              Learn to code by watching others
            </h1>
            <h2 className='mb-8 text-center md:mb-0 md:text-left'>
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </h2>
          </div>
          <div className='flex-1'>
            <div className='shadow-custom mb-5 rounded-md bg-blue2 px-6 py-5 text-center'>
              <b className='bold'>Try it free 7 days then</b> $20/mo. thereafter
            </div>
            <Form />
          </div>
        </section>
      </main>
    </>
  );
}
function Form() {
  const initialFormData = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  };

  const [formValues, setFormValues] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {};
    if (!formValues.firstname.trim()) {
      newErrors.firstname = 'El nombre es requerido';
    }

    if (!formValues.lastname.trim()) {
      newErrors.lastname = 'El apellido es requerido';
    }

    if (!formValues.email.trim()) {
      newErrors.email = 'El email es requerido';
    }

    if (!formValues.password.trim()) {
      newErrors.password = 'El password es requerido';
    }

    if (Object.keys(newErrors).length === 0) {
      // Aquí puedes enviar los datos del formulario
      // console.log('Datos del formulario:', formData);
      // También puedes resetear el formulario
      setFormValues(initialFormData);
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  }
  return (
    <form
      action=''
      className='flex flex-col gap-3 rounded-lg bg-white p-6'
      onSubmit={handleSubmit}
      noValidate
    >
      <InputField
        placeholder='First Name'
        name='firstname'
        onChange={handleChange}
        value={formValues.firstname}
        error={errors.firstname}
      />

      {}
      <InputField
        placeholder='Last Name'
        name='lastname'
        onChange={handleChange}
        value={formValues.lastname}
        error={errors.lastname}
      />
      <InputField
        placeholder='Email Address'
        type='email'
        name='email'
        onChange={handleChange}
        value={formValues.email}
        error={errors.email}
      />
      <InputField
        placeholder='Password'
        type='password'
        name='password'
        onChange={handleChange}
        value={formValues.password}
        error={errors.password}
      />

      <button
        className='
      shadow-custom rounded-md bg-green2 py-4 font-bold uppercase hover:bg-green-300
    '
      >
        Claim your free trial
      </button>

      <p className='mt-3 text-center text-sm text-gray-500'>
        By clicking the button, you are agreeing to our{' '}
        <span className='font-bold text-red2'>Terms and Services</span>
      </p>
    </form>
  );
}
function InputField({
  className,
  placeholder,
  type,
  value,
  onChange,
  name,
  error,
}) {
  return (
    <div className='flex flex-col items-end gap-2'>
      <label
        htmlFor=''
        className='relative w-full'
      >
        <input
          className={`
          icon-input
          w-full  rounded-md
          border-2 p-4
          font-bold text-black 
          ${error ? 'border-red-300 placeholder:text-red-400' : null}  
          ${className}`}
          type={type || 'text'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
        {error && <IconInput className='absolute right-4 top-4' />}
      </label>

      {error && <span className='italic text-red-400 '>{error}</span>}
    </div>
  );
}
function IconInput({ className }) {
  return (
    <svg
      width='24'
      height='24'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g
        fill='none'
        fillRule='evenodd'
      >
        <circle
          fill='#FF7979'
          cx='12'
          cy='12'
          r='12'
        />
        <rect
          fill='#FFF'
          x='11'
          y='6'
          width='2'
          height='9'
          rx='1'
        />
        <rect
          fill='#FFF'
          x='11'
          y='17'
          width='2'
          height='2'
          rx='1'
        />
      </g>
    </svg>
  );
}

export default App;
