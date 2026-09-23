import './globals.css'

export const metadata = {
  title: "NOONE DINING",
  description: "Michelin-Starred Contemporary Dining",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0b0b0b] text-[#f4f4f0] antialiased m-0 p-0 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}