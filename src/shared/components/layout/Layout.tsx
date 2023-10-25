import Header from './header/Header';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='w-full h-screen'>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
