import Footer from "./Footer";
import Navbar from "./Navbar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}