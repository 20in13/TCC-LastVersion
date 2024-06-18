import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "./components/NavRail/navrail";

export default function Home() {

    return (
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Component {...pageProps} />
        </div>
        <style jsx global>{`
          .app-container {
            display: flex;
          }
          .main-content {
            flex-grow: 1;
          }
        `}</style>
      </div>
    );


}
