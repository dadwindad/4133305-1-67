import { ReactNode } from "react";
import NavBar from "@/components/tempo/NavBar";
import SideMenu from "@/components/tempo/SideMenu";

export default function LayoutTempo({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="p-4">
        <NavBar />
      </header>
      <main>
        <div className="flex min-h-screen p-4">
          <SideMenu />
          <div className="flex-1 p-4">{children}</div>
        </div>        
      </main>
      <footer>
        <p>© 2024 My CRUD App</p>
      </footer>
    </div>
  );
}
