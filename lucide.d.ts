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
  export const Search: Icon;
  export const Menu: Icon;
  export const Bell: Icon;
  export const X: Icon;
}
