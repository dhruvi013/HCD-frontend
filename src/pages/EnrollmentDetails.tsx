
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

const EnrollmentDetails = () => {
  const navigate = useNavigate();

  const enrollmentData = [
    {
      year: "2023-24",
      sanctionedIntake: 60,
      admittedStudents: 58,
      ratio: "0.97"
    },
    {
      year: "2022-23",
      sanctionedIntake: 60,
      admittedStudents: 55,
      ratio: "0.92"
    },
    {
      year: "2021-22",
      sanctionedIntake: 60,
      admittedStudents: 57,
      ratio: "0.95"
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
          Enrollment Details
        </h1>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-[#02959F] mb-6">
            Enrollment Ratio Details
          </h2>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Academic Year</TableHead>
                <TableHead>Sanctioned Intake</TableHead>
                <TableHead>Total Admitted</TableHead>
                <TableHead>Enrollment Ratio</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {enrollmentData.map((row) => (
                <TableRow key={row.year}>
                  <TableCell className="font-medium">{row.year}</TableCell>
                  <TableCell>{row.sanctionedIntake}</TableCell>
                  <TableCell>{row.admittedStudents}</TableCell>
                  <TableCell>{row.ratio}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentDetails;
