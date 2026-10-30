export interface ClinicPhoto {
  src: string;
  alt: string;
  objectPosition: string;
}

/** Optimized copies of the clinic's originals in /photo. See docs/clinic-photo-placement.md. */
export const clinicPhotos = {
  receptionHall: {
    src: "/images/clinic-real/reception-hall-wide.webp",
    alt: "เคาน์เตอร์ต้อนรับและพื้นที่นั่งรอของคลินิกกระดูกและข้อ นพ.ชานนท์ พญ.พัดชา",
    objectPosition: "50% 35%",
  },
  receptionStaff: {
    src: "/images/clinic-real/reception-staff-portrait.webp",
    alt: "เจ้าหน้าที่ยืนต้อนรับหน้าเคาน์เตอร์ของคลินิกกระดูกและข้อ นพ.ชานนท์ พญ.พัดชา",
    objectPosition: "67% 50%",
  },
  receptionCounter: {
    src: "/images/clinic-real/reception-counter-branding.webp",
    alt: "เคาน์เตอร์ต้อนรับและตราคลินิกบนผนังสีเขียว",
    objectPosition: "50% 38%",
  },
  ultrasoundEquipment: {
    src: "/images/clinic-real/ultrasound-equipment.webp",
    alt: "เครื่องอัลตราซาวด์และเตียงตรวจภายในคลินิก",
    objectPosition: "48% 48%",
  },
  consultationRoom: {
    src: "/images/clinic-real/consultation-room.webp",
    alt: "ห้องตรวจของคลินิก พร้อมโต๊ะให้คำปรึกษาและเก้าอี้ผู้รับบริการ",
    objectPosition: "62% 43%",
  },
  procedureRoom: {
    src: "/images/clinic-real/ultrasound-procedure-room.webp",
    alt: "ห้องตรวจอัลตราซาวด์ของคลินิก พร้อมเตียงตรวจและเครื่องอัลตราซาวด์",
    objectPosition: "50% 46%",
  },
  receptionWelcome: {
    src: "/images/clinic-real/reception-welcome-wide.webp",
    alt: "เจ้าหน้าที่ต้อนรับผู้รับบริการบริเวณเคาน์เตอร์ภายในคลินิก",
    objectPosition: "60% 42%",
  },
} satisfies Record<string, ClinicPhoto>;

/** JPEG copy for ImageResponse's image decoder. */
export const clinicSharePhoto = "/images/clinic-real/reception-share.jpg";
