import type { ReactNode } from "react";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-1/4 bg-white">{/* 사이드바 영역 */}</div>
          <div className="w-3/4 p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
