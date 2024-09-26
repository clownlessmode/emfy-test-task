interface Deal {
  id: number;
  name: string;
  price: number;
  created_at: number;
  closest_task_at?: number;
}
export default Deal;
