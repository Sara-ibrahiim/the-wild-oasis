"use client"

import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";


export default function ReservationList({bookings}: any) {
    const [optimisticBookings,optimisticDelete ]=useOptimistic(bookings,()=>{})
  return (
<ul className="space-y-6">
          {bookings.map((booking: any) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
  )
}
