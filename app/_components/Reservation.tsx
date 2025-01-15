import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { ReservationProps } from "../_lib/type";
import DateSelector from "./DateSelector";

import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

export default async function Reservation({ cabin }: ReservationProps) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  const session = await auth();
  return (
    <div className="grid grid-cols-2  border border-primary-800 min-h-[400px] ">
      <DateSelector
        settings={settings}
        cabin={cabin}
        bookedDates={bookedDates}
      />
      {session?.user ? (
        <ReservationForm
          cabin={cabin}
          user={{
            ...session.user,
            name: session.user.name!,
            email: session.user.email!,
            image: session.user.image!,
          }}
        />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
