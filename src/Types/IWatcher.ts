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
