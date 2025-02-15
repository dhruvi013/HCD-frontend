
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const UploadDocuments = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedEnrollment, setSelectedEnrollment] = useState("");
  const [tenthMarksheet, setTenthMarksheet] = useState<File | null>(null);
  const [twelfthMarksheet, setTwelfthMarksheet] = useState<File | null>(null);
  const [registrationForm, setRegistrationForm] = useState<File | null>(null);
  const [gujcetResult, setGujcetResult] = useState<File | null>(null);

  // Dummy enrollment numbers
  const enrollmentNumbers = [
    "21012011001",
    "21012011002",
    "21012011003",
    "21012011004",
    "21012011005",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedEnrollment) {
      toast({
        title: "Error",
        description: "Please select an enrollment number",
        variant: "destructive",
      });
      return;
    }

    if (!tenthMarksheet || !twelfthMarksheet || !registrationForm || !gujcetResult) {
      toast({
        title: "Error",
        description: "Please upload all required documents",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Documents uploaded successfully",
    });
    navigate("/enrollment-details");
  };

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

      <div className="container mx-auto px-[20%] pb-8">
        <div className="bg-white rounded-lg shadow p-8">
          <div className="mb-8">
            <Label htmlFor="enrollment" className="text-lg font-medium text-[#02959F] mb-2">
              Select Enrollment Number
            </Label>
            <Select
              value={selectedEnrollment}
              onValueChange={setSelectedEnrollment}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select enrollment number" />
              </SelectTrigger>
              <SelectContent>
                {enrollmentNumbers.map((number) => (
                  <SelectItem key={number} value={number}>
                    {number}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedEnrollment && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="tenth">10th Marksheet</Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="tenth"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => setTenthMarksheet(e.target.files?.[0] || null)}
                    className="flex-1"
                  />
                  <Upload className="text-[#02959F] h-5 w-5" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="twelfth">12th Marksheet</Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="twelfth"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => setTwelfthMarksheet(e.target.files?.[0] || null)}
                    className="flex-1"
                  />
                  <Upload className="text-[#02959F] h-5 w-5" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="registration">Registration Form</Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="registration"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => setRegistrationForm(e.target.files?.[0] || null)}
                    className="flex-1"
                  />
                  <Upload className="text-[#02959F] h-5 w-5" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="gujcet">GUJCET Result</Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="gujcet"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => setGujcetResult(e.target.files?.[0] || null)}
                    className="flex-1"
                  />
                  <Upload className="text-[#02959F] h-5 w-5" />
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-[#02959F] text-white hover:bg-[#037885]"
                >
                  Submit Documents
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;
