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
    <li className='p-8 leading-relaxed text-default'>
      <section>
        <h1 className='text-xl font-bold'>{company}</h1>
        <div className='h-1 mb-1 w-28 bg-green' />
        <h2 className='text-base'>{about}</h2>
        <h3 className='text-sm'>{role}</h3>
        <div className='text-xs'>{period}</div>
        <hr className='my-2' />
        <ul className='flex flex-col'>
          {work.map((e, idx) => (
            <li key={idx}>
              <h2 className='font-bold text-green'>{e.title}</h2>
              <ul className='flex flex-wrap gap-2 my-3'>
                {e.stack?.map((s) => (
                  <li
                    key={s}
                    className='px-2 text-xs py-0.5 border rounded-full'>
                    {s}
                  </li>
                ))}
              </ul>
              <h3 className='pl-2 text-sm'>{e.main}</h3>
              <ul className='flex flex-col gap-2 py-2 pl-6 text-xs leading-relaxed list-square'>
                {e.sub?.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              {idx === 0 && e.main && <hr className='my-2' />}
            </li>
          ))}
        </ul>
      </section>
    </li>
  );
};

export default Work;
