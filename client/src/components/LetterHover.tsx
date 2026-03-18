interface LetterHoverProps {
  text: string;
  className?: string;
}

export function LetterHover({ text, className }: LetterHoverProps) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, wi) => (
        <span key={wi}>
          {wi > 0 && " "}
          <span style={{ whiteSpace: "nowrap" }}>
            {word.split("").map((char, ci) => (
              <span key={ci} className="letter-hover">
                {char}
              </span>
            ))}
          </span>
        </span>
      ))}
    </span>
  );
}
