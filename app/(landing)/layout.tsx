import React from "react";

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"h-full bg-gray-800"}>
      <main className={"pt-40 pb-20"}>{children}</main>
    </div>
  );
}
