
import { useNavigate } from "react-router-dom";
import { Home, Mail, Phone } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto w-[80%] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/90333e88-9052-4b6b-af53-e3f2f477e9b1.png" 
              alt="Marwadi University Logo" 
              className="h-12 w-auto cursor-pointer"
              onClick={() => navigate('/')}
            />
            <h1 className="text-[#02959F] text-2xl font-semibold tracking-wider">
              Marwadi University
            </h1>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="/" className="text-gray-600 hover:text-[#02959F] transition-colors">
              <Home className="h-5 w-5" />
            </a>
            <a href="mailto:info@marwadiuniversity.ac.in" className="text-gray-600 hover:text-[#02959F] transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href="tel:+911234567890" className="text-gray-600 hover:text-[#02959F] transition-colors">
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
