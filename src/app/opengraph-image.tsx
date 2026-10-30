import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_URL } from "@/config/site";
import { clinicSharePhoto } from "@/data/clinicPhotos";

export const alt = "คลินิกกระดูกและข้อ นพ.ชานนท์ พญ.พัดชา อุบลราชธานี";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [photo, logo] = await Promise.all([
    readFile(join(process.cwd(), "public", clinicSharePhoto)),
    readFile(join(process.cwd(), "public/images/logo-non-bg.png")),
  ]);

  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#0e3328", color: "#f2f7f4" }}>
      {/* Existing clinic photography and logo; this share card is not page UI. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt="" src={`data:image/jpeg;base64,${photo.toString("base64")}`} width={1200} height={630} style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 28%" }} />
      <div style={{ position: "absolute", display: "flex", width: "100%", height: "100%", background: "linear-gradient(90deg, rgba(14,51,40,0.97), rgba(14,51,40,0.8) 52%, rgba(14,51,40,0.2))" }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "48px 64px", width: "100%", height: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", background: "#f2f7f4", padding: 12 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src={`data:image/png;base64,${logo.toString("base64")}`} width={94} height={72} />
          </div>
          <div style={{ display: "flex", fontSize: 23, letterSpacing: 3 }}>UBON RATCHATHANI</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700, letterSpacing: -2 }}>CHANON CLINIC</div>
          <div style={{ display: "flex", fontSize: 34 }}>Bone, Joint &amp; Ultrasound Center</div>
          <div style={{ display: "flex", fontSize: 22, color: "#a8cbbf", marginTop: 10 }}>{new URL(SITE_URL).host}</div>
        </div>
      </div>
    </div>,
    size,
  );
}
