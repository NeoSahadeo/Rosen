export default function CreateLayout({ children }: {children: React.ReactNode})
{
  return (
    <main className="mx-auto mt-10 max-w-sm">
      {children}
    </main>
  )
}
