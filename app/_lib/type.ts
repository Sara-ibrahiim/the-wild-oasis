import { ReactNode } from "react";

// GENERAL
export type RootLayoutProp = {
  children: ReactNode;
};
export type ErrorProps = {
  error: Error;
  reset: () => void;
};
export type MainLayoutProps = {
  children: ReactNode;
};

// COMPONENT PROPS
export type ButtonProps = {
  filter: CabinSizes | "all";
  handleFilter: (filter: string) => void;
  activeFilter: string;
  children: string;
};
export type CabinProps = { cabin: CabinObject };
export type CabinCardProps = { cabin: CabinObject };
export type DeleteReservationProps = {
  bookingId: string;
  onDelete: (bookingId: string) => Promise<void>;
};
export type HamburgerProps = {
  onClick: () => void;
  menuOpen: boolean;
};
export type NavigationProps = { session: Session | null };
export type ReservationProps = { cabin: CabinObject };
export type ReservationCardProps = {
  booking: BookingObject;
  onDelete: (bookingId: string) => Promise<void>;
};
export type ReservationFormProps = { cabin: CabinObject; user: UserObject };
export type ReservationListProps = { bookings: BookingObject[] };
export type SelectCountryProps = {
  defaultCountry: string;
  name: string;
  id: string;
  className: string;
};
export type SubmitButtonProps = {
  children?: ReactNode;
  pendingLabel?: string;
};
export type TextExpanderProps = { children: ReactNode };
export type UpdateProfileFormProps = {
  guest: GuestObject;
  children: ReactNode;
};

// INTERFACES
export interface BookingData {
  startDate: string | undefined;
  endDate: string | undefined;
  numNights: number | undefined;
  cabinPrice: number | undefined;
  cabinId: string;
}
export interface BookingObject {
  id: string;
  guestId: number;
  startDate: string;
  endDate: string;
  numNights: number;
  totalPrice: number;
  numGuests: number;
  created_at: string;
  cabins: { name: string; image: string };
}
interface CabinObject {
  id: string;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  description?: string;
}
export interface CountryObject {
  name: string;
  flag: string;
  independent: boolean;
}
export interface GuestObject {
  fullName: string;
  email: string;
  nationality: string;
  nationalID: number;
  countryFlag: string;
}
interface Session {
  user: {
    name?: string;
    email?: string;
    image?: string;
    guestId?: string;
  };
  expires: string;
}
export interface UserObject {
  name: string;
  email: string;
  image: string;
  guestId?: string;
}

// CONTEXT
export type ReservationContextType = {
  range: RangeType;
  setRange: React.Dispatch<React.SetStateAction<RangeType>>;
  resetRange: () => void;
};
export type ReservationProviderProp = { children: ReactNode };

// PAGES
export type BookingIdPageParams = {
  params: { bookingId: string };
};
export type CabinIdPageParams = {
  params: { cabinId: string };
};
export type CabinsPageParams = {
  searchParams: { capacity: CabinSizes };
};

// OTHER
export type CabinFilter = { filter: CabinSizes };
export type RangeType = {
  from: string | undefined;
  to: string | undefined;
};

// UNIONS
type CabinSizes = "small" | "medium" | "large";
