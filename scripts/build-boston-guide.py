"""Build the exact-text, one-page Boston airside connection guide."""
from pathlib import Path
import json
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets/guides/boston-terminal-a-to-e.pdf"
VERSION = json.loads((ROOT / "package.json").read_text())["version"]
FONT = Path("/usr/share/fonts/truetype/dejavu")
pdfmetrics.registerFont(TTFont("Guide", str(FONT / "DejaVuSans.ttf")))
pdfmetrics.registerFont(TTFont("GuideBold", str(FONT / "DejaVuSans-Bold.ttf")))

W, H = 792, 612
NAVY, BLUE, GREEN = map(HexColor, ["#082B50", "#1264A3", "#137047"])
INK, MUTED, BORDER, LIGHT = map(HexColor, ["#142C43", "#53667A", "#D7E3EC", "#EDF5FA"])
c = canvas.Canvas(str(OUT), pagesize=(W, H), pageCompression=1)
c.setTitle("Boston Logan - Delta Airside Transfer to SAS")
c.setAuthor("Italy 2026 Travel Companion")
c.setSubject("Confirmed Terminal A to E airside transfer; no TSA reentry; bags through to Rome FCO")

def text(s, x, y, size=11, color=INK, bold=False):
    c.setFillColor(color)
    c.setFont("GuideBold" if bold else "Guide", size)
    c.drawString(x, y, s)

def paragraph(s, x, top, width, size=10.5, leading=14.5, color=INK):
    style = ParagraphStyle("body", fontName="Guide", fontSize=size, leading=leading,
                           textColor=color, spaceAfter=0)
    p = Paragraph(s, style)
    _, height = p.wrap(width, H)
    p.drawOn(c, x, top-height)
    return height

def rounded(x, y, w, h, fill, radius=7, stroke=None):
    c.setFillColor(fill)
    if stroke:
        c.setStrokeColor(stroke)
    c.roundRect(x, y, w, h, radius, stroke=bool(stroke), fill=1)

c.setFillColor(white)
c.rect(0, 0, W, H, stroke=0, fill=1)
c.setFillColor(NAVY)
c.rect(0, 532, W, 80, stroke=0, fill=1)
text("BOSTON LOGAN TRANSFER GUIDE", 24, 580, 24, white, True)
text("Delta Terminal A  →  Delta airside shuttle  →  SAS Terminal E", 24, 554, 12.5, white)
text("Sunday, October 4, 2026  |  David & Melody", 24, 538, 9.5, HexColor("#CFE4F4"))

rounded(20, 490, 752, 30, GREEN)
text("CONFIRMED AIRSIDE TRANSFER  •  STAY INSIDE SECURITY  •  NO TSA REENTRY", 33, 501, 12, white, True)

for x, label, value, detail in [
    (20, "ARRIVE IN BOSTON", "2:55 PM", "Delta DL2706  •  Terminal A"),
    (276, "SCHEDULED CONNECTION", "2 hours 45 minutes", "Move directly to the Delta shuttle"),
    (532, "DEPART FOR COPENHAGEN", "5:40 PM", "SAS SK928  •  Terminal E"),
]:
    rounded(x, 423, 240, 55, LIGHT)
    text(label, x+12, 463, 8.1, MUTED, True)
    text(value, x+12, 444, 17, NAVY, True)
    text(detail, x+12, 431, 8.8, MUTED)

STEPS = [
    ("Arrive at Terminal A", "DL2706  •  2:55 PM", "Stay in the gate area after leaving the plane. Keep your passport and SAS boarding pass handy."),
    ("Follow the internal signs", "GATES A13-A22", "Head toward Delta's satellite concourse. Use the internal passage when needed; stay within the secured gate area."),
    ("Find the Delta shuttle", "FOOD COURT  •  A17-A18", "Follow Delta shuttle / Terminal E signs near the satellite food court. A Delta agent can point out the boarding door."),
    ("Take the airside bus", "DELTA SHUTTLE  →  E", "Board Delta's internal shuttle to Terminal E. This transfer stays inside security. No TSA reentry."),
    ("Continue to your SAS gate", "E13 AREA  →  SK928", "The shuttle normally reaches Terminal E near E13. Check the monitors for SK928 to Copenhagen and walk to that SAS gate."),
    ("Be at the gate early", "GATE TARGET  •  4:45 PM", "Follow the boarding time and deadline on your SAS boarding pass. Flight departure is 5:40 PM; boarding finishes earlier."),
]
for i, (title, sign, body) in enumerate(STEPS):
    x = 20 + (i % 3)*256
    y = 251 if i < 3 else 79
    rounded(x, y, 240, 160, white, stroke=BORDER)
    c.setFillColor(BLUE)
    c.circle(x+23, y+138, 12, stroke=0, fill=1)
    c.setFillColor(white)
    c.setFont("GuideBold", 12)
    c.drawCentredString(x+23, y+134, str(i+1))
    title_style = ParagraphStyle("title", fontName="GuideBold", fontSize=11.8,
                                 leading=14, textColor=NAVY)
    p=Paragraph(title, title_style)
    _, h=p.wrap(190, 32)
    assert h <= 28, (title, h)
    p.drawOn(c, x+42, y+146-h)
    rounded(x+12, y+84, 216, 28, LIGHT, radius=4)
    assert pdfmetrics.stringWidth(sign, "GuideBold", 10.4) <= 198, sign
    text(sign, x+21, y+94, 10.4, BLUE, True)
    body_height=paragraph(body, x+14, y+73, 212)
    assert body_height <= 66, (title, body_height)

rounded(20, 27, 752, 41, HexColor("#EAF5EF"))
text("CHECKED LUGGAGE: CONFIRMED THROUGH TO ROME (FCO)", 33, 52, 11.8, GREEN, True)
text("Collect your checked bags in Rome. Keep carry-ons with you during the Boston transfer.", 33, 36, 10.2, INK)
text(f"Italy 2026  •  v{VERSION}  •  Updated October 3, 2026", 20, 12, 7.2, MUTED)
source="Delta BOS shuttle guidance"
text(source, 582, 12, 7.2, MUTED)
c.linkURL("https://www.delta.com/us/en/advisories/airports/boston-airport-update", (580, 8, 768, 20), relative=0)
c.showPage()
c.save()
print(f"Created {OUT}")
