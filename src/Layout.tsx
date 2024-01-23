import "@scss/Home.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-background-default text-foreground-higher min-h-screen">
      {children}
    </main>
  );
}
