import TimelineItem from './timeline-item';
import { TimelineItemInterface } from './types';

interface TimelineProps {
  data: Array<TimelineItemInterface>;
}

export default function Timeline(props: Readonly<TimelineProps>) {
  return (
    <ul className='timeline timeline-vertical timeline-snap-icon max-md:timeline-compact'>
      {props.data.map((timelineItem: TimelineItemInterface) => (
        <TimelineItem
          key={timelineItem.startDate.toString()}
          {...timelineItem}
        />
      ))}
    </ul>
  );
}
