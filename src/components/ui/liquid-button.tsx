import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const liquidButtonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 overflow-hidden",
  {
    variants: {
      variant: {
        liquid: "glass-button text-primary-foreground",
        "liquid-outline": "glass border-primary/40 hover:bg-primary/10",
        "liquid-ghost": "glass border-0 hover:bg-primary/5",
        "liquid-pill": "glass-button rounded-full px-8",
        "liquid-organic": "glass-button",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
        pill: "h-12 px-8 rounded-full",
      },
    },
    defaultVariants: {
      variant: "liquid",
      size: "default",
    },
  }
);

const organicShapes = [
  "30% 70% 70% 30% / 30% 30% 70% 70%",
  "60% 40% 30% 70% / 60% 30% 70% 40%",
  "40% 60% 60% 40% / 70% 30% 30% 70%",
  "50% 50% 80% 20% / 60% 40% 40% 60%",
];

export interface LiquidButtonProps
  extends Omit<HTMLMotionProps<"button">, "ref">,
    VariantProps<typeof liquidButtonVariants> {
  asChild?: boolean;
  organic?: boolean;
  easterEgg?: boolean;
}

const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, variant, size, asChild = false, organic = false, easterEgg = false, children, ...props }, ref) => {
    const [hoverShape, setHoverShape] = React.useState(0);
    const [clicked, setClicked] = React.useState(false);
    
    const Comp = asChild ? Slot : motion.button;
    
    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 600);
      if (easterEgg) {
        // Easter egg: Random color shift
        document.documentElement.style.setProperty(
          '--accent', 
          `${Math.random() * 360} 100% 50%`
        );
        setTimeout(() => {
          document.documentElement.style.removeProperty('--accent');
        }, 2000);
      }
    };

    const organicStyle = organic ? {
      borderRadius: organicShapes[hoverShape % organicShapes.length],
      transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    } : {};

    return (
      <Comp
        className={cn(liquidButtonVariants({ variant, size, className }))}
        ref={ref}
        style={organicStyle as any}
        onMouseEnter={() => setHoverShape(prev => prev + 1)}
        onClick={handleClick}
        whileHover={organic ? { 
          scale: 1.05,
          rotate: Math.random() * 4 - 2,
        } : { scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      >
        {/* Liquid shimmer effect */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_1.5s_ease-in-out_infinite]" />
        </div>
        
        {/* Easter egg sparkles */}
        {easterEgg && clicked && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent rounded-full"
                initial={{ 
                  x: "50%", 
                  y: "50%", 
                  scale: 0 
                }}
                animate={{ 
                  x: `${50 + (Math.random() - 0.5) * 200}%`,
                  y: `${50 + (Math.random() - 0.5) * 200}%`,
                  scale: [0, 1, 0],
                  rotate: 360
                }}
                transition={{ 
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}
        
        <span className="relative z-10">{children}</span>
      </Comp>
    );
  }
);

LiquidButton.displayName = "LiquidButton";

export { LiquidButton, liquidButtonVariants };