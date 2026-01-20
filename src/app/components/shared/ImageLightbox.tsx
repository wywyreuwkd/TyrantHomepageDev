"use client"

import { motion } from "framer-motion";
import { X } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  onClose: () => void;
}

export function ImageLightbox({ src, onClose }: ImageLightboxProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center p-5 z-50 cursor-zoom-out">

      {/* 닫기 버튼 */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 bg-white bg-opacity-10 border-none rounded-full w-12 h-12 flex items-center justify-center cursor-pointer transition-all duration-200 z-50"
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
        }}>

        <X size={24} className="text-white" />
      </button>

      {/* 확대된 이미지 */}
      <motion.img
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        src={src}
        alt="확대 이미지"
        className="max-w-[95%] max-h-[95%] object-contain rounded-lg touch-none"        
        onClick={(e) => e.stopPropagation()}/>

      {/* 사용 안내 텍스트 */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-70 text-center">
        클릭하여 닫기 • 핀치로 확대/축소 가능
      </div>
    </motion.div>
  );
}
