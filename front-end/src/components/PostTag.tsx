import { ComponentProps } from "react";

export type PostTagProps = ComponentProps<"a"> & {
  tagName: string;
};

export function PostTag() {
  return (
    <>
      <div className="flex justify-center font-medium absolute left-4 top-2 rounded w-20 bg-emerald-500 z-10">
        <p className="text-white">TAG</p>
      </div>
    </>
  );
}
