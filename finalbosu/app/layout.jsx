import { Anton, Poppins} from "next/font/google";
import "./globals.css";


const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton', // Define CSS variable
});

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins', // Define CSS variable
});
export const metadata = {
  title: "FINAL BOSU",
  description: "CREATED FOR THE WHITELIST CHALLENGE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`  ${anton.variable}  ${poppins.variable} antialiased `}
      >

<div className="flex flex-col min-h-screen">{children}</div>
      </body>
    </html>
  );
}
