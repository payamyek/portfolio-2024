import React from 'react';
import {
  SiPython,
  SiPandas,
  SiJavascript,
  SiAngular,
  SiDocker,
  SiElectron,
  SiNumpy,
  SiModin,
  SiSpringboot,
  SiTypescript,
  SiReact,
  SiBootstrap,
} from 'react-icons/si';

interface ExperienceInterface {
  startDate: Date;
  endDate: Date;
  jobDescription: string;
  jobTitle: string;
  company: string;
  technologies?: React.JSX.Element[];
}

const experiences: Array<ExperienceInterface> = [
  {
    startDate: new Date(2023, 7),
    endDate: new Date(2025, 4),
    jobTitle: 'Fullstack Developer',
    jobDescription: `
     I participated in a company-wide initiative to secure the City of Winnipeg as our second commercial client!
     Our team delivered a remarkable demonstration that led to a multi-million dollar contract with the city.
     This deal became the catalyst for launching our new Commercial division, which wouldn't have existed without it.
     As a result, I found myself overseeing both the frontend and backend systems for our partners in Winnipeg. :)
    `,
    company: 'Municipal Property Assessment Corporation',
    technologies: [
      <SiPython key='python' />,
      <SiPandas key='pandas' />,
      <SiJavascript key='javascript' />,
      <SiAngular key='angular' />,
      <SiDocker key='docker' />,
      <SiElectron key='electron' />,
      <SiNumpy key='numpy' />,
      <SiModin key='modin' />,
      <SiSpringboot key='springboot' />,
      <SiTypescript key='typescript' />,
    ],
  },
  {
    startDate: new Date(2022, 8),
    endDate: new Date(2023, 7),
    jobTitle: 'Systems Developer',
    jobDescription: `
      I found myself in the midst of a colossal project.
      I was the lead on the cross-platform tablet project for Ireland. I took some of the best tools in the shed; Electron, React, and Python to whip up a marvelous application which put a smile on our Irish colleagues.`,
    company: 'Municipal Property Assessment Corporation',
    technologies: [
      <SiPython key='python' />,
      <SiReact key='react' />,
      <SiJavascript key='javascript' />,
      <SiDocker key='docker' />,
      <SiElectron key='electron' />,
      <SiSpringboot key='springboot' />,
    ],
  },
  {
    startDate: new Date(2020, 0),
    endDate: new Date(2020, 11),
    jobTitle: 'Junior Systems Developer',
    jobDescription: `
      In my first job, I made an full-stack application from scratch! I wanted to call it something cool but we decided on the "Lookup Service", well that's what it did anyways.
      Building a REST API was cool but learning React.js was even cooler!
    `,
    company: 'Municipal Property Assessment Corporation',
    technologies: [
      <SiPython key='python' />,
      <SiReact key='react' />,
      <SiJavascript key='javascript' />,
      <SiBootstrap key='bootstrap' />,
      <SiDocker key='docker' />,
      <SiSpringboot key='springboot' />,
    ],
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
              {it.startDate.toLocaleString('default', { month: 'long' })}{' '}
              {it.startDate.getFullYear()} -{' '}
              {it.endDate.toLocaleString('default', { month: 'long' })}{' '}
              {it.endDate.getFullYear()}
            </h4>
            <p>{it.jobDescription}</p>
            <div className='mt-4 flex flex-wrap gap-4 text-3xl'>
              {it.technologies}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
