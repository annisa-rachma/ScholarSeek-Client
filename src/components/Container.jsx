export default function Container({children, className}) {
  return (
        <article className={`md:rounded-xl ${className} p-6`}>
            {children}
        </article>  
    )
}
