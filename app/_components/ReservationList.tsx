"use client"

import { useOptimistic } from "react";
import { deleteReservation } from "../_lib/actions";
import ReservationCard from "./ReservationCard";
import { BookingObject } from "../_lib/type";


export default function ReservationList({bookings}: any) {
    const [optimisticBookings,optimisticDelete ]=useOptimistic(bookings,
      (curBookings, bookingId)=>{

        return curBookings.filter((booking:BookingObject)=>booking.id !== bookingId)
      })

    async function handelDelete(bookingId :string) {
      optimisticDelete(bookingId)
      await deleteReservation(bookingId)
      
    }
  return (
<ul className="space-y-6">
          {optimisticBookings.map((booking: BookingObject) => (
            <ReservationCard onDelete={handelDelete} booking={booking} key={booking.id} />
          ))}
        </ul>
  )
}
