// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold mb-4">404 - Halaman Tidak Ditemukan</h2>
      <p className="mb-4">Maaf, halaman yang Anda cari tidak ada.</p>
      <Link
        href="/"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
