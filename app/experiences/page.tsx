interface ExperienceInterface {
  startDate: Date;
  endDate: Date;
  jobDescription: string;
  jobTitle: string;
  company: string;
}

const experiences: Array<ExperienceInterface> = [
  {
    startDate: new Date(2023, 7),
    endDate: new Date(2025, 5),
    jobTitle: 'Fullstack Developer & I.T Manager',
    jobDescription: `
      It was time to participate in a company-wide effort to procure the city of Winnipeg as our second commercial client!
      Our team put on a spectacular demonstration which procured the city of Winnipeg on a multi-year multi-million dollar contract.

     I then found myself in charge of the frontend and backend systems for our friends in Winnipeg :)
    `,
    company: 'Municipal Property Assessment Corporation',
  },
  {
    startDate: new Date(2022, 8),
    endDate: new Date(2023, 7),
    jobTitle: 'Systems Developer',
    jobDescription: `
      I returned to find myself in the midst of a colossal project.
      I became the lead on the tablet project for Ireland. I took some of the best tools; Electron, React, and Python to whip up a marvelous application which put a smile on our Irish colleagues.`,
    company: 'Municipal Property Assessment Corporation',
  },
  {
    startDate: new Date(2020, 0),
    endDate: new Date(2020, 11),
    jobTitle: 'Junior Systems Developer',
    jobDescription: `
      I made an application from scratch! I wanted to call it something cool but we decided on the "Lookup Service", well that's what it did anyways.
      Building a REST API was cool but learning React.js was even cooler!
    `,
    company: 'Municipal Property Assessment Corporation',
  },
];

export default function Experiences() {
  return (
    <div className='flex flex-col'>
      {experiences.map((it) => (
        <div
          className='card'
          key={it.startDate.toString()}
        >
          <div className='card-body'>
            <h2 className='card-title'>{it.jobTitle}</h2>
            <h3 className='italic'> {it.company} </h3>
            <h4>
              {it.startDate.toLocaleDateString('en-US')} -{' '}
              {it.endDate.toLocaleDateString('en-US')}
            </h4>
            <p>{it.jobDescription}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
