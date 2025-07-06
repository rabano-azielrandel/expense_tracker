"use client";

import {
  FaUtensils,
  FaCar,
  FaHome,
  FaBolt,
  FaShoppingCart,
} from "react-icons/fa";
import ExpenseTable from "../_components/ExpenseTable";
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

const page = () => {
  return (
    <div className="flex flex-col h-[100%] gap-2 bg-red-500">
      <div className="flex h-[100%] bg-green-500">
        <ExpenseTable data={expenseData} />
      </div>
      {/* card challenge */}
      <div className="flex h-[100%] p-2 bg-blue-500 overflow-hidden">
        <PetCard />
      </div>
      <div className="flex h-[100%] bg-orange-500">c</div>
    </div>
  );
};

export default page;
