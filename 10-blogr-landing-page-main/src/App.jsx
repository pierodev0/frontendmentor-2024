import Article from './components/Article';
import Hero from './components/Hero';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero />

        <section className='wrapper'>
          <h2 className='my-12 text-center text-2xl font-bold'>
            Designed for the future
          </h2>

          <div className="md:flex">
            <div>
              <img
                src='/public/images/illustration-editor-mobile.svg'
                alt=''
              />
            </div>
            <div className='my-12 space-y-12'>
              <Article
                title='Introducing an extensible editor '
                content=' Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                  change the looks of a blog.'
              />
              <Article
                title='Robust content management'
                content='Flexible content management enables users to easily move through posts. Increase the usability of your blog
                    by adding customized categories, sections, format, or flow. With this functionality, you’re in full control. '
              />
            </div>
          </div>
        </section>

        <section className='rounded-tr-bl relative mt-64 bg-very-dark-desaturated-blue pb-32 pt-48'>
          <div className='absolute top-0 -translate-y-1/2 '>
            <img
              src='/public/images/illustration-phones.svg'
              alt=''
            />
          </div>

          <article className='wrapper space-y-6 text-center text-white '>
            <h2 className='text-4xl font-bold'>
              State of the Art Infrastructure
            </h2>
            <p>
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </article>
        </section>

        <section className='wrapper my-12'>
          <div>
            <img
              src='/public/images/illustration-laptop-mobile.svg'
              alt=''
            />
          </div>
          <div className='space-y-6'>
            <Article
              title='Free, open, simple'
              content='
              Blogr is a free and open source application backed by a large community of helpful developers. It supports
              features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
              and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.'
            />
            <Article
              title='Powerful tooling'
              content='
              Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
              capable of producing even the most complicated sites.
        '
            />
          </div>
        </section>
      </main>
      <footer className='bg-very-dark-blue text-white text-center py-12 rounded-tr-[80px]'>
        <h3 className='text-5xl font-bold mb-12'>Blog</h3>
        <div className='space-y-4 py-4'>
          <h3 className='text-xl font-bold'>Product</h3>

          <ul className='space-y-2'>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div className='space-y-4 py-4'>
          <h3 className='text-xl font-bold'>Company</h3>

          <ul className='space-y-2'>
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className='space-y-4 py-4'>
          <h3 className='text-xl font-bold'>Connect</h3>

          <ul className='space-y-2'>
          <li>Contact</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
       

      </footer>
    </>
  );
}

export default App;
