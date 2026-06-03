declare module 'lucide-react' {
  import * as React from 'react';
  
  export interface LucideProps extends React.SVGAttributes<SVGElement> {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
    color?: string;
  }
  
  export type Icon = React.FC<LucideProps>;
  
  // Explicitly export icons used in the project
  export const ChevronDown: Icon;
  export const ChevronUp: Icon;
  export const Search: Icon;
  export const Menu: Icon;
  export const Bell: Icon;
  export const X: Icon;
  export const ChevronRight: Icon;
  export const ShoppingBag: Icon;
  export const ShoppingCart: Icon;
  export const User: Icon;
  export const Leaf: Icon;
  export const RotateCcw: Icon;
  export const Shield: Icon;
  export const ShieldCheck: Icon;
  export const ShieldAlert: Icon;
  export const Home: Icon;
  export const Package: Icon;
  export const Settings: Icon;
  export const Users: Icon;
  export const Loader2: Icon;
  export const Camera: Icon;
  export const UploadCloud: Icon;
  export const BellRing: Icon;
  export const CalendarDays: Icon;
  export const User2: Icon;
  export const ArrowLeft: Icon;
  export const ArrowRight: Icon;
  export const ArrowUpRight: Icon;
  export const Check: Icon;
  export const Eye: Icon;
  export const EyeOff: Icon;
  export const Copy: Icon;
  export const Goal: Icon;
  export const CreditCard: Icon;
  export const Info: Icon;
  export const Newspaper: Icon;
  export const PhoneCall: Icon;
  export const CircleCheckBig: Icon;
  export const Maximize2: Icon;
  export const Star: Icon;
  export const Bike: Icon;
  export const Grid2X2: Icon;
  export const Pause: Icon;
  export const Play: Icon;
  export const ArrowUp: Icon;
}
