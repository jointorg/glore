import { forwardRef } from 'react'

import { cn, cva, type VariantProps } from '@/lib/cva'

export interface CodeProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof codeVariants> {}

export const Code = forwardRef<HTMLElement, CodeProps>(({ className, ...props }, ref) => (
  <code className={cn(codeVariants({ className }))} ref={ref} {...props} />
))

export const codeVariants = cva('rounded relative bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold')
