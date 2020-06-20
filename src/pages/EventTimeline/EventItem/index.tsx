import React from 'react';
import { TimelineSeparator, TimelineConnector } from '@material-ui/lab';
import { Typography, Paper } from '@material-ui/core';
import { parseISO, format } from 'date-fns';
import {
  TimelineDotStyled,
  TimelineItemStyled,
  TimelineContentStyled,
} from './styles';

// import { Container } from './styles';
interface EventItemProps {
  status: boolean;
  startTime: string;
}

const EventItem: React.FC<EventItemProps> = ({ status, startTime }) => {
  return (
    <TimelineItemStyled eventstatus={status}>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDotStyled eventstatus={status} />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContentStyled eventstatus={status}>
        <Paper style={{ padding: '20px' }} elevation={3}>
          <Typography variant="h6" component="h1">
            {status ? 'Up' : 'Down'}
          </Typography>
          <Typography>
            {format(parseISO(startTime), 'HH:mm dd/MM/yyyy')}
          </Typography>
        </Paper>
      </TimelineContentStyled>
    </TimelineItemStyled>
  );
};

export default EventItem;
