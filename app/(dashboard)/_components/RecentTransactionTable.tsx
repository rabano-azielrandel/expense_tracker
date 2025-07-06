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
    <div className="w-[60%] bg-[#1B1B1B] border border-[#f1ecec11] rounded-lg shadow-md p-4">
      {/* Title */}
      <h1 className="text-xl font-bold mb-4 border-b border-[#f1ecec11] pb-2 text-white">
        Recent Transactions
      </h1>

      {/* Data Rows */}
      {/* Scrollable area limited to ~5 rows */}
      <div className="space-y-4 overflow-y-auto max-h-[200px] scroll-hidden">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-[#f1ecec11] last:border-b-0 pb-2"
          >
            <div className="w-1/4 truncate text-white font-light">
              {item.category}
            </div>
            <div className="w-3/5 truncate text-white font-light">
              {item.name}
            </div>
            <div className="w-1/5 flex items-center justify-center">
              <span
                className={`
                  min-w-[80px] text-center px-2 py-0.5 text-xs font-medium rounded-md
                  ${
                    item.status === "Completed" ? "bg-green-500 text-white" : ""
                  }
                  ${item.status === "Pending" ? "bg-yellow-500 text-black" : ""}
                  ${item.status === "Failed" ? "bg-red-500 text-white" : ""}
                `}
              >
                {item.status}
              </span>
            </div>
            <div className="w-1/5 text-right text-white font-semibold">
              ₱{item.amount.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
