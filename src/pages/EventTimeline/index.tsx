import React, { useEffect } from 'react';
import Timeline from '@material-ui/lab/Timeline';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { watcherDetailRequest } from 'store/modules/watcher/actions';
import ArgosReduxStates from 'Types/ArgosReduxStates';
import { IWatcherDetail } from 'Types/IWatcher';
import EventItem from './EventItem';

import { Container } from './styles';

const EventTimeline: React.FC = () => {
  const { projectId, id } = useParams();

  const dispatch = useDispatch();

  const watcher = useSelector<ArgosReduxStates, IWatcherDetail | undefined>(
    (state) => state.watcher.watcherDetail
  );

  useEffect(() => {
    dispatch(watcherDetailRequest(projectId, id));
  }, [dispatch, id, projectId]);

  return (
    <Container>
      <Timeline align="alternate">
        {watcher?.events.map((event) => (
          <EventItem
            key={event.startedAt}
            status={event.status}
            startTime={event.startedAt}
          />
        ))}
      </Timeline>
    </Container>
  );
};

export default EventTimeline;
