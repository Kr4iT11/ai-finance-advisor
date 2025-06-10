import TransactionList from "../modules/transactions/TransactionList";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center">Dashboard</h2>
        <TransactionList />
      </div>
    </div>
  );
}

export default Dashboard;
