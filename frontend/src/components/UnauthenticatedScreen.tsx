import Link from "next/link";

export default function UnauthenticatedScreen() {
  return (
    <div className="h-screen w-full bg-primary text-white text-center flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <div className="slab text-2xl">Please sign in first</div>
        <Link
          href={"/"}
          className="outline outline-1 rounded font-light hover:cursor-pointer hover:bg-white hover:text-primary transition-colors hover:font-medium"
        >
          Go to sign in page
        </Link>
      </div>
    </div>
  );
}
