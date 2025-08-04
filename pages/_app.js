import "@/styles/globals.css";
import Header from "@/components/ui/cc/Header";
import Sidebar from "@/components/ui/cc/Sidebar";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex items-start justify-between">
      <div className="hidden lg:flex min-w-[250px] min-h-screen">
        <Sidebar />
      </div>

      <main
        className="grid w-full h-full "
        style={{
          width: "calc(100%-300px)",
        }}
      >
        <Header />
        <div className="p-4">
          <Component {...pageProps} />
        </div>
      </main>
    </div>
  );
}
