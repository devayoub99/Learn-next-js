"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ text, pendingText }) {
  const { pending } = useFormStatus();

  return <button disabled={pending}>{pending ? pendingText : text}</button>;
}
