export interface TimelineItemInterface {
  startDate: Date;
  endDate?: Date /** if present job => do not include */;
  jobDescription: string;
  jobTitle: string;
  company: string;
  position: 'left' | 'right';
}
