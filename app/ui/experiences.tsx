import { TimelineItemInterface } from './timeline/types';

const experiences: Array<TimelineItemInterface> = [
  {
    startDate: new Date(2020, 0),
    endDate: new Date(2020, 11),
    jobTitle: 'Junior Systems Developer',
    jobDescription: `
      I made an application from scratch! I wanted to call it something cool but we decided on the "Lookup Service", well that's what it did anyways.
      Building a REST API was cool but learning React.js was even cooler!
    `,
    company: 'MPAC',
    position: 'left',
  },
  {
    startDate: new Date(2022, 8),
    endDate: new Date(2023, 7),
    jobTitle: 'Systems Developer',
    jobDescription: `
      I returned to find myself in the midst of a colossal project.
      I became the lead on the tablet project for Ireland. I took some of the best tools; Electron, React, and Python to whip up a marvelous application which put a smile on our Irish colleagues.`,
    company: 'MPAC',
    position: 'right',
  },
  {
    startDate: new Date(2023, 7),
    jobTitle: 'Fullstack Developer',
    jobDescription: `
      It was time to participate in a company-wide effort to procure the city of Winnipeg as our second commercial client!
      Our team put on a spectacular demonstration which procured the city of Winnipeg on a multi-year multi-million dollar contract.

     I now found myself in charge of the frontend and backend systems for our friends in Winnipeg :)
    `,
    company: 'MPAC',
    position: 'left',
    animate: true,
  },
];

export default function Experiences() {
  return (
    <div className='flex flex-col'>
      <h1 className='mb-4 text-4xl'>Experiences</h1>
      <hr />
      <div className='card mt-4 w-full'>
        <div className='card-body px-0'>
          <h2 className='card-title'>{experiences[0].jobTitle}</h2>
          <p>{experiences[0].jobDescription}</p>
        </div>
      </div>
    </div>
  );
}
