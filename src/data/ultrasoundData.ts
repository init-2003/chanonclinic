import { clinicPhotos, type ClinicPhoto } from "@/data/clinicPhotos";

export interface UltrasoundService {
  id: string;
  categoryId: "abdominal" | "breast-neck" | "soft-tissue-msk" | "vascular";
  categoryNameTh: string;
  badge: string;
  badgeColor: {
    bg: string;
    text: string;
    border: string;
  };
  titleTh: string;
  titleEn: string;
  targetOrgans: string[];
  findings: string[];
  symptoms: string[];
  preparation: {
    type: "fasting" | "full-bladder" | "cycle" | "none";
    badgeText: string;
    badgeColor: string;
    instruction: string;
  };
  photo: ClinicPhoto;
  keyFeature: string;
}

export interface UltrasoundCategory {
  id: "all" | "abdominal" | "breast-neck" | "soft-tissue-msk" | "vascular";
  nameTh: string;
  nameEn: string;
  descriptionTh: string;
  count: number;
  image: string;
  iconName: string;
}

export const ultrasoundServices: UltrasoundService[] = [
  // --------------------------------------------------------------------------
  // 1. หมวดตรวจช่องท้อง (Abdominal Ultrasound)
  // --------------------------------------------------------------------------
  {
    id: "upper-abdomen",
    categoryId: "abdominal",
    categoryNameTh: "หมวดตรวจช่องท้อง",
    badge: "ช่องท้องส่วนบน • ตับและทางเดินน้ำดี",
    badgeColor: {
      bg: "bg-emerald-50",
      text: "text-emerald-800",
      border: "border-emerald-200",
    },
    titleTh: "อัลตราซาวด์ช่องท้องส่วนบน",
    titleEn: "Upper Abdomen Ultrasound",
    targetOrgans: ["ตับ", "ตับอ่อน", "ถุงน้ำดี", "ท่อน้ำดี", "ม้าม", "ไตและท่อไตส่วนต้น"],
    findings: [
      "ตรวจภาวะไขมันพอกตับ (Fatty Liver) และตับแข็งในระยะเริ่มต้น",
      "ตรวจพบก้อนเนื้อ ซีสต์ หรือถุงน้ำในเนื้อตับและม้าม",
      "ตรวจพบนิ่วในถุงน้ำดี (Gallstones) และภาวะถุงน้ำดีอักเสบ",
      "ตรวจหานิ่วในไต และความผิดปกติของตับอ่อน",
    ],
    symptoms: [
      "แน่นท้อง จุกเสียดใต้ลิ้นปี่หรือใต้ชายโครงขวาบ่อยๆ",
      "ท้องอืด อาหารไม่ย่อยเรื้อรังหลังรับประทานอาหารมัน",
      "ผู้ที่มีประวัติดื่มแอลกอฮอล์ หรือมีผลตรวจเลือดค่าตับผิดปกติ",
      "ต้องการตรวจคัดกรองสุขภาพประจำปี",
    ],
    preparation: {
      type: "fasting",
      badgeText: "งดน้ำ-อาหาร 6–8 ชม.",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-300",
      instruction:
        "งดน้ำและอาหารทุกชนิดอย่างน้อย 6–8 ชั่วโมงก่อนตรวจ เพื่อให้ถุงน้ำดีพองตัวเต็มที่และลดปริมาณแก๊สในทางเดินอาหาร",
    },
    photo: { ...clinicPhotos.ultrasoundEquipment, objectPosition: "48% 40%" },
    keyFeature: "เห็นนิ่วและก้อนตับชัดเจน",
  },
  {
    id: "lower-abdomen",
    categoryId: "abdominal",
    categoryNameTh: "หมวดตรวจช่องท้อง",
    badge: "ช่องท้องส่วนล่าง • ระบบสืบพันธุ์",
    badgeColor: {
      bg: "bg-teal-50",
      text: "text-teal-800",
      border: "border-teal-200",
    },
    titleTh: "อัลตราซาวด์ช่องท้องส่วนล่าง",
    titleEn: "Lower Abdomen Ultrasound",
    targetOrgans: ["กระเพาะปัสสาวะ", "มดลูกและรังไข่ (หญิง)", "ต่อมลูกหมาก (ชาย)"],
    findings: [
      "ตรวจเนื้องอกกล้ามเนื้อมดลูก (Myoma Uteri)",
      "ตรวจถุงน้ำรังไข่ ช็อกโกแลตซีสต์ หรือภาวะรังไข่มีถุงน้ำหลายใบ (PCOS)",
      "ตรวจต่อมลูกหมากโต (BPH) ในผู้ชาย",
      "ตรวจตะกอน ก้อนเนื้อ หรือนิ่วในกระเพาะปัสสาวะ",
    ],
    symptoms: [
      "ปวดท้องน้อยเรื้อรัง หรือปวดหน่วงบริเวณอุ้งเชิงกราน",
      "ประจำเดือนมาไม่ปกติ หรือปวดประจำเดือนรุนแรงขึ้นเรื่อยๆ",
      "ปัสสาวะขัด ปัสสาวะบ่อยตอนกลางคืน หรือปัสสาวะไม่สุด",
    ],
    preparation: {
      type: "full-bladder",
      badgeText: "ดื่มน้ำ & กลั้นปัสสาวะ",
      badgeColor: "bg-sky-50 text-sky-800 border-sky-300",
      instruction:
        "ดื่มน้ำเปล่าประมาณ 500–1,000 มล. ก่อนเวลาตรวจ 1 ชั่วโมง และกลั้นปัสสาวะไว้ เพื่อให้กระเพาะปัสสาวะขยายตัวช่วยสะท้อนภาพมดลูก/ต่อมลูกหมากได้คมชัด",
    },
    photo: { ...clinicPhotos.procedureRoom, objectPosition: "50% 55%" },
    keyFeature: "คัดกรองซีสต์รังไข่ & ต่อมลูกหมาก",
  },
  {
    id: "kub-urinary",
    categoryId: "abdominal",
    categoryNameTh: "หมวดตรวจช่องท้อง",
    badge: "ระบบทางเดินปัสสาวะ • ระบบไต",
    badgeColor: {
      bg: "bg-cyan-50",
      text: "text-cyan-800",
      border: "border-cyan-200",
    },
    titleTh: "อัลตราซาวด์ระบบทางเดินปัสสาวะ",
    titleEn: "KUB Ultrasound (Kidney, Ureter, Bladder)",
    targetOrgans: ["ไตทั้งสองข้าง", "ท่อไต", "กระเพาะปัสสาวะ"],
    findings: [
      "ตรวจพบนิ่วในเนื้อไต กรวยไต และท่อไต",
      "ตรวจภาวะไตบวมน้ำ (Hydronephrosis) จากการอุดตันของทางเดินปัสสาวะ",
      "ตรวจการอักเสบติดเชื้อ หรือก้อนเนื้อในไต",
      "ตรวจความหนาตัวของผนังกระเพาะปัสสาวะและติ่งเนื้อ",
    ],
    symptoms: [
      "ปวดบั้นเอวด้านหลัง ร้าวลงมาบริเวณขาหนีบ",
      "ปัสสาวะแสบขัด ปัสสาวะกะปริดกะปรอย",
      "ปัสสาวะมีสีขุ่น มีฟองมาก หรือปัสสาวะมีเลือดปน",
    ],
    preparation: {
      type: "full-bladder",
      badgeText: "ดื่มน้ำ & กลั้นปัสสาวะ",
      badgeColor: "bg-sky-50 text-sky-800 border-sky-300",
      instruction:
        "ดื่มน้ำเปล่าสะอาด 3-4 แก้วก่อนตรวจ และกลั้นปัสสาวะเพื่อให้เห็นโครงสร้างกรวยไตและกระเพาะปัสสาวะชัดเจน",
    },
    photo: { ...clinicPhotos.ultrasoundEquipment, objectPosition: "60% 50%" },
    keyFeature: "ตรวจนิ่วไต & ไตบวมน้ำรวดเร็ว",
  },

  // --------------------------------------------------------------------------
  // 2. หมวดตรวจเต้านมและลำคอ (Breast & Neck Ultrasound)
  // --------------------------------------------------------------------------
  {
    id: "breast-chest",
    categoryId: "breast-neck",
    categoryNameTh: "หมวดตรวจเต้านมและลำคอ",
    badge: "คัดกรองมะเร็งเต้านม • ก้อนเนื้อทรวงอก",
    badgeColor: {
      bg: "bg-rose-50",
      text: "text-rose-800",
      border: "border-rose-200",
    },
    titleTh: "อัลตราซาวด์เต้านมและก้อนที่ทรวงอก",
    titleEn: "Breast & Chest Ultrasound",
    targetOrgans: ["เนื้อเยื่อเต้านม", "ท่อน้ำนม", "ต่อมน้ำเหลืองใต้รักแร้", "ผนังทรวงอก"],
    findings: [
      "ตรวจแยกความแตกต่างระหว่างก้อนเนื้อตันและถุงน้ำ (Cyst)",
      "ตรวจพบก้อนเนื้อธรรมดา (Fibroadenoma) หรือก้อนไขมัน",
      "ตรวจภาวะท่อน้ำนมอักเสบและการอุดตัน",
      "คัดกรองรอยโรคและประเมินระดับความเสี่ยงมะเร็งเต้านม (BI-RADS Classification)",
    ],
    symptoms: [
      "คลำพบก้อนที่เต้านมหรือบริเวณใต้รักแร้",
      "รู้สึกเจ็บคัดตึงผิดปกติโดยไม่สัมพันธ์กับรอบเดือน",
      "มีน้ำเหลืองหรือของเหลวผิดปกติไหลออกจากหัวนม",
      "ผู้หญิงอายุน้อยกว่า 40 ปีที่มีเนื้อเต้านมหนาแน่น (Dense Breast)",
    ],
    preparation: {
      type: "cycle",
      badgeText: "ไม่ต้องงดอาหาร",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-300",
      instruction:
        "ไม่ต้องงดน้ำและอาหาร แนะนำเข้ารับการตรวจช่วง 7–10 วันหลังประจำเดือนหมด เนื่องจากเนื้อเต้านมจะลดการคัดตึง ทำให้ตรวจได้สบายและแม่นยำยิ่งขึ้น",
    },
    photo: { ...clinicPhotos.procedureRoom, objectPosition: "45% 30%" },
    keyFeature: "แยกก้อนเนื้อตันและซีสต์อย่างแม่นยำ",
  },
  {
    id: "thyroid-neck",
    categoryId: "breast-neck",
    categoryNameTh: "หมวดตรวจเต้านมและลำคอ",
    badge: "ต่อมไทรอยด์ • ต่อมน้ำเหลืองลำคอ",
    badgeColor: {
      bg: "bg-violet-50",
      text: "text-violet-800",
      border: "border-violet-200",
    },
    titleTh: "อัลตราซาวด์ต่อมไทรอยด์และก้อนที่ลำคอ",
    titleEn: "Thyroid & Neck Ultrasound",
    targetOrgans: ["ต่อมไทรอยด์ทั้ง 2 ข้าง", "ก้อนเนื้อหรือซีสต์ในเนื้อไทรอยด์", "ต่อมน้ำเหลืองรอบลำคอ"],
    findings: [
      "ตรวจพบก้อนเนื้อ (Nodule) หรือถุงน้ำในต่อมไทรอยด์",
      "ประเมินภาวะคอพอก (Goiter) และต่อมไทรอยด์โตผิดปกติ",
      "ตรวจภาวะต่อมไทรอยด์อักเสบ (Thyroiditis)",
      "ตรวจวิเคราะห์ลักษณะขอบเขตก้อนและจุดหินปูน (Microcalcification) เพื่อคัดกรองความเสี่ยงมะเร็ง",
    ],
    symptoms: [
      "คลำพบก้อนนูนบริเวณด้านหน้าลำคอหรือลูกกระเดือก",
      "คอโต รู้สึกกลืนอาหารติดขัดหรือแน่นในลำคอ",
      "มีอาการเสียงแหบลงโดยไม่ทราบสาเหตุ",
      "ผลตรวจเลือดฮอร์โมนไทรอยด์ผิดปกติ หรือมีประวัติคนในครอบครัวเป็นโรคไทรอยด์",
    ],
    preparation: {
      type: "none",
      badgeText: "ไม่ต้องงดอาหาร",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-300",
      instruction:
        "ไม่ต้องงดน้ำและอาหาร แนะนำสวมเสื้อคอกว้างหรือเสื้อเชิ้ตแบบมีกระดุมผ่าหน้าเพื่อให้เปิดตรวจบริเวณลำคอได้สะดวก และงดใส่สร้อยคอ",
    },
    photo: { ...clinicPhotos.ultrasoundEquipment, objectPosition: "43% 30%" },
    keyFeature: "วัดขนาดและคัดกรองหินปูนในก้อนไทรอยด์",
  },

  // --------------------------------------------------------------------------
  // 3. หมวดตรวจก้อนเนื้อเยื่ออ่อนและอวัยวะเฉพาะจุด (Soft Tissue & MSK Ultrasound)
  // --------------------------------------------------------------------------
  {
    id: "msk-joint",
    categoryId: "soft-tissue-msk",
    categoryNameTh: "หมวดตรวจกล้ามเนื้อและข้อต่อ",
    badge: "ระบบกระดูกและข้อ • บาดเจ็บจากการเล่นกีฬา",
    badgeColor: {
      bg: "bg-amber-50",
      text: "text-amber-800",
      border: "border-amber-200",
    },
    titleTh: "อัลตราซาวด์กล้ามเนื้อ ข้อต่อ เอ็น และเนื้อเยื่ออ่อน",
    titleEn: "MSK Ultrasound (Musculoskeletal)",
    targetOrgans: ["เส้นเอ็น", "กล้ามเนื้อ", "เยื่อหุ้มข้อ", "ถุงลดการเสียดสี (Bursa)", "ก้อนเนื้อเยื่ออ่อน"],
    findings: [
      "ตรวจประเมินเส้นเอ็นฉีกขาด อักเสบ หรือมีหินปูนเกาะที่เอ็น",
      "ตรวจภาวะข้ออักเสบและมีน้ำคั่งสะสมในโพรงข้อ (Joint Effusion)",
      "ตรวจภาวะนิ้วล็อก (Trigger Finger) และการอักเสบของปลอกหุ้มเอ็น",
      "ตรวจพบถุงน้ำรอบข้อ (Ganglion Cyst), ก้อนไขมัน (Lipoma) หรือก้อนเนื้อใต้ผิวหนัง",
    ],
    symptoms: [
      "ปวดข้อ ปวดเอ็นเรื้อรัง เช่น ข้อไหล่ติด เอ็นข้อศอกอักเสบ ปวดข้อเข่า เอ็นร้อยหวาย",
      "ได้รับบาดเจ็บจากการเล่นกีฬาหรืออุบัติเหตุจากการทำงาน",
      "คลำพบก้อนนูนตึงตามแขน ขา ลำตัว หรือรอบๆ ข้อต่อ",
    ],
    preparation: {
      type: "none",
      badgeText: "ไม่ต้องงดอาหาร",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-300",
      instruction:
        "ไม่ต้องงดน้ำและอาหาร สามารถเข้ารับการตรวจได้ทันที ควรสวมเสื้อผ้าที่หลวมสบายเพื่อให้เปิดบริเวณข้อต่อหรือแขนขาที่ต้องการตรวจได้ง่าย",
    },
    photo: { ...clinicPhotos.procedureRoom, objectPosition: "50% 46%" },
    keyFeature: "ตรวจแบบ Dynamic ขยับข้อต่อดูรอยฉีกขาดได้สดๆ",
  },
  {
    id: "facial-scalp",
    categoryId: "soft-tissue-msk",
    categoryNameTh: "หมวดตรวจกล้ามเนื้อและก้อนเนื้อ",
    badge: "ก้อนใต้ผิวหนัง • วางแผนผ่าตัดเล็ก",
    badgeColor: {
      bg: "bg-indigo-50",
      text: "text-indigo-800",
      border: "border-indigo-200",
    },
    titleTh: "อัลตราซาวด์ก้อนที่ใบหน้าและหนังศีรษะ",
    titleEn: "Facial & Scalp Ultrasound",
    targetOrgans: ["ชั้นไขมันและเนื้อเยื่อใต้ผิวหนัง", "ต่อมน้ำลายหน้ากกหู (Parotid)", "ต่อมน้ำลายใต้คาง"],
    findings: [
      "ตรวจถุงซีสต์ไขมันใต้ผิวหนัง (Sebaceous Cyst / Epidermoid Cyst)",
      "ตรวจก้อนไขมันใต้ผิวหนัง (Lipoma) และประเมินความลึก",
      "ตรวจก้อนเนื้อหรือการอักเสบติดเชื้อในต่อมน้ำลาย",
      "ตรวจโพรงหนองหรือฝีใต้ผิวหนังเพื่อวางแผนการระบายและผ่าตัดเล็ก",
    ],
    symptoms: [
      "คลำพบตุ่มนูน ก้อนแข็ง หรือก้อนใต้ผิวหนังที่กลิ้งไปมาได้บริเวณใบหน้า แก้ม ใต้คาง หรือหนังศีรษะ",
      "ก้อนโตขึ้น หรือมีอาการเจ็บ อักเสบบวมแดง",
      "ต้องการตรวจเช็กชนิดและความลึกของก้อนเพื่อวางแผนผ่าตัดเปิดแผลอย่างปลอดภัยและสวยงาม",
    ],
    preparation: {
      type: "none",
      badgeText: "ไม่ต้องงดอาหาร",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-300",
      instruction:
        "ไม่ต้องงดน้ำและอาหาร ทำความสะอาดผิวหน้าและหนังศีรษะตามปกติ หลีกเลี่ยงการทาแป้งหนาหรือครีมเข้มข้นบริเวณที่ต้องการตรวจ",
    },
    photo: { ...clinicPhotos.ultrasoundEquipment, objectPosition: "55% 40%" },
    keyFeature: "ระบุความลึกและขนาดก้อนแม่นยำเพื่อผ่าตัด",
  },
  {
    id: "scrotal",
    categoryId: "soft-tissue-msk",
    categoryNameTh: "หมวดตรวจอวัยวะเฉพาะจุด",
    badge: "สุขภาพบุรุษ • ถุงอัณฑะ",
    badgeColor: {
      bg: "bg-blue-50",
      text: "text-blue-800",
      border: "border-blue-200",
    },
    titleTh: "อัลตราซาวด์อัณฑะและถุงอัณฑะ",
    titleEn: "Scrotal Ultrasound",
    targetOrgans: ["เนื้ออัณฑะทั้ง 2 ข้าง", "ท่อพักอสุจิ (Epididymis)", "ถุงหุ้มอัณฑะ", "หลอดเลือดในถุงอัณฑะ"],
    findings: [
      "ตรวจภาวะหลอดเลือดขอดในถุงอัณฑะ (Varicocele) ที่ส่งผลต่อภาวะมีบุตรยาก",
      "ตรวจภาวะน้ำคั่งในถุงอัณฑะ (Hydrocele)",
      "ตรวจภาวะอัณฑะอักเสบ หรือท่อพักอสุจิอักเสบติดเชื้อ",
      "ตรวจภาวะอัณฑะบิดขั้วเฉียบพลัน (Testicular Torsion) และก้อนเนื้อในอัณฑะ",
    ],
    symptoms: [
      "มีอาการปวด บวม ตึง หรือหน่วงบริเวณถุงอัณฑะ",
      "คลำพบก้อนแข็งผิดปกติ หรือขนาดถุงอัณฑะสองข้างไม่เท่ากัน",
      "ผู้ที่มีปัญหาภาวะมีบุตรยากและต้องการประเมินหลอดเลือดขอด",
    ],
    preparation: {
      type: "none",
      badgeText: "ไม่ต้องงดอาหาร",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-300",
      instruction:
        "ไม่ต้องงดน้ำและอาหาร สวมกางเกงที่ถอดเปลี่ยนหรือเปิดตรวจได้สะดวก มีความเป็นส่วนตัวสูงในการตรวจ",
    },
    photo: { ...clinicPhotos.procedureRoom, objectPosition: "55% 60%" },
    keyFeature: "ตรวจระบบไหลเวียนเลือดและโครงสร้างอัณฑะ",
  },

  // --------------------------------------------------------------------------
  // 4. หมวดตรวจระบบหลอดเลือด (Vascular Doppler Ultrasound)
  // --------------------------------------------------------------------------
  {
    id: "carotid-doppler",
    categoryId: "vascular",
    categoryNameTh: "หมวดตรวจระบบหลอดเลือด",
    badge: "ป้องกันสโตรก • หลอดเลือดสมอง",
    badgeColor: {
      bg: "bg-rose-50",
      text: "text-rose-800",
      border: "border-rose-200",
    },
    titleTh: "อัลตราซาวด์หลอดเลือดแดงคอ",
    titleEn: "Carotid Doppler Ultrasound",
    targetOrgans: ["หลอดเลือดแดงใหญ่ Carotid ทั้ง 2 ข้างที่ส่งเลือดไปเลี้ยงสมอง"],
    findings: [
      "ตรวจความหนาตัวของผนังหลอดเลือดแดง (Intima-Media Thickness)",
      "ตรวจพบคราบไขมันหรือหินปูนเกาะผนังหลอดเลือด (Atherosclerotic Plaque)",
      "ตรวจวัดระดับเปอร์เซ็นต์การตีบตันของหลอดเลือดแดง",
      "ประเมินทิศทางและความเร็วการไหลเวียนเลือดไปสู่สมองด้วย Color Doppler",
    ],
    symptoms: [
      "มีอาการวูบ หน้ามืด เวียนศีรษะ คล้ายจะเป็นลมบ่อยครั้ง",
      "มีอาการชา อ่อนแรงครึ่งซีก พูดไม่ชัดชั่วขณะ (TIA / Mini-stroke)",
      "ผู้ที่มีความเสี่ยงสูง: ความดันโลหิตสูง ไขมันในเลือดสูง เบาหวาน สูบบุหรี่จัด",
      "ต้องการคัดกรองความเสี่ยงโรคหลอดเลือดสมองตีบและอัมพฤกษ์ อัมพาต",
    ],
    preparation: {
      type: "none",
      badgeText: "ไม่ต้องงดอาหาร",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-300",
      instruction:
        "ไม่ต้องงดน้ำและอาหาร สามารถทานยาประจำตัวได้ตามปกติ ควรสวมเสื้อคอกว้างและงดสวมสร้อยคอ",
    },
    photo: { ...clinicPhotos.ultrasoundEquipment, objectPosition: "50% 28%" },
    keyFeature: "ประเมินคราบหินปูน & ป้องกัน Stroke",
  },
  {
    id: "abdominal-aorta",
    categoryId: "vascular",
    categoryNameTh: "หมวดตรวจระบบหลอดเลือด",
    badge: "คัดกรองภัยเงียบ • เส้นเลือดใหญ่โป่งพอง",
    badgeColor: {
      bg: "bg-amber-50",
      text: "text-amber-800",
      border: "border-amber-200",
    },
    titleTh: "อัลตราซาวด์หลอดเลือดแดงใหญ่ในช่องท้อง",
    titleEn: "Abdominal Aorta Doppler",
    targetOrgans: ["หลอดเลือดแดงใหญ่เอออร์ตาในช่องท้อง (Abdominal Aorta)"],
    findings: [
      "ตรวจวัดขนาดเส้นผ่านศูนย์กลางของหลอดเลือดแดงใหญ่ในช่องท้อง",
      "ตรวจคัดกรองภาวะหลอดเลือดแดงใหญ่โป่งพอง (Abdominal Aortic Aneurysm - AAA)",
      "ตรวจลิ่มเลือดที่เกาะภายในหลอดเลือดโป่งพอง",
      "ประเมินความเสี่ยงและป้องกันการแตกเฉียบพลันซึ่งเป็นอันตรายถึงชีวิต",
    ],
    symptoms: [
      "คลำพบก้อนเต้นตามจังหวะการเต้นของหัวใจบริเวณกลางหน้าท้อง",
      "ผู้ชายที่มีอายุ 65 ปีขึ้นไป (โดยเฉพาะผู้ที่มีประวัติสูบบุหรี่)",
      "ผู้ที่มีประวัติคนในครอบครัวเป็นโรคหลอดเลือดแดงโป่งพอง",
    ],
    preparation: {
      type: "fasting",
      badgeText: "งดน้ำ-อาหาร 6–8 ชม.",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-300",
      instruction:
        "งดน้ำและอาหารอย่างน้อย 6–8 ชั่วโมงก่อนตรวจ เพื่อลดปริมาณแก๊สและเศษอาหารในลำไส้ที่อาจบดบังการสะท้อนภาพหลอดเลือดแดงใหญ่",
    },
    photo: { ...clinicPhotos.procedureRoom, objectPosition: "40% 40%" },
    keyFeature: "คัดกรองภาวะ AAA ช่วยลดความเสี่ยงเสียชีวิตเฉียบพลัน",
  },
  {
    id: "dvt-leg",
    categoryId: "vascular",
    categoryNameTh: "หมวดตรวจระบบหลอดเลือด",
    badge: "ลิ่มเลือดอุดตัน • ป้องกันลิ่มเลือดไปปอด",
    badgeColor: {
      bg: "bg-red-50",
      text: "text-red-800",
      border: "border-red-200",
    },
    titleTh: "อัลตราซาวด์หลอดเลือดดำส่วนลึกที่ขา",
    titleEn: "Deep Vein Thrombosis (DVT) Ultrasound",
    targetOrgans: ["หลอดเลือดดำชั้นลึกบริเวณขาทั้ง 2 ข้าง (Femoral & Popliteal Veins)"],
    findings: [
      "ตรวจหาลิ่มเลือดที่อุดตันภายในหลอดเลือดดำส่วนลึกที่ขา (DVT)",
      "ประเมินการยุบตัวของหลอดเลือดดำเมื่อถูกกด (Compression Test)",
      "ตรวจทิศทางและการไหลเวียนของเลือดดำด้วยสัญญาณเสียง Doppler",
      "ป้องกันความเสี่ยงลิ่มเลือดหลุดลอยไปอุดกั้นหลอดเลือดในปอด (Pulmonary Embolism)",
    ],
    symptoms: [
      "ขาหรือน่องบวมโตข้างเดียวอย่างเฉียบพลัน",
      "ปวดตึงกล้ามเนื้อน่อง ผิวหนังบริเวณขาเปลี่ยนเป็นสีแดงคล้ำหรือรู้สึกร้อน",
      "ผู้ป่วยที่ต้องนอนพักฟื้นติดเตียง หรือเพิ่งผ่านการผ่าตัดใหญ่ (เช่น ผ่าตัดข้อสะโพก/ข้อเข่า)",
      "ผู้ที่ต้องนั่งเครื่องบินระยะไกล หรือนั่งทำงานนิ่งต่อเนื่องเป็นเวลานาน",
    ],
    preparation: {
      type: "none",
      badgeText: "ไม่ต้องงดอาหาร",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-300",
      instruction:
        "ไม่ต้องงดน้ำและอาหาร ควรสวมกางเกงขาสั้นหรือกางเกงที่เปิดพับขึ้นตรวจบริเวณต้นขาและน่องได้สะดวก",
    },
    photo: { ...clinicPhotos.ultrasoundEquipment, objectPosition: "40% 55%" },
    keyFeature: "ตรวจวินิจฉัยลิ่มเลือดอุดตันขาฉุกเฉินได้ทันท่วงที",
  },
];

export const ultrasoundCategories: UltrasoundCategory[] = [
  {
    id: "all",
    nameTh: "ทั้งหมด",
    nameEn: "All Services",
    descriptionTh: `บริการตรวจวินิจฉัยด้วยคลื่นเสียงความถี่สูงครบวงจร ${ultrasoundServices.length} โปรแกรม`,
    count: ultrasoundServices.length,
    image: clinicPhotos.ultrasoundEquipment.src,
    iconName: "Activity",
  },
  {
    id: "abdominal",
    nameTh: "ตรวจช่องท้อง",
    nameEn: "Abdominal Ultrasound",
    descriptionTh: "ตรวจคัดกรองอวัยวะภายในช่องท้องส่วนบน ส่วนล่าง และระบบทางเดินปัสสาวะ",
    count: 3,
    image: clinicPhotos.ultrasoundEquipment.src,
    iconName: "Scan",
  },
  {
    id: "breast-neck",
    nameTh: "เต้านมและลำคอ",
    nameEn: "Breast & Neck",
    descriptionTh: "ตรวจคัดกรองก้อนซีสต์ มะเร็งเต้านม ต่อมไทรอยด์ และต่อมน้ำเหลืองรอบลำคอ",
    count: 2,
    image: clinicPhotos.ultrasoundEquipment.src,
    iconName: "HeartPulse",
  },
  {
    id: "soft-tissue-msk",
    nameTh: "กล้ามเนื้อ ข้อต่อ และก้อนเนื้อ",
    nameEn: "Soft Tissue & MSK",
    descriptionTh: "ตรวจประเมินเส้นเอ็น ข้อต่อ กล้ามเนื้อ และก้อนเนื้อเยื่ออ่อนใต้ผิวหนัง",
    count: 3,
    image: clinicPhotos.ultrasoundEquipment.src,
    iconName: "Bone",
  },
  {
    id: "vascular",
    nameTh: "ระบบหลอดเลือด Doppler",
    nameEn: "Vascular Doppler",
    descriptionTh: "ตรวจความเร็วและการไหลเวียนเลือด คัดกรองหลอดเลือดตีบตันและลิ่มเลือดอุดตัน",
    count: 3,
    image: clinicPhotos.ultrasoundEquipment.src,
    iconName: "Radio",
  },
];
