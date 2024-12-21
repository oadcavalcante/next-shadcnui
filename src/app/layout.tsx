import "./globals.css";

export const metadata = {
  title: "Página com ShadCN/UI",
  description: "Exemplo de estrutura com ShadCN/UI no Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
