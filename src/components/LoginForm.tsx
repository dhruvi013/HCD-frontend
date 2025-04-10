
import { useState } from "react";
import { User, Lock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    // Handle login logic here
    toast({
      title: "Success",
      description: "Login successful!",
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#02959F] py-6 mb-8">
        <h1 className="text-white text-4xl font-bold text-center tracking-wider animate-fadeIn">
          Marwadi University Accreditation and Data Management System
        </h1>
      </div>
      
      <div className="max-w-md mx-auto px-6">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-[#02959F] mb-6 text-center">
            Sign-in
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#02959F] h-5 w-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02959F] focus:border-transparent transition-all duration-200 outline-none"
                placeholder="Email address"
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#02959F] h-5 w-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02959F] focus:border-transparent transition-all duration-200 outline-none"
                placeholder="Password"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 border-gray-300 rounded text-[#02959F] focus:ring-[#02959F]"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              
              <a href="#" className="text-sm text-[#02959F] hover:text-[#037885] transition-colors">
                Forgot password?
              </a>
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#02959F] hover:bg-[#037885] text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
            >
              Sign in
            </button>
          </form>
          
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a 
              href="/register" 
              className="text-[#02959F] hover:text-[#037885] font-semibold"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
