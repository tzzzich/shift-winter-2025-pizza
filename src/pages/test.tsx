import { ColorSwatchItem, TestForm } from "@components";
import { Card } from "@ui";

const colors = [
  {
    color: "--color-bg-brand",
    name: "BG/Brand",
    hex: "#F4511E",
  },
  {
    color: "--color-bg-pressed-primary",
    name: "BG/Pressed Primary",
    hex: "#E64A19",
  },
  {
    color: "--color-bg-hover-primary",
    name: "BG/Hover Primary",
    hex: "#D84315",
  },
  {
    color: "--color-bg-brand-extralight",
    name: "BG/ExtraLight",
    hex: "#FFAB91",
  },
  {
    color: "--color-indicator-focused",
    name: "Indicator/Focused",
    hex: "#F4511E",
  },
];

export default function TestPage() {
  return (
    <div className="flex flex-col gap-5 justify-center">
      <Card className="flex flex-wrap justify-around bg-neutral-50 gap-[24px]">
        {colors.map((color, index) => (
          <ColorSwatchItem
            key={index}
            color={color.color}
            name={color.name}
            hex={color.hex}
          />
        ))}
      </Card>
      <TestForm />
    </div>
  );
}
