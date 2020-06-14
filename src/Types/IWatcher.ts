import INotification from './INotification';

export default interface IWatcher {
  name: string;
  status: boolean;
  active: boolean;
  id: number;
  url: string;
  notifications: INotification[];
}
