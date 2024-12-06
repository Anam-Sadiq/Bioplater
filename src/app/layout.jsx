import './styles/globals.css';
import ClientSessionProvider from '../components/ClientSessionProvider';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientSessionProvider>
          {children}
        </ClientSessionProvider>
      </body>
    </html>
  );
}
