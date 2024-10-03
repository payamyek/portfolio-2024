import Timeline from './timeline/timeline';
import { TimelineItemInterface } from './timeline/types';

const experiences: Array<TimelineItemInterface> = [
  {
    startDate: new Date(2020, 0),
    endDate: new Date(2020, 11),
    jobTitle: 'Junior Systems Developer',
    jobDescription: `
      I made an application from scratch! I wanted to call it something cool but we decided on the "Lookup Service", well that's what it did anyways.
      Building a backend was cool but learning React.js was even cooler!
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
      I became the lead on a tablet project for Ireland. I took some of the best tools; Electron, React, Javascript, and Python to whip up a marvelous gadget.
      After many hard months of work, we were able to put a smile on our Irish friends.
    `,
    company: 'MPAC',
    position: 'right',
  },
  {
    startDate: new Date(2023, 7),
    jobTitle: 'Fullstack Developer (I.T Manager)',
    jobDescription: `
      Manager??? Do not fret. I still code but was rewarded for all of my hard work.
      Then I needed to deliver a stellar prototype system to procure Winnipeg as our new client on a multi-million dollar
      contract. We did it!! So now I'm continuously modifying our code-bases to align with needs of our friends in Winnipeg.
    `,
    company: 'MPAC',
    position: 'left',
    animate: true,
  },
];

export default function Experiences() {
  return (
    <div className='flex flex-col'>
      <h1 className='mb-5 text-4xl md:mb-16'>Experiences</h1>
      <Timeline data={experiences} />
    </div>
  );
}
