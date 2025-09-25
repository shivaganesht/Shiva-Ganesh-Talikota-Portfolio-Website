import { motion } from "framer-motion";

interface LiquidBlobProps {
  size?: "sm" | "md" | "lg";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  color?: "primary" | "secondary" | "accent";
  className?: string;
}

export function LiquidBlob({ 
  size = "md", 
  position = "center", 
  color = "primary",
  className = "" 
}: LiquidBlobProps) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64", 
    lg: "w-96 h-96"
  };

  const positionClasses = {
    "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
    "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
    "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  };

  const colorClasses = {
    primary: "bg-primary/20",
    secondary: "bg-secondary/20", 
    accent: "bg-accent/20"
  };

  return (
    <motion.div
      className={`
        absolute pointer-events-none
        ${sizeClasses[size]} 
        ${positionClasses[position]}
        ${colorClasses[color]}
        blob blur-3xl
        ${className}
      `}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}

// Fallback for reduced motion users
export function StaticBlob({ 
  size = "md", 
  position = "center", 
  color = "primary",
  className = "" 
}: LiquidBlobProps) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64", 
    lg: "w-96 h-96"
  };

  const positionClasses = {
    "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2", 
    "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
    "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  };

  const colorClasses = {
    primary: "bg-primary/20",
    secondary: "bg-secondary/20",
    accent: "bg-accent/20"
  };

  return (
    <div
      className={`
        absolute pointer-events-none rounded-full blur-3xl opacity-30
        ${sizeClasses[size]} 
        ${positionClasses[position]}
        ${colorClasses[color]}
        ${className}
      `}
    />
  );
}