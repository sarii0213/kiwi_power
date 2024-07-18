import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "記録ページ",
  description: "体重・体脂肪率などの記録",
};

const RecordsLayout = ({
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
export default RecordsLayout;
