export default function PageContainer({children, className}) {
  return (
    <div className={`px-6 flex-[1] ${className}`}>
        {children}
    </div>
  )
}
