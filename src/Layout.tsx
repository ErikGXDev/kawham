import "@scss/Home.scss";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-background-default text-foreground-higher h-screen">
      {children}
    </main>
  );
}

export default Layout;
