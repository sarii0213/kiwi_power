import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "設定ページ",
  description: "ユーザー設定",
};

const SettingsLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>

      {children}
    </section>
  );
};
export default SettingsLayout;
