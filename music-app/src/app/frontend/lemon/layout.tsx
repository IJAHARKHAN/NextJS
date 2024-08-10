export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>     
        <h2 className="text-white bg-black">Lemon Folder Layout Page</h2>  
          {children}
  
          </>
  
          
          
    );
  }
  