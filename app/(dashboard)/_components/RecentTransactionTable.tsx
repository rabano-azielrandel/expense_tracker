import { ReactNode } from "react";

type Transactions = {
  id: number;
  category: string;
  name: string;
  status: ReactNode;
  amount: number;
};

type RecentTransactionProps = {
  data: Transactions[];
};

export default function RecentTransactionTable({
  data,
}: RecentTransactionProps) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-md p-4 w-[40%]">
      <h1 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2 text-white">
        Recent Transactions
      </h1>

      <div className="space-y-4"></div>
    </div>
  );
}
