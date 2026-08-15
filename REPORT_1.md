# Portfolio Analyysi — Sami Rautanen
## Vertailu: Nykyinen tila vs. Moderni ihmisten luoma tyyli

---

## 🔍 Nykytilan diagnoosi

### Mitä oikein on tehty:
- Fonttiperhe on hyvä: **Syne + Inter + Space Grotesk** — tämä yhdistelmä on käytetty niin kuin pitääkin
- Scroll-parallax Herossa on siisti idea
- Projektikorttien rakenne on looginen: kuva → otsikko → kuvaus → tagit → CTA
- Dark mode -tuki on rakennettu sisään
- SEO-metadata on kunnossa

---

## ❌ Ongelmat kategorioittain

### 1. VÄRIMAAILMA — Suurin ongelma

**Nykytila:**
```css
--primary: #0052A3;   /* korporaatio-sininen */
--secondary: #003D7A;
--accent: #0066CC;
```

Koko paletti on **monotoninen sininen** joka toistaa itsensä 3 eri sävyllä ilman kontrastia tai persoonaa. Tämä on täsmälleen sama sininen jonka kaikki AI-startup-sivustot käyttävät. Se ei kerro mitään sinusta ihmisenä.

**Mitä ihmiset oikeasti käyttävät (2024–2025 benchmark):**
- Brittany Chiang: `#0a192f` (tumma merenharmaa) + `#64ffda` (minttu-aksentti)
- Josh W. Comeau: `#fff` + `#ff4500` (vahva oranssi-punainen aksentti)
- Lee Robinson: musta/valkoinen + hyvin vähän akksenttia
- Linas Vik: tumma liuskekivi + terrakotta

**Yhteinen piirre:** Yksi vahva, epäilyttävän rohkea aksenttiväri — ei kolmea sinistä.

---

### 2. TYPOGRAFIA — Lähes oikein, mutta käyttö on sekava

**Nykytila:**
- `layout.tsx` lataa **5 fonttia**: Inter, Outfit, Syne, Space Grotesk, Bebas Neue
- Herossa käytetään `var(--font-syne)` suoraan style-propissa
- Globals.css:ssä `--font-heading: var(--font-outfit), var(--font-syne)` — tämä on epäjohdonmukainen, koska Hero ohittaa sen

**Ongelmat:**
1. **5 fonttia on liikaa** — jokainen lisäfontti kasvattaa latausaikaa ~50-150ms. Standardisuositus on 2 fonttia.
2. Bebas Neue on ladattu mutta ei missään käytössä CSS:ssä → turha kuorma
3. Outfit on nimetty `--font-heading` muuttujaan mutta Hero käyttää Synea suoraan → inconsistency
4. `tracking-[0.3em]` subtitlissä on äärimmäisen tiheä — standardi max on `0.15em`

**Typografiastandardi (2025):**
| Käyttö | Suositus | Koko |
|--------|----------|------|
| Display/H1 | 1 display-fontti (Syne tai Outfit, valitse yksi) | `clamp(3.5rem, 8vw, 7rem)` |
| H2 section | sama fontti, lighter weight | `2–2.5rem` |
| Body | Inter tai system-ui | `1rem / 1.6 line-height` |
| Mono | Space Grotesk tai Fira Code | `0.875rem` |

---

### 3. HERO — Keskeinen ongelma

**Nykytila:** 3D neuroverkkografiikka koko ruudulla + nimi tekstinä päällä

**Miksi tämä on ongelma:**
- Three.js verkko on **täsmälleen sama** mitä kaikki AI-portfoliot käyttävät (se näyttää AI:n tekemältä)
- Verkon animaatio kilpailee tekstin kanssa — katse ei tiedä mihin mennä
- "AI ENGINEER & AGENTIC SYSTEMS ARCHITECT" on 9 sanaa jotka kaikki kilpailevat huomiosta
- `tracking-[0.3em]` tekee subtitlista hankalaa lukea

**Ihmisten luoma vs. AI:n luoma hero:**
| AI-generoitu | Ihminen suunnittelee |
|---|---|
| 3D neuroverkkoja | Vahva typografia yksinään |
| Glowing partikkelit | Paljon valkoista tilaa |
| Kaikki liikkuu | Yksi hienovarainen elementti |
| 5 animaatiota kerralla | Max 2 animaatiota |

---

### 4. PROJEKTIKORTTIEN KUVAT — Kriittinen heikkous

**Nykytila:** AI-generoidut sci-fi kuvat (syaaninsinisiä neuroverkkoja, neon-puisia robotteja) jotka:
- **Kumoavat** ammattimaisen vaikutelman heti
- Eivät kerro itse projekteista mitään
- Ovat täsmälleen mitä jokainen AI-käyttäjä luo

**Mitä alan parhaat tekevät:**
- Oikeat screenshots sovelluksista
- Terminaalin tai koodin kuvakaappauksia
- Figma/UI-mockupeja valkoisella taustalla
- Yksinkertaisia "case study" -kuvia jotka näyttävät tulokset

> Huomio: AgentSquad-kortissa on oikea screenshot UI:sta — **se erottuu selvästi muista ja näyttää paremmalta.**

---

### 5. LAYOUT — Hyvä rakenne, heikko rytmi

**Nykytila:**
- Osioiden taustoja vaihdellaan (`#F8FAFB` ↔ `#EEEFF1`) — ero on niin pieni ettei sitä huomaa
- `Section.tsx` ei ole nähtävissä, mutta todennäköisesti padding on Tailwind-vakio
- Korteissa `hover:scale-105` + `hover:-translate-y-1` yhdistelmä on liikaa — toinen riittää

**Parannusehdotukset:**
- Lisää selkeämpi ero sektioiden välille (kokonaan eri taustaväri tai selkeä border)
- Tai päinvastoin: poista kaikki sektioiden taustavärit ja käytä puhdasta valkoista koko sivulle

---

### 6. NAVBAR — Hyvä, mutta pienillä muutoksilla parempi

Kelluvä pilli-navbar on trendikäs ja näyttää hyvältä. Hyvä valinta.

**Pienet ongelmat:**
- Navigaatiotekstit `WORK SKILLS ABOUT CONTACT` kaikki caps — ok, mutta jos fonttikoko on pieni tämä voi tuntua huutamiselta
- Dark mode -toggle (kuukuvake) on pienessä pill-containerissa — voi olla vaikea havaita

---

## 🔴 Prioriteettikorjaukset (järjestyksessä)

### Prioriteetti 1 — Projektikorttien kuvat
**Tee oikeat screenshotit projektien UI:sta.** Tämä yksin nostaa portfolion uskottavuuden eri tasolle. Ei tarvita muuta.

### Prioriteetti 2 — Väripaletti: valitse yksi ei-sininen aksentti
Ehdotus: vaihda `--primary` johonkin muuhun kuin täyteen korporaatiosiniseen.
Vaihtoehdot:
- `#1a1a1a` musta + `#E8FF40` keltainen aksentti (editorial)  
- `#0f0f0f` musta + `#FF6B35` oranssi (energinen tech)
- `#18181B` tumma + `#4ADE80` vihreä (developer/terminal-viittaus)
- Säilytä sininen mutta lisää lämpö: `#1D4ED8` + `#F59E0B` keltainen aksentti

### Prioriteetti 3 — Karsii fontit 5 → 2
- Pidä: **Syne** (headings) + **Inter** (body)
- Poista: Outfit, Bebas Neue, Space Grotesk

### Prioriteetti 4 — Hero: yksinkertaista
Poista Three.js tai tee siitä **paljon** hillitympi (10% opacity, hitaampi animaatio). Anna nimi hengittää.

### Prioriteetti 5 — Subtitle tracking
`tracking-[0.3em]` → `tracking-[0.12em]` tai `tracking-wide`

---

## 📊 Pisteet (1-10)

| Kategoria | Nykyinen | Potentiaali |
|-----------|---------|-------------|
| Värimaailma | 4/10 | 9/10 |
| Typografia (valinta) | 7/10 | 9/10 |
| Typografia (käyttö) | 5/10 | 8/10 |
| Hero-rakenne | 4/10 | 8/10 |
| Projektikorttien sisältö | 5/10 | 9/10 |
| Projektikorttien kuvat | 3/10 | 9/10 |
| Asettelu/rytmi | 6/10 | 8/10 |
| Kokonaisyhteneväisyys | 5/10 | 9/10 |

---

## 💡 Yhteenveto

Teknisesti portfolio on rakennettu oikein. Komponenttirakenne on puhdas, SEO on kunnossa, fonttivalinnat ovat periaatteessa oikeita. **Ongelma on visuaalisessa identiteetissä:**

1. Se näyttää siltä miltä kaikki AI-generoidut portfoliot näyttävät (neuroverkkografiikat, neonsininen, glassmorphism)
2. Projektikorttien AI-kuvat kumoavat ammattimaisen koodin tuoman vaikutelman
3. Kolme sinistä värisävyä eivät luo persoonaa

Hyvä uutinen: korjaus ei vaadi suuren mittakaavan uudelleenkirjoitusta. Kyse on **sisällöstä** (oikeat kuvat), **väristä** (yksi rohkea aksentti), ja **karsimisesta** (vähemmän on enemmän).
