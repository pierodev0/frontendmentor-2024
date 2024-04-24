function App() {
  return (
    <>
      <main className='mx-auto max-w-[1280px] space-y-6 px-4 py-[56px]'>       
          <section className='flex flex-col md:flex-row items-center gap-6 *:flex-1 md:gap-48 lg:gap-72'>
            <div className='space-y-8'>
              <h1 className='text-5xl font-bold tracking-wide'>
                10,000+ of our users love our products.
              </h1>
              <h2>
                We only provide great products combined with excellent customer
                service. See what our satisfied customers are saying about our
                services.
              </h2>
            </div>
            <div className='flex flex-col gap-4 w-full'>
              <Reviews
                text='Rated 5 Stars in Reviews'
                className='md:-translate-x-24'
              />
              <Reviews
                text='Rated 5 Stars in Report Guru'
                className='md:-translate-x-12'
              />
              <Reviews text='Rated 5 Stars in BestTech' />
            </div>
          </section>
          <section className='flex flex-col md:flex-row md:gap-5 *:flex-1 '>
            <Card
              name='Colton Smith'
              content='"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"'
              image='/public/images/image-colton.jpg'
            />
            <Card
              name='Irene Roberts'
              content='"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."'
              image='/public/images/image-irene.jpg'
              className='translate-y-3'
            />
            <Card
              name='Anne Wallace'
              content='"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"'
              image='/public/images/image-anne.jpg'
              className='translate-y-6'
            />
          </section>
      </main>
    </>
  );
}
function Card({ name, content, image, className }) {
  return (
    <div
      className={`space-y-5 rounded-md bg-rose-800 p-5 text-white ${className}`}
    >
      <header className='flex items-center gap-6 font-bold'>
        <img
          src={image}
          alt='Imagen testimonial'
          className='rounded-full'
        />
        <div>
          <p>{name}</p>
          <p>Verified Buyer</p>
        </div>
      </header>
      <p>{content}</p>
    </div>
  );
}

function Reviews({ text, className }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <img
      key={index}
      src='/public/images/icon-star.svg'
      alt='star'
    />
  ));
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 rounded-lg md:rounded-sm bg-pink-200/30 px-6 py-3 ${className}`}
    >
      <div className='flex'>{stars}</div>
      <p className='font-bold'>{text}</p>
    </div>
  );
}
export default App;
