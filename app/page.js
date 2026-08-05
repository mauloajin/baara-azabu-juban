const officialUrl = "https://www.baara.jp/";
const reservationUrl = "https://www.tablecheck.com/en/baara-azabujuban";
const instagramUrl = "https://www.instagram.com/baara_azabujuban/";
const mapUrl = "https://www.google.com/maps/search/?api=1&query=BAARA%20Azabu-Juban%20%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E9%BA%BB%E5%B8%83%E5%8D%81%E7%95%AA1-7-12";

const faqs = [
  {
    q: "BAARA Azabu -jubanはどこにありますか？",
    a: "東京都港区麻布十番1丁目7−12 麻布十番Ohmiyaビル B1にあります。",
  },
  {
    q: "営業時間は何時ですか？",
    a: "月曜日から日曜日まで、18:00〜26:00です。年末年始の営業は店舗へご確認ください。",
  },
  {
    q: "最寄り駅からの行き方は？",
    a: "東京メトロ南北線の麻布十番駅4番出口から徒歩3分、都営大江戸線の麻布十番駅7番出口から徒歩2分です。",
  },
  {
    q: "予約できますか？",
    a: "TableCheckからオンライン予約ができます。電話でのお問い合わせは03-6804-1039です。",
  },
  {
    q: "どのようなドリンクや料理がありますか？",
    a: "国産フルーツ、ハーブ、緑茶や抹茶を使うオリジナルカクテル、ウイスキー、ワインに加え、鹿肉ジャーキー、和牛カレー、パスタ、デザートなどがあります。",
  },
];

const japaneseKeywords = [
  "BAARA Azabu -juban", "BAARA Azabu-Juban", "BAARA Azabujuban", "BAARA 麻布十番", "バーラ 麻布十番", "麻布十番 BAARA", "港区 BAARA", "麻布十番 バー", "麻布十番 カクテルバー", "麻布十番 ワインバー", "麻布十番 ダイニングバー", "港区 バー", "港区 カクテルバー", "東京 バー", "東京 カクテル", "麻布十番駅 バー", "麻布十番駅 カクテル", "麻布十番駅 ワイン", "南北線 麻布十番 バー", "大江戸線 麻布十番 バー", "麻布十番駅4番出口 バー", "麻布十番駅7番出口 バー", "麻布十番 深夜 バー", "麻布十番 18時 バー", "麻布十番 26時 バー", "麻布十番 夜 カクテル", "麻布十番 オリジナルカクテル", "麻布十番 スペシャルカクテル", "国産フルーツ カクテル", "ハーブ カクテル", "緑茶 カクテル", "抹茶 カクテル", "お茶 カクテル", "フルーツカクテル 麻布十番", "ウイスキー 麻布十番", "ジャパニーズウイスキー 麻布十番", "ワイン 麻布十番", "シャンパン 麻布十番", "余市 麻布十番", "山崎 麻布十番", "白州 麻布十番", "響 麻布十番", "カクテルと料理 麻布十番", "バー フード 麻布十番", "鹿肉ジャーキー 麻布十番", "和牛カレー 麻布十番", "パスタ 麻布十番 バー", "青唐辛子 カラスミ ペペロンチーノ", "ポルチーニ カルボナーラ", "トリュフ フライドポテト", "仔羊 スパイシー串", "生ハム 麻布十番", "チーズ 麻布十番 バー", "ガトーショコラ 麻布十番", "バスクチーズケーキ 麻布十番", "麻布十番 バー 予約", "BAARA 予約", "BAARA TableCheck", "BAARA 電話番号", "BAARA 営業時間", "BAARA 住所", "BAARA アクセス", "BAARA メニュー", "BAARA カクテル", "BAARA ウイスキー", "BAARA ワイン", "BAARA フード", "BAARA Instagram", "BAARA 公式サイト", "BAARA Googleマップ", "麻布十番 Ohmiyaビル バー", "麻布十番1丁目 バー", "港区麻布十番1-7-12", "麻布十番 B1 バー", "麻布十番 地下 バー", "麻布十番駅 徒歩2分 バー", "麻布十番駅 徒歩3分 バー", "六本木周辺 バー", "赤羽橋周辺 バー", "麻布 周辺 バー", "六本木 麻布十番 カクテル", "港区 夜 お酒", "東京 ナイトバー", "東京 ワインバー", "東京 ダイニングバー", "麻布十番 ディナー後 バー", "麻布十番 食事できるバー", "麻布十番 カウンター バー", "麻布十番 ソファー バー", "英国アンティーク バー", "イギリスアンティーク バー", "モダン バー 麻布十番", "創造的カクテル", "独創的カクテル", "オーセンティック カクテル", "革新的 カクテル", "文化を表現するカクテル", "日本素材 カクテル", "季節のフルーツ カクテル", "国産素材 カクテル", "ジビエ料理 バー", "鹿肉料理 麻布十番", "カレー バー 麻布十番", "デザート バー 麻布十番", "深夜営業 麻布十番", "夜遅くまで営業 麻布十番", "日曜営業 バー 麻布十番", "土曜営業 バー 麻布十番", "平日 バー 麻布十番", "麻布十番 お酒", "麻布十番 ドリンク", "麻布十番 バーフード", "麻布十番 カクテル予約", "麻布十番 ワイン予約", "麻布十番 バー 電話", "麻布十番 バー 地図", "麻布十番 バー 行き方", "麻布十番駅から近いバー", "南北線 駅近 バー", "大江戸線 駅近 バー", "港区 カクテル 予約", "東京 カクテルバー 予約", "東京 バー 営業時間", "東京 バー アクセス", "麻布十番 夜の過ごし方", "麻布十番 カクテルとフード", "麻布十番 ウイスキーと料理", "麻布十番 ワインと料理", "カクテル ウイスキー ワイン", "フルーツ ハーブ カクテル", "緑茶 抹茶 カクテル", "余市 山崎 白州 響", "赤ワイン 白ワイン シャンパン", "ミックスナッツ バー", "ドライフルーツ バー", "チョコレート バー", "自家製鹿肉ジャーキー", "スペイン産生ハム", "仔羊のスパイシー串", "特製和牛カレー", "生チョコ ガトーショコラ", "麻布十番 ナイトスポット", "麻布十番 夜 店", "麻布十番 酒場", "麻布十番 飲食店", "港区 飲食店 バー", "東京都 バー 麻布", "東京都港区 バー", "106-0045 バー", "麻布十番商店街 バー", "麻布十番商店街 カクテル", "麻布十番 公式予約 バー", "麻布十番 オンライン予約 バー", "TableCheck 麻布十番 バー", "Instagram 麻布十番 バー", "BAARA AZABU JUBAN", "Baara Azabu Juban", "baara azabu", "baara bar tokyo", "麻布十番 バー BAARA", "麻布十番 BAARA メニュー", "麻布十番 BAARA 営業時間", "麻布十番 BAARA 予約", "麻布十番 BAARA アクセス", "BAARA 麻布十番駅", "BAARA 港区", "BAARA 東京都", "BAARA Ohmiyaビル", "BAARA B1F", "BAARA 03-6804-1039", "麻布十番 夜 18時", "麻布十番 深夜 2時", "麻布十番 カクテル 18時", "麻布十番 カクテル 深夜", "麻布十番 ウイスキー 深夜", "麻布十番 ワイン 深夜", "東京メトロ南北線 バー", "都営大江戸線 バー", "麻布十番4番出口 カクテル", "麻布十番7番出口 カクテル", "港区 オリジナルカクテル", "東京 国産フルーツ カクテル", "東京 抹茶 カクテル", "東京 ハーブ カクテル", "東京 緑茶 カクテル", "麻布十番 クリエイティブカクテル", "麻布十番 スペシャリティカクテル", "麻布十番 カクテルメニュー", "麻布十番 ウイスキーメニュー", "麻布十番 ワインメニュー", "麻布十番 フードメニュー", "BAARA フルーツカクテル", "BAARA ハーブカクテル", "BAARA 抹茶カクテル", "BAARA 緑茶カクテル", "BAARA 鹿肉ジャーキー", "BAARA 和牛カレー", "BAARA パスタ", "BAARA ガトーショコラ", "BAARA チーズケーキ", "BAARA 麻布十番 公式", "麻布十番 BAR BAARA", "港区 BAR BAARA", "東京 BAR BAARA", "麻布十番 カクテル BAARA", "麻布十番 ワイン BAARA", "麻布十番 ウイスキー BAARA", "麻布十番 食事 BAARA", "麻布十番 デザート BAARA", "麻布十番 駅近 BAARA", "麻布十番 深夜 BAARA", "麻布十番 予約 BAARA", "BAARA 店舗情報", "BAARA 店舗案内", "BAARA 営業案内", "BAARA 地図", "BAARA 行き方", "BAARA 最寄り駅", "BAARA 南北線", "BAARA 大江戸線", "BAARA 麻布十番1丁目"
];

const englishKeywords = [
  "BAARA Azabu -juban", "BAARA Azabu-Juban", "BAARA Azabujuban", "BAARA Azabu Juban", "Baara Azabu Juban", "BAARA bar Tokyo", "BAARA bar Azabu", "BAARA Minato Tokyo", "BAARA cocktail bar", "BAARA wine bar", "BAARA dining bar", "BAARA reservation", "BAARA TableCheck", "BAARA official website", "BAARA Instagram", "BAARA Google Maps", "BAARA address", "BAARA phone number", "BAARA opening hours", "BAARA menu", "BAARA cocktails", "BAARA whisky", "BAARA wine", "BAARA food", "Azabu Juban bar", "Azabujuban bar", "Azabu-Juban bar", "Azabu Juban cocktail bar", "Azabu Juban wine bar", "Azabu Juban dining bar", "cocktail bar near Azabu Juban Station", "bar near Azabu Juban Station", "wine bar near Azabu Juban Station", "Tokyo cocktail bar", "Tokyo wine bar", "Tokyo dining bar", "Minato City bar", "Minato Tokyo cocktail bar", "bar in Azabu", "cocktails in Azabu", "night bar Azabu Juban", "late night bar Azabu Juban", "bar open until 2am Azabu Juban", "evening bar Azabu Juban", "Sunday bar Azabu Juban", "weekend bar Azabu Juban", "weekday bar Azabu Juban", "Azabu Juban nightlife", "Azabu Juban drinks", "Azabu Juban cocktails", "Azabu Juban whisky", "Azabu Juban wine", "Azabu Juban champagne", "original cocktails Azabu Juban", "creative cocktails Tokyo", "signature cocktails Azabu Juban", "Japanese fruit cocktails", "domestic fruit cocktails", "herb cocktails Tokyo", "green tea cocktails Tokyo", "matcha cocktails Tokyo", "tea cocktails Tokyo", "Japanese ingredient cocktails", "fruit and herb cocktails", "green tea and matcha cocktails", "Japanese whisky Azabu Juban", "Yoichi whisky Azabu Juban", "Yamazaki whisky Azabu Juban", "Hakushu whisky Azabu Juban", "Hibiki whisky Azabu Juban", "whisky bar Azabu Juban", "red wine Azabu Juban", "white wine Azabu Juban", "champagne Azabu Juban", "cocktails and food Azabu Juban", "bar food Azabu Juban", "dining bar near station", "food at BAARA", "BAARA venison jerky", "venison jerky Azabu Juban", "BAARA wagyu curry", "wagyu curry Azabu Juban", "pasta at BAARA", "karasumi spaghetti", "porcini carbonara", "truffle fries Azabu Juban", "spicy lamb skewer", "Spanish cured ham bar", "cheese bar Azabu Juban", "chocolate terrine Azabu Juban", "Basque cheesecake Azabu Juban", "dessert bar Azabu Juban", "bar reservation Azabu Juban", "online bar reservation Tokyo", "book a bar Azabu Juban", "TableCheck BAARA", "BAARA contact", "BAARA directions", "BAARA location", "BAARA access", "BAARA nearest station", "BAARA Azabujuban Station", "BAARA Namboku Line", "BAARA Oedo Line", "BAARA exit 4", "BAARA exit 7", "bar near Namboku Line", "bar near Oedo Line", "bar near Azabu Juban exit 4", "bar near Azabu Juban exit 7", "two minutes from Azabu Juban Station", "three minutes from Azabu Juban Station", "1-7-12 Azabu Juban bar", "Ohmiya Building bar", "basement bar Azabu Juban", "B1F bar Azabu Juban", "106-0045 bar", "Minato-ku bar", "Tokyo bar reservation", "Tokyo cocktail reservation", "Tokyo bar directions", "Tokyo bar opening hours", "Azabu Juban local dining", "local bar Azabu Juban", "Azabu Juban evening drinks", "Azabu Juban after dinner bar", "Azabu Juban food and drinks", "Azabu Juban whisky and food", "Azabu Juban wine and food", "cocktails whisky and wine", "bar with food Tokyo", "modern bar Azabu Juban", "British antique interior bar", "British antiques cocktail bar", "creative cocktail experience", "Japanese cocktail culture Tokyo", "international cocktail culture Tokyo", "authentic cocktail technique", "innovative cocktail bar Tokyo", "special cocktails in Tokyo", "cocktail story BAARA", "BAARA special cocktail", "BAARA fruit cocktail", "BAARA herb cocktail", "BAARA green tea cocktail", "BAARA matcha cocktail", "BAARA Japanese whisky", "BAARA wine list", "BAARA champagne", "BAARA dinner food", "BAARA bar snacks", "BAARA curry", "BAARA spaghetti", "BAARA carbonara", "BAARA truffle fries", "BAARA lamb skewer", "BAARA cured ham", "BAARA cheese", "BAARA chocolate dessert", "BAARA cheesecake", "Tokyo night drinks", "Tokyo late night cocktails", "Minato City nightlife", "Azabu nightlife Tokyo", "Roppongi nearby bar", "bar near Roppongi", "bar near Akabanebashi", "Azabu Roppongi cocktail bar", "Azabu area wine bar", "Azabu area whisky bar", "Azabu Juban Station nightlife", "Azabu Juban shopping street bar", "Azabu Juban restaurant bar", "drinks near Azabu Juban", "food near Azabu Juban Station", "cocktail menu Azabu Juban", "whisky menu Azabu Juban", "wine menu Azabu Juban", "food menu Azabu Juban", "BAARA opening time 6pm", "BAARA closing time 2am", "Azabu Juban bar open 6pm", "Azabu Juban drinks until 2am", "Sunday cocktails Tokyo", "Saturday cocktails Tokyo", "late evening wine Tokyo", "late evening whisky Tokyo", "Minato cocktail reservation", "Azabu Juban phone reservation", "Azabu Juban online reservation", "BAARA official reservation", "BAARA Azabu official", "BAARA Azabu-Juban official", "BAARA Azabujuban official", "BAARA Azabu-Juban Tokyo", "BAARA Azabujuban Minato", "BAARA Japan bar", "BAARA Tokyo Japan", "visit BAARA Tokyo", "directions to BAARA", "how to get to BAARA", "BAARA map Tokyo", "BAARA 03-6804-1039", "BAARA Ohmiya Building B1F", "BAARA 1-7-12 Azabu Juban", "cocktail bar 106-0045", "bar in Minato-ku Tokyo", "bar near Tokyo Metro", "bar near Toei Oedo Line", "bar near Namboku subway line", "Azabujuban Station exit 4 bar", "Azabujuban Station exit 7 bar", "Azabu Juban cocktails reservation", "Azabu Juban wine reservation", "Azabu Juban whisky reservation", "Azabu Juban creative drinks", "Azabu Juban Japanese cocktails", "Azabu Juban fruit drinks", "Azabu Juban tea cocktails", "Tokyo matcha cocktail bar", "Tokyo green tea cocktail bar", "Tokyo Japanese fruit bar", "Tokyo herb cocktail bar", "Tokyo whisky and cocktails", "Tokyo wine and cocktails", "Tokyo cocktails and cuisine", "Azabu Juban gastro pub", "Azabu Juban drinks and dessert", "Azabu Juban cocktail destination", "evening in Azabu Juban", "where to drink in Azabu Juban", "where is BAARA Tokyo"
];

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  name: "BAARA Azabu -juban",
  alternateName: ["BAARA Azabu-Juban", "BAARA Azabujuban"],
  url: "https://baara-azabu-juban.vercel.app/",
  description: "麻布十番で国産フルーツ、ハーブ、お茶を生かしたオリジナルカクテルと料理を提供するバー。",
  telephone: "+81-3-6804-1039",
  address: {
    "@type": "PostalAddress",
    postalCode: "106-0045",
    addressCountry: "JP",
    addressRegion: "東京都",
    addressLocality: "港区",
    streetAddress: "麻布十番1丁目7−12 麻布十番Ohmiyaビル B1",
  },
  servesCuisine: ["Cocktails", "Bar food"],
  openingHours: "Mo-Su 18:00-02:00",
  hasMap: mapUrl,
  sameAs: [officialUrl, instagramUrl, reservationUrl],
  potentialAction: { "@type": "ReserveAction", target: reservationUrl },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

function ExternalLink({ href, children, className = "" }) {
  return <a href={href} target="_blank" rel="noreferrer" className={className}>{children}<span aria-hidden="true">↗</span></a>;
}

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="siteHeader">
        <a className="wordmark" href="#top" aria-label="ページ上部へ">BAARA</a>
        <nav aria-label="メインナビゲーション">
          <a href="#concept">Concept</a><a href="#menu">Menu</a><a href="#info">Info</a><a href="#english">English</a>
        </nav>
        <ExternalLink href={reservationUrl} className="headerBook">Reserve</ExternalLink>
      </header>

      <section className="hero" id="top">
        <div className="heroGlow" />
        <div className="heroContent">
          <p className="eyebrow">AZABU-JUBAN · TOKYO</p>
          <h1><span>BAARA</span><small>Azabu -juban</small></h1>
          <p className="heroCopy">文化が混ざり合い、<br />一杯の物語になる。</p>
          <p className="heroText">国産フルーツ、ハーブ、お茶。世界と日本の素材を重ね、オーセンティックな技術と自由な感性で表現するカクテルバー。</p>
          <div className="heroActions">
            <ExternalLink href={reservationUrl} className="button primary">席を予約する</ExternalLink>
            <ExternalLink href={mapUrl} className="button secondary">Googleマップ</ExternalLink>
          </div>
        </div>
        <div className="heroMeta"><span>OPEN DAILY</span><strong>18:00 — 26:00</strong></div>
      </section>

      <section className="intro section" id="concept">
        <div className="sectionNumber">01 / CONCEPT</div>
        <div className="introBody">
          <p className="lead">麻布十番で出会う、<br />素材と文化のカクテル。</p>
          <div>
            <p>BAARA Azabu -jubanは、麻布十番駅から歩いてすぐのカクテルバーです。国産フルーツや多彩なハーブ、緑茶、抹茶などを組み合わせ、一杯ごとに新しい味わいを届けます。</p>
            <p>カクテルだけでなく、ウイスキーやワイン、鹿肉を使った料理、パスタ、カレー、デザートも用意。イギリスのアンティークを取り入れたモダンな空間で、夜の時間をゆっくりお楽しみください。</p>
          </div>
        </div>
        <div className="conceptWords" aria-label="BAARAの特徴"><span>Japanese<br/>Ingredients</span><span>Creative<br/>Cocktails</span><span>Food &<br/>Spirits</span></div>
      </section>

      <section className="menu section dark" id="menu">
        <div className="sectionNumber">02 / MENU</div>
        <div className="sectionTitle"><p>DRINK & FOOD</p><h2>一杯とひと皿を、<br/>自由に組み合わせて。</h2></div>
        <div className="menuGrid">
          <article><span>01</span><h3>Special Cocktails</h3><p>国産フルーツ、ハーブ、緑茶や抹茶などを使うBAARAのオリジナルカクテル。</p></article>
          <article><span>02</span><h3>Whisky & Wine</h3><p>余市、山崎、白州、響をはじめとするウイスキー、赤・白ワイン、シャンパン。</p></article>
          <article><span>03</span><h3>Food</h3><p>自家製鹿肉ジャーキー、仔羊のスパイシー串、特製和牛カレー、パスタなど。</p></article>
          <article><span>04</span><h3>Dessert</h3><p>生チョコのようなガトーショコラ、バスクチーズケーキ。</p></article>
        </div>
        <p className="menuNote">メニューや価格は変更になる場合があります。最新情報は公式サイトでご確認ください。</p>
        <ExternalLink href={`${officialUrl}#menu`} className="textLink">公式メニューを見る</ExternalLink>
      </section>

      <section className="info section" id="info">
        <div className="sectionNumber">03 / INFORMATION</div>
        <div className="infoLayout">
          <div><p className="eyebrow darkText">BAR INFORMATION</p><h2>BAARA<br/><small>Azabu -juban</small></h2><p>バー・カクテルバー・ワインバー</p></div>
          <dl>
            <div><dt>住所</dt><dd>〒106-0045<br/>東京都港区麻布十番1丁目7−12<br/>麻布十番Ohmiyaビル B1</dd></div>
            <div><dt>電話</dt><dd><a href="tel:0368041039">03-6804-1039</a></dd></div>
            <div><dt>営業時間</dt><dd>月曜日〜日曜日<br/>18:00〜26:00</dd></div>
            <div><dt>アクセス</dt><dd>南北線「麻布十番駅」4番出口から徒歩3分<br/>大江戸線「麻布十番駅」7番出口から徒歩2分</dd></div>
          </dl>
        </div>
        <div className="linkRow"><ExternalLink href={reservationUrl}>オンライン予約</ExternalLink><ExternalLink href={mapUrl}>Googleマップ</ExternalLink><ExternalLink href={officialUrl}>公式サイト</ExternalLink><ExternalLink href={instagramUrl}>Instagram</ExternalLink></div>
      </section>

      <section className="english section dark" id="english" lang="en">
        <div className="sectionNumber">04 / ENGLISH GUIDE</div>
        <div className="englishGrid">
          <div><p className="eyebrow">VISITING BAARA</p><h2>A cocktail story<br/>in Azabu-Juban.</h2></div>
          <div>
            <p>BAARA Azabu -juban is a cocktail, wine and dining bar in Azabu-Juban, Minato City, Tokyo. Its original cocktails combine Japanese fruits, herbs, green tea and matcha with classic techniques and creative ideas.</p>
            <p>The bar also serves whisky, wine and food, including venison jerky, wagyu beef curry, pasta and desserts.</p>
            <dl className="englishDetails"><div><dt>Address</dt><dd>Azabu-Juban Ohmiya Building B1, 1-7-12 Azabu-Juban, Minato-ku, Tokyo 106-0045</dd></div><div><dt>Hours</dt><dd>Monday–Sunday, 6:00 p.m.–2:00 a.m.</dd></div><div><dt>Access</dt><dd>3 minutes from Exit 4 of Azabu-Juban Station on the Namboku Line; 2 minutes from Exit 7 on the Oedo Line.</dd></div><div><dt>Reservation</dt><dd>Reserve online via TableCheck or call +81-3-6804-1039.</dd></div></dl>
            <div className="heroActions"><ExternalLink href={reservationUrl} className="button light">Reserve a table</ExternalLink><ExternalLink href={mapUrl} className="button secondary">Directions</ExternalLink></div>
          </div>
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="sectionNumber">05 / FAQ</div>
        <h2>よくあるご質問</h2>
        <div className="faqList">{faqs.map(({ q, a }, i) => <details key={q}><summary><span>0{i + 1}</span>{q}</summary><p>{a}</p></details>)}</div>
      </section>

      <section className="searchTerms section" aria-labelledby="search-title">
        <details><summary id="search-title">関連する検索語 / Related searches</summary><div><p lang="ja">{japaneseKeywords.join(" · ")}</p><p lang="en">{englishKeywords.join(" · ")}</p></div></details>
      </section>

      <footer>
        <div><strong>BAARA</strong><span>Azabu -juban</span></div>
        <address>〒106-0045 東京都港区麻布十番1丁目7−12 麻布十番Ohmiyaビル B1<br/><a href="tel:0368041039">03-6804-1039</a> · 18:00〜26:00</address>
        <p>© BAARA Azabu -juban</p>
      </footer>
    </main>
  );
}
