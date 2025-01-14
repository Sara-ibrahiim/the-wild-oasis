"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "@/app/_lib/auth";
import { supabase } from "@/app/_lib/supabase";
import { getBookings } from "./data-service";


// export async function updateGuest(formData: FormData) {
// const session = auth()
//   if (!session) throw new Error("You must be logged in");

//   const nationalID = formData.get("nationalID");
//   let nationalityCountryFlag = formData.get("nationality");
//   if (typeof nationalityCountryFlag !== "string" || !nationalityCountryFlag)
//     throw new Error("invalid nationality");
//   const [nationality, countryFlag] = nationalityCountryFlag.split("%");
//   const updateData = { nationality, nationalID, countryFlag };

//   if (!/^[a-zA-Z0-9]{6,12}$/.test(String(nationalID)))
//     throw new Error("Please provide a valid national ID");

//   const { error } = await supabase
//     .from("guests")
//     .update(updateData)
//     .eq("id",session.user.guestId);

//   if (error) throw new Error("Guest could not be updated");
//      revalidatePath("account/profile")
// }
export async function updateGuest(formData: FormData) {
  const session = await auth();
  const { guestId } = session!.user;

  // Guard clause for not logged in users
  //if (!session) throw new Error("You must be logged in");

  // Getting the values from formData
  const nationalID = (formData.get("nationalID") as string) || "";
  const [nationality, countryFlag] = (
    (formData.get("nationality") as string) || ""
  ).split("%");

  // Validating the nationalID number
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid National ID");

  // Preparing the updated guest data
  const updateData = { nationality, countryFlag, nationalID };

  // Updating the guest data in the Database by running a query
  const { error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", guestId)
    .select()
    .single();

  // Error handler if query wasn't successful
  if (error) {
    throw new Error("Guest could not be updated");
  }

  // Revalidating path to get rid of caching
  revalidatePath("/account/profile");
}
export async function deleteReservation(bookingId: string) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId)) {
    throw new Error("You are not allowed to delete this booking");
  }
  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/account/reservations");
}

export async function updateBooking(formData: FormData) {
  const bookingId = Number(formData.get("bookingId"));
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId)) {
    throw new Error("You are not allowed to update this booking");
  }
  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: ((formData.get("observations") as string) || "").slice(
      0,
      1000
    ),
  };
  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath("/account/reservations");
}
export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
