export default function PageContainer({children, className, noPadding}) {
  return (
    <div className={`${noPadding ? '' : 'px-6'} flex-[1] ${className}`}>
        {children}
    </div>
  )
}
