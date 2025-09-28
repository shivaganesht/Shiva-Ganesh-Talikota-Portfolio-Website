import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiquidCardProps extends React.HTMLAttributes<HTMLDivElement> {
  organic?: boolean;
  intensity?: "subtle" | "medium" | "strong";
  hoverEffect?: boolean;
  children: React.ReactNode;
}

const organicShapes = [
  "25% 75% 70% 30% / 30% 40% 60% 70%",
  "60% 40% 25% 75% / 65% 25% 75% 35%",
  "45% 55% 65% 35% / 35% 65% 35% 65%",
  "70% 30% 40% 60% / 50% 50% 50% 50%",
];

const intensityClasses = {
  subtle: "glass-card border-primary/10",
  medium: "glass-card border-primary/20", 
  strong: "glass border-primary/30",
};

export const LiquidCard = React.forwardRef<HTMLDivElement, LiquidCardProps>(
  ({ className, organic = false, intensity = "medium", hoverEffect = true, children, ...props }, ref) => {
    const [shapeIndex, setShapeIndex] = React.useState(0);
    const [isHovered, setIsHovered] = React.useState(false);

    const organicStyle: React.CSSProperties = organic ? {
      borderRadius: organicShapes[shapeIndex % organicShapes.length],
      transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
    } : {};

    return (
      <motion.div
        ref={ref}
        className={cn(intensityClasses[intensity], className)}
        style={organicStyle}
        onMouseEnter={() => {
          setIsHovered(true);
          if (organic) setShapeIndex(prev => prev + 1);
        }}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={hoverEffect ? { 
          y: -4,
          scale: organic ? 1.02 : 1.01,
          rotate: organic ? Math.random() * 2 - 1 : 0,
        } : undefined}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        {...(props as any)}
      >
        {/* Enhanced liquid shimmer */}
        <div className="absolute inset-0 overflow-hidden rounded-inherit">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
            initial={{ x: '-100%', rotate: 25 }}
            animate={isHovered ? { x: '100%' } : { x: '-100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        {/* Liquid background pattern */}
        <div className="absolute inset-0 rounded-inherit opacity-30">
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-accent/5 animate-pulse" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    );
  }
);

LiquidCard.displayName = "LiquidCard";