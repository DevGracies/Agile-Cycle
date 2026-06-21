export interface Category {
  id: string;
  name: string;
  count: number;
}

export interface FilterOption {
  id: string;
  label: string;
}

export interface SidebarFilters {
  name: string;
  categories: Category[];
  availability: FilterOption[];
  products: FilterOption[];
  price: {
    min: number;
    max: number;
  };
}