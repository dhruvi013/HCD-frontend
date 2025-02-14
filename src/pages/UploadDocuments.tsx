
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const UploadDocuments = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [tenthMarksheet, setTenthMarksheet] = useState<File | null>(null);
  const [twelfthMarksheet, setTwelfthMarksheet] = useState<File | null>(null);
  const [acpcForm, setAcpcForm] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!tenthMarksheet || !twelfthMarksheet || !acpcForm) {
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
          Upload Documents
        </h1>
      </div>

      <div className="container mx-auto px-[20%] pb-8">
        <div className="bg-white rounded-lg shadow p-8">
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
              <Label htmlFor="acpc">ACPC Form</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="acpc"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => setAcpcForm(e.target.files?.[0] || null)}
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
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;
