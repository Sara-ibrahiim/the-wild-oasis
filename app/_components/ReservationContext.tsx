"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { RangeType, ReservationContextType, ReservationProviderProp } from "../_lib/type";


const initialState: RangeType = { from: undefined, to: undefined };
const ReservationContext = createContext<ReservationContextType | undefined>(undefined);


export function ReservationProvider({ children }: ReservationProviderProp) {
 const [range, setRange] = useState<RangeType>(initialState);
  const resetRange = () => setRange(initialState);
  return (
    <ReservationContext.Provider
      value={{
        range,
        setRange,
        resetRange,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

