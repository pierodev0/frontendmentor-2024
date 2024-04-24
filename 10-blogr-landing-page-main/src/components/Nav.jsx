const Nav = () => {
  return (
    <nav className=' bg-very-light-red   py-6'>
      <div className='wrapper flex items-center justify-between'>
        <div>
          <img
            src='/public/images/logo.svg'
            alt=''
          />
        </div>
        <div>
          <img
            src='/public/images/icon-hamburger.svg'
            alt=''
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
