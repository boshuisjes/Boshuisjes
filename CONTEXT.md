# Boshuisjes Project — Context Transfer Prompt

## Who I am
My name is Christopher Vischschraper (cvisch@gmail.com). I own two holiday cottages in Wageningen, Netherlands, and am building a website and management system for them with Claude's help. My partner is Zuzana Kmetova (zuzkmetova@hotmail.com). We speak English, Dutch, Slovak and Czech.

---

## The Properties

### Boshuisje (A06)
- 1 bedroom (double or configurable as twin singles)
- Up to 4 guests
- Full kitchen, gas hob, microwave, Senseo, cable TV, Wi-Fi (T-Mobile)
- Private terrace, free parking, self check-in via lockbox
- Airbnb listing ID: 1329072956715925253
- Booking.com property ID: 7843905
- Smoobu calendar widget ID: 2610118

### Boshuisje Chez-Michel (A04)
- 2 bedrooms: master (double) + second room (bunk beds + full-width desk/workspace)
- Up to 4 guests
- Bay windows, open-plan living/dining, oak china cabinet, gas hob, Senseo
- Distinctive red-umbrella painting, tropical flamingo bedding
- Private garden terrace with patio furniture
- Airbnb listing ID: 49576917
- Booking.com: boshuisje-chez-michelle
- Smoobu calendar widget ID: 2610198

### Third Cottage — 05 Benekom
- Currently long-term rental — NOT to be added to website or management system yet

### Park details
- Recreatiepark de Wielerbaan (TopParken)
- Zoomweg 7, 6705 DM Wageningen, Gelderland
- Both cottages in A-section (A04 and A06)
- Reception: +31 (0)88 500 2474

### Host contact
- Christopher: +31 06 4944 3739
- Zuzana: +31 06 1781 1578

---

## Ratings
- Booking.com: 9.3 Wonderful (50+ reviews)
- Airbnb: ★ 4.9

---

## Technical Setup — COMPLETED ✅

### Website
- **Live at:** https://boshuisjes.com
- **GitHub repo:** https://github.com/boshuisjes/Boshuisjes (public)
- **GitHub username:** boshuisjes
- **Hosting:** Netlify (free tier) — auto-deploys on every GitHub push
- **Domain registrar:** Vimexx — nameservers already pointed to Netlify
- **GitHub PAT token:** `REDACTED — regenerate at GitHub → Settings → Developer settings → Fine-grained tokens and paste into session`
  (Fine-grained token, Contents read/write on Boshuisjes repo only — expires in ~90 days, regenerate at GitHub → Settings → Developer settings → Fine-grained tokens if needed)

### GitHub repo file structure
```
/ (root)
├── index.html
├── boshuisje.html
├── chez-michel.html
├── area.html
├── hosts.html
├── rules.html
├── contact.html
├── style.css
├── shared.js
└── photos/
    ├── a06/        ← Boshuisje photos (img_*.jpg)
    └── a04/        ← Chez-Michel photos (cm_*.jpg)
```

### How to push changes
Use the GitHub API via Python + curl with the PAT token. Workflow:
1. Download file from GitHub API (get SHA)
2. Modify content
3. PUT back via API with SHA
This deploys to Netlify automatically within ~30 seconds.

### Google Drive
- Main folder: https://drive.google.com/drive/folders/1U77TfntbfEd64XJP_FDmOZjYps-NKScf
- 06 Boshuisje folder ID: `1vRikbndqZvp7gqAAiCbALdfAbMFuX8mf`
  - Photos subfolder ID: `10JVWFeKD237BPe11hVAOBlOYbXJeoXi7`
- 04 Chez-Michel folder ID: `1cTFu3mB5qKuHyHpj1bsMBF8qA1yJaa6q`
  - Photos subfolder ID: `1HGIaN9jBBhl_dVy2VeF0a0Mwiu3YiTEE`
- WEBSITE and MANAGEMENT folder ID: `1DuopsgLDtd4j_ZWNfGdNa22fS_jpzNXF`

### Photo workflow (agreed)
When new photos are ready in Google Drive:
1. Christopher says "photos are ready"
2. Claude pulls them from Google Drive
3. Processes them (brightness/contrast/warmth enhancement)
4. Pushes to GitHub photos/a06/ or photos/a04/
5. Netlify auto-deploys

---

## Website — COMPLETED ✅

### Pages built
- `index.html` — Homepage with hero, stats, cottage cards, reviews, quick links
- `boshuisje.html` — A06 detail page: gallery, room descriptions, specs, booking box, Smoobu calendar widget
- `chez-michel.html` — A04 detail page: full 17-photo gallery with lightbox, room-by-room breakdown, specs, booking box, Smoobu calendar widget
- `area.html` — Surroundings: activities, cycling, food, full Wielerbaan park map
- `hosts.html` — Christopher & Zuzana: background, languages, reviews about them
- `rules.html` — House rules: smoking, pets, check-in/out, cancellation, privacy
- `contact.html` — Enquiry form, three booking channels, map

### Design system
- **Colours:** Forest green `#1e2d1f`, Gold `#c8a96e`, Cream `#f5f0e8`, Ivory `#faf7f2`
- **Fonts:** Cormorant Garamond (display/headings) + Jost (body)
- **Style:** Dark luxury, minimal, editorial — think boutique hotel not holiday park
- Shared nav and footer injected via `shared.js`

### Copy principles (agreed)
- Direct and specific — no generic hospitality clichés
- Confident but not salesy
- No emojis in UI elements
- Cut anything that restates what the previous sentence said
- Make it sound like actual people, not a template

### Smoobu calendar widgets (embedded)
- Boshuisje: widget ID 2610118 — live on boshuisje.html
- Chez-Michel: widget ID 2610198 — live on chez-michel.html
- These are TEMPORARY — will be replaced by Beds24 booking widget once migration is complete

---

## Management System — IN PROGRESS ⏳

### Current situation
- **Smoobu:** Still active (€47/month pre-paid plan). Being migrated away from.
- **Beds24:** Trial account set up. Migration in progress.
- **Booking.com ↔ Beds24 API connection:** BLOCKED — Booking.com technical issue, they say they're working on it (3+ days). Workaround: use iCal for Booking.com temporarily.
- **Airbnb ↔ Beds24:** BLOCKED until Smoobu is disconnected from Airbnb first. Airbnb only allows one channel manager at a time.
- **VRBO:** Not yet connected to anything new.
- **Stripe:** Connected to Smoobu currently. Will move to Beds24.

### Migration plan (agreed)
1. Disconnect Smoobu from Airbnb (in Smoobu settings or Airbnb connected apps)
2. Immediately connect Beds24 to Airbnb (import listings, import existing bookings, THEN activate)
3. Connect VRBO to Beds24
4. Use iCal for Booking.com temporarily until their API issue is resolved
5. Set up Stripe in Beds24
6. Cancel Smoobu
7. Embed Beds24 booking widget on boshuisjes.com (replaces Smoobu calendar widgets)

### Pricing (in Beds24)
| Cottage | Period | Per Night | Min Stay |
|---|---|---|---|
| Boshuisje A06 | Standard | €85 | 2 nights |
| Boshuisje A06 | Peak Summer | €115 | 3 nights |
| Chez-Michel A04 | Standard | €95 | 2 nights |
| Chez-Michel A04 | Peak Summer | €130 | 3 nights |

### Beds24 cost breakdown
- Base (1st property): €15.90/month
- 2nd property: €3.00/month
- 6 channel connections (2 cottages × 3 platforms): €6.00/month
- **Total: ~€25/month** (vs Smoobu €47/month — saving ~€265/year)

---

## Costs overview

| Item | Current | Target |
|---|---|---|
| Domain (Vimexx) | ~€90/year (includes extras) | ~€9/year at renewal → transfer to Cloudflare |
| Website hosting | Free (Netlify) | Free |
| Channel management | €47/month (Smoobu) | ~€25/month (Beds24) |
| Booking.com commission | ~15% per booking | ~15% per booking |
| Airbnb commission | ~3% per booking | ~3% per booking |
| VRBO commission | ~5% per booking | ~5% per booking |
| Direct bookings | 0% commission | 0% commission (grow via boshuisjes.com) |

---

## Pending items — TO DO

### Immediate
- [ ] Upload new clean photos to Google Drive (Christopher doing this)
- [ ] Claude processes and pushes photos once Drive folders are ready
- [ ] Disconnect Smoobu from Airbnb and connect Beds24
- [ ] Connect VRBO to Beds24

### Website
- [ ] Replace current (over-processed) photos with new clean versions
- [ ] Replace Smoobu calendar widgets with Beds24 booking widget once available
- [ ] Review live site and identify any remaining copy/design issues
- [ ] Add direct booking flow with Stripe payments (after Beds24 is set up)

### Future
- [ ] Vimexx domain renewal → transfer to Cloudflare (~€9/year)
- [ ] Add 05 Benekom cottage when it transitions from long-term rental
- [ ] Multilingual pages (NL, DE, FR, SK) — placeholders exist, content not written
- [ ] Beds24 booking widget embedded on boshuisjes.com

---

## Key context about Christopher
- Self-described as "green" with web design and development
- Has GitHub Codespaces set up and connected
- Comfortable using terminals once commands are provided
- Prefers Claude to push changes directly rather than downloading files
- Running Windows OS
- Patient but goal-oriented — wants things to actually work, not just be explained

---

## Working relationship / workflow
- Claude accesses GitHub directly via PAT token (push without user involvement)
- Claude can read Google Drive folders for photos and documents
- Changes pushed to GitHub → Netlify auto-deploys in ~30 seconds
- When photos are ready in Drive, Claude pulls, processes, and pushes automatically
- Christopher focuses on property management, Beds24 migration, guest relations
- Claude focuses on website, code, integrations, deployment

---

## Guest reviews (real, from Booking.com)
- 🇮🇳 Anjali V. (India, 7 nights): "Thank you again for making my stay in Netherlands so wonderful and cozy! It is a really beautiful cottage"
- 🇩🇪 German guest: "Liebevoll dekoriert zu Weihnachten — Bettwäsche und Handtücher enthalten — super hilfsbereite Vermieter"
- 🇳🇱 Dutch guest: "De accommodatie was in alles fantastisch! Er ontbrak werkelijk niets en was uitermate schoon en netjes."
- 🇩🇪 German guest: "Die Einrichtung war sehr neu und gemütlich wie funktional... nah zum Restaurant und Schwimmbad"
- 🇰🇷 Seoyoung Y. (WUR researcher): Cozy accommodation, perfect base for WUR research stay

---

*Last updated: June 2026*
*Transfer this entire document as context when starting a new session on this project.*
