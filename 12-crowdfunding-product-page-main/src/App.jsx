import Modal from './components/Modal';

function Pledge() {
  return (
    <div className='border-2 border-gray-200 px-5 py-6 rounded-xl'>
      <div>
      <div className='flex gap-3'>
        <p className='font-bold'>Pledge with no reward</p>
        <p className='text-teal-500 font-bold'>Pledge $25 or more</p>
        <p className='ml-auto'><span className='font-bold text-2xl'>101</span>left</p>
      </div>
      <p>
        Choose to support us without a reward if you simply believe in our
        project. As a backer, you will be signed up to receive product updates
        via email.
      </p>
      </div>
      <div>
        
      </div>
    </div>
  );
}
function App() {
  return (
    <>
      <Modal>
        <p className='text-2xl font-bold'>Back this project</p>
        <p className='text-gray-600'>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <Pledge />
      </Modal>
      <header className="h-[300px] bg-[url('/public/images/image-hero-desktop.jpg')] bg-cover">
        <nav className='wrapper flex h-[80px] w-full items-center justify-between'>
          <picture>
            <img
              src='/images/logo.svg'
              alt=''
              className=' '
            />
          </picture>
          <ul className='flex gap-6 text-white'>
            <li>
              <a href='#'> About</a>
            </li>
            <li>
              <a href='#'> Discover</a>
            </li>
            <li>
              <a href='#'> Get Started</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className=' mx-auto max-w-4xl -translate-y-24 space-y-8 rounded-lg p-8'>
          <Wrapper>
            <img
              src='/public/images/logo-mastercraft.svg'
              className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2'
              alt=''
            />
            <h1 className='mb-4 mt-2 text-center text-2xl font-bold'>
              Mastercraft Bamboo Monitor Riser
            </h1>
            <h2 className='mb-6 text-center text-gray-500'>
              {' '}
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain.
            </h2>
            <div className='flex   justify-between gap-4 sm:flex-row'>
              <button className='w-full rounded-full bg-teal-500 px-8 py-3 font-medium text-white sm:w-fit'>
                {' '}
                Back this project
              </button>
              <div className='relative flex shrink-0 items-center rounded-full bg-gray-200 sm:px-7'>
                <img
                  src='/public/images/icon-bookmark.svg '
                  alt=''
                  className='h-full sm:absolute sm:left-0'
                />
                <p className='hidden pl-7 font-bold text-gray-500 sm:block'>
                  Bookmark
                </p>
              </div>
            </div>
          </Wrapper>
          <Wrapper>
            <div className='mb-6 flex flex-col items-center gap-3 space-y-3 divide-y-2 divide-gray-300 *:flex-1 sm:flex-row sm:gap-0 sm:divide-x-2 sm:divide-y-0'>
              <div className='sm:pl-0'>
                <p className='mb-2 text-4xl font-bold'>
                  {' '}
                  $89,914 <br />
                </p>
                <span className='text-lg text-gray-400'>
                  of $100,000 backed
                </span>
              </div>
              <div className='pt-10 sm:pl-10 sm:pt-0'>
                <p className='mb-2 text-4xl font-bold '>
                  5,007 <br />
                </p>
                <span className='text-lg text-gray-400'>total backers</span>
              </div>
              <div className='pt-10 sm:pl-10 sm:pt-0'>
                <p className='mb-2 text-4xl font-bold'>
                  56 <br />
                </p>
                <span className='text-lg text-gray-400'>days left</span>
              </div>
            </div>
            <div className='h-2 rounded-full bg-gray-300'>
              <div className='h-full w-5/6 rounded-full bg-teal-500'></div>
            </div>
          </Wrapper>

          <Wrapper>
            <h3 className='mb-6 mt-6 text-xl font-bold sm:mt-0'>
              About this project
            </h3>

            <p className='mb-2 text-gray-400'>
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
            </p>

            <p className='mb-2 text-gray-400 last:mb-0'>
              Featuring artisan craftsmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads, pens, and
              USB sticks to be stored under the stand.
            </p>
            <div className='space-y-5 py-5'>
              <Card
                title='Bamboo Stand'
                pledge='$25'
                content=" You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list."
                stock={101}
              />

              <Card
                title='Bamboo Stand'
                pledge='$25'
                content=" You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list."
                stock={64}
              />

              <Card
                title='Mahogany Special Edition'
                pledge='$200'
                content=" You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list."
                stock={0}
              />
            </div>
          </Wrapper>
        </section>
      </main>
    </>
  );
}

function Wrapper({ children }) {
  return (
    <article className='relative rounded-xl bg-white p-5 shadow-md sm:p-10'>
      {children}
    </article>
  );
}

function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`"bg-teal-500 rounded-full bg-teal-500 px-8 py-3 font-medium text-white ${className}`}
    >
      {' '}
      {children}
    </button>
  );
}

function Card({ title, pledge, content, stock }) {
  return (
    <article
      className={`space-y-4 rounded-lg border-2 border-gray-200 px-5 py-6 sm:px-6 sm:py-8 ${stock !== 0 ? null : 'opacity-50'}`}
    >
      <div className='flex flex-col gap-2 sm:flex-row sm:justify-between'>
        <h4 className='text-xl font-bold'>{title}</h4>
        <p className={`font-medium text-teal-500 `}>Pledge {pledge} or more</p>
      </div>
      <p className='text-gray-400'>{content}</p>
      <div className='flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between'>
        <p className='text-gray-400'>
          <span className='text-3xl font-bold text-black'>{stock}</span> left
        </p>
        <Button className={stock !== 0 ? null : 'bg-gray-500'}>
          {stock !== 0 ? 'Select Reward' : 'Out of stock'}
        </Button>
      </div>
    </article>
  );
}

export default App;
