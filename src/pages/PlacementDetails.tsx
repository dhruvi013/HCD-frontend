
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const PlacementDetails = () => {
  const navigate = useNavigate();

  const tableData = [
    {
      year: "CAYm1 (2023-24)",
      totalStudents: 49,
      placed: 37,
      higherStudies: 6,
      entrepreneur: 3,
      placementIndex: 46
    },
    {
      year: "CAYm2 (2022-23)",
      totalStudents: 48,
      placed: 31,
      higherStudies: 8,
      entrepreneur: 7,
      placementIndex: 46
    },
    {
      year: "CAYm3 (2021-22)",
      totalStudents: 42,
      placed: 34,
      higherStudies: 2,
      entrepreneur: 5,
      placementIndex: 41
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
          Placement Details
        </h1>
      </div>

      <div className="container mx-auto px-[20%] pb-8">
        <Card className="p-6 mb-8">
          <div className="flex justify-end mb-6">
            <Button
              onClick={() => navigate("/placement-details-upload")}
              className="bg-[#02959F] text-white hover:bg-[#037885] flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Details
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>CAYm1 (2023-24)</TableHead>
                <TableHead>CAYm2 (2022-23)</TableHead>
                <TableHead>CAYm3 (2021-22)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Total No of Final Year Students(N)</TableCell>
                <TableCell>49</TableCell>
                <TableCell>48</TableCell>
                <TableCell>42</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>No of students placed in companies or government sector(X)</TableCell>
                <TableCell>37</TableCell>
                <TableCell>31</TableCell>
                <TableCell>34</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>No of students admitted to higher studies with valid qualifying scores (GATE or equivalent State or National Level tests, GRE, GMAT etc.) (Y)</TableCell>
                <TableCell>06</TableCell>
                <TableCell>08</TableCell>
                <TableCell>2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>No of students turned entrepreneur in engineering/technology (Z)</TableCell>
                <TableCell>03</TableCell>
                <TableCell>07</TableCell>
                <TableCell>5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Placement Index [ (X+Y+Z)/N] :</TableCell>
                <TableCell>46</TableCell>
                <TableCell>46</TableCell>
                <TableCell>41</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="mt-4 text-right text-lg font-semibold text-[#02959F]">
            Average Placement [ (P1 + P2 + P3)/3]: 0.96
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PlacementDetails;
