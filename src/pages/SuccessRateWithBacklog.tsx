
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const SuccessRateWithBacklog = () => {
  const navigate = useNavigate();

  const tableData = [
    {
      period: "LYGm1 (2020-2024)",
      admitted: "49",
      graduated: "48",
      successIndex: "0.98"
    },
    {
      period: "LYGm2 (2019-2023)",
      admitted: "48",
      graduated: "48",
      successIndex: "1"
    },
    {
      period: "LYGm3 (2018-2022)",
      admitted: "42",
      graduated: "42",
      successIndex: "1"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#02959F] py-6 mb-8 relative">
        <button 
          onClick={() => navigate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-200"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-white text-4xl font-bold text-center tracking-wider">
          Success Rate with Backlog
        </h1>
      </div>

      <div className="container mx-auto px-[20%] pb-8">
        <Card className="p-6 mb-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Period</TableHead>
                <TableHead>Number of students admitted</TableHead>
                <TableHead>Number of students graduated with Backlogs</TableHead>
                <TableHead>Success Index (SI)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.period}>
                  <TableCell>{row.period}</TableCell>
                  <TableCell>{row.admitted}</TableCell>
                  <TableCell>{row.graduated}</TableCell>
                  <TableCell>{row.successIndex}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={3}>Average Success Index</TableCell>
                <TableCell>0.99</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3}></TableCell>
                <TableCell>0.99 * 5 = 4.97</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default SuccessRateWithBacklog;
