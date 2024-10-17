import React from "react";
import { Outlet } from "react-router-dom";

export default function IdentityLayout() {
  return (
    <div className="h-svh w-svw bg-Navy-blue flex sm:items-center sm:justify-center sm:p-0 py-5">
      <div className="flex flex-col sm:space-y-14 space-y-5 mx-auto">
        <span className="text-white text-[32px] text-center">اینترنت بانک من</span>
        <Outlet />
      </div>
    </div>
  );
}
