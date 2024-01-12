import Link from "next/link";

export default function UnauthenticatedScreen() {
  return (
    <div>
      <div className="bg-primary text-white text-center">
        Please sign in first
      </div>
      <Link href={"/"}>Go to sign in page</Link>
    </div>
  );
}
