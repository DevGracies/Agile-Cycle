export interface CategoryOption {
  label: string;
  value: string;
}

export const EBIKE_CATEGORIES: CategoryOption[] = [
  { label: "Cruisers", value: "cruiser" },
  { label: "Commuters", value: "commuter" },
  { label: "Cargo Bikes", value: "cargo" },
  { label: "Folding Bikes", value: "folding" },
  { label: "Utility Bikes", value: "utility" },
  { label: "Trikes", value: "trikes" },
  { label: "Ride Share", value: "rideShare" },
];

export const ACCESSORY_CATEGORIES: CategoryOption[] = [
  { label: "Lights", value: "lights" },
  { label: "Carrier Bags", value: "carrier bags" },
  { label: "Mirrors", value: "mirrors" },
  { label: "Helmets", value: "helmets" },
  { label: "Phone Holders", value: "phone holders" },
  { label: "Alarms", value: "alarms" },
  { label: "Electric Pumps", value: "electric pumps" },
  { label: "Seats", value: "seats" },
  { label: "Brake Pods", value: "brake pods" },
  { label: "Batteries", value: "batteries" },
  { label: "Gloves", value: "gloves" },
  { label: "Storage", value: "storage" },
  { label: "Riding Glasses", value: "riding glasses" },
];

export const ENHANCEMENT_CATEGORIES: CategoryOption[] = [
  { label: "Performance", value: "performance" },
  { label: "Comfort", value: "comfort" },
  { label: "Safety", value: "safety" },
  { label: "Technology", value: "technology" },
  { label: "Utility", value: "utility" },
  { label: "Style", value: "style" },
];