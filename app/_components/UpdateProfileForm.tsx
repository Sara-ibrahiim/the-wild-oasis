"use client";
import { useState } from "react";
import { updateGuest } from "../_lib/actions";
import { UpdateProfileFormProps } from "../_lib/type";
import Image from "next/image";
import ButtonUpdate from "./ButtonUpdate";
import SubmitButton from "./SubmitButton";

export default function UpdateProfileForm({
  children,
  guest,
}: UpdateProfileFormProps) {
  const [count, setCount] = useState();

  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          disabled
          name="fullName"
          defaultValue={fullName}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled
          defaultValue={email}
          name="email"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          {countryFlag && (
            <Image
              src={countryFlag}
              width={30}
              height={20}
              className="h-5 rounded-sm"
              alt="Country flag"
            />
          )}
        </div>
        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          defaultValue={nationalID}
          name="nationalID"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pendingLabel="Updating...">Update profile</SubmitButton>
        {/* <ButtonUpdate pendingLabel="Updating..."> Update profile</ButtonUpdate> */}
      </div>
    </form>
  );
}

// function Button() {
//   const { pending } = useFormStatus();
//   return (
//     <button
//       className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600
//     transition-all
//     disabled:cursor-not-allowed
//      disabled:bg-gray-500
//       disabled:text-gray-300"
//       disabled={pending}
//     >
//       {pending ? "Updating..." : "Update profile"}
//     </button>
//   );
// }
