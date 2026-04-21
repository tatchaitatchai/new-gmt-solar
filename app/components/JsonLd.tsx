const SITE_URL = "https://gmt-solar.com";

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#organization`,
    name: "GMT Smart Energy",
    alternateName: "GMT",
    description:
      "ผู้ให้บริการติดตั้งโซลาร์เซลล์ Hybrid ครบวงจร สำหรับบ้าน โรงงาน และธุรกิจ พร้อม Deye Inverter และ Battery คุณภาพสูง รับประกันแผง 30 ปี",
    url: SITE_URL,
    logo: `${SITE_URL}/logo_2.webp`,
    image: `${SITE_URL}/about-us.webp`,
    telephone: "+66938249469",
    email: "sales@gmt-solar.com",
    priceRange: "฿฿",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TH",
    },
    areaServed: {
      "@type": "Country",
      name: "Thailand",
    },
    sameAs: [],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: "GMT Smart Energy",
    inLanguage: "th-TH",
    publisher: { "@id": `${SITE_URL}#organization` },
  };

  const services = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "ติดตั้งโซลาร์เซลล์ Hybrid ครบวงจร",
    provider: { "@id": `${SITE_URL}#organization` },
    areaServed: "Thailand",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "แพ็กเกจโซลาร์เซลล์ Hybrid",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Hybrid 5 kW · 1 Phase",
          description:
            "แพ็กเกจโซลาร์เซลล์ Hybrid 5 kW สำหรับบ้านพักอาศัย พร้อมตัวเลือก Battery",
          priceCurrency: "THB",
          price: "135500",
        },
        {
          "@type": "Offer",
          name: "Hybrid 10 kW · 1 Phase",
          description: "แพ็กเกจโซลาร์เซลล์ Hybrid 10 kW 1 Phase พร้อม Deye Battery",
          priceCurrency: "THB",
          price: "289000",
        },
        {
          "@type": "Offer",
          name: "Hybrid 10 kW · 3 Phase",
          description: "แพ็กเกจโซลาร์เซลล์ Hybrid 10 kW 3 Phase พร้อม Deye Battery",
          priceCurrency: "THB",
          price: "299000",
        },
        {
          "@type": "Offer",
          name: "Hybrid 20 kW · 3 Phase",
          description:
            "แพ็กเกจโซลาร์เซลล์ Hybrid 20 kW 3 Phase พร้อม Deye Battery 16 kWh",
          priceCurrency: "THB",
          price: "426000",
        },
      ],
    },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, website, services],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
