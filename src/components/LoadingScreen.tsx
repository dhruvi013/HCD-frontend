
import { Loader } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#02959F] to-[#017781]">
      <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center gap-4">
        <Loader className="h-12 w-12 text-[#02959F] animate-spin" />
        <h2 className="text-2xl font-semibold text-[#02959F] animate-pulse">
          Loading MADMS...
        </h2>
      </div>
    </div>
  );
};

export default LoadingScreen;
