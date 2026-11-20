import Link from "next/link";
import { headers } from "next/headers";
import { hasCommunityAmenityMap } from "@/lib/amenities";

export async function AmenityFooterLink() {
  const hostname = headers().get("x-domain") || "";
  if (!hasCommunityAmenityMap(hostname)) {
    return null;
  }
  return (
    <li>
      <Link href="/amenities" className="text-slate-300 hover:text-white transition-colors text-sm">
        Nearby Amenities
      </Link>
    </li>
  );
}
