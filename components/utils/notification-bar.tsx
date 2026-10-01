"use client";

import { clsx } from "clsx";
import { useState } from "react";

type NotificationProps = {
  message?: string | null
}

export default function NotificationBar({ message }: NotificationProps) {

  const [ display, setDisplay ] = useState(message != null);

  if (!display) return null;

  return (
    <div className={clsx(
      `w-full flex flex-row bg-green-700 py-2`)}>
      <div className="mx-auto w-7xl text-center">
        { message }
      </div>

      <button onClick={() => setDisplay(false)} type="button" className="mx-2 px-2 hover:cursor-pointer">x</button>
    </div>
  )
}