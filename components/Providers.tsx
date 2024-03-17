'use client'

import { ThemeProvider } from 'next-themes'

export const Providers = ({ children }) => (
  // @ts-ignore
  <ThemeProvider attribute="class" defaultTheme="system">
    {children}
  </ThemeProvider>
)
