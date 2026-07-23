export default function NotFound() {
  return (
    <main className="bg-[#030014] min-h-screen text-white flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <p className="text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          404
        </p>
        <h1 className="mt-6 text-2xl md:text-3xl font-bold">
          Page Not Found — الصفحة غير موجودة
        </h1>
        <p className="mt-4 text-gray-400">
          The page you are looking for does not exist or has been moved.
          <br />
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <a
          href="/"
          className="inline-block mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:opacity-90 transition"
        >
          Back to Home — العودة إلى الرئيسية
        </a>
      </div>
    </main>
  );
}
