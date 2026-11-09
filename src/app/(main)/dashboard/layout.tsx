import Sidebar from "./_components/Sidebar";

export default function DashboardLayout({ children, }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            <Sidebar />

            <main className="min-w-0 flex-1 p-4 md:p-6">
                {children}
            </main>
        </div>
    )


}