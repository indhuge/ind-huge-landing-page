export default function BlogCardSkeleton({ className }: { className: string }) {
  return (
    <div
      className={
        "aspect-[395/432] flex flex-col bg-white overflow-clip rounded-lg transition-all" +
        " " +
        className
      }
    >
      <div className="h-1/2 object-cover bg-gray" />
      <div className="p-6 flex flex-col justify-between h-1/2 border-x border-b border-lightgray rounded-b-lg">
        <div className="bg-white text-black text-base ">
          <div className="bg-gray w-full h-6 font-semibold rounded"></div>
          <div className="mt-5 bg-gray h-16 w-full rounded"></div>
        </div>
        <div className="bg-darkgray h-[0.1rem] w-full"></div>
        <div className="pt-6 flex justify-between text-darkgray font-normal">
          <div className="flex gap-2 items-center ">
            <div className="w-4 h-4 bg-gray rounded" />
            <div className="w-14 h-4 bg-gray rounded" />
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 bg-gray rounded" />
            <div className="w-14 h-4 bg-gray rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
