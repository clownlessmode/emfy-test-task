import apiClient from "../../../shared/api/baseApi";
import Deal from "../deal.interface";

const fetchDeals = async (): Promise<Deal[]> => {
  const response = await apiClient.get("leads", {});
  return response.data._embedded.leads;
};
export default fetchDeals;
