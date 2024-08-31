import { Loader2 } from "lucide-react";

export default function AdminLoading() {
  return (
    <div className="flex h-[85vh] w-[90vw] text-pink-300 justify-center items-center">
      <Loader2 className="size-24 animate-spin" />
    </div>
  );
}
