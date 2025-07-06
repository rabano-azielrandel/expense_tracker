import { ReactNode } from "react";

type Expense = {
  id: number;
  name: string;
  amount: number;
  icon: ReactNode;
};

type ExpenseTableProps = {
  data: Expense[];
};

export default function ExpenseTable({ data }: ExpenseTableProps) {
  return (
    <div className="bg-[#1B1B1B] border border-[#f1ecec11] rounded-lg shadow-md p-4 w-[40%]">
      <h2 className="text-xl font-bold mb-4 border-b border-[#f1ecec11] pb-2 text-white">
        Expense
      </h2>
      <div className="space-y-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-[#f1ecec11] last:border-b-0 pb-2"
          >
            <div className="flex items-center gap-8">
              <div className="text-2xl text-white">{item.icon}</div>
              <div className="font-medium text-white">{item.name}</div>
            </div>
            <div className="font-semibold text-right text-white">
              ₱ {item.amount.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
