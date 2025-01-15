"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";

  function handelFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="border border-primary-800 flex">
      <button
        onClick={() => handelFilter("all")}
        className={`${
          activeFilter === "all" ? "bg-primary-700 px-2 text-primary-50" : ""
        } px-5 py-2 hover:bg-primary-700`}
      >
        All cabins
      </button>

      <button
        onClick={() => handelFilter("small")}
        className={` ${
          activeFilter === "small" ? "bg-primary-700 px-2 text-primary-50" : ""
        }px-5 py-2 hover:bg-primary-700`}
      >
        1-3 guests
      </button>

      <button
        onClick={() => handelFilter("medium")}
        className={`${
          activeFilter === "medium" ? "bg-primary-700 px-2 text-primary-50" : ""
        }px-5 py-2 hover:bg-primary-700`}
      >
        4-7 guests
      </button>
      <button
        onClick={() => handelFilter("large")}
        className={`${
          activeFilter === "large" ? "bg-primary-700 px-2 text-primary-50" : ""
        }px-5 py-2 hover:bg-primary-700`}
      >
        8- 12 guests
      </button>
    </div>
  );
}
