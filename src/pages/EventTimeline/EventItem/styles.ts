import styled from 'styled-components';
import {
  TimelineDot,
  TimelineDotProps,
  TimelineItemProps,
  TimelineItem,
  TimelineContent,
  TimelineContentProps,
} from '@material-ui/lab';

interface TimelineDotStyledProp extends TimelineDotProps {
  eventstatus: boolean;
}

interface TimelineItemStyledProp extends TimelineItemProps {
  eventstatus: boolean;
}

interface TimelineContentStyledProp extends TimelineContentProps {
  eventstatus: boolean;
}

export const TimelineDotStyled = styled(TimelineDot)`
  background-color: ${({ eventstatus }: TimelineDotStyledProp) =>
    eventstatus ? '#44B04C' : '#C5474B'} !important;
`;

export const TimelineItemStyled = styled(TimelineItem)`
  flex-direction: ${({ eventstatus }: TimelineItemStyledProp) =>
    eventstatus ? 'row' : 'row-reverse'} !important;
`;

export const TimelineContentStyled = styled(TimelineContent)`
  text-align: ${({ eventstatus }: TimelineContentStyledProp) =>
    eventstatus ? 'left' : 'right'} !important;
`;
