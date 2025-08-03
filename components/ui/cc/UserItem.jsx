export default function UserItem() {
  return (
    <div className="flex items-center justify-between gap-2 border-[1px] rounded-[8px] px-2 py-1">
      <div className="avatar rounded-full min-h-10 min-w-10 bg-gray-800 text-white font-mono flex items-center justify-center">
        <p>PS</p>
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold font-mono">Pranay Salve</p>
        <p className="text-[10px] font-mono text-neutral-500 mt-0">@pranaysalve</p>
      </div>
    </div>
  );
}
