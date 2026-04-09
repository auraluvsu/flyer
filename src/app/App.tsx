import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { PricingPage } from "./components/pricing-page";
import { InquiryPage } from "./components/inquiry-page";
import { BookingsPage } from "./components/bookings-page";
import { ProjectHart } from "./components/project-hart";
import { ProjectScents } from "./components/project-scents";
import { ScrollToTop } from "./components/scroll-to-top";
import { DarkModeProvider } from "./components/dark-mode-context";
import { DarkModeToggle } from "./components/dark-mode-toggle";

export default function App() {
    return (
        <DarkModeProvider>
            <BrowserRouter>
                <ScrollToTop />
                <DarkModeToggle />
                <Toaster position="bottom-right" richColors />
                <Routes>
                    <Route path="/" element={<PricingPage />} />
                    <Route path="/inquiries" element={<InquiryPage />} />
                    <Route path="/bookings" element={<BookingsPage />} />
                    <Route path="/projects/hart" element={<ProjectHart />} />
                    <Route path="/projects/scents4pence" element={<ProjectScents />} />
                </Routes>
            </BrowserRouter>
        </DarkModeProvider>
    );
}

