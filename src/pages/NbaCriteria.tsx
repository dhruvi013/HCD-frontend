
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const NbaCriteria = () => {
  const navigate = useNavigate();
  
  const criteria = [
    {
      number: 1,
      title: "Institutional Mission, Vision and Programme Educational Objectives"
    },
    {
      number: 2,
      title: "Programme Outcome"
    },
    {
      number: 3,
      title: "Programme Curriculum"
    },
    {
      number: 4,
      title: "Students' Performance"
    },
    {
      number: 5,
      title: "Faculty Contributions"
    },
    {
      number: 6,
      title: "Facilities and Technical Support"
    },
    {
      number: 7,
      title: "Academic Support Units and Teaching-Learning Process"
    },
    {
      number: 8,
      title: "Governance, Institutional Support and Financial Resources"
    },
    {
      number: 9,
      title: "Continuous Improvement in Attainment of Outcomes"
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
          NBA Criteria
        </h1>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <div className="space-y-4">
          {criteria.map((criterion) => (
            <Card
              key={criterion.number}
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer bg-white"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#02959F] text-white w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                  {criterion.number}
                </div>
                <h2 className="text-xl font-semibold text-[#02959F]">
                  {criterion.title}
                </h2>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NbaCriteria;
