
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const CriteriaFour = () => {
  const navigate = useNavigate();

  const subCriteria = [
    {
      number: "4.1",
      title: "Enrollment Ratio",
      marks: 20,
      details: "enrollment-details"
    },
    {
      number: "4.2",
      title: "Success Rate in Stipulated Period of the Program",
      marks: 20,
      subCriteria: [
        {
          number: "4.2.1",
          title: "Success Rate without Any Backlogs in Any Semester/Year of Study",
          marks: 15
        },
        {
          number: "4.2.2",
          title: "Success Rate in Stipulated Period (with backlogs + without backlogs)",
          marks: 5
        }
      ]
    },
    {
      number: "4.3",
      title: "Academic Performance in Second Year",
      marks: 10
    },
    {
      number: "4.4",
      title: "Placement, Higher Studies and Entrepreneurship",
      marks: 30
    },
    {
      number: "4.5",
      title: "Professional Activities",
      marks: 20,
      subCriteria: [
        {
          number: "4.5.1",
          title: "Professional Societies/Chapters and Organizing Engineering Events",
          marks: 5
        },
        {
          number: "4.5.2",
          title: "Publication of Technical Magazines and Newsletter",
          marks: 5
        },
        {
          number: "4.5.3",
          title: "Participation at Inter-Institution Events by Students of Program of Study",
          marks: 10
        }
      ]
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
          Criteria 4: Students' Performance
        </h1>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <div className="space-y-6">
          {subCriteria.map((criterion) => (
            <Card key={criterion.number} className="p-6 bg-white">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-semibold text-[#02959F]">
                        {criterion.number} - {criterion.title}
                      </h2>
                      {criterion.details && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="ml-2"
                          onClick={() => navigate(`/${criterion.details}`)}
                        >
                          See Details
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-[#02959F] whitespace-nowrap">
                    {criterion.marks} marks
                  </div>
                </div>

                {criterion.subCriteria && (
                  <div className="ml-8 space-y-3">
                    {criterion.subCriteria.map((sub) => (
                      <div key={sub.number} className="flex items-start justify-between gap-4 p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h3 className="text-lg font-medium text-[#02959F]">
                            {sub.number} - {sub.title}
                          </h3>
                        </div>
                        <div className="text-lg font-semibold text-[#02959F] whitespace-nowrap">
                          {sub.marks} marks
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CriteriaFour;
