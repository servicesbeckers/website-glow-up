

# Werkhuizen Beckers — Volledige Remake met Dynamisch Projectensysteem

## Samenvatting

Ik ga je website volledig opnieuw opbouwen met het design en de content van je Jekyll/GitHub site, maar dan in een modern React framework. Het belangrijkste: **je Python workflow voor projecten blijft werken**. Je projecten worden dynamisch geladen vanuit je GitHub repo (`_projects/` markdown bestanden + afbeeldingen uit `assets/projects/`).

## Huidige situatie

Je GitHub repo (`servicesbeckers/whb`) is een Jekyll-site met:
- **Python script** (`scripts/generate_projects.py`) dat project-mappen scant in `assets/projects/`, een `ProjectInfo.md` leest per project, en `_projects/*.md` bestanden genereert
- **9 projecten** met frontmatter (title, slug, material, category, application, summary, cover) en een body
- **Afbeeldingen** per project in `assets/projects/{naam}/`
- Pagina's: Home, Projecten (overzicht), Project (detail), Contact

## Wat er verandert

### 1. Aparte routes (beter voor SEO)
In plaats van alles op één pagina met hash-links, krijgt elke sectie een eigen route:

```text
/              → Homepage (hero, diensten, werkwijze, korte project-showcase, CTA)
/projecten     → Projectenoverzicht (alle projecten uit GitHub)
/projecten/$slug → Projectdetail met galerij
/contact       → Contactpagina met info + offerte-instructies
```

### 2. Projecten dynamisch laden uit GitHub
Een server function haalt de `_projects/*.md` bestanden op via de GitHub API (`raw.githubusercontent.com`). Zo werkt je bestaande workflow intact:
1. Je maakt een map in `assets/projects/` met foto's en een `ProjectInfo.md`
2. Je runt het Python script → genereert `_projects/Naam.md`
3. Je pusht naar GitHub
4. De Lovable website pikt de projecten automatisch op

### 3. Design — volledig nieuw
- Zelfde donker industrieel thema (amber/goud accenten) dat je nu hebt
- Alle content overgenomen van je GitHub-site (exact dezelfde teksten, diensten, werkwijze)
- Projectkaarten met cover-afbeelding, materiaal- en categorie-badges
- Projectdetailpagina met fotogalerij (alle afbeeldingen uit de projectmap)
- Responsive voor mobiel en desktop

### 4. Content uit je GitHub-site
Alle teksten worden 1:1 overgenomen:
- **Hero**: "Metaalbewerking op maat met een strakke uitvoering en duidelijke aanpak"
- **Diensten**: 6 items (Staalconstructies, Inox, Aluminium, Herstellingen, Enkele stuks, Technisch meedenken)
- **Werkwijze**: 4 stappen
- **Waarom kiezen voor ons**: 3 punten
- **Contact**: telefoon, email, regio + uitleg wat mee te sturen

## Technische aanpak

| Bestand | Wat |
|---|---|
| `src/routes/index.tsx` | Homepage met hero, diensten, werkwijze, waarom-ons, featured projecten, CTA |
| `src/routes/projecten.tsx` | Projectenoverzicht — haalt alle projecten op uit GitHub |
| `src/routes/projecten.$slug.tsx` | Projectdetail met galerij — haalt project + images op uit GitHub |
| `src/routes/contact.tsx` | Contactpagina |
| `src/lib/projects.ts` | Server functions die GitHub API aanroepen om `_projects/*.md` te parsen en afbeeldingen te listen |
| `src/components/` | Navbar, Hero, Services, Process, WhyUs, ProjectCard, ProjectGallery, ContactInfo, Footer |
| `src/styles.css` | Donker thema behouden, licht verfijnd |

### Hoe projecten geladen worden

```text
GitHub repo (servicesbeckers/whb)
  └─ _projects/*.md  (frontmatter + body)
  └─ assets/projects/{slug}/*.jpg  (galerij)
       ↓
  Server function fetcht via GitHub raw URLs
       ↓
  Parsed in React → projectkaarten + detailpagina's
```

Je hoeft niets te veranderen aan je huidige Python-workflow. Nieuwe projecten verschijnen automatisch na een push naar GitHub.

