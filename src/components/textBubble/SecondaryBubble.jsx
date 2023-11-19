export default function SecondaryBubble({children, className}) {
  return (
    <div className={`px-3 py-2 md:p-3 bg-secondary rounded-lg ${className}`}>
        {children}
    </div>
  )
}
