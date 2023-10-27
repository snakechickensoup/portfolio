import { tags } from 'assets/options';

const AboutPage = () => {
  return (
    <main className='p-4 bg-default h-main sm:p-8 md:p-20'>
      <article className='h-full bg-white md:flex md:items-center'>
        <section className='flex flex-col items-center justify-center p-6 sm:p-10'>
          <div className='w-32 h-32 overflow-hidden border rounded-full sm:w-40 sm:h-40 border-default md:w-60 md:h-60'>
            <img
              alt='user-avatar'
              src={
                'https://github.com/snakechickensoup/portfolio/blob/main/src/assets/images/avatar.png?raw=true'
              }
              className='block object-cover w-full h-full '
            />
          </div>
          <p className='w-full mt-4 text-xs sm:text-sm'>
            안녕하세요. <br />
            프론트엔드 개발자 강미정입니다. <br />
            MBTI는 비밀입니다. <br />
            궁금하면 연락주세요.
          </p>
        </section>
        <hr className='mx-4 md:border-l md:h-[80%] ' />
        <div>
          <section className='p-6 sm:p-10'>
            <ul className='flex flex-wrap gap-2 sm:gap-3'>
              {tags.map((tag) => (
                <li
                  className='px-2 py-1 text-sm border rounded-full sm:text-base border-default'
                  key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </section>
          <hr className='mx-4 md:mr-8' />
          <section className='p-6 text-sm sm:text-base sm:p-10'>
            <div>Kang Mijeong</div>
            <div>jagarmj@gmail.com</div>
            <div>010-5520-3868</div>
          </section>
        </div>
      </article>
    </main>
  );
};

export default AboutPage;
