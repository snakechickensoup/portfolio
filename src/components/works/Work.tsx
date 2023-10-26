interface WorkProps {
  company: string;
  about: string;
  role: string;
  period: string;
  work: { title?: string; stack?: string[]; main?: string; sub?: string[] }[];
}

const Work = (props: WorkProps) => {
  const { work, company, about, role, period } = props;
  return (
    <li className='p-8 leading-relaxed sm:p-16 text-default'>
      <section>
        <h1 className='text-xl font-bold sm:text-xxl'>{company}</h1>
        <div className='h-1 mb-1 w-28 bg-green sm:w-56 sm:h-1.5 sm:mb-2' />
        <h2 className='text-base sm:text-lg'>{about}</h2>
        <h3 className='text-sm sm:text-base'>{role}</h3>
        <div className='text-xs sm:text-sm'>{period}</div>
        <hr className='my-2 sm:my-3' />
        <ul className='flex flex-col'>
          {work.map((e, idx) => (
            <li key={idx}>
              <h2 className='font-bold text-green sm:text-lg'>{e.title}</h2>
              <ul className='flex flex-wrap gap-2 my-3'>
                {e.stack?.map((s) => (
                  <li
                    key={s}
                    className='px-2 text-xs py-0.5 border rounded-full sm:text-sm'>
                    {s}
                  </li>
                ))}
              </ul>
              <h3 className='pl-2 text-sm sm:text-base'>{e.main}</h3>
              <ul className='flex flex-col gap-2 py-2 pl-6 text-xs leading-relaxed list-square sm:text-sm sm:leading-loose'>
                {e.sub?.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              {idx === 0 && e.main && <hr className='my-2 sm:my-3' />}
            </li>
          ))}
        </ul>
      </section>
    </li>
  );
};

export default Work;
