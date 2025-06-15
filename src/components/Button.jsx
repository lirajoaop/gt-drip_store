import { Button as ButtonTailwind } from "@material-tailwind/react";

export default function Button({
  title,
  text,
  onClick,
  customPadding = "p-3",
  customWidth = "w-[114px]",
  customHeight = "w-[40px]",
  customRounded = "rounded-xl",
  customTextSize = "text-sm",
  customTextColor = "#F5F5F5",
  customFontWeight = "font-bold",
  customLineHeight = "leading-[22px]",
  customLetterSpacing = "tracking-[0.75px]",
  type = "button",
  customBg = "bg-primary",
  id = "",
}) {
  return (
    <ButtonTailwind
      title={title}
      type={type}
      onClick={onClick}
      id={id}
      className={`${customPadding} ${customFontWeight} ${customBg} ${customWidth} ${customLetterSpacing}`}
    >
      {Boolean(text) && (
        <p
          className={`${customTextColor} ${customLineHeight} ${customTextSize} normal-case items-center justify-center `}
        >
          {text}
        </p>
      )}
    </ButtonTailwind>
  );
}
