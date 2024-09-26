import { useEffect, useState } from "react";
import Deal from "./entities/deal/deal.interface";
import DealCard from "./entities/deal/ui/DealCard";
import fetchDealDetails from "./entities/deal/api/fetchDealDetails";
import fetchDeals from "./entities/deal/api/fetchDeals";
import Spinner from "./Spinner";

const FETCH_DELAY = 1000;
const DEALS_PER_BATCH = 3;

const App = () => {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [queue, setQueue] = useState<number[]>([]);

  useEffect(() => {
    const loadDeals = async () => {
      try {
        const dealsData = await fetchDeals();
        setDeals(dealsData);
        setQueue(dealsData.map((deal) => deal.id));
      } catch (error) {
        console.error("Failed to load deals:", error);
      }
    };

    loadDeals();
  }, []);

  const fetchDealDetailsFromQueue = async (dealIds: number[]) => {
    setLoading(true);
    try {
      const dealDetailsPromises = dealIds.map((id) => fetchDealDetails(id));
      const dealDetailsResults = await Promise.all(dealDetailsPromises);

      setDeals((prevDeals) =>
        prevDeals.map((deal) => {
          const updatedDeal = dealDetailsResults.find((d) => d.id === deal.id);
          return updatedDeal ? { ...deal, ...updatedDeal } : deal;
        })
      );
    } catch (error) {
      console.error("Failed to load deal details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (queue.length > 0 && !loading) {
      const timer = setTimeout(() => {
        const dealIds = queue.slice(0, DEALS_PER_BATCH);
        setQueue((prevQueue) => prevQueue.slice(DEALS_PER_BATCH));
        fetchDealDetailsFromQueue(dealIds);
      }, FETCH_DELAY);

      return () => clearTimeout(timer);
    }
  }, [queue, loading]);

  const handleDealClick = (deal: Deal) => setSelectedDeal(deal);

  return (
    <section className="screen">
      <div className="table_wrapper">
        <div className="table_header">
          <h1>Ваши сделки</h1>
          <p>
            Просматривайте информацию о сделках, для дополнительной информации
            нажмите на строку в таблице
          </p>
        </div>
        {loading ? (
          <div className="spinner_wrapper">
            <Spinner />
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Номер</th>
                <th>Название</th>
                <th>Бюджет</th>
              </tr>
            </thead>
            <tbody>
              {deals.map((deal) => (
                <tr key={deal.id} onClick={() => handleDealClick(deal)}>
                  <td>{deal.id}</td>
                  <td>{deal.name}</td>
                  <td>{deal.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <DealCard deal={selectedDeal} loading={loading} />
    </section>
  );
};

export default App;
