function App() {
  return (
    <>
      <main className='px-8 py-16'>
        <section className='flex flex-col gap-12'>
          <div className='space-y-4 text-center'>
            <h1 className='text-2xl font-light'>
              Reliable, efficient delivery
              <br />
              <b className='font-bold'>Powered by Technology</b>
            </h1>
            <p className='text-gray-500'>
              Our Artificial Intelligence powered tools use millions of project
              data points to ensure that your project is successful
            </p>
          </div>

          <div className='mx-auto flex flex-col gap-6 *:flex-1  md:flex-row  md:items-center md:justify-center'>
            <div>
              <Card
                title='Supervisor'
                content='Monitors activity to identify project roadblocks'
                className='border-emerald-500'
                src='/public/images/icon-supervisor.svg'
              />
            </div>
            <div>
              <Card
                title='Team Builder'
                content='Scans our talent network to create the optimal team for your project'
                className='border-red-400'
                src='/public/images/icon-team-builder.svg'
              />
              <Card
                title='Karma'
                content='Regularly evaluates our talent to ensure quality'
                className='border-yellow-400'
                src='/public/images/icon-karma.svg'
              />
            </div>
            <div>
              <Card
                title='Calculator'
                content='Uses data from past projects to provide better delivery estimates'
                className='border-blue-400'
                src='/public/images/icon-calculator.svg'
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Card({ title, content, className, src }) {
  return (
    <article
      className={`max-w-[400px] space-y-6 rounded-md border-t-[5px]  p-6 shadow-xl ${className}`}
    >
      <h3 className='text-2xl font-bold'>{title}</h3>
      <p>{content}</p>
      <img
        src={src}
        alt=''
        className='ml-auto'
      />
    </article>
  );
}

export default App;
