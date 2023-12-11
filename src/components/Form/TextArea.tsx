import { TextareaHTMLAttributes } from "react";
import { useFormContext } from 'react-hook-form'

interface TextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  text: string
}

export function TextArea(props: TextArea) {
  const { register } = useFormContext()

  return (
    <textarea 
      id={props.text}
      className="flex-1 w-full rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
      {...register(props.text)} 
      {...props}
    />
  )
}