# SEO และ Google Search สำหรับคลินิก

URL หลัก: https://chanonclinic.vercel.app/

## หลังเผยแพร่ขึ้น Vercel Production

1. เปิดหน้าแรกและตรวจว่า canonical เป็น `https://chanonclinic.vercel.app/` และไม่มี `noindex` ใน meta หรือ `X-Robots-Tag` ของ Production
2. เปิด `/sitemap.xml` และ `/robots.txt` ต้องตอบ HTTP 200 โดย robots ระบุ sitemap บนโดเมนนี้
3. เปิด `/google161abe180a8d091b.html` ต้องแสดง `google-site-verification: google161abe180a8d091b.html` ไฟล์นี้ใช้สำหรับยืนยันเจ้าของเว็บไซต์ ห้ามลบหลังยืนยันสำเร็จ
4. ใน [Google Search Console](https://search.google.com/search-console) เพิ่ม property แบบ **URL-prefix** เป็น `https://chanonclinic.vercel.app/` เลือกวิธี HTML file แล้วกด Verify จากบัญชีที่ดาวน์โหลดไฟล์นี้มา
5. ไปที่ Sitemaps ส่ง `sitemap.xml` แล้วใช้ URL Inspection ตรวจหน้าแรก เลือก Test live URL และ Request indexing เมื่อ Google เข้าถึงได้
6. ตรวจ structured data ด้วย [Rich Results Test](https://search.google.com/test/rich-results) และ [Schema Markup Validator](https://validator.schema.org/) ผลลัพธ์พิเศษและอันดับยังขึ้นกับ Google
7. ตรวจ [Google Business Profile](https://business.google.com/) ที่มีอยู่ของคลินิก ให้ชื่อ ที่อยู่ เบอร์โทร เวลาทำการ และเว็บไซต์ตรงกัน ไม่สร้างสถานที่ซ้ำ

## การตั้งค่า

- URL หลักอยู่ที่ `src/config/site.ts` ที่เดียว
- `SITE_LAST_MODIFIED` คือวันที่แก้เนื้อหาหน้าจริง เปลี่ยนเมื่อปรับเนื้อหาสำคัญ ไม่ใช้เวลาที่เรียก sitemap หรือเวลาทุก build
- `SITE_NOINDEX=true` ใช้ปิด indexing ชั่วคราว ต้องไม่เปิดค่านี้ใน Production ที่ต้องการให้ Google จัดทำดัชนี
- Vercel Preview และ local dev จะส่ง `noindex, nofollow` ทั้ง metadata และ HTTP header แต่อนุญาต crawl เพื่อให้อ่าน noindex ได้
- `GOOGLE_SITE_VERIFICATION` เป็นตัวเลือกสำหรับ HTML meta tag เพิ่มเติมจาก Search Console เท่านั้น ไฟล์ HTML ที่ได้รับมาถูกติดตั้งแล้ว ไม่ต้องใส่ค่า HTML file ลงในตัวแปรนี้
- Google verification file ยืนยัน URL-prefix นี้ได้ ไม่ใช่สิทธิ์ DNS ของโดเมน `vercel.app`

## ข้อมูลที่ใช้ใน schema

ใช้ `MedicalClinic`, `WebSite`, `WebPage`, `Person` และ `MedicalTest` ที่แสดงอยู่จริงในหน้า ไม่รวมบทความหรือรีวิวทันตกรรมที่ยังค้างในข้อมูลต้นแบบ และไม่แต่งคะแนนรีวิว พิกัด ราคา หรือคุณวุฒิที่ยังไม่ได้ยืนยัน

ที่อยู่และตารางเวลาทำการแบบมีโครงสร้างอยู่ใน `branchesData` ของ `src/data/clinicData.ts` เมื่อแก้เวลาทำการ ให้ปรับข้อความที่แสดงและ `openingHoursSpecification` ให้ตรงกัน

## เมื่อมีโดเมนส่วนตัว

เปลี่ยน `SITE_URL` ที่จุดเดียว ตั้ง redirect ถาวรจาก URL เก่าไปใหม่ใน Vercel ตรวจ canonical/schema/sitemap แล้วเพิ่มและยืนยัน property ใหม่ใน Search Console พร้อมส่ง sitemap ใหม่ เก็บ verification ของเว็บเก่าระหว่างการย้าย

## ตรวจในเครื่อง

```sh
npm run test:seo
npx tsc --noEmit
npm run build
# After starting the production server, or after deployment:
node scripts/check-seo-http.mjs http://localhost:3001/
node scripts/check-seo-http.mjs https://chanonclinic.vercel.app/
```

ภาพแชร์ `/opengraph-image` เป็นภาพ 1200 × 630 ที่ประกอบจากรูปคลินิกและโลโก้เดิม ไม่กระทบหน้าตาเว็บ
