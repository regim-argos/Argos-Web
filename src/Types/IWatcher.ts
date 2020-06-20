import INotification from './INotification';

export default interface IWatcher {
  name: string;
  status: boolean;
  active: boolean;
  delay: number;
  id: number;
  url: string;
  notifications: INotification[];
}

export interface IEvent {
  status: boolean;
  startedAt: string;
  endedAt: string;
  duration: number;
}
export interface IWatcherDetail extends IWatcher {
  name: string;
  status: boolean;
  active: boolean;
  delay: number;
  id: number;
  url: string;
  notifications: INotification[];
  events: IEvent[];
}
