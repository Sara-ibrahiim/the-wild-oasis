"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export interface Data {
  setRange?: any;
  range?: any;
  resetRange?: () => void;
}
interface Range{
  from?:Date  | undefined
  to?:Date  | undefined
}
const ReservationContext = createContext<Data | null>(null);
const initialState = { from: undefined, to: undefined };

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [range, setRange] = useState(initialState);
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

// import React, { createContext, useContext, useState, ReactNode } from "react";

// // Define the shape of your context
// type ReservationRange = {
//   from: Date | undefined;
//   to: Date | undefined;
// };

// type ReservationContextType = {
//   range: ReservationRange;
//   setRange: React.Dispatch<React.SetStateAction<ReservationRange>>;
//   resetRange: () => void;
// };

// // Create the context with a default value
// const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

// const initialState: ReservationRange = { from: undefined, to: undefined };

// // Provider component
// export function ReservationProvider({ children }: { children: ReactNode }) {
//   const [range, setRange] = useState<ReservationRange>(initialState);

//   const resetRange = () => setRange(initialState);

//   return (
//     <ReservationContext.Provider value={{ range, setRange, resetRange }}>
//       {children}
//     </ReservationContext.Provider>
//   );
// }

// // Hook to use the context
// export function useReservation() {
//   const context = useContext(ReservationContext);
//   if (!context) {
//     throw new Error("useReservation must be used within a ReservationProvider");
//   }
//   return context;
// }
