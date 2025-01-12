import { auth } from "../_lib/auuth";

export const metadata = {
  title: "Guest area",
};
export default async function page() {
  const session = await auth();
  console.log(session);
  const firstName = session?.user?.name?.split(" ")?.at(0) ?? "Guest user";
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {firstName}
    </h2>
  );
}
