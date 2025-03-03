import './globals.css'
import 'boxicons/css/boxicons.min.css'

export const metadata = {
  title: 'Fast Logistics',
  description: 'Fast Logistics - Excellence Inspired',
};

export default function 
RootLayout({children}) {
  return(
    <html lang="en">
      <body> {children} </body>
    </html>
  );
}
