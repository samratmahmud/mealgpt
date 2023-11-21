import type {Metadata} from "next";
import "@/style/globals.css";
import Layout from "@/components/global/Layout";

export const metadata: Metadata = {
  title: "Meal GPT",
  description: "Set Your Goals & Track Your Progress",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
