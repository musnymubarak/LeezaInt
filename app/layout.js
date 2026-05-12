import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export const metadata = {
  title: 'Leeza International | Premium Ceylon Spices, Tea & Organic Superfoods',
  description: 'Sri Lanka\'s trusted partner for premium Ceylon cinnamon, tea, coffee, coconut products, and organic European superfoods. Import & export services worldwide.',
  keywords: 'Ceylon cinnamon, Sri Lanka tea, organic superfoods, import export, Dr Ceylon',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ paddingTop: '72px' }}>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
