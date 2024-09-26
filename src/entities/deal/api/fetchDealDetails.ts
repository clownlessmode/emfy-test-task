import apiClient from "../../../shared/api/baseApi";
import Deal from "../deal.interface";

const fetchDealDetails = async (dealId: number): Promise<Deal> => {
  const response = await apiClient.get(`leads/${dealId}`);
  return response.data;
};
export default fetchDealDetails;
