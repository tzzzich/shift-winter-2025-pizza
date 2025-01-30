interface ColorProps {
  color: string;
  name: string;
  hex: string;
}

export function ColorSwatchItem({ color, name, hex }: ColorProps) {
  return (
    <div className="flex flex-col gap-[16px] w-min">
      <div
        className="w-[180px] h-[120px] rounded-lg"
        style={{ backgroundColor: `var(${color})` }}
      ></div>
      <div className="text-start">
        <strong>{name}</strong>
        <p>{hex}</p>
      </div>
    </div>
  );
}
