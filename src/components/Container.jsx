export default function Container({ children, className }) {
  return (
    <div
      className={`bg-gray-200 min-h-screen min-w-full flex items-center justify-center flex-col p-6 sm:p-8 md:p-10 lg:p-12 text-center ${className}`}
    >
      {children}
    </div>
  );
}
