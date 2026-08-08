import React from 'react'
export default function Card({ children, className = '', ...props }) {
  return <section className={`surface ${className}`} {...props}>{children}</section>
}
