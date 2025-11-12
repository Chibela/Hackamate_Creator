import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-black text-white text-center p-8">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-extrabold mb-6"
      >
        Welcome to <span className="text-pink-400">Hackamate Hub Creator 💻</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl mb-10 text-gray-300 max-w-xl"
      >
        Build your dream hackathon crew; Create, Edit, and Connect with your
        fellow Hackamates!
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/create")}
        className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-purple-700/50 transition-all"
      >
        🚀 Create Your Hackamate
      </motion.button>
    </div>
  );
}
