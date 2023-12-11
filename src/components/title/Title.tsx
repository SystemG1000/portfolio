interface TitleProps {
  text: string;
  textSpan: string;
  span: string;
}

export default function Title({text, textSpan, span}: TitleProps) {
  return (
    <div className="mainTitle p-9">
          <h2 className="max-sm:text-3xl">{text} <span>{textSpan}</span><span className="bgText">{span}</span></h2>
    </div>
  )
}