'use client';

import { motion } from 'framer-motion';
import { MapPin, Trophy, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const IITList: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  
  // Group IITs by region with NIRF rankings
  const iitsByRegion = {
    North: [
      { name: "IIT Delhi", nirfRank: 2 },
      { name: "IIT Kanpur", nirfRank: 4 },
      { name: "IIT Roorkee", nirfRank: 6 },
      { name: "IIT Ropar", nirfRank: 13 },
      { name: "IIT Mandi", nirfRank: 20 },
      { name: "IIT Jammu", nirfRank: 58 },
    ],
    South: [
      { name: "IIT Madras", nirfRank: 1 },
      { name: "IIT Hyderabad", nirfRank: 8 },
      { name: "IIT Palakkad", nirfRank: 64 },
      { name: "IIT Tirupati", nirfRank: 56 },
    ],
    East: [
      { name: "IIT Kharagpur", nirfRank: 5 },
      { name: "IIT Guwahati", nirfRank: 7 },
      { name: "IIT Bhubaneswar", nirfRank: 19 },
      { name: "IIT Patna", nirfRank: 21 },
      { name: "IIT Dhanbad (ISM)", nirfRank: 12 },
    ],
    West: [
      { name: "IIT Bombay", nirfRank: 3 },
      { name: "IIT Gandhinagar", nirfRank: 14 },
      { name: "IIT Indore", nirfRank: 10 },
      { name: "IIT Jodhpur", nirfRank: 18 },
      { name: "IIT Goa", nirfRank: 75 },
    ],
    Central: [
      { name: "IIT Varanasi (BHU)", nirfRank: 9 },
      { name: "IIT Bhilai", nirfRank: 68 },
      { name: "IIT Dharwad", nirfRank: 71 },
    ],
  };

  const handleApply = (iitName: string) => {
    console.log(`Applying to ${iitName}`);
    // Here you would implement your application logic
    // For example, redirect to an application form or open a modal
    alert(`Application process initiated for ${iitName}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
  };

  const allIITs = Object.values(iitsByRegion).flat();

  const renderIITs = (iits: Array<{name: string, nirfRank: number}>) => {
    return (
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
      >
        {iits.map((iit, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="rounded-lg shadow-sm overflow-hidden bg-white border border-gray-200"
            whileHover={{ scale: 1.03, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          >
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-gray-800 font-medium text-lg">{iit.name}</h3>
                <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                  <Trophy size={14} className="text-yellow-600 mr-1" />
                  <span className="text-xs font-semibold text-yellow-700">
                    NIRF Rank: {iit.nirfRank}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-end items-center mt-4">
                <button
                  onClick={() => handleApply(iit.name)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm flex items-center transition-colors duration-200"
                >
                  Apply <ArrowRight size={14} className="ml-1" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="w-full px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 text-center"
      >
        <h2 className="text-2xl font-bold text-red-700 flex justify-center items-center gap-2">
          Premier IIT Network
        </h2>
        <p className="text-gray-600 mt-2">
          Partner with India's most prestigious technical institutions
        </p>
      </motion.div>

      {/* Region filter buttons */}
      <motion.div 
        className="flex flex-wrap gap-2 justify-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <button
          onClick={() => setSelectedRegion(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!selectedRegion ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          All IITs
        </button>
        {Object.keys(iitsByRegion).map((region) => (
          <button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${selectedRegion === region ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            <MapPin size={14} />
            {region}
          </button>
        ))}
      </motion.div>

      {/* Render IITs based on filter */}
      {selectedRegion ? renderIITs(iitsByRegion[selectedRegion]) : renderIITs(allIITs)}
    </div>
  );
};

export default IITList