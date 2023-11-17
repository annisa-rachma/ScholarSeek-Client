export default function PageContainer({children, className}) {
  return (
    <div className={`px-6 ${className}`}>
        {children}
    </div>
  )
}
