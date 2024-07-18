import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ビジョンボードページ",
  description: "なりたい姿、理想の状態でやりたいことを具体化・視覚化",
};

const ObjectivesLayout = ({
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
export default ObjectivesLayout;
