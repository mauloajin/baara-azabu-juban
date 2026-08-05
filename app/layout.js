import "./globals.css";

const siteUrl = "https://baara-azabu-juban.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "BAARA Azabu -juban｜麻布十番のカクテルバー",
  description:
    "BAARA Azabu -jubanは、麻布十番駅近くで国産フルーツ、ハーブ、お茶を生かしたオリジナルカクテルと料理を楽しめるバーです。営業時間、アクセス、予約、メニューをご案内します。",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: {
    google: "ayHXvvh7MAYyEd0yabm5xYrI98qeN_1bfcLkvUPkbrM",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "BAARA Azabu -juban",
    title: "BAARA Azabu -juban｜麻布十番のカクテルバー",
    description:
      "麻布十番で独創的なカクテルと料理を楽しめるBAARA Azabu -juban。営業時間、アクセス、予約情報をご案内します。",
  },
  twitter: { card: "summary", title: "BAARA Azabu -juban｜麻布十番" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
