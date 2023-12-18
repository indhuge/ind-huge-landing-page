export default function PageNumbers({
  n,
  selected,
  className = "",
  onClick,
}: {
  n: number;
  selected: number;
  className: string;
  onClick: (n: number) => void;
}) {
  const array = new Array(n);
  for (var i = 1; i <= n; i++) array.push(i);
  return (
    <div className={"flex flex-row gap-2 justify-end " + className}>
      {array.map((e, i) => {
        return (
          <p
            className={
              "text-black p-2 px-4 aspect-square rounded-full " +
              (selected == e ? "bg-green " : " ")
            }
            onClick={() => onClick(e)}
          >
            {e}
          </p>
        );
      })}
    </div>
  );
}
