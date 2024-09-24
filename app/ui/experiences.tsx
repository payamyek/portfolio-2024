import Timeline from './timeline/timeline';
import { TimelineItemInterface } from './timeline/types';

const experiences: Array<TimelineItemInterface> = [
  {
    startDate: new Date(2020, 0),
    endDate: new Date(2020, 11),
    jobTitle: 'Junior Systems Developer',
    jobDescription: `
      The moment where it all began. A student facing imposter syndrome enters the "real world".

      I made an application from scratch! I wanted to call it something cool but we decided on the Lookup Service, well that's what it did anyways.
      Building a backend was cool but learning React.js was even cooler and the first time I did Frontend!
    `,
    company: 'MPAC',
    position: 'left',
  },
  {
    startDate: new Date(2022, 8),
    endDate: new Date(2023, 7),
    jobTitle: 'Systems Developer',
    jobDescription: `
      After many years of schooling, I returned! I started light with bug fixes but eventually found myself in the heat of a colossal project.
      I was tasked with being the lead on a tablet application for the country of Ireland. I took some of my best tools; Electron, React, Javascript, and Python.
      After many hard months of work, I was able to satisfy an entire team of property assessors based in a different country.
    `,
    company: 'MPAC',
    position: 'right',
  },
  {
    startDate: new Date(2023, 7),
    jobTitle: 'Fullstack Developer (I.T Manager)',
    jobDescription: `
      Manager??? Do not fret. I still code but got recognition for all the hard I had put in.
      Now it was time for me to deliver a stellar prototype application to help procure Winnipeg as our new client on a multi-year multi-million dollar
      contract. We did it!! So now im continuously helping update our code-bases to align with needs of our friends in Winnipeg. Had to learn Angular as some
      of our systems did not undergo the React evolution stage :/
    `,
    company: 'MPAC',
    position: 'left',
  },
];

export default function Experiences() {
  return (
    <div className='p-5'>
      <Timeline data={experiences} />
    </div>
  );
}
