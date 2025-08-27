import { cva, type VariantProps } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "nfw:inline-flex nfw:items-center nfw:justify-center nfw:gap-2 nfw:whitespace-nowrap nfw:rounded-md nfw:text-sm nfw:font-medium nfw:transition-all nfw:disabled:pointer-events-none nfw:disabled:opacity-50 nfw:[&_svg]:pointer-events-none nfw:[&_svg:not([class*='nfw:size-'])]:size-4 nfw:shrink-0 nfw:[&_svg]:shrink-0 nfw:outline-none nfw:focus-visible:border-ring nfw:focus-visible:ring-ring/50 nfw:focus-visible:ring-[3px] nfw:aria-invalid:ring-destructive/20 nfw:dark:aria-invalid:ring-destructive/40 nfw:aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "nfw:bg-primary nfw:text-primary-foreground nfw:shadow-xs nfw:hover:bg-primary/90",
        destructive:
          "nfw:bg-destructive nfw:text-white nfw:shadow-xs nfw:hover:bg-destructive/90 nfw:focus-visible:ring-destructive/20 nfw:dark:focus-visible:ring-destructive/40 nfw:dark:bg-destructive/60",
        outline:
          "nfw:border nfw:bg-background nfw:shadow-xs nfw:hover:bg-accent nfw:hover:text-accent-foreground nfw:dark:bg-input/30 nfw:dark:border-input nfw:dark:hover:bg-input/50",
        secondary:
          "nfw:bg-secondary nfw:text-secondary-foreground nfw:shadow-xs nfw:hover:bg-secondary/80",
        ghost:
          "nfw:hover:bg-accent nfw:hover:text-accent-foreground nfw:dark:hover:bg-accent/50",
        link: "nfw:text-primary nfw:underline-offset-4 nfw:hover:underline",
      },
      size: {
        default: "nfw:h-9 nfw:px-4 nfw:py-2 nfw:has-[>svg]:px-3",
        sm: "nfw:h-8 nfw:rounded-md nfw:gap-1.5 nfw:px-3 nfw:has-[>svg]:px-2.5",
        lg: "nfw:h-10 nfw:rounded-md nfw:px-6 nfw:has-[>svg]:px-4",
        icon: "nfw:size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
