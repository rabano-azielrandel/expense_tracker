"use client";

import {
  FaUtensils,
  FaCar,
  FaHome,
  FaBolt,
  FaShoppingCart,
} from "react-icons/fa";
import ExpenseTable from "../_components/ExpenseTable";
import RecentTransactions from "../_components/RecentTransactionTable";
import PetCard from "../_components/PetCard";
import React from "react";

const expenseData = [
  {
    id: 1,
    name: "Groceries",
    amount: 1500,
    icon: <FaShoppingCart className="text-green-600" />,
  },
  {
    id: 2,
    name: "Rent",
    amount: 10000,
    icon: <FaHome className="text-blue-600" />,
  },
  {
    id: 3,
    name: "Electricity",
    amount: 1200,
    icon: <FaBolt className="text-yellow-500" />,
  },
  {
    id: 4,
    name: "Dining Out",
    amount: 18000,
    icon: <FaUtensils className="text-pink-500" />,
  },
  {
    id: 5,
    name: "Car Maintenance",
    amount: 2500,
    icon: <FaCar className="text-gray-600" />,
  },
];

const transactionsData = [
  {
    id: 1,
    category: "Food & Dining",
    name: "Cookies and Milk from Supermarket",
    status: "Completed",
    amount: 120.5,
  },
  {
    id: 2,
    category: "Transportation",
    name: "Bus Ticket to Downtown",
    status: "Pending",
    amount: 45.0,
  },
  {
    id: 3,
    category: "Hygiene",
    name: "Hand Soap and Toothpaste",
    status: "Completed",
    amount: 85.75,
  },
  {
    id: 4,
    category: "Entertainment",
    name: "Online Movie Rental",
    status: "Failed",
    amount: 1500.0,
  },
  {
    id: 5,
    category: "Utilities",
    name: "Monthly Water Bill",
    status: "Completed",
    amount: 310.25,
  },
  {
    id: 6,
    category: "Groceries",
    name: "Vegetables, Fruits, and Snacks",
    status: "Completed",
    amount: 642.9,
  },
];

const page = () => {
  return (
    <main className="w-full py-10 rounded-lg">
      <div className="flex flex-col h-[100%] gap-8 bg-[#0B0B0B] px-10 py-10 rounded-lg">
        <div className="flex justify-between gap-8 h-[100%]">
          <ExpenseTable data={expenseData} />
          <RecentTransactions data={transactionsData} />
        </div>
        {/* card challenge */}
        <div className="flex h-[100%] p-2 bg-[#1B1B1B] border border-[#f1ecec11] overflow-hidden rounded-lg">
          <PetCard />
        </div>
        <div className="flex h-[100%] bg-[#1B1B1B] border-2 border-[#f1ecec11] rounded-lg">
          c
        </div>
      </div>
    </main>
  );
};

export default page;
