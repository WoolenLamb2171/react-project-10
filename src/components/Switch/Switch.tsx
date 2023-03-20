import React from 'react'
import clsx from 'clsx'
import { hideVisually } from 'polished'

type Props = {
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  style?: React.CSSProperties
}

export default function Switch({
  checked = false,
  onChange,
  className,
  style,
}: Props) {
  return (
    <label
      className={clsx(
        'w-10 rounded-full h-5 transition-all duration-300 focus-within:shadow-outline relative switch',
        checked ? 'bg-green-400' : 'bg-gray-300',
        className,
      )}
      style={style}
    >
      <div
        className={clsx(
          'w-5 h-5 rounded-full bg-white shadow transition duration-150',
        )}
        style={{
          transform: `translate(${checked ? 20 : 0}px)`,
        }}
      />
      <input
        checked={checked}
        onChange={onChange}
        type="checkbox"
        style={hideVisually()}
      />
    </label>
  )
}
