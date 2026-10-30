import type { Metadata } from "next";
import { absoluteUrl, isIndexableDeployment, SITE_URL } from "@/config/site";
import { branchesData, siteMetadata } from "@/data/clinicData";
import { ultrasoundServices } from "@/data/ultrasoundData";
import { clinicPhotos } from "@/data/clinicPhotos";

export function createSeoMetadata(environment: Record<string, string | undefined>): Metadata {
  const indexable = isIndexableDeployment(environment);
  const verification = environment.GOOGLE_SITE_VERIFICATION?.trim();
  const shareImage = {
    url: absoluteUrl("/opengraph-image"),
    width: 1200,
    height: 630,
    alt: siteMetadata.siteName,
  };

  return {
    metadataBase: new URL(SITE_URL),
    title: siteMetadata.title,
    description: siteMetadata.description,
    applicationName: siteMetadata.siteName,
    authors: [{ name: siteMetadata.organizationName }],
    creator: siteMetadata.organizationName,
    publisher: siteMetadata.organizationName,
    alternates: { canonical: SITE_URL },
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: siteMetadata.locale,
      url: SITE_URL,
      title: siteMetadata.ogTitle,
      description: siteMetadata.ogDescription,
      siteName: siteMetadata.siteName,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: siteMetadata.ogTitle,
      description: siteMetadata.ogDescription,
      images: [shareImage],
    },
    icons: {
      icon: [{ url: siteMetadata.logos.favicon32, type: "image/png" }],
      shortcut: "/favicon.ico?v=clinic-logo",
      apple: [{ url: siteMetadata.logos.appleTouchIcon, type: "image/png" }],
    },
    ...(verification ? { verification: { google: verification } } : {}),
  };
}

export function createClinicStructuredData() {
  const clinic = branchesData[0];
  const clinicId = absoluteUrl("/#clinic");
  const websiteId = absoluteUrl("/#website");
  const pageId = absoluteUrl("/#webpage");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: siteMetadata.siteName,
        alternateName: siteMetadata.alternateName,
        inLanguage: "th-TH",
        publisher: { "@id": clinicId },
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: SITE_URL,
        name: siteMetadata.title,
        description: siteMetadata.description,
        inLanguage: "th-TH",
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": clinicId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(clinicPhotos.receptionHall.src),
        },
      },
      {
        "@type": "MedicalClinic",
        "@id": clinicId,
        url: SITE_URL,
        name: clinic.nameTh,
        alternateName: clinic.nameEn,
        description: siteMetadata.description,
        logo: absoluteUrl(siteMetadata.logos.headerMain),
        image: [
          absoluteUrl(clinicPhotos.receptionHall.src),
          absoluteUrl(clinicPhotos.receptionCounter.src),
        ],
        telephone: clinic.phoneInternational,
        address: {
          "@type": "PostalAddress",
          ...clinic.postalAddress,
          postalCode: clinic.postalCode,
        },
        openingHoursSpecification: clinic.openingHoursSpecification.map(hours => ({
          "@type": "OpeningHoursSpecification",
          ...hours,
          dayOfWeek: hours.dayOfWeek.map(day => `https://schema.org/${day}`),
        })),
        medicalSpecialty: "https://schema.org/Musculoskeletal",
        sameAs: [clinic.facebookUrl.split("&")[0], clinic.lineUrl],
        hasMap: clinic.googleMapsQueryUrl,
        employee: { "@id": absoluteUrl("/#doctor-chanon") },
        availableService: ultrasoundServices.map(service => ({
          "@type": "MedicalTest",
          "@id": absoluteUrl(`/#test-${service.id}`),
          name: service.titleTh,
          alternateName: service.titleEn,
          url: absoluteUrl("/#services"),
          image: absoluteUrl(service.photo.src),
        })),
      },
      {
        "@type": "Person",
        "@id": absoluteUrl("/#doctor-chanon"),
        name: "นพ.ชานนท์ ชัยวิเศษ",
        jobTitle: "แพทย์เฉพาะทางศัลยศาสตร์กระดูกและข้อและเวชศาสตร์การกีฬา",
        url: absoluteUrl("/#doctors"),
        worksFor: { "@id": clinicId },
      },
    ],
  };
}

/** JSON-LD lives inside a script element, so escape tag delimiters in data. */
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
