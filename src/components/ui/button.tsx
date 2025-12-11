import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--neon-cyan)/0.3)] hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.5)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:border-primary shadow-[0_0_15px_hsl(var(--neon-cyan)/0.2)] hover:shadow-[0_0_25px_hsl(var(--neon-cyan)/0.4)]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-[0_0_20px_hsl(var(--neon-green)/0.3)] hover:shadow-[0_0_30px_hsl(var(--neon-green)/0.5)]",
        ghost: "hover:bg-primary/10 hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 text-base hover:scale-105 shadow-[0_0_30px_hsl(var(--neon-cyan)/0.4)] hover:shadow-[0_0_50px_hsl(var(--neon-cyan)/0.6)]",
        glass: "glass-card border border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50",
        neon: "bg-transparent border-2 border-primary text-primary relative overflow-hidden hover:text-primary-foreground before:absolute before:inset-0 before:bg-primary before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300 [&>*]:relative [&>*]:z-10",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
