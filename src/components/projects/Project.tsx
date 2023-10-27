import ArrowIcon from 'assets/icons/Arrow.svg?react';
import Button from 'shared/components/button/Button';
import { BUTTON_TYPES } from 'shared/components/button/constants';

interface ProjectProps {
  name: string;
  about: string;
  period: string;
  people?: string;
  stack: string[];
  link: { site: string; url: string }[];
  image: string;
  detail: { title: string; description: string; user?: string };
  works: { title?: string; work: { main: string; sub?: string[] }[] };
}

const Project = (props: ProjectProps) => {
  const { name, about, period, people, stack, link, image, detail, works } =
    props;

  const projectName = name.toLowerCase();
  return (
    <li className='p-6 leading-relaxed bg-white text-default sm:p-12 lg:px-40'>
      <h1 className='ml-2 text-xl font-bold text-center sm:text-xxl'>{name}</h1>
      <div className={`bg-${projectName} h-1 w-[60%] mb-3`} />
      <section className='sm:flex sm:justify-center'>
        <div className='flex items-center gap-8'>
          <div className='flex-1 max-w-[400px]'>
            <img src={image} alt={name} className='object-cover' />
          </div>
          <div className='flex flex-col items-center flex-1'>
            <div className='sm:text-lg'>{about}</div>
            <div className='text-xs break-words sm:text-sm'>{period}</div>
            <div className='text-sm whitespace-nowrap sm:text-base'>
              {people}
            </div>
          </div>
        </div>
        <ul className='flex justify-center gap-6 m-2 sm:flex-col sm:gap-2 sm:items-end'>
          {link.map((l) => (
            <li key={l.url}>
              <Button
                styles={BUTTON_TYPES.default}
                title={l.site}
                handleClick={() => {
                  window.open(l.url);
                }}>
                <div
                  className={`inline-flex h-4 sm:h-6 gap-1 text-sm text-default hover:text-${projectName} whitespace-nowrap sm:text-base sm:font-bold`}>
                  {l.site}
                  <ArrowIcon />
                </div>
              </Button>
            </li>
          ))}
        </ul>
      </section>

      <section className='my-4 sm:my-6'>
        <h2 className={`font-bold  text-${projectName} sm:text-lg`}>
          {detail.title}
        </h2>
        <p className='text-sm sm:text-base'>{detail.description}</p>
        <div className='text-xs sm:text-sm'>{detail.user}</div>
      </section>

      <section>
        <hr className='my-2 sm:my-3' />

        <ul className='flex flex-wrap gap-x-1 gap-y-0'>
          {stack?.map((s, idx) => (
            <li key={s} className='px-2 text-sm sm:text-base'>
              {s}
              <div className='inline-flex ml-3'>
                {stack && stack.length - 1 !== idx && '/'}
              </div>
            </li>
          ))}
        </ul>
        <hr className='my-2 sm:my-3' />
      </section>

      <section className='mt-4 sm:mt-6'>
        <h3 className='font-bold sm:text-lg'>{works.title}</h3>
        <ul>
          {works.work.map((work) => (
            <li key={work.main}>
              <div className='my-3 text-sm sm:text-base'>{work.main}</div>
              <ul className='pl-6 list-square'>
                {work.sub?.map((s) => (
                  <li
                    key={s}
                    className='text-xs leading-relaxed sm:text-sm sm:leading-loose'>
                    {s}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </li>
  );
};

export default Project;
