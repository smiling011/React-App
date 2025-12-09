import { motion } from "framer-motion";
import { useState } from "react";

export default function Window({ id, title, children, onClose }) {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  return (
    <motion.div
      drag
      dragMomentum={false}
      className="absolute bg-zinc-800 border border-zinc-700 rounded-lg w-96 shadow-lg"
      style={{ top: position.y, left: position.x }}
      onDragEnd={(_, info) => setPosition({ x: info.point.x, y: info.point.y })}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <div className="flex justify-between items-center bg-zinc-700 px-3 py-2 rounded-t-lg">
        <span className="font-semibold">{title}</span>
        <button onClick={onClose} className="text-red-400 hover:text-red-500">✕</button>
      </div>
      <div className="p-4">{children}</div>
    </motion.div>
  );
}
