import { SITE_URL } from "@/config/site";
import { clinicPhotos, type ClinicPhoto } from "@/data/clinicPhotos";

/**
 * Full Extracted Content & Design System Data for C Smile Dental Clinic (คลินิกทันตกรรมซีสไมล์ อุบล-วาริน)
 * Source: ./target-web/index.html & ./target-web/css/*.css (https://csmileclinic-ubon.com/)
 * Zero placeholder / Lorem Ipsum text — 100% exact Thai copywriting & bilingual translations preserved.
 */

// ============================================================================
// 1. TYPE DEFINITIONS & INTERFACES
// ============================================================================

export interface ColorToken {
  name: string;
  hex: string;
  rgb: string;
  cssVar?: string;
  usage: string;
}

export interface FontDefinition {
  family: string;
  fallback: string;
  weights: number[];
  role: string;
  cssSource: string;
}

export interface DesignSystem {
  colors: {
    primary: ColorToken;
    secondary: ColorToken;
    accentMintLight: ColorToken;
    accentAboutBg: ColorToken;
    footerCopyrightBg: ColorToken;
    typographyBody: ColorToken;
    typographyHeadingDark: ColorToken;
    typographyFooterHeading: ColorToken;
    typographyMuted: ColorToken;
    typographySubtle: ColorToken;
    borderNeutral: ColorToken;
    bgNeutralLight: ColorToken;
    bgHeaderCta: ColorToken;
    bgServiceCardDefault: ColorToken;
    bgServiceCardHover: ColorToken;
    bgFooterMain: ColorToken;
    bgWhite: ColorToken;
    bgWarmPeachHover: ColorToken;
    socialLine: ColorToken;
    socialFacebook: ColorToken;
    socialPhone: ColorToken;
    socialChatyToggle: ColorToken;
    elementorKitDefaults: {
      primary: string;
      secondary: string;
      text: string;
      accent: string;
    };
  };
  gradients: {
    featureBar: string;
    headerShadow: string;
  };
  typography: {
    primary: FontDefinition;
    secondaryUi: FontDefinition;
    displayFooter: FontDefinition;
    elementorFallbacks: FontDefinition[];
  };
}

export interface SiteMetadata {
  siteName: string;
  organizationName: string;
  alternateName: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  tagline: string;
  siteUrl: string;
  locale: string;
  logos: {
    headerMain: string;
    headerMain300w: string;
    offcanvasMobile: string;
    verticalBadge: string;
    footerTransparent: string;
    favicon32: string;
    favicon192: string;
    appleTouchIcon: string;
  };
}

export interface NavItem {
  id: string;
  labelTh: string;
  labelEn: string;
  href: string;
  children?: NavItem[];
}

export interface HeaderCtaButton {
  labelTh: string;
  labelEn: string;
  subLabel: string;
  lineId: string;
  href: string;
}

export interface NavbarData {
  logo: string;
  logo300w: string;
  offcanvasLogo: string;
  logoWidth: number;
  logoHeight: number;
  ctaButton: HeaderCtaButton;
  menuItems: NavItem[];
}

export interface HeroData {
  headingTh: string;
  headingEn: string;
  bannerTaglineTh: string;
  brandTitleText: string;
  backgroundImage: string;
  bannerGraphic: string;
  bannerGraphic300w: string;
  brandTextGraphic: string;
  brandTextGraphic768w: string;
  brandTextGraphic300w: string;
}

export interface HighlightItem {
  id: string;
  titleTh: string;
  titleEn: string;
  href?: string;
  isCta?: boolean;
  visibility: 'all' | 'desktop-only' | 'mobile-tablet-only';
}

export interface PromotionItem {
  id: string;
  titleTh: string;
  titleEn: string;
  descriptionTh?: string;
  ariaLabelTh?: string;
  priceSummaryTh: string;
  posterHeadlineTh: string;
  posterDetailsTh: string[];
  thumbnailImage: string;
  fullImage: string;
  originalThumbnailImage: string;
  originalFullImage: string;
  width: number;
  height: number;
}

export interface ServiceBulletPoint {
  highlightLabel?: string;
  textTh: string;
  textEn?: string;
}

export interface ServiceItem {
  id: string;
  titleTh: string;
  titleEn: string;
  introTh: string;
  introEn: string;
  bullets: ServiceBulletPoint[];
  ctaLabelTh: string;
  ctaLabelEn: string;
  href: string;
}

export interface ServicesSectionData {
  sectionTitleTh: string;
  sectionTitleEn: string;
  sectionSubtitle: string;
  introHeadlineTh: string;
  introSubheadlineTh: string;
  introHighlights: ServiceBulletPoint[];
  services: ServiceItem[];
  viewAllCtaTh: string;
  viewAllCtaEn: string;
  viewAllHref: string;
}

export interface AboutSectionData {
  titleTh: string;
  titleEn: string;
  descriptionTh: string;
  descriptionEn: string;
  ctaLabelTh: string;
  ctaLabelEn: string;
  ctaHref: string;
  backgroundImage: string;
  badgeLogoImage: string;
  collageImage: string;
  collageImageFull: string;
}

export interface WhyChooseUsItem {
  id: string;
  titleTh: string;
  titleEn: string;
  descriptionTh: string;
  descriptionEn: string;
  photo: ClinicPhoto;
}

export interface WhyChooseUsSectionData {
  sectionTitleTh: string;
  sectionTitleEn: string;
  sectionSubtitle: string;
  items: WhyChooseUsItem[];
}

export interface DentalSpecialtyItem {
  id: string;
  nameTh: string;
  nameEn: string;
  descriptionTh: string;
  pageHref: string;
}

export interface DoctorSectionData {
  sectionTitleTh: string;
  sectionTitleEn: string;
  pageHref: string;
  teamSummaryTh: string;
  specialties: DentalSpecialtyItem[];
}

export interface TestimonialItem {
  id: string;
  reviewerName: string;
  reviewerBadgeTh: string;
  rating: number;
  reviewTextTh: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
}

export interface TestimonialsSectionData {
  sectionTitleTh: string;
  sectionTitleEn: string;
  sectionSubtitle: string;
  ctaLabelTh: string;
  ctaLabelEn: string;
  ctaHref: string;
  reviews: TestimonialItem[];
}

export interface PortfolioSectionData {
  sectionTitleTh: string;
  sectionTitleEn: string;
  sectionSubtitle: string;
  headingLinkHref: string;
  ctaLabelTh: string;
  ctaLabelEn: string;
  ctaHref: string;
}

export interface BranchInfo {
  id: string;
  nameTh: string;
  nameEn: string;
  shortNameTh: string;
  shortNameEn: string;
  landmarkTh: string;
  landmarkEn: string;
  addressTh: string;
  addressEn: string;
  postalCode: string;
  postalAddress: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  phoneDisplay: string;
  phoneTel: string;
  phoneInternational: string;
  secondaryPhonePoster?: string;
  facebookLabelTh: string;
  facebookLabelEn: string;
  facebookUrl: string;
  messengerUrl?: string;
  lineLabelTh: string;
  lineLabelEn: string;
  lineUrl: string;
  lineId?: string;
  openingHoursSchema: string;
  openingHoursSpecification: {
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }[];
  openingHoursDisplayTh: string;
  openingHoursDisplayEn: string;
  googleMapsQueryUrl: string;
  googleMapsEmbedUrl: string;
}

export interface ArticleItem {
  id: string;
  titleTh: string;
  date: string;
  href: string;
  image: string | null;
  originalImage: string | null;
  imageAlt?: string;
}

export interface FloatingChatChannel {
  id: string;
  labelTh: string;
  labelEn: string;
  href: string;
  colorHex: string;
  colorRgb: string;
}

export interface ContactAndFooterData {
  brandLogo: string;
  brandDescriptionTh: string;
  brandDescriptionEn: string;
  addressDisplayTh: string;
  addressDisplayEn: string;
  email: string;
  openingHoursHeadingTh: string;
  openingHoursHeadingEn: string;
  openingHoursTextTh: string;
  openingHoursTextEn: string;
  branches: BranchInfo[];
  lineOfficialAccounts: {
    mainLineId: string;
    mainLineUrl: string;
    featureBarLineId: string;
    featureBarLineUrl: string;
    ubonBranchLineUrl: string;
    warinBranchLineUrl: string;
    phoneLineUrl: string;
  };
  googleMapsNote: string;
  latestArticlesHeadingTh: string;
  latestArticlesHeadingEn: string;
  latestArticles: ArticleItem[];
  floatingChatChannels: FloatingChatChannel[];
  copyrightTh: string;
  copyrightEn: string;
}

export interface ClinicData {
  designSystem: DesignSystem;
  metadata: SiteMetadata;
  navbar: NavbarData;
  hero: HeroData;
  highlights: HighlightItem[];
  promotionsSection: {
    sectionTitleTh: string;
    sectionTitleEn: string;
    sectionSubtitle: string;
    items: PromotionItem[];
  };
  servicesSection: ServicesSectionData;
  aboutSection: AboutSectionData;
  whyChooseUsSection: WhyChooseUsSectionData;
  doctorSection: DoctorSectionData;
  testimonialsSection: TestimonialsSectionData;
  portfolioSection: PortfolioSectionData;
  contactAndFooter: ContactAndFooterData;
  bilingualDictionary: Record<string, string>;
}

// ============================================================================
// 2. DESIGN SYSTEM & STYLE EXTRACTION
// ============================================================================

export const designSystem: DesignSystem = {
  colors: {
    primary: {
      name: 'Primary Deep Mint / Teal',
      hex: '#3f897a',
      rgb: 'rgb(63, 137, 122)',
      cssVar: '--theme-palette-color-1',
      usage: 'Primary brand links, active nav state, icon accents, button hover background, footer contact text & icons',
    },
    secondary: {
      name: 'Secondary Medium Mint / Teal',
      hex: '#53b49d',
      rgb: 'rgb(83, 180, 157)',
      cssVar: '--theme-palette-color-2',
      usage: 'Section headings (H2/H3), primary CTA buttons, service card hover border & divider, mobile highlight bar',
    },
    accentMintLight: {
      name: 'Accent Bright Mint',
      hex: '#5cd3b7',
      rgb: 'rgb(92, 211, 183)',
      usage: 'Desktop feature highlight bar gradient end stop (linear-gradient 90deg from #53B49D to #5CD3B7)',
    },
    accentAboutBg: {
      name: 'About Section Mint Overlay',
      hex: '#4ac0a4',
      rgb: 'rgb(74, 192, 164)',
      usage: 'About clinic banner section background color & overlay',
    },
    footerCopyrightBg: {
      name: 'Footer Bottom Bar Sage Mint',
      hex: '#7bc0a6',
      rgb: 'rgb(123, 192, 166)',
      usage: 'Footer bottom copyright bar background (#1671)',
    },
    typographyBody: {
      name: 'Body Dark Teal',
      hex: '#34685d',
      rgb: 'rgb(52, 104, 93)',
      cssVar: '--theme-palette-color-3',
      usage: 'Default body text color, nav menu links, service descriptions, why-choose-us card descriptions',
    },
    typographyHeadingDark: {
      name: 'Dark Navy Contrast',
      hex: '#102136',
      rgb: 'rgb(16, 33, 54)',
      cssVar: '--theme-palette-color-4',
      usage: 'High-contrast dark headings and site title',
    },
    typographyFooterHeading: {
      name: 'Footer Heading Deep Navy',
      hex: '#1c244b',
      rgb: 'rgb(28, 36, 75)',
      usage: 'Footer image box title typography',
    },
    typographyMuted: {
      name: 'Muted Neutral Gray',
      hex: '#6d6d6d',
      rgb: 'rgb(109, 109, 109)',
      usage: 'Footer brand description text',
    },
    typographySubtle: {
      name: 'Subtle Gray',
      hex: '#666666',
      rgb: 'rgb(102, 102, 102)',
      usage: 'Footer opening hours description text',
    },
    borderNeutral: {
      name: 'Neutral Border Gray',
      hex: '#e7ebee',
      rgb: 'rgb(231, 235, 238)',
      cssVar: '--theme-palette-color-5',
      usage: 'Card borders, table borders, subtle section dividers',
    },
    bgNeutralLight: {
      name: 'Light Neutral Surface',
      hex: '#f3f5f7',
      rgb: 'rgb(243, 245, 247)',
      cssVar: '--theme-palette-color-6',
      usage: 'Secondary light background surface',
    },
    bgHeaderCta: {
      name: 'Ice White Surface',
      hex: '#f7fafd',
      rgb: 'rgb(247, 250, 253)',
      cssVar: '--theme-palette-color-7',
      usage: 'Header LINE CTA button background and Hero section fallback background',
    },
    bgServiceCardDefault: {
      name: 'Service Card Light Gray',
      hex: '#f8f8f8',
      rgb: 'rgb(248, 248, 248)',
      usage: 'Default background of the 8 Dental Service cards',
    },
    bgServiceCardHover: {
      name: 'Service Card Mint Tint Hover',
      hex: '#f4fffc',
      rgb: 'rgb(244, 255, 252)',
      usage: 'Hover background of Dental Service cards (paired with 2px solid #53b49d border)',
    },
    bgFooterMain: {
      name: 'Footer Soft Mint Tint',
      hex: '#effff9',
      rgb: 'rgb(239, 255, 249)',
      usage: 'Main footer section background (#1671)',
    },
    bgWhite: {
      name: 'Pure White',
      hex: '#ffffff',
      rgb: 'rgb(255, 255, 255)',
      cssVar: '--theme-palette-color-8',
      usage: 'Main page background, sticky header background, white button/banner text',
    },
    bgWarmPeachHover: {
      name: 'Warm Peach Accent',
      hex: '#ffe8da',
      rgb: 'rgb(255, 232, 218)',
      cssVar: '--theme-palette-color-9',
      usage: 'Mobile header CTA hover accent background',
    },
    socialLine: {
      name: 'LINE Official Green',
      hex: '#00b900',
      rgb: 'rgb(0, 185, 0)',
      usage: 'Header LINE CTA icon (#00b900), Feature bar LINE button (#00c300), Floating Chaty LINE (#38B900)',
    },
    socialFacebook: {
      name: 'Facebook Brand Blue',
      hex: '#1976d2',
      rgb: 'rgb(25, 118, 210)',
      usage: 'Portfolio Facebook CTA button (#1976D2) and Floating Messenger icon (#1E88E5)',
    },
    socialPhone: {
      name: 'Floating Phone Emerald',
      hex: '#03e78b',
      rgb: 'rgb(3, 231, 139)',
      usage: 'Floating Chaty phone call action button',
    },
    socialChatyToggle: {
      name: 'Floating Chaty Coral',
      hex: '#ff6060',
      rgb: 'rgb(255, 96, 96)',
      usage: 'Floating Chaty main toggle button',
    },
    elementorKitDefaults: {
      primary: '#6EC1E4',
      secondary: '#54595F',
      text: '#7A7A7A',
      accent: '#61CE70',
    },
  },
  gradients: {
    featureBar: 'linear-gradient(90deg, #53B49D 0%, #5CD3B7 100%)',
    headerShadow: '0px 10px 20px rgba(63, 138, 123, 0.28)',
  },
  typography: {
    primary: {
      family: 'Noto Sans Thai',
      fallback: 'sans-serif',
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      role: 'Primary Thai & English font for all headings (H1–H6), body copy, navigation menus, buttons, and cards',
      cssSource: 'css/notosansthai.css & css/global.css',
    },
    secondaryUi: {
      family: 'Inter',
      fallback: 'sans-serif',
      weights: [700],
      role: 'Header CTA sub-label ("Line ID : @csmile-ubon")',
      cssSource: 'css/global.css',
    },
    displayFooter: {
      family: 'Poppins',
      fallback: 'sans-serif',
      weights: [400, 500, 600, 700],
      role: 'Footer image box title typography',
      cssSource: 'css/poppins.css & css/post-1671.css',
    },
    elementorFallbacks: [
      {
        family: 'Roboto',
        fallback: 'sans-serif',
        weights: [400, 500, 700],
        role: 'Elementor kit global primary/text fallback font',
        cssSource: 'css/roboto.css & css/post-10.css',
      },
      {
        family: 'Roboto Slab',
        fallback: 'serif',
        weights: [400, 700],
        role: 'Elementor kit global secondary fallback font',
        cssSource: 'css/robotoslab.css & css/post-10.css',
      },
    ],
  },
};

// ============================================================================
// 3. SITE METADATA & SEO
// ============================================================================

export const siteMetadata: SiteMetadata = {
  siteName: 'คลินิกกระดูกและข้อ นพ.ชานนท์ พญ.พัดชา',
  organizationName: 'คลินิกกระดูกและข้อ นพ.ชานนท์ พญ.พัดชา',
  alternateName: 'คลินิกกระดูกและข้ออุบล (Ubon Bone & Joint Clinic)',
  title: 'คลินิกกระดูกและข้อ อุบล | นพ.ชานนท์ พญ.พัดชา',
  description:
    'คลินิกกระดูกและข้อ นพ.ชานนท์ พญ.พัดชา อุบลราชธานี ตรวจรักษาปวดข้อ ปวดเข่า บาดเจ็บจากกีฬา และอัลตราซาวด์ โดยแพทย์เฉพาะทาง ถ.ชยางกูร โทร 082 919 9987',
  ogTitle: 'คลินิกกระดูกและข้อ นพ.ชานนท์ พญ.พัดชา - ศูนย์ตรวจรักษาโรคกระดูกและข้อครบวงจร อุบลราชธานี',
  ogDescription:
    'ตรวจรักษาโรคกระดูก ข้อต่อ เส้นเอ็น กล้ามเนื้อ บาดเจ็บจากกีฬา ผ่าตัดส่องกล้องข้อเข่า ข้อไหล่ อัลตราซาวด์ระบบกระดูกและเส้นเอ็น โดยแพทย์เฉพาะทาง',
  tagline: 'ศูนย์ตรวจรักษาโรคกระดูก ข้อต่อ เส้นเอ็น และเวชศาสตร์การกีฬา โดยแพทย์เฉพาะทาง',
  siteUrl: SITE_URL,
  locale: 'th_TH',
  logos: {
    headerMain: '/images/logo-non-bg.png',
    headerMain300w: '/images/logo-non-bg.png',
    offcanvasMobile: '/images/logo-non-bg.png',
    verticalBadge: '/images/logo-non-bg.png',
    footerTransparent: '/images/logo-non-bg.png',
    favicon32: '/images/logo-non-bg.png',
    favicon192: '/images/logo-non-bg.png',
    appleTouchIcon: '/images/logo-non-bg.png',
  },
};

// ============================================================================
// 4. NAVBAR & NAVIGATION MENU
// ============================================================================

export const navbarData: NavbarData = {
  logo: '/images/logo-non-bg.png',
  logo300w: '/images/logo-non-bg.png',
  offcanvasLogo: '/images/logo-non-bg.png',
  logoWidth: 200,
  logoHeight: 200,
  ctaButton: {
    labelTh: 'แอดไลน์ปรึกษา',
    labelEn: 'Contact via Line',
    subLabel: 'Line ID : @dr.chanon_clinic',
    lineId: '@dr.chanon_clinic',
    href: 'https://line.me/R/ti/p/@dr.chanon_clinic',
  },
  menuItems: [
    {
      id: 'home',
      labelTh: 'หน้าแรก',
      labelEn: 'Home',
      href: 'https://csmileclinic-ubon.com/',
    },
    {
      id: 'services',
      labelTh: 'บริการของเรา',
      labelEn: 'Our Services',
      href: 'https://csmileclinic-ubon.com/services/',
      children: [
        {
          id: 'orthodontics',
          labelTh: 'จัดฟัน',
          labelEn: 'Orthodontics',
          href: 'https://csmileclinic-ubon.com/services/braces-ubon-orthodontics/',
          children: [
            {
              id: 'metal-braces',
              labelTh: 'จัดฟันแบบโลหะ',
              labelEn: 'Metal Braces',
              href: 'https://csmileclinic-ubon.com/services/braces-ubon-orthodontics/จัดฟันแบบโลหะ/',
            },
            {
              id: 'damon-braces',
              labelTh: 'จัดฟันแบบดามอน',
              labelEn: 'Damon Braces',
              href: 'https://csmileclinic-ubon.com/services/braces-ubon-orthodontics/จัดฟันแบบดามอน/',
            },
            {
              id: 'clear-aligners',
              labelTh: 'จัดฟันใส',
              labelEn: 'Clear Aligners',
              href: 'https://csmileclinic-ubon.com/services/braces-ubon-orthodontics/จัดฟันใส/',
            },
          ],
        },
        {
          id: 'dentures',
          labelTh: 'ฟันปลอม',
          labelEn: 'Dentures',
          href: 'https://csmileclinic-ubon.com/services/ฟันปลอม/',
          children: [
            {
              id: 'fixed-dentures',
              labelTh: 'ฟันปลอมชนิดติดแน่น',
              labelEn: 'Fixed Dentures',
              href: 'https://csmileclinic-ubon.com/services/ฟันปลอม/ฟันปลอมชนิดติดแน่น/',
            },
            {
              id: 'removable-dentures',
              labelTh: 'ฟันปลอมชนิดถอดได้',
              labelEn: 'Removable Dentures',
              href: 'https://csmileclinic-ubon.com/services/ฟันปลอม/ฟันปลอมชนิดถอดได้/',
            },
          ],
        },
        {
          id: 'scaling',
          labelTh: 'ขูดหินปูน',
          labelEn: 'Scaling & Cleaning',
          href: 'https://csmileclinic-ubon.com/services/ขูดหินปูน/',
        },
        {
          id: 'fillings',
          labelTh: 'อุดฟัน',
          labelEn: 'Fillings',
          href: 'https://csmileclinic-ubon.com/services/อุดฟัน/',
        },
        {
          id: 'oral-surgery',
          labelTh: 'ศัลยกรรมช่องปาก',
          labelEn: 'Oral Surgery',
          href: 'https://csmileclinic-ubon.com/services/ศัลยกรรมช่องปาก/',
          children: [
            {
              id: 'tooth-extraction',
              labelTh: 'การถอนฟัน',
              labelEn: 'Tooth Extraction',
              href: 'https://csmileclinic-ubon.com/services/ศัลยกรรมช่องปาก/การถอนฟัน/',
            },
            {
              id: 'wisdom-tooth-surgery',
              labelTh: 'การผ่าฟันคุด',
              labelEn: 'Wisdom Tooth Surgery',
              href: 'https://csmileclinic-ubon.com/services/ศัลยกรรมช่องปาก/การผ่าฟันคุด/',
            },
          ],
        },
        {
          id: 'root-canal',
          labelTh: 'รักษารากฟัน',
          labelEn: 'Root Canal Treatment',
          href: 'https://csmileclinic-ubon.com/services/รักษารากฟัน-root-canal-treatment/',
        },
        {
          id: 'cosmetic-dentistry',
          labelTh: 'ทันตกรรมเพื่อความงาม',
          labelEn: 'Cosmetic Dentistry',
          href: 'https://csmileclinic-ubon.com/services/ทันตกรรมเพื่อความงาม/',
          children: [
            {
              id: 'veneers',
              labelTh: 'วีเนียร์',
              labelEn: 'Veneers',
              href: 'https://csmileclinic-ubon.com/services/ทันตกรรมเพื่อความงาม/วีเนียร์/',
            },
            {
              id: 'teeth-whitening',
              labelTh: 'ฟอกสีฟัน',
              labelEn: 'Teeth Whitening',
              href: 'https://csmileclinic-ubon.com/services/ทันตกรรมเพื่อความงาม/ฟอกสีฟัน/',
            },
          ],
        },
        {
          id: 'dental-xray',
          labelTh: 'ถ่ายภาพรังสี',
          labelEn: 'Dental X-Ray',
          href: 'https://csmileclinic-ubon.com/services/ถ่ายภาพรังสี/',
        },
      ],
    },
    {
      id: 'dentists',
      labelTh: 'ทันตแพทย์ของเรา',
      labelEn: 'Our Dentists',
      href: 'https://csmileclinic-ubon.com/our-dentis/',
    },
    {
      id: 'fees',
      labelTh: 'อัตราค่าบริการ',
      labelEn: 'Service Fees',
      href: 'https://csmileclinic-ubon.com/fee/',
    },
    {
      id: 'articles',
      labelTh: 'บทความ',
      labelEn: 'Articles',
      href: 'https://csmileclinic-ubon.com/news/',
    },
    {
      id: 'reviews',
      labelTh: 'รีวิว',
      labelEn: 'Reviews',
      href: 'https://csmileclinic-ubon.com/review/',
      children: [
        {
          id: 'patient-reviews',
          labelTh: 'รีวิวจากลูกค้า',
          labelEn: 'Patient Reviews',
          href: 'https://csmileclinic-ubon.com/review/รีวิวจากลูกค้า/',
        },
        {
          id: 'work-portfolio',
          labelTh: 'รีวิวผลงาน',
          labelEn: 'Work Portfolio',
          href: 'https://csmileclinic-ubon.com/review/รีวิวผลงาน/',
        },
      ],
    },
    {
      id: 'contact',
      labelTh: 'ติดต่อเรา',
      labelEn: 'Contact Us',
      href: 'https://csmileclinic-ubon.com/contact/',
    },
  ],
};

// ============================================================================
// 5. HERO SECTION & FEATURE HIGHLIGHTS BAR
// ============================================================================

export const heroData: HeroData = {
  headingTh: 'คลินิกกระดูกและข้ออุบล',
  headingEn: 'Ubon Bone & Joint Clinic',
  bannerTaglineTh: 'ศูนย์ตรวจรักษาโรคกระดูก ข้อต่อ และเวชศาสตร์การกีฬา อุบลราชธานี',
  brandTitleText: 'คลินิกกระดูกและข้ออุบล',
  backgroundImage: '/images/chanon-clinic.jpg',
  bannerGraphic: '/images/banner-0text.png',
  bannerGraphic300w: '/images/banner-0text-300x110.png',
  brandTextGraphic: '/images/logo-non-bg.png',
  brandTextGraphic768w: '/images/logo-non-bg.png',
  brandTextGraphic300w: '/images/logo-non-bg.png',
};

export const highlightsData: HighlightItem[] = [
  {
    id: 'specialist-team',
    titleTh: 'ทีมทันตแพทย์เฉพาะทาง',
    titleEn: 'Specialist Dental Team',
    visibility: 'all',
  },
  {
    id: 'peace-of-mind',
    titleTh: 'อุ่นใจทุกครั้งที่ใช้บริการ',
    titleEn: 'Peace of Mind Every Visit',
    visibility: 'mobile-tablet-only',
  },
  {
    id: 'personal-care',
    titleTh: 'ดูแลให้คำปรึกษาและใส่ใจทุกเคส',
    titleEn: 'Personal Care for Every Case',
    visibility: 'all',
  },
  {
    id: 'easy-access-parking',
    titleTh: 'เดินทางสะดวก มีที่จอดรถ',
    titleEn: 'Easy Access & Free Parking',
    visibility: 'all',
  },
  {
    id: 'add-line-cta',
    titleTh: 'แอดไลน์ Line',
    titleEn: 'Add Line',
    href: 'https://line.me/R/ti/p/@436ucuio',
    isCta: true,
    visibility: 'desktop-only',
  },
];

// ============================================================================
// 6. PROMOTIONS SECTION (13 REAL POSTERS & PRICING)
// ============================================================================

export const promotionsData: PromotionItem[] = [
  {
    id: 'promo-braces-2025',
    titleTh: 'โปรจัดฟัน2025',
    titleEn: 'Braces Promotion 2025',
    priceSummaryTh: 'จองโปรจัดฟันเริ่มต้น 899.- | ผ่อนเดือนละ 1,000.-',
    posterHeadlineTh: 'มีงบไม่เยอะก็... จัดฟันได้ โปรโมชั่นจัดฟัน ผ่อนเดือนละ 1,000.-',
    posterDetailsTh: [
      'จองโปรจัดฟันเริ่มต้น 899.- รับของแถมเพียบ!',
      'ฟรี! ปรึกษากับทันตแพทย์',
      'ฟรี! X-Ray',
      'ฟรี! ถ่ายรูปในและนอกช่องปาก',
      'ฟรี! ติดอุปกรณ์หลุด 1 ตัว',
      'ฟรี! รีเทนเนอร์ใส (มูลค่า 5,000.-)',
    ],
    thumbnailImage: '/images/promo-braces-2025-thumb.webp',
    fullImage: '/images/promo-braces-2025.webp',
    originalThumbnailImage: '/images/โปรจัดฟัน2025-1022x1024.webp',
    originalFullImage: '/images/โปรจัดฟัน2025.webp',
    width: 1022,
    height: 1024,
  },
  {
    id: 'promo-root-canal',
    titleTh: 'รักษารากฟัน',
    titleEn: 'Root Canal Treatment',
    descriptionTh: 'รักษารากฟันอุบลโดยหมอเฉพาะทางรักษารากฟั  ทางเลือกที่ดีที่สุดในการรักษาฟันธรรมชาติไว้ใช้งานได้ยาวนาน',
    ariaLabelTh: 'รักษารากฟันอุบล ทางเลือกที่ดีที่สุดในการรักษาฟันธรรมชาติไว้ใช้งานได้ยาวนาน',
    priceSummaryTh: 'เริ่มต้น 4,500.- (ปรึกษาฟรี ไม่มีค่าใช้จ่าย)',
    posterHeadlineTh: 'ปวดฟัน ฟันผุลึก ไม่อยากถอน! รักษารากฟันช่วยได้! โดยคุณหมอเฉพาะทางรักษารากฟัน',
    posterDetailsTh: [
      'เริ่มต้น 4,500.-',
      'เก็บฟันแท้ไว้ ใช้งานได้เหมือนเดิม',
      'ปรึกษาตอนนี้ไม่มีค่าใช้จ่าย',
    ],
    thumbnailImage: '/images/promo-root-canal-thumb.webp',
    fullImage: '/images/promo-root-canal.webp',
    originalThumbnailImage: '/images/รักษาราก2-1024x1024.webp',
    originalFullImage: '/images/รักษาราก2.webp',
    width: 1024,
    height: 1024,
  },
  {
    id: 'promo-implant-69',
    titleTh: 'รากเทียม',
    titleEn: 'Dental Implants',
    descriptionTh: 'ทำรากเทียมโดยทันตแพทย์เฉพาะทางรากเทียม ',
    ariaLabelTh:
      'ใครว่ารากเทียมต้องจ่ายเป็นแสน? พบกับโปรโมชั่นรากเทียมราคาประหยัดที่การันตีคุณภาพโดย หมอเฉพาะทาง โดยตรง',
    priceSummaryTh: 'เริ่มต้นเพียง 35,900 บาท (ปกติ 45,000 บาท) แบ่งชำระได้ 3 งวด',
    posterHeadlineTh: 'โปรโมชั่น รากฟันเทียม + ครอบฟัน Zirconia',
    posterDetailsTh: [
      'เริ่มต้นเพียง 35,900 บาท (ปกติ 45,000 บาท)',
      'ราคารวมครอบฟัน Zirconia',
      'แบ่งชำระได้ 3 งวด',
      'ดูแลโดยทันตแพทย์เฉพาะทางรากเทียม',
    ],
    thumbnailImage: '/images/promo-implant-69-thumb.webp',
    fullImage: '/images/promo-implant-69.webp',
    originalThumbnailImage: '/images/รากเทียม69-1024x1024.webp',
    originalFullImage: '/images/รากเทียม69.webp',
    width: 1024,
    height: 1024,
  },
  {
    id: 'promo-gold-card-69',
    titleTh: 'บัตรทองทำฟัน',
    titleEn: 'Universal Coverage (Gold Card) Free Dental Care',
    descriptionTh: 'สิทธิบัตรทอง ทำฟันฟรีที่คลินิกได้แล้ว สะดวก รวดเร็ว ไม่ต้องรอนาน',
    ariaLabelTh:
      'สิทธิบัตรทอง ทำฟันที่คลินิกได้แล้ว สะดวก รวดเร็ว ไม่ต้องรอนาน ชาวสิทธิบัตรทองรู้ยัง? เดี๋ยวนี้เช็กสิทธิแล้วเข้ามาทำฟันที่คลินิกเราได้เลย! มาตรฐานเดียวกับโรงพยาบาล แต่ใกล้บ้านและรวดเร็วกว่าเดิม',
    priceSummaryTh: 'ทำฟันฟรี! ใช้สิทธิ์ 2 ครั้งต่อปี',
    posterHeadlineTh: 'ด่วน! รีบมาใช้สิทธิ สิทธิทำฟันบัตรทอง ทำฟันฟรี!',
    posterDetailsTh: [
      'ถอนฟัน | อุดฟัน | ขูดหินปูน | เคลือบหลุมร่องฟัน',
      'ใช้สิทธิ์ 2 ครั้งต่อปี',
      'สะดวก รวดเร็ว ไม่ต้องรอนาน',
    ],
    thumbnailImage: '/images/promo-gold-card-69-thumb.webp',
    fullImage: '/images/promo-gold-card-69.webp',
    originalThumbnailImage: '/images/บัตรทอง69-724x1024.webp',
    originalFullImage: '/images/บัตรทอง69.webp',
    width: 724,
    height: 1024,
  },
  {
    id: 'promo-social-security',
    titleTh: 'สิทธประกันสังคม',
    titleEn: 'Social Security Dental Benefits',
    ariaLabelTh: 'ประกันสังคมทำฟัน ไม่ต้องสำรองจ่าย',
    priceSummaryTh: 'ไม่ต้องสำรองจ่าย 900.-/ปี',
    posterHeadlineTh: 'อย่าลืมใช้สิทธิ ประกันสังคม ก่อนหมดปีนี้ "ทำฟัน" ไม่ต้องสำรองจ่าย 900.-/ปี',
    posterDetailsTh: [
      'อุดฟัน ขูดหินปูน ถอนฟัน ผ่าฟันคุด',
      'วงเงิน 900 บาท/ปี ไม่ต้องสำรองจ่าย',
      'ใช้บัตรประชาชนใบเดียว',
    ],
    thumbnailImage: '/images/promo-social-security-thumb.webp',
    fullImage: '/images/promo-social-security.webp',
    originalThumbnailImage: '/images/สิทธประกันสังคม-1024x1024.webp',
    originalFullImage: '/images/สิทธประกันสังคม.webp',
    width: 1024,
    height: 1024,
  },
  {
    id: 'promo-composite-veneer',
    titleTh: 'composit veneer',
    titleEn: 'Composite Veneers',
    ariaLabelTh: 'คอมโพสิต วีเนียร์',
    priceSummaryTh: 'เริ่มต้นซี่ละ 2,500.- | เหมา 8 ซี่ 18,500.- | เหมา 16 ซี่ 35,000.-',
    posterHeadlineTh: 'ฟันสวยด้วย คอมโพสิตวีเนียร์',
    posterDetailsTh: [
      'เริ่มต้นซี่ละ 2,500.-',
      'เหมา 8 ซี่ 18,500.-',
      'เหมา 16 ซี่ 35,000.-',
      'ฟรี! ปรึกษาคุณหมอเฉพาะทาง และ ตรวจสุขภาพฟัน',
    ],
    thumbnailImage: '/images/promo-composite-veneer-thumb.webp',
    fullImage: '/images/promo-composite-veneer.webp',
    originalThumbnailImage: '/images/composit-veneer-1024x1024.webp',
    originalFullImage: '/images/composit-veneer.webp',
    width: 1024,
    height: 1024,
  },
  {
    id: 'promo-package-3',
    titleTh: 'Promotion Package3',
    titleEn: 'Retainer Promotion Package 3',
    priceSummaryTh: '3,799.- (จากปกติ 4,999.-)',
    posterHeadlineTh: 'PROMOTION PACKAGE 3 ตรวจฟัน + รีเทนเนอร์ บน-ล่าง',
    posterDetailsTh: [
      'ตรวจฟัน + รีเทนเนอร์ บน-ล่าง เพียง 3,799.- (จากปกติ 4,999.-)',
      'คลินิกกระดูกและข้อ นพ.ชานนท์ พญ.พัดชา อุบลราชธานี โทร 082 919 9987',
    ],
    thumbnailImage: '/images/promo-package-3.jpg',
    fullImage: '/images/promo-package-3.jpg',
    originalThumbnailImage: '/images/408939707_245820101856076_1839698903793649106_n.jpg',
    originalFullImage: '/images/408939707_245820101856076_1839698903793649106_n.jpg',
    width: 960,
    height: 960,
  },
  {
    id: 'promo-filling',
    titleTh: 'อุดฟัน',
    titleEn: 'Tooth Filling Promotion',
    priceSummaryTh: 'เริ่มต้น 600.-',
    posterHeadlineTh: 'อุดฟัน ราคาไม่แพง เริ่มต้น 600.-',
    posterDetailsTh: [
      'อุด ปิดช่องห่างของฟัน',
      'ใช้เวลาในการรักษาไม่นาน ทำเสร็จในครั้งเดียว',
      'เริ่มต้น 600.-',
    ],
    thumbnailImage: '/images/promo-filling-thumb.jpg',
    fullImage: '/images/promo-filling.jpg',
    originalThumbnailImage: '/images/420234364_271059622665457_5415226242580978286_n-1024x1024.jpg',
    originalFullImage: '/images/420234364_271059622665457_5415226242580978286_n.jpg',
    width: 1024,
    height: 1024,
  },
  {
    id: 'promo-whitening',
    titleTh: 'ฟอกสีฟัน',
    titleEn: 'Cool Light Teeth Whitening',
    priceSummaryTh: 'เพียง 3,999.-',
    posterHeadlineTh: 'ฟอกสีฟัน ขาวใสวิ๊ง! COOL LIGHT นำเข้าจาก USA เพียง! 3,999.-',
    posterDetailsTh: [
      'ฟอกสีฟันระบบ COOL LIGHT นำเข้าจาก USA',
      'ราคาโปรโมชั่นเพียง 3,999.-',
    ],
    thumbnailImage: '/images/promo-whitening-thumb.jpg',
    fullImage: '/images/promo-whitening.jpg',
    originalThumbnailImage: '/images/422419961_275643245540428_4659230689305229571_n-1024x1024.jpg',
    originalFullImage: '/images/422419961_275643245540428_4659230689305229571_n.jpg',
    width: 1024,
    height: 1024,
  },
  {
    id: 'promo-kids-dental',
    titleTh: 'โปรทำฟันเด็ก2',
    titleEn: 'Kids Dental Checkup Package',
    priceSummaryTh: 'เริ่มต้นเพียง 400.-',
    posterHeadlineTh: 'Package ตรวจฟันหนูน้อย เริ่มต้นเพียง 400.-',
    posterDetailsTh: [
      'ดูแลโดยทันตแพทย์เฉพาะทางเด็ก',
      'ตรวจฟัน + ขัดฟัน + เคลือบฟลูออไรด์',
      'เริ่มต้นเพียง 400.-',
    ],
    thumbnailImage: '/images/promo-kids-dental-thumb.webp',
    fullImage: '/images/promo-kids-dental.webp',
    originalThumbnailImage: '/images/โปรทำฟันเด็ก2-1024x1024.webp',
    originalFullImage: '/images/โปรทำฟันเด็ก2.webp',
    width: 1024,
    height: 1024,
  },
  {
    id: 'promo-dentures',
    titleTh: 'สีม่วง สีขาว เรียบง่าย ทำฟันปลอม Instagram โพสต์',
    titleEn: 'Social Security Free Dentures Benefit',
    priceSummaryTh: 'เบิกประกันสังคมได้สูงสุด 2,400 - 4,400.-',
    posterHeadlineTh: 'ทำฟันปลอม ฟรี ด้วยสิทธิประกันสังคม',
    posterDetailsTh: [
      'ฟันปลอมแบบถอดได้ (บนหรือล่าง) ไม่เกิน 2,400.- เบิกได้ทุก 5 ปี',
      'ฟันปลอมแบบถอดได้ (บนและล่าง) ไม่เกิน 4,400.- เบิกได้ทุก 5 ปี',
    ],
    thumbnailImage: '/images/promo-dentures-thumb.webp',
    fullImage: '/images/promo-dentures.webp',
    originalThumbnailImage: '/images/สีม่วง-สีขาว-เรียบง่าย-ทำฟันปลอม-Instagram-โพสต์-1024x1024.webp',
    originalFullImage: '/images/สีม่วง-สีขาว-เรียบง่าย-ทำฟันปลอม-Instagram-โพสต์.webp',
    width: 1024,
    height: 1024,
  },
  {
    id: 'promo-fluoride',
    titleTh: 'โปร ขัดเคลือบฟลูออไรด์',
    titleEn: 'Scaling, Polishing & Fluoride Package',
    priceSummaryTh: '999.- (จากราคาปกติ 1,500.-)',
    posterHeadlineTh: 'โปรโมชั่น ขูดหินปูน + ขัดฟัน + เคลือบฟลูออไรด์ 999.-',
    posterDetailsTh: [
      'ราคาพิเศษ 999.- (จากราคาปกติ 1,500.-)',
      'ฟรี ตรวจฟัน',
      'ใช้สิทธิประกันสังคม ไม่ต้องสำรองจ่าย',
    ],
    thumbnailImage: '/images/promo-fluoride-thumb.webp',
    fullImage: '/images/promo-fluoride.webp',
    originalThumbnailImage: '/images/โปร-ขัดเคลือบฟลูออไรด์-724x1024.webp',
    originalFullImage: '/images/โปร-ขัดเคลือบฟลูออไรด์.webp',
    width: 724,
    height: 1024,
  },
  {
    id: 'promo-gold-card',
    titleTh: 'สิทธิบัตรทอง',
    titleEn: 'Gold Card 3 Times/Year Free Dental Benefit',
    ariaLabelTh: 'บัตรทอง ทำฟันฟรี ตามสิทธิการรักษา 3 ครั้ง ต่อปี',
    priceSummaryTh: 'ไม่มีค่าใช้จ่าย ไม่ต้องสำรองจ่าย (3 ครั้ง/ปี)',
    posterHeadlineTh: 'สิทธิบัตรทอง ทำฟัน ไม่มีค่าใช้จ่าย ไม่ต้องสำรองจ่าย',
    posterDetailsTh: [
      'ใช้เพียง "บัตรประชาชน" ใบเดียว',
      'ใช้สิทธิ์ได้ 3 ครั้ง/ปี',
      'ครอบคลุม: อุดฟัน, ขูดหินปูน, ถอนฟัน, ตรวจฟัน, เคลือบฟลูออไรด์, เคลือบหลุมร่องฟัน',
    ],
    thumbnailImage: '/images/promo-gold-card-thumb.webp',
    fullImage: '/images/promo-gold-card.webp',
    originalThumbnailImage: '/images/สิทธิบัตรทอง-1024x1024.webp',
    originalFullImage: '/images/สิทธิบัตรทอง.webp',
    width: 1024,
    height: 1024,
  },
];

// ============================================================================
// 7. DENTAL SERVICES SECTION (INTRO + 8 SERVICE CARDS)
// ============================================================================

export const servicesSectionData: ServicesSectionData = {
  sectionTitleTh: 'บริการของเรา',
  sectionTitleEn: 'Our Services',
  sectionSubtitle: 'Our Service',
  introHeadlineTh:
    '“คืนรอยยิ้มสวย มั่นใจในทุกการบดเคี้ยว… ดูแลคุณโดยทีมทันตแพทย์เฉพาะทาง ที่ C Smile Dental Clinic” อุบล',
  introSubheadlineTh:
    'การตรวจรักษาเฉพาะทางด้านกระดูก ข้อต่อ และอัลตราซาวด์วินิจฉัยอย่างแม่นยำ ณ คลินิกกระดูกและข้อ นพ.ชานนท์ พญ.พัดชา อุบลราชธานี (ถ.ชยางกูร ตรงข้ามร้าน ฟ.ฟัน ราชเวช)',
  introHighlights: [
    {
      highlightLabel: 'Expert Care:',
      textTh:
        'ทำฟัน จัดฟัน รักษารากฟัน ฟันปลอม ผ่าฟันคุด รักษาโรคเหงือก ทำรากเทียม และทันตกรรมความงาม โดยทันตแพทย์ที่มีประสบการณ์',
      textEn:
        'Comprehensive dental treatments—braces, root canals, dentures, wisdom teeth, gum care, implants & cosmetic dentistry by experienced specialists.',
    },
    {
      highlightLabel: 'No Waiting List:',
      textTh: 'จัดระบบนัดหมายรวดเร็ว เข้าถึงการรักษาทันทีเมื่อคุณมีอาการ',
      textEn: 'Fast appointment scheduling—get treated promptly when you need it.',
    },
    {
      highlightLabel: 'Social Security:',
      textTh: 'ใช้สิทธิประกันสังคม 900 บาท (อุด-ถอน-ขูด) หรือสิทธิบัตรทองไม่ต้องสำรองจ่าย',
      textEn:
        'Use your 900 THB Social Security benefit (fillings, extractions, scaling) or Gold Card with no upfront payment.',
    },
    {
      highlightLabel: 'Modern & Safe:',
      textTh:
        'เทคโนโลยีใหม่แม่นยำ เครื่องมือสะอาดมาตรฐานสากล เพื่อความปลอดภัยสูงสุดของคุณ  ภายใต้ระบบรักษาความสะอาดปราศจากเชื้อด้วยเทคโนโลยีระดับสูงสุด',
      textEn:
        'Precision modern technology and internationally certified sterilization for your maximum safety.',
    },
  ],
  services: [
    {
      id: 'orthodontics',
      titleTh: 'จัดฟัน',
      titleEn: 'Orthodontics',
      introTh: 'ออกแบบรอยยิ้มใหม่ให้เป๊ะกว่าเดิม ด้วยการจัดฟันที่ตอบโจทย์ไลฟ์สไตล์คุณ',
      introEn: 'Redesign your smile with orthodontic options tailored to your lifestyle.',
      bullets: [
        {
          highlightLabel: 'Smart Orthodontics:',
          textTh: 'มีให้เลือกทั้งจัดฟันแบบเหล็ก (Metal) และจัดฟันใส (Clear Aligner)',
          textEn: 'Choose between traditional Metal Braces and Clear Aligners.',
        },
        {
          highlightLabel: 'Digital Smile Design:',
          textTh: 'วางแผนการรักษาด้วยระบบดิจิทัล แม่นยำ เห็นผลลัพธ์ชัดเจน',
          textEn: 'Precision digital treatment planning with clear, predictable results.',
        },
        {
          textTh: 'จัดตารางนัดหมายง่าย ไม่ต้องรอคิวนาน ดูแลอย่างต่อเนื่องโดยทีมทันตแพทย์ที่มีประสบการณ์',
          textEn: 'Easy scheduling with no long waits, continuously cared for by experienced orthodontists.',
        },
        {
          textTh: 'ผ่อนชำระสบายๆ เริ่มต้นรอยยิ้มใหม่ได้ทันที',
          textEn: 'Flexible installment plans—start your new smile right away.',
        },
      ],
      ctaLabelTh: 'ดูรายละเอียด',
      ctaLabelEn: 'Learn More',
      href: 'https://csmileclinic-ubon.com/services/จัดฟัน/',
    },
    {
      id: 'dentures',
      titleTh: 'ฟันปลอม',
      titleEn: 'Dentures',
      introTh:
        '“คืนรอยยิ้มที่เป็นธรรมชาติ ทานอาหารอร่อยได้อีกครั้ง” ฟันปลอมคุณภาพสูง โดยทันตแพทย์เฉพาะทางฟันปลอม  ออกแบบฟันปลอมเฉพาะบุคคล โดยหมอเฉพาะทางด้านทันตกรรมประดิษฐ์',
      introEn:
        '“Restore a natural smile and enjoy your favorite foods again.” High-quality custom dentures crafted by prosthodontic specialists.',
      bullets: [
        {
          highlightLabel: 'Natural Look:',
          textTh: 'สวยงามเป็นธรรมชาติ รับกับใบหน้า ใส่สบาย ไม่เจ็บ',
          textEn: 'Naturally aesthetic, facial-contour matched, comfortable, and pain-free.',
        },
        {
          highlightLabel: 'No Long Waits:',
          textTh: 'เริ่มต้นการรักษาได้ทันที ไม่ต้องรอคิวนาน พร้อมดูแลจนกว่าจะใช้งานได้สมบูรณ์',
          textEn: 'Begin treatment immediately with full follow-up care until your fit is perfect.',
        },
      ],
      ctaLabelTh: 'ดูรายละเอียด',
      ctaLabelEn: 'Learn More',
      href: 'https://csmileclinic-ubon.com/services/ฟันปลอม/',
    },
    {
      id: 'scaling',
      titleTh: 'ขูดหินปูน',
      titleEn: 'Scaling & Cleaning',
      introTh:
        '“หยุดปัญหาเหงือกอักเสบ กลิ่นปาก และฟันโยก ด้วยการรักษาโดยทันตแพทย์เฉพาะทางโรคเหงือกโดยตรง รักษาลึกถึงต้นเหตุ',
      introEn:
        'Stop gum inflammation, bad breath, and loose teeth with root-cause treatment by our periodontal specialists.',
      bullets: [
        {
          highlightLabel: 'Deep Cleaning:',
          textTh: 'บริการเกลารากฟันอย่างละเอียด เพื่อกำจัดเชื้อโรคและคราบหินปูนใต้เหงือก',
          textEn: 'Thorough root planing to eliminate bacteria and subgingival tartar.',
        },
        {
          highlightLabel: 'Save Your Teeth:',
          textTh: 'รักษาเหงือกให้แข็งแรง เพื่อยึดฟันแท้ให้อยู่กับคุณไปนานๆ',
          textEn: 'Keep your gums healthy and strong to preserve your natural teeth for years to come.',
        },
      ],
      ctaLabelTh: 'ดูรายละเอียด',
      ctaLabelEn: 'Learn More',
      href: 'https://csmileclinic-ubon.com/services/ขูดหินปูน/',
    },
    {
      id: 'fillings',
      titleTh: 'อุดฟัน',
      titleEn: 'Fillings',
      introTh:
        'อุดฟันสวย เนียนเป็นธรรมชาติ แข็งแรงทนทาน คืนรูปทรงฟันที่สมบูรณ์ ด้วยวัสดุคุณภาพสูงและฝีมือที่ประณีต',
      introEn:
        'Seamless, natural-looking, durable tooth fillings that restore complete tooth shape with premium materials and meticulous craftsmanship.',
      bullets: [
        {
          highlightLabel: 'Aesthetic Filling:',
          textTh: 'อุดฟันด้วยวัสดุสีเหมือนฟัน (Composite Resin) แยกสีไม่ออก ดูเป็นธรรมชาติที่สุด',
          textEn: 'Tooth-colored Composite Resin fillings that blend invisibly with your natural teeth.',
        },
        {
          highlightLabel: 'High Durability:',
          textTh: 'ใช้วัสดุเกรดพรีเมียม ยึดแน่น ทนทานต่อการเคี้ยว',
          textEn: 'Premium-grade bonding materials engineered for long-lasting chewing strength.',
        },
        {
          textTh: 'เจอปัญหาฟันผุ รีบจัดการได้ทันที ไม่ต้องรอคิวนาน ใช้สิทธิประกันสังคม 900 บาท ไม่ต้องสำรองจ่าย',
          textEn:
            'Treat cavities immediately with no long queues—900 THB Social Security benefit accepted with no upfront cost.',
        },
      ],
      ctaLabelTh: 'ดูรายละเอียด',
      ctaLabelEn: 'Learn More',
      href: 'https://csmileclinic-ubon.com/services/อุดฟัน/',
    },
    {
      id: 'oral-surgery',
      titleTh: 'ศัลยกรรมช่องปาก',
      titleEn: 'Oral Surgery',
      introTh:
        'ผ่าฟันคุด ถอนฟัน ผ่าฟันฝัง ไม่น่ากลัวอย่างที่คิด มือเบา แผลหายไว จบปัญหาปวดฟันคุด บวม อักเสบ ด้วยทีมทันตแพทย์เฉพาะทางศัลยกรรมช่องปาก',
      introEn:
        'Wisdom tooth removal, extractions, and impacted tooth surgery—gentle touch, fast healing, and relief from pain and swelling by oral surgery specialists.',
      bullets: [
        {
          highlightLabel: 'Gentle Technique:',
          textTh: 'เทคนิคผ่าฟันคุดอย่างเบามือ ลดความบวมและบอบช้ำหลังทำ',
          textEn: 'Minimally traumatic surgical techniques to reduce post-op swelling and bruising.',
        },
        {
          highlightLabel: 'Safe & Sterile:',
          textTh:
            'มั่นใจด้วยห้องผ่าตัดและเครื่องมือที่ผ่านการฆ่าเชื้อมาตรฐานสูงสุด ใช้สิทธิประกันสังคม “ถอน-ผ่า-ขูด” ได้ทันที ไม่ต้องสำรองจ่าย',
          textEn:
            'Highest-standard sterile surgical suites and instruments. Use your Social Security benefit immediately with no upfront payment.',
        },
      ],
      ctaLabelTh: 'ดูรายละเอียด',
      ctaLabelEn: 'Learn More',
      href: 'https://csmileclinic-ubon.com/services/ศัลยกรรมช่องปาก/',
    },
    {
      id: 'root-canal',
      titleTh: 'รักษารากฟัน',
      titleEn: 'Root Canal Treatment',
      introTh:
        'หยุดอาการปวด เก็บรักษาฟันแท้ ด้วยการรักษารากฟันโดยทันตแพทย์เฉพาะทางรักษารากฟันอุบล มั่นใจในความแม่นยำ ด้วยเครื่องมือทันสมัย',
      introEn:
        'Stop tooth pain and save your natural tooth with precision root canal therapy by endodontic specialists in Ubon.',
      bullets: [
        {
          textTh: 'เข้าใจความเจ็บปวด จัดตารางนัดหมายด่วน ไม่ต้องรอคิวนาน',
          textEn: 'We understand dental pain—priority scheduling with no long waiting lists.',
        },
        {
          textTh: 'รักษาอย่างเบามือ ลดความกังวล เพื่อผลลัพธ์ที่ดีที่สุดในการเก็บฟันธรรมชาติของคุณ',
          textEn: 'Gentle, anxiety-free care focused on achieving the best outcome to preserve your natural tooth.',
        },
      ],
      ctaLabelTh: 'ดูรายละเอียด',
      ctaLabelEn: 'Learn More',
      href: 'https://csmileclinic-ubon.com/services/รักษารากฟัน/',
    },
    {
      id: 'cosmetic-dentistry',
      titleTh: 'ทันตกรรมเพื่อความงาม',
      titleEn: 'Cosmetic Dentistry',
      introTh: '“เปลี่ยนรอยยิ้มใหม่ ให้คุณมั่นใจในทุกองศา” ทันตกรรมความงามโดยทันตแพทย์เฉพาะทาง',
      introEn: '“Transform your smile for confidence from every angle” with specialist cosmetic dentistry.',
      bullets: [
        {
          highlightLabel: 'Personalized Veneers:',
          textTh: 'ออกแบบรอยยิ้มเฉพาะบุคคล (Smile Design) โดยหมอเฉพาะทางด้านความงาม',
          textEn: 'Bespoke Smile Design veneers crafted by cosmetic dental specialists.',
        },
        {
          highlightLabel: 'Premium Whitening:',
          textTh: 'ฟอกสีฟันระบบมาตรฐานสากลนำเข้าจากประเทศออสเตรเลีย ขาวชัดเจน ปลอดภัย ไม่ทำลายผิวฟัน',
          textEn:
            'Internationally certified teeth whitening system imported from Australia—visibly brighter, safe, and enamel-friendly.',
        },
      ],
      ctaLabelTh: 'ดูรายละเอียด',
      ctaLabelEn: 'Learn More',
      href: 'https://csmileclinic-ubon.com/services/ทันตกรรมเพื่อความงาม/',
    },
    {
      id: 'dental-xray',
      titleTh: 'ถ่ายภาพรังสี',
      titleEn: 'Dental X-Ray',
      introTh:
        'เครื่องมือทางทันตกรรมที่สำคัญมาก ที่จะช่วยวินิจฉัยโรคและลักษณะของฟันของผู้ป่วยได้ โดยจะทำให้ทันตแพทย์วินิจฉัยโรคและวางแผนการรักษาได้รวดเร็ว',
      introEn:
        'Essential diagnostic dental imaging that enables dentists to accurately evaluate tooth and bone structure and plan treatments quickly.',
      bullets: [],
      ctaLabelTh: 'ดูรายละเอียด',
      ctaLabelEn: 'Learn More',
      href: 'https://csmileclinic-ubon.com/services/ถ่ายภาพรังสี/',
    },
  ],
  viewAllCtaTh: 'ดูบริการทั้งหมดของเรา',
  viewAllCtaEn: 'View All Services',
  viewAllHref: 'https://csmileclinic-ubon.com/services/',
};

// ============================================================================
// 8. ABOUT CLINIC BANNER SECTION
// ============================================================================

export const aboutSectionData: AboutSectionData = {
  titleTh: 'คลินิกกระดูกและข้อ นพ.ชานนท์ พญ.พัดชา',
  titleEn: 'Ubon Bone & Joint Clinic – Orthopedic & Sports Medicine',
  descriptionTh:
    'คลินิกกระดูกและข้อ นพ.ชานนท์ พญ.พัดชา ให้บริการตรวจรักษาโรคกระดูก ข้อต่อ เส้นเอ็น กล้ามเนื้อ และการบาดเจ็บจากการเล่นกีฬา ด้วยมาตรฐานทางการแพทย์ระดับสากล นำเทคโนโลยีเครื่องตรวจคลื่นเสียงอัลตราซาวด์ความละเอียดสูง (High-Resolution MSK Ultrasound) มาใช้ตรวจวินิจฉัยและนำวิถีการฉีดยาข้ออย่างแม่นยำ พร้อมการผ่าตัดส่องกล้องข้อเข่า ข้อไหล่ แผลเล็ก ฟื้นตัวไว ดูแลและให้คำปรึกษาอย่างละเอียด อบอุ่น เป็นกันเองในทุกขั้นตอน',
  descriptionEn:
    'Ubon Bone & Joint Clinic provides specialized orthopedic and sports medicine care—treating joint pain, ligament tears, arthritis, and spine disorders with high-resolution ultrasound diagnostics, guided injections, and minimally invasive arthroscopy.',
  ctaLabelTh: 'นัดหมายปรึกษาแพทย์',
  ctaLabelEn: 'Schedule Consultation',
  ctaHref: '#contact',
  backgroundImage: clinicPhotos.receptionHall.src,
  badgeLogoImage: '/images/logo-non-bg.png',
  collageImage: '/images/chanon-clinic.jpg',
  collageImageFull: '/images/chanon-clinic.jpg',
};

// ============================================================================
// 9. WHY CHOOSE US SECTION (4 PILLARS)
// ============================================================================

export const whyChooseUsSectionData: WhyChooseUsSectionData = {
  sectionTitleTh: 'มาตรฐานการตรวจรักษา คลินิกกระดูกและข้อ นพ.ชานนท์ พญ.พัดชา',
  sectionTitleEn: 'Clinical Excellence & Care Standards',
  sectionSubtitle: 'Clinical Standards',
  items: [
    {
      id: 'modern-ultrasound-technology',
      titleTh: 'เทคโนโลยีตรวจวินิจฉัยความละเอียดสูง',
      titleEn: 'High-Resolution MSK Ultrasound',
      descriptionTh:
        'เครื่องตรวจคลื่นเสียงอัลตราซาวด์ความละเอียดสูง ช่วยประเมินรอยฉีกขาดของเส้นเอ็น กล้ามเนื้อ น้ำในข้อ และก้อนซีสต์ได้อย่างแม่นยำ ปลอดภัย ไร้รังสี รู้ผลทันทีในวันตรวจ',
      descriptionEn:
        'Equipped with advanced musculoskeletal ultrasound for real-time tendon, joint, and soft tissue evaluation—safe, zero radiation, and same-day results.',
      photo: clinicPhotos.ultrasoundEquipment,
    },
    {
      id: 'orthopedic-specialist-care',
      titleTh: 'แพทย์เฉพาะทางกระดูกและข้อ',
      titleEn: 'Orthopedic & Sports Specialist',
      descriptionTh:
        'ตรวจวินิจฉัยและวางแผนการรักษาโดย นพ.ชานนท์ ชัยวิเศษ แพทย์เฉพาะทางศัลยศาสตร์ออร์โธปิดิกส์และเวชศาสตร์การกีฬา พร้อมวิเคราะห์ปัญหาของคนไข้แต่ละรายอย่างเจาะลึก',
      descriptionEn:
        'Care delivered by Dr. Chanon Chaiwiset, fellowship-trained orthopedic and sports medicine specialist with deep clinical and surgical expertise.',
      photo: clinicPhotos.consultationRoom,
    },
    {
      id: 'targeted-joint-therapy',
      titleTh: 'การรักษาตรงจุดและเวชศาสตร์ฟื้นฟู',
      titleEn: 'Targeted Joint & Rehab Care',
      descriptionTh:
        'ฉีดยาข้อด้วยอัลตราซาวด์นำวิถี (Ultrasound-Guided Injection), ฉีดเกล็ดเลือดเข้มข้น PRP ฟื้นฟูเส้นเอ็นและข้อต่อ, พร้อมโปรแกรมกายภาพบำบัดฟื้นฟูกล้ามเนื้ออย่างปลอดภัย',
      descriptionEn:
        'Precision treatments including ultrasound-guided joint injections, platelet-rich plasma (PRP) therapy, and structured musculoskeletal rehabilitation.',
      photo: clinicPhotos.procedureRoom,
    },
    {
      id: 'patient-centered-consultation',
      titleTh: 'ดูแลอย่างเข้าใจ อธิบายละเอียดทุกเคส',
      titleEn: 'Patient-Centered Consultation',
      descriptionTh:
        'รับฟังทุกข้อกังวลอย่างตั้งใจ ให้เวลาอธิบายผลการตรวจภาพอัลตราซาวด์ให้เห็นชัดเจนก่อนตัดสินใจรักษา มุ่งเน้นการรักษาแบบถนอมข้อต่อโดยไม่ต้องผ่าตัดหากไม่จำเป็น',
      descriptionEn:
        'Compassionate care with clear explanations of ultrasound imaging, prioritizing conservative and joint-preserving therapies tailored to each patient.',
      photo: clinicPhotos.receptionWelcome,
    },
  ],
};

// ============================================================================
// 10. DOCTOR PROFILES / ORTHOPEDIC SPECIALTIES
// ============================================================================

export const doctorSectionData: DoctorSectionData = {
  sectionTitleTh: 'แพทย์เฉพาะทางและสาขาการตรวจรักษา',
  sectionTitleEn: 'Orthopedic Specialties & Physicians',
  pageHref: '#contact',
  teamSummaryTh:
    'ตรวจวินิจฉัยและให้การรักษาโดย นพ.ชานนท์ ชัยวิเศษ แพทย์เฉพาะทางศัลยศาสตร์กระดูกและข้อ (ออร์โธปิดิกส์) และเวชศาสตร์การกีฬา พร้อมเครื่องมือตรวจวินิจฉัยอัลตราซาวด์ทันสมัย ครอบคลุม 6 สาขาสำคัญ',
  specialties: [
    {
      id: 'knee-osteoarthritis',
      nameTh: 'โรคข้อเข่าเสื่อมและข้อต่อ',
      nameEn: 'Osteoarthritis & Joint Degeneration',
      descriptionTh: 'ตรวจประเมินภาวะข้อเข่าเสื่อม ฉีดน้ำหล่อเลี้ยงข้อเข่า ฉีดเกล็ดเลือดเข้มข้น (PRP) และให้คำปรึกษาการผ่าตัดเปลี่ยนข้อเข่าเทียม',
      pageHref: '#contact',
    },
    {
      id: 'sports-medicine-acl',
      nameTh: 'เวชศาสตร์การกีฬาและเอ็นฉีกขาด',
      nameEn: 'Sports Medicine & Ligament Injuries',
      descriptionTh: 'ตรวจรักษาการบาดเจ็บจากการเล่นกีฬา เอ็นไขว้หน้าเข่าฉีกขาด (ACL) เอ็นร้อยหวายอักเสบ และหมอนรองกระดูกข้อเข่าฉีกขาด',
      pageHref: '#contact',
    },
    {
      id: 'shoulder-rotator-cuff',
      nameTh: 'โรคข้อไหล่ติดและเส้นเอ็นสะบัก',
      nameEn: 'Shoulder Disorders & Rotator Cuff',
      descriptionTh: 'รักษาอาการข้อไหล่ติด ยกแขนไม่ขึ้น เอ็นข้อไหล่ฉีกขาดหรืออักเสบเรื้อรัง หินปูนเกาะเส้นเอ็น ฉีดยาข้อไหล่ด้วยอัลตราซาวด์นำวิถี',
      pageHref: '#contact',
    },
    {
      id: 'arthroscopic-surgery',
      nameTh: 'ผ่าตัดส่องกล้องข้อ (Minimally Invasive)',
      nameEn: 'Arthroscopic Joint Surgery',
      descriptionTh: 'ผ่าตัดส่องกล้องรักษาข้อเข่าและข้อไหล่ แผลเล็ก เจ็บน้อย ฟื้นตัวไว ปลอดภัยสูง สามารถกลับไปใช้ชีวิตประจำวันได้รวดเร็ว',
      pageHref: '#contact',
    },
    {
      id: 'msk-ultrasound-injection',
      nameTh: 'อัลตราซาวด์ระบบกระดูกและเส้นเอ็น',
      nameEn: 'MSK Ultrasound & Guided Injection',
      descriptionTh: 'ตรวจหาความผิดปกติของเส้นเอ็น กล้ามเนื้อ ถุงน้ำข้อต่อ พร้อมนำวิถีเข็มฉีดยาข้อหรือเส้นเอ็นอย่างแม่นยำ ไม่โดนเส้นประสาท',
      pageHref: '#contact',
    },
    {
      id: 'spine-office-syndrome',
      nameTh: 'กระดูกสันหลัง ปวดหลัง และออฟฟิศซินโดรม',
      nameEn: 'Spine, Back Pain & Myofascial Pain',
      descriptionTh: 'ตรวจรักษาอาการปวดหลังเรื้อรัง หมอนรองกระดูกทับเส้นประสาท ปวดคอบ่าไหล่ นิ้วล็อค พังผืดทับเส้นประสาทข้อมือ',
      pageHref: '#contact',
    },
  ],
};

// ============================================================================
// 11. PATIENT TESTIMONIALS / REVIEWS SECTION (8 REAL GOOGLE REVIEWS)
// ============================================================================

export const testimonialsSectionData: TestimonialsSectionData = {
  sectionTitleTh: 'รีวิวจากลูกค้า',
  sectionTitleEn: 'Customer Reviews',
  sectionSubtitle: 'Review',
  ctaLabelTh: 'ดูรีวิวทั้งหมด',
  ctaLabelEn: 'View All Reviews',
  ctaHref: 'https://csmileclinic-ubon.com/review/รีวิวจากลูกค้า/',
  reviews: [
    {
      id: 'review-1',
      reviewerName: 'pattarakitti chaiyasing',
      reviewerBadgeTh: '1 รีวิว · 1 รูปภาพ',
      rating: 5,
      reviewTextTh:
        'คลีนิคทันตกรรมซีสไมล์ คลีนิคประจำครอบครัว เรามารักษากับคุณหมอ ขูดหินปูน รักษารากฟัน จัดฟัน คุณหมอมือเบามากกก ใจดีมากๆ และให้คำแนะนำการดูแลฟันอย่างดี ทำให้เข้าใจการดูแลรักษาฟัน แนะนำเลยนะคะ',
      image: '/images/4-2.png',
      imageAlt: '4-2',
      width: 650,
      height: 450,
    },
    {
      id: 'review-2',
      reviewerName: 'รัญจวน บุญสนิท',
      reviewerBadgeTh: '1 รีวิว',
      rating: 5,
      reviewTextTh: 'คุณหมอใจดี มือเบามากค่ะ ผู้ช่วยก็น่ารักทุกคนเลยค่ะ แนะนำดีมาก',
      image: '/images/5-2.png',
      imageAlt: '5-2',
      width: 650,
      height: 450,
    },
    {
      id: 'review-3',
      reviewerName: 'JenjiWimon Warasin',
      reviewerBadgeTh: 'Local Guide · 118 รีวิว · 160 รูปภาพ',
      rating: 5,
      reviewTextTh: 'คุณหมอและผู้ช่วยพูดจาดีมาก มือเบาด้วยจ้า น่ารักกกก',
      image: '/images/6-1.png',
      imageAlt: '6-1',
      width: 650,
      height: 450,
    },
    {
      id: 'review-4',
      reviewerName: 'ชนกนันท์ เจริญธนวุฒิ',
      reviewerBadgeTh: '2 รีวิว · 2 รูปภาพ',
      rating: 5,
      reviewTextTh:
        'แนะนำเลยค่ะ คุณหมอเก่ง มือเบามาก ใจเย็น พูดให้เราคลายกังวล พนักงานบริการดีมาก (ขูดหินปูน/อุดฟัน)',
      image: '/images/8-1.png',
      imageAlt: '8-1',
      width: 650,
      height: 450,
    },
    {
      id: 'review-5',
      reviewerName: 'Pipob P',
      reviewerBadgeTh: '1 รีวิว',
      rating: 5,
      reviewTextTh: 'คลินิกสวยสบาย คุณหมอสวย พูดจาน่ารัก ติดตามสอบถาม บริการดีมืออาชีพครับ',
      image: '/images/9-1.png',
      imageAlt: '9-1',
      width: 650,
      height: 450,
    },
    {
      id: 'review-6',
      reviewerName: 'Cherry Rosé',
      reviewerBadgeTh: '1 รีวิว',
      rating: 5,
      reviewTextTh:
        'คุณหมอและเจ้าหน้าที่น่ารักทุกท่าน ใส่ใจดูแลลูกค้าอย่างดีมากเลยค่ะ คลีนิคสะอาด สะดวกสบาย มีที่จอดรถด้วยค่ะ',
      image: '/images/11-1.png',
      imageAlt: '11-1',
      width: 650,
      height: 450,
    },
    {
      id: 'review-7',
      reviewerName: 'Witsarut Wongkiew',
      reviewerBadgeTh: '1 รีวิว · 1 รูปภาพ',
      rating: 5,
      reviewTextTh:
        'แนะนำที่นี่นะครับ มือเบาไม่เจ็บอย่างที่คิดนะครับ บริการเป็นกันเองอย่างกับพี่น้อง พูดเพราะ ทั้งสาขาเลยครับ 🙏🥰 ...',
      image: '/images/1-2.png',
      imageAlt: '1-2',
      width: 650,
      height: 450,
    },
    {
      id: 'review-8',
      reviewerName: 'NAT Chanel',
      reviewerBadgeTh: '1 รีวิว',
      rating: 5,
      reviewTextTh: 'คุณหมอดูแลและแนะนำดีมากๆคะ ติดใจมาใช้บริการที่นี้หลายครั้งแล้วคะแนะนำนะคะ',
      image: '/images/3-2.png',
      imageAlt: '3-2',
      width: 650,
      height: 450,
    },
  ],
};

// ============================================================================
// 12. CASE REVIEWS / WORK PORTFOLIO SECTION
// ============================================================================

export const portfolioSectionData: PortfolioSectionData = {
  sectionTitleTh: 'รีวิวผลงาน (คลิกลิ้งก์)',
  sectionTitleEn: 'Our Work Portfolio (Click)',
  sectionSubtitle: 'Review',
  headingLinkHref: 'https://www.facebook.com/share/NRTDbMWcLZCEaPtw/?',
  ctaLabelTh: 'ดูรีวิวทั้งหมด (Facebook)',
  ctaLabelEn: 'See All Reviews (Facebook)',
  ctaHref: 'https://www.facebook.com/Csmiledentalubon/photos_albums',
};

// ============================================================================
// 13. CONTACT, BRANCHES, GOOGLE MAPS, LATEST ARTICLES & FOOTER
// ============================================================================

export const branchesData: BranchInfo[] = [
  {
    id: 'ubon-clinic',
    nameTh: 'คลินิกกระดูกและข้อ นพ.ชานนท์ พญ.พัดชา',
    nameEn: 'Ubon Bone & Joint Clinic',
    shortNameTh: 'คลินิกกระดูกและข้อ นพ.ชานนท์ พญ.พัดชา',
    shortNameEn: 'Ubon Bone & Joint Clinic',
    landmarkTh: 'ถ.ชยางกูร (ตรงข้ามร้าน ฟ.ฟัน ราชเวช)',
    landmarkEn: 'Chayangkun Rd (Opposite For Fun Ratchavej)',
    addressTh: 'เลขที่ 768/1 ถ.ชยางกูร (ตรงข้ามร้าน ฟ.ฟัน ราชเวช) ต.ในเมือง อ.เมือง จ.อุบลราชธานี 34000',
    addressEn: '768/1 Chayangkun Rd (Opposite For Fun Ratchavej), Nai Mueang, Mueang Ubon Ratchathani, Ubon Ratchathani 34000',
    postalCode: '34000',
    postalAddress: {
      streetAddress: '768/1 ถนนชยางกูร ตำบลในเมือง',
      addressLocality: 'เมืองอุบลราชธานี',
      addressRegion: 'อุบลราชธานี',
      addressCountry: 'TH',
    },
    phoneDisplay: '082 919 9987',
    phoneTel: '0829199987',
    phoneInternational: '+66829199987',
    facebookLabelTh: 'Facebook : คลินิกกระดูกและข้อ นพ.ชานนท์ พญ.พัดชา',
    facebookLabelEn: 'Facebook : Ubon Bone & Joint Clinic',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61583142764302&mibextid=wwXIfr',
    messengerUrl: 'https://m.me',
    lineLabelTh: 'Line Official (@dr.chanon_clinic)',
    lineLabelEn: 'Line Official (@dr.chanon_clinic)',
    lineUrl: 'https://line.me/R/ti/p/@dr.chanon_clinic',
    lineId: '@dr.chanon_clinic',
    openingHoursSchema: 'Monday, Wednesday–Saturday 17:30 - 20:00, Sunday 10:00 - 12:00 (Closed Tuesday)',
    openingHoursSpecification: [
      { dayOfWeek: ['Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '17:30', closes: '20:00' },
      { dayOfWeek: ['Sunday'], opens: '10:00', closes: '12:00' },
    ],
    openingHoursDisplayTh: 'จันทร์, พุธ - เสาร์ 17.30 - 20.00 น. | อาทิตย์ 10.00 - 12.00 น. (ปิดทุกวันอังคาร)',
    openingHoursDisplayEn: 'Mon, Wed–Sat: 17:30–20:00 | Sun: 10:00–12:00 (Closed on Tuesdays)',
    googleMapsQueryUrl:
      'https://maps.google.com/maps?vet=10CAAQoqAOahcKEwjQ3NiKkdmXAxUAAAAAHQAAAAAQDg..i&udm&fvr=1&pvq=Cg0vZy8xMXl2c2xsMWhtIo0BCoYB4LiE4Lil4Li04LiZ4Li04LiB4LiB4Lij4Liw4LiU4Li54LiBLeC4guC5ieC4reC5geC4peC4sOC4o-C4seC4h-C4quC4teC4p-C4tOC4l-C4ouC4siDguJnguJ4u4LiK4Liy4LiZ4LiZ4LiX4LmMLeC4nuC4jS7guJ7guLHguJTguIrguLIQAhgD&lqi=CoYB4LiE4Lil4Li04LiZ4Li04LiB4LiB4Lij4Liw4LiU4Li54LiBLeC4guC5ieC4reC5geC4peC4sOC4o-C4seC4h-C4quC4teC4p-C4tOC4l-C4ouC4siDguJnguJ4u4LiK4Liy4LiZ4LiZ4LiX4LmMLeC4nuC4jS7guJ7guLHguJTguIrguLJajgEiiwHguITguKXguLTguJnguLTguIEg4LiB4Lij4Liw4LiU4Li54LiBIOC4guC5ieC4rSDguYHguKXguLAg4Lij4Lix4LiH4Liq4Li14Lin4Li04LiX4Lii4LiyIOC4meC4niDguIrguLIg4LiZ4LiZ4LiX4LmMIOC4niDguI0g4Lie4Lix4LiU4LiK4LiykgERb3J0aG9wZWRpY19jbGluaWM&cs=0&um=1&ie=UTF8&fb=1&gl=th&sa=X&ftid=0x311689002bb83d5b:0x6130ed1c31706848',
    googleMapsEmbedUrl:
      'https://maps.google.com/maps?q=%E0%B8%84%E0%B8%A5%E0%B8%B4%E0%B8%99%E0%B8%B4%E0%B8%81%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B9%E0%B8%81%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%82%E0%B9%89%E0%B8%AD%20%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
];

export const latestArticlesData: ArticleItem[] = [
  {
    id: 'article-root-canal-longevity',
    titleTh: '“รักษารากฟันแล้วอยู่ได้นานไหม? พร้อมเคล็ดลับดูแลฟันให้แข็งแรงตลอดไป”',
    date: '09/05/2026',
    href: 'https://csmileclinic-ubon.com/uncategorized/รักษารากฟันแล้วอยู่ได้/',
    image: null,
    originalImage: null,
  },
  {
    id: 'article-tooth-structure-issues',
    titleTh: 'ฟันคุณเป็นแบบนี้อยู่หรือป่าว? ฟันแตก -สึก-บิ่น- หัก ฟันดำ หลอ ฟันสั้น ฟันห่าง เหงือกเยอะ แก้ไขยังไงดี',
    date: '10/03/2025',
    href: 'https://csmileclinic-ubon.com/uncategorized/มาดูวิธีแก้ไข-ฟันห่าง-ฟั/',
    image: '/images/article-tooth-structure-300x300.webp',
    originalImage: '/images/เนื้อฟันหายทำไง2-300x300.webp',
    imageAlt: 'ฟันคุณมีปัญหาแบบนี้รึป่าว ? ฟันแตก บิ่น หัก ฟันดำ หลอ สั้น แก้ไขยังไงดี?',
  },
  {
    id: 'article-preparing-kids-dental',
    titleTh: 'เตรียมความพร้อมของเด็กก่อนทำฟัน ยังไงดี?',
    date: '25/08/2024',
    href: 'https://csmileclinic-ubon.com/guide/เตรียม-ลูก-หา-หมอ-ฟัน/',
    image: '/images/article-kids-dental-300x169.webp',
    originalImage: '/images/ทำฟันเด็ก6-1-300x169.webp',
    imageAlt: 'ทำฟันเด็ก',
  },
];

export const contactAndFooterData: ContactAndFooterData = {
  brandLogo: '/images/logo-non-bg.png',
  brandDescriptionTh:
    'คลินิกกระดูกและข้อ นพ.ชานนท์ พญ.พัดชา ศูนย์ตรวจรักษาโรคกระดูก ข้อต่อ เส้นเอ็น กล้ามเนื้อ บาดเจ็บจากการเล่นกีฬา ผ่าตัดส่องกล้องข้อเข่า ข้อไหล่ และการอัลตราซาวด์ระบบกระดูกและข้อความละเอียดสูง โดยแพทย์เฉพาะทาง จังหวัดอุบลราชธานี',
  brandDescriptionEn:
    'Ubon Bone & Joint Clinic provides comprehensive orthopedic care, sports injury treatments, knee & shoulder arthroscopy, and musculoskeletal ultrasound by orthopedic specialists.',
  addressDisplayTh: 'ที่อยู่ : จังหวัดอุบลราชธานี',
  addressDisplayEn: 'Address: Ubon Ratchathani',
  email: 'ubonboneandjoint@gmail.com',
  openingHoursHeadingTh: 'เวลาทำการ',
  openingHoursHeadingEn: 'Opening Hours',
  openingHoursTextTh: 'จันทร์, พุธ - เสาร์ 17.30 - 20.00 น. | อาทิตย์ 10.00 - 12.00 น. (ปิดทุกวันอังคาร)',
  openingHoursTextEn: 'Mon, Wed–Sat: 17:30–20:00 | Sun: 10:00–12:00 (Closed on Tuesdays)',
  branches: branchesData,
  lineOfficialAccounts: {
    mainLineId: '@dr.chanon_clinic',
    mainLineUrl: 'https://line.me/R/ti/p/@dr.chanon_clinic',
    featureBarLineId: '@dr.chanon_clinic',
    featureBarLineUrl: 'https://line.me/R/ti/p/@dr.chanon_clinic',
    ubonBranchLineUrl: 'https://line.me/R/ti/p/@dr.chanon_clinic',
    warinBranchLineUrl: 'https://line.me/R/ti/p/@dr.chanon_clinic',
    phoneLineUrl: 'tel:0829199987',
  },
  googleMapsNote:
    'Location coordinates and map navigation.',
  latestArticlesHeadingTh: 'บทความสาระน่ารู้',
  latestArticlesHeadingEn: 'Latest Articles',
  latestArticles: latestArticlesData,
  floatingChatChannels: [
    {
      id: 'chaty-phone',
      labelTh: 'Phone',
      labelEn: 'Phone',
      href: 'tel:0829199987',
      colorHex: '#03E78B',
      colorRgb: 'rgb(3, 231, 139)',
    },
    {
      id: 'chaty-messenger',
      labelTh: 'Facebook Messenger',
      labelEn: 'Facebook Messenger',
      href: 'https://m.me/61583142764302',
      colorHex: '#1E88E5',
      colorRgb: 'rgb(30, 136, 229)',
    },
    {
      id: 'chaty-line',
      labelTh: 'Line',
      labelEn: 'Line',
      href: 'https://line.me/R/ti/p/@dr.chanon_clinic',
      colorHex: '#38B900',
      colorRgb: 'rgb(56, 185, 0)',
    },
  ],
  copyrightTh: 'Copyright 2026 © คลินิกกระดูกและข้ออุบล - Ubon Bone & Joint Clinic',
  copyrightEn: 'Copyright 2026 © คลินิกกระดูกและข้ออุบล - Ubon Bone & Joint Clinic',
};

// ============================================================================
// 14. EMBEDDED BILINGUAL DICTIONARY (FROM target-web/index.html)
// ============================================================================

export const bilingualDictionary: Record<string, string> = {
  หน้าแรก: 'Home',
  บริการของเรา: 'Our Services',
  ทันตแพทย์ของเรา: 'Our Dentists',
  อัตราค่าบริการ: 'Service Fees',
  บทความ: 'Articles',
  รีวิว: 'Reviews',
  รีวิวจากลูกค้า: 'Patient Reviews',
  รีวิวผลงาน: 'Work Portfolio',
  ติดต่อเรา: 'Contact Us',
  จัดฟัน: 'Orthodontics',
  จัดฟันแบบโลหะ: 'Metal Braces',
  จัดฟันแบบดามอน: 'Damon Braces',
  จัดฟันใส: 'Clear Aligners',
  ฟันปลอม: 'Dentures',
  ฟันปลอมชนิดติดแน่น: 'Fixed Dentures',
  ฟันปลอมชนิดถอดได้: 'Removable Dentures',
  ขูดหินปูน: 'Scaling & Cleaning',
  อุดฟัน: 'Fillings',
  ศัลยกรรมช่องปาก: 'Oral Surgery',
  การถอนฟัน: 'Tooth Extraction',
  การผ่าฟันคุด: 'Wisdom Tooth Surgery',
  รักษารากฟัน: 'Root Canal Treatment',
  ทันตกรรมเพื่อความงาม: 'Cosmetic Dentistry',
  วีเนียร์: 'Veneers',
  ฟอกสีฟัน: 'Teeth Whitening',
  ถ่ายภาพรังสี: 'Dental X-Ray',
  แอดไลน์สอบถาม: 'Contact via Line',
  'แอดไลน์ Line': 'Add Line',
  ดูรายละเอียด: 'Learn More',
  ดูบริการทั้งหมดของเรา: 'View All Services',
  ติดต่อสอบถาม: 'Contact Us',
  ดูรีวิวทั้งหมด: 'View All Reviews',
  'ดูรีวิวทั้งหมด (Facebook)': 'See All Reviews (Facebook)',
  'คลินิกทันตกรรมซีสไมล์  อุบล': 'C Smile Dental Clinic – Ubon Ratchathani',
  'คลินิกทันตกรรมซีสไมล์ อุบล': 'C Smile Dental Clinic – Ubon Ratchathani',
  'คลินิกทันตกรรมซีสไมล์อุบล วาริน': 'C Smile Dental Clinic – Ubon & Warin',
  ทีมทันตแพทย์เฉพาะทาง: 'Specialist Dental Team',
  ดูแลให้คำปรึกษาและใส่ใจทุกเคส: 'Personal Care for Every Case',
  'เดินทางสะดวก มีที่จอดรถ': 'Easy Access & Free Parking',
  อุ่นใจทุกครั้งที่ใช้บริการ: 'Peace of Mind Every Visit',
  โปรโมชั่น: 'Promotions',
  ทำไมต้องเลือกทำฟันกับคลินิกทันตกรรมซีสไมล์: 'Why Choose C Smile Dental Clinic?',
  เทคโนโลยีและเครื่องมือที่ทันสมัย: 'Advanced Technology & Equipment',
  บริการด้านทันตกรรมแบบครบวงจร: 'Comprehensive Dental Services',
  ผู้มีสิทธิ์ประกันสังคมเบิกได้: 'Social Security Coverage Available',
  'รีวิวผลงาน (คลิกลิ้งก์)': 'Our Work Portfolio (Click)',
  บทความล่าสุด: 'Latest Articles',
  เวลาทำการ: 'Opening Hours',
  'จันทร์ - ศุกร์ 11.00 - 20.00 น. เสาร์ - อาทิตย์ 10.00 - 20.00 น. (วันหยุดนักขัตฤกษ์)':
    'Mon–Fri: 11:00–20:00 | Sat–Sun: 10:00–20:00 (incl. public holidays)',
  'ที่อยู่ : เลขที่ 768/1 ถ.ชยางกูร (ตรงข้ามร้าน ฟ.ฟัน ราชเวช) ต.ในเมือง อ.เมือง จ.อุบลราชธานี 34000':
    'Address: 768/1 Chayangkun Rd (Opposite For Fun Ratchavej), Nai Mueang, Mueang, Ubon Ratchathani 34000',
  '082-656-1924 (สาขาอุบล)': '082-656-1924 (Ubon Branch)',
  '082-626-1924 (สาขาวาริน)': '082-626-1924 (Warin Branch)',
  'Facebook : สาขาอุบล': 'Facebook : Ubon Branch',
  'Facebook : สาขาวาริน': 'Facebook : Warin Branch',
  'Line : สาขาอุบล': 'Line : Ubon Branch',
  'Line : สาขาวาริน': 'Line : Warin Branch',
  'Copyright 2026 © csmileclinic - คลินิกทันตกรรมซีสไมล์':
    'Copyright 2026 © csmileclinic - C Smile Dental Clinic',
  ทันตกรรมทั่วไป: 'General Dentistry',
  ทันตกรรมจัดฟัน: 'Orthodontics',
  ทันตกรรมรากเทียม: 'Dental Implants',
  ทันตกรรมประดิษฐ์: 'Prosthodontics',
};

// ============================================================================
// 15. UNIFIED CLINIC DATA EXPORT
// ============================================================================

export const clinicData: ClinicData = {
  designSystem,
  metadata: siteMetadata,
  navbar: navbarData,
  hero: heroData,
  highlights: highlightsData,
  promotionsSection: {
    sectionTitleTh: 'โปรโมชั่น',
    sectionTitleEn: 'Promotions',
    sectionSubtitle: 'Promotion',
    items: promotionsData,
  },
  servicesSection: servicesSectionData,
  aboutSection: aboutSectionData,
  whyChooseUsSection: whyChooseUsSectionData,
  doctorSection: doctorSectionData,
  testimonialsSection: testimonialsSectionData,
  portfolioSection: portfolioSectionData,
  contactAndFooter: contactAndFooterData,
  bilingualDictionary,
};

export default clinicData;
