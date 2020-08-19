export default interface INotification {
  platform: string;
  platformData: {
    webhook: string;
  };
  active: boolean;
  id: number;
  name: string;
}
