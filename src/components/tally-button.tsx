'use client'

import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button"

interface TallyButtonProps {
  className?: string
  children: React.ReactNode
}

export default function TallyButton({ className, children }: TallyButtonProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://tally.so/widgets/embed.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const tallyAttributes = {
    'data-tally-open': "w79DO6",
    'data-tally-layout': "modal",
    'data-tally-width': "500",
    'data-tally-emoji-text': "👋",
    'data-tally-emoji-animation': "wave"
  }

  return (
    <Button className={className} {...tallyAttributes}>
      {children}
    </Button>
  )
}
