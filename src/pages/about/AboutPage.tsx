import { tags } from 'assets/options';

const AboutPage = () => {
  return (
    <main className='p-4 bg-default h-main'>
      <article className='h-full bg-white'>
        <section className='flex flex-col items-center justify-center p-6'>
          <div className='w-32 h-32 overflow-hidden border rounded-full sm:w-40 sm:h-40 border-default'>
            <img
              alt='user-avatar'
              src={'src/assets/images/avatar.png'}
              className='block object-cover w-full h-full '
            />
          </div>
          <p className='w-full mt-4 text-xs'>
            안녕하세요. <br />
            프론트엔드 개발자 강미정입니다. <br />
            MBTI는 비밀입니다. <br />
            궁금하면 연락주세요.
          </p>
        </section>
        <hr className='mx-4' />
        <section className='p-6'>
          <ul className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <li className='px-2 py-0.5 text-sm border rounded-full border-default'>
                {tag}
              </li>
            ))}
          </ul>
        </section>
        <hr className='mx-4' />
        <section className='p-6 text-sm'>
          <div>Kang Mijeong</div>
          <div>jagarmj@gmail.com</div>
          <div>01055203868</div>
        </section>
      </article>
    </main>
  );
};

export default AboutPage;
