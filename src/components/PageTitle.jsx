export default function PageTitle({children}) {
  return (
    <div className="py-4 md:py-6 border-b-primary border-b text-center">
        <h1 className="text-2xl md:text-4xl font-extrabold text-primary mx-auto max-w-max">{children}</h1>
    </div>
  )
}
