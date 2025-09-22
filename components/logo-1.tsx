import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Flowly logo" role="img">
      <Image
        src="/logo-user-small.png"
        alt="Flowly logo"
        width={24}
        height={24}
        className="w-6 h-6"
      />
      <span className="text-lg font-semibold text-current" style={{ width: '100px' }}>OEM站点</span>
    </div>
  )
}
