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
      Building a backend was cool but learning React.js was even cooler and the first time I did frontend!
    `,
    company: 'MPAC',
    position: 'left',
  },
  {
    startDate: new Date(2022, 8),
    endDate: new Date(2023, 7),
    jobTitle: 'Systems Developer',
    jobDescription: `
      I returned after many years of schooling! I started light with bug fixes but eventually found myself in the heat of a colossal project.
      I became the lead on a tablet app project for the country of Ireland. I took some of the best tools; Electron, React, Javascript, and Python to whip up a marvelous gadget.
      After many hard months of work, we were able to put a smile on our Irish friends.
    `,
    company: 'MPAC',
    position: 'right',
  },
  {
    startDate: new Date(2023, 7),
    jobTitle: 'Fullstack Developer (I.T Manager)',
    jobDescription: `
      Manager??? Do not fret. I still code but got rewarded for all the hard work I had put in.
      Now I needed to deliver a stellar prototype application to help procure Winnipeg as our new client on a multi-million dollar
      contract. We did it!! So now I'm continuously modifying our code-bases to align with needs of our friends in Winnipeg. Had to learn Angular as some
      of our systems did not undergo the React evolution :(
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
