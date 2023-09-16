import { Car } from "./Car";

export interface CardDetailsProps {
  car: Car;
  isOpen: boolean;
  closeModal(): void;
}
