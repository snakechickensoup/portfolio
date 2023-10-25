const AboutPage = () => {
  return (
    <main className='p-4 bg-default h-main'>
      <article className='h-full bg-white'>
        <section className='flex items-center justify-center p-8'>
          <div className='overflow-hidden rounded-full w-28 h-28 bg-green'>
            <img
              alt='user-avatar'
              src={'src/assets/images/avatar.png'}
              className='block object-cover w-full h-full '
            />
          </div>
        </section>
        <section></section>
        <hr />
        <section></section>
        <hr />
        <section></section>
      </article>
    </main>
  );
};

export default AboutPage;
