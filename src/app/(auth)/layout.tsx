'use client'

import Sidebar from '@/components/Sidebar'

type Props = {
  children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  // TODO: autenticação

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 p-6'>{children}</div>
    </div>
  )
}
