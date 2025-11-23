export interface Feature {
  text: string;
  included: boolean;
}

export interface Plan {
  name: string;
  price: string;
  period: string;
  colorTheme: string; 
  buttonColor: string; 
  features: Feature[];
  highlight?: boolean; 
}