import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
       <header>
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
    </header>
    </div>
  )
}
