// CustomersTable.tsx
"use client";
import { Eye, Trash2 } from "lucide-react";
import { cn } from "../lib/utils";
import { useCustomerStore } from "../store/useCustomerStore";
import toast from "react-hot-toast";
import { deleteCustomer } from "../lib/api";

export interface Customer {
  id: string;
  name: string;
  phone: string;
  qty: number;
  totalSpend: number;
  status: "active" | "inactive";
}

const defaultCustomers: Customer[] = [
  {
    id: "CUST001",
    name: "John Doe",
    phone: "09056789046",
    qty: 25,
    totalSpend: 2400000,
    status: "active",
  },
  {
    id: "CUST002",
    name: "John Doe",
    phone: "09056789046",
    qty: 42,
    totalSpend: 1200000,
    status: "active",
  },
  {
    id: "CUST003",
    name: "John Doe",
    phone: "09056789046",
    qty: 5,
    totalSpend: 2850000,
    status: "active",
  },
  {
    id: "CUST004",
    name: "John Doe",
    phone: "09056789046",
    qty: 30,
    totalSpend: 300000,
    status: "active",
  },
  {
    id: "CUST005",
    name: "John Doe",
    phone: "09056789046",
    qty: 51,
    totalSpend: 1000000,
    status: "inactive",
  },
  {
    id: "CUST006",
    name: "John Doe",
    phone: "09056789046",
    qty: 23,
    totalSpend: 2400000,
    status: "inactive",
  },
  {
    id: "CUST007",
    name: "John Doe",
    phone: "09056789046",
    qty: 17,
    totalSpend: 1200000,
    status: "active",
  },
  {
    id: "CUST008",
    name: "John Doe",
    phone: "09056789046",
    qty: 75,
    totalSpend: 2850000,
    status: "inactive",
  },
  {
    id: "CUST009",
    name: "John Doe",
    phone: "09056789046",
    qty: 44,
    totalSpend: 300000,
    status: "active",
  },
  {
    id: "CUST0010",
    name: "John Doe",
    phone: "09056789046",
    qty: 19,
    totalSpend: 1000000,
    status: "active",
  },
];

interface CustomersTableProps {
  customers?: Customer[];
  onCustomerDeleted?: () => void;
}

export function CustomersTable({
  customers = defaultCustomers,
  onCustomerDeleted,
}: CustomersTableProps) {
  const { setSelectedCustomer, setIsModalOpen } = useCustomerStore();

  const handleView = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    const ok = window.confirm(
      "Delete this customer? This action cannot be undone.",
    );
    if (!ok) return;
    try {
      await deleteCustomer(id);
      toast.success(`Deleted customer ${id}`);
      if (onCustomerDeleted) onCustomerDeleted();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Delete failed");
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow-md">
      <table className="w-full border-collapse">
        <thead>
          <tr className="h-16 bg-[#F2F5F3] text-left text-sm font-semibold text-[#519A09]">
            <th className="pl-4">Customer ID</th>
            <th className="pl-4">Name</th>
            <th className="pl-4">QTY</th>
            <th className="pl-4">Phone No</th>
            <th className="pl-4">Total Spend</th>
            <th className="pl-4">Status</th>
            <th className="pl-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
              className="h-16 border-b border-[#DDEEE1] text-sm text-[#585858]"
            >
              <td className="pl-4">{customer.id}</td>
              <td className="pl-4">{customer.name}</td>
              <td className="pl-4">{customer.qty}</td>
              <td className="pl-4">{customer.phone}</td>
              <td className="pl-4">₦{customer.totalSpend.toLocaleString()}</td>
              <td className="pl-4">
                <span
                  className={cn(
                    customer.status === "active"
                      ? "text-[#519A09]"
                      : "text-[#FF392B]",
                  )}
                >
                  {customer.status === "active" ? "Active" : "Inactive"}
                </span>
              </td>
              <td className="pl-4">
                <div className="flex gap-3">
                  <Eye
                    size={18}
                    className="cursor-pointer hover:text-[#519A09]"
                    onClick={() => handleView(customer)}
                  />
                  <Trash2
                    size={18}
                    className="cursor-pointer hover:text-red-500"
                    onClick={() => handleDelete(customer.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
