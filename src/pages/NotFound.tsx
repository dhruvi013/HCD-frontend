
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#02959F] mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Button 
          onClick={() => navigate("/")}
          className="bg-[#02959F] text-white hover:bg-[#037885]"
        >
          Go back home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
