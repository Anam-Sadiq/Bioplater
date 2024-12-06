// src/app/dashboard/page.js
import { useSession, signOut } from "next-auth/react";
import ClientSessionProvider from '@/components/ClientSessionProvider';

const DashboardPage = () => {
  const { data: session } = useSession();

  return (
    <ClientSessionProvider>
    <div className="flex flex-col items-center justify-center min-h-screen">
      {session ? (
        <>
          <h1>Welcome, {session.user.name}</h1>
          <button
            onClick={() => signOut()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Sign out
          </button>
        </>
      ) : (
        <h1>Please sign in to view the dashboard</h1>
      )}
    </div>
  </ClientSessionProvider>
  );
};

export default DashboardPage; 
