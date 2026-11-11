# Dr Deepta Majumder — Complete Research Portfolio

A complete, deploy-ready academic portfolio with:

- Apple-inspired scroll storytelling
- Sticky scroll-driven hero scene
- Glassmorphism research cards
- Research / Projects / Publications / Experience / Education / Leadership sections
- Conference and grant sections
- Responsive mobile layout
- Embedded "Ask anything" AI chatbot
- Portfolio-aware AI answers about Dr Deepta Majumder
- General-purpose AI answers
- Server-side OpenAI API key protection
- Vercel serverless API endpoint
- Favicon and robotstxt

## Folder structure

```text
deepta-majumder-complete-portfolio/
├── indexhtml
├── faviconsvg
├── robotstxt
├── packagejson
├── verceljson
├── envexample
├── READMEmd
├── assets/
│   └── deepta-portraitpng
└── api/
    └── chatjs
```

## Important: the chatbot needs an API key

The website itself is complete, but a live AI chatbot requires an OpenAI API key

Do NOT put the key in `indexhtml`

The key is read only by `api/chatjs` from:

```text
OPENAI_API_KEY
```

The default model is:

```text
gpt-6-luna
```

You can change it with:

```text
OPENAI_MODEL
```

## Recommended deployment: Vercel

1 Create an account at Vercel
2 Put this project into a GitHub repository, or upload/import the project directly
3 Import the repository into Vercel
4 In Vercel → Project Settings → Environment Variables, add:

```text
OPENAI_API_KEY = your_api_key
OPENAI_MODEL = gpt-6-luna
```

5 Deploy

Vercel will serve `indexhtml` as the website and `/api/chat` as the serverless AI endpoint

## Local development

Install dependencies:

```bash
npm install
```

Install/use the Vercel CLI if needed:

```bash
npm install -g vercel
```

Then:

```bash
vercel dev
```

Set your local environment variable before running:

```text
OPENAI_API_KEY=
```

## How the AI assistant works

The visitor clicks:

- "Ask anything" floating card
- Bottom-right "Ask anything · AI assistant" button

A glass chat panel opens without leaving the website

The browser sends the conversation to:

```text
POST /api/chat
```

The serverless endpoint sends the request to OpenAI using the Responses API

The assistant has a portfolio context containing the information presented on this website, so questions such as:

- "What is Deepta's research interest?"
- "Where did he complete his MPH?"
- "What is his harm-reduction experience?"
- "What publications are listed?"
- "What is RDS?"

can be answered from the portfolio context

It can also answer general questions such as:

- "What is incidence?"
- "Explain a hazard ratio"
- "What is implementation science?"
- "What is the difference between prevalence and incidence?"

## Security

Never expose the OpenAI API key in browser JavaScript

The current design keeps the key server-side in the Vercel function

For a public launch, consider adding stronger abuse protection/rate limiting if the site receives substantial traffic

## Cost

OpenAI API usage is billed according to the model and tokens used The website does not itself charge visitors

## Updating your portfolio

Most visible website content is in:

```text
indexhtml
```

The AI's portfolio knowledge is in:

```text
api/chatjs
```

When you change major CV facts, update both places so the visible portfolio and chatbot remain consistent

## Custom domain

After deployment, Vercel can connect a custom domain such as:

```text
deeptamajumdercom
```

if you own the domain

## Important distinction

This project is an original Apple-inspired interaction design It does not copy Apple's proprietary source code or assets

## Newly added speaking engagement

- Bangladesh International Cancer Congress (BICC 2026)
- Session: Breakthrough Research–5
- Topic: Human Papillomavirus Vaccine Hesitancy Among Female University Students in Bangladesh: The Role of Knowledge, Trust, and Academic Background
- Date: 20 November 2026
- Time: 5:00 PM–6:30 PM
- Presentation duration: 8 minutes
- Venue: Hall-3, Radisson Blu Water Garden Hotel, Dhaka, Bangladesh
- Role: Invited speaker

## Amateur radio

The portfolio now includes a dedicated Amateur Radio section based on the ARSB feature “From Ham Radio Service to International Research Recognition (S21HK),” published July 25, 2026

Key details included:
- Licensed amateur radio operator since 2017
- Callsign S21HK
- Active ARSB contributor since 2019
- HF, VHF and UHF field communication
- Emergency communication
- Crisis-response, rescue and relief coordination
- Volunteer training
- Technical outreach
- Youth engagement

Two original illustrative ham-radio images were generated for the website: a rooftop radio workstation and an antenna/field-communication scene


## Amateur radio image update

The amateur radio section now uses contextual images from public Bangladesh amateur radio coverage together with the ARSB member profile image for S21HK

The ARSB profile is linked directly from the portfolio and identifies Dr Deepta Majumder as S21HK with licensed operation since 2017 and active ARSB contribution since 2019


## Quick access animation

The Quick Access section now uses a layered card animation based on the supplied visual reference

- Staggered depth entrance when the section enters the viewport
- Four overlapping glass cards with individual rotations
- Research sits behind Publications and Projects
- Ask anything sits as the foreground AI card
- Mouse and pointer movement create subtle 3D parallax
- Hovering a card adds lift and depth
- Reduced-motion preferences are respected


The Amateur Radio section uses the personal photograph supplied for this portfolio

## Research Projects

A dedicated research project section has been added with six projects

- Gender-Based Violence Against Women Following Flooding in Bangladesh — Principal Investigator — PSTC — December 2025 to present
- Disruption of Essential Medicines and Chronic Disease Care After Cyclones in Coastal Bangladesh — Principal Investigator — February 2026 to present
- Parental Knowledge and Attitudes Toward Childhood Immunisation in Dhaka’s Urban Slums — Co-Investigator — Bangladesh Open University — May 2025 to June 2026
- Patterns of Deliberate Self-Harm and Their Association With Suicidal Ideation Among Adolescents — Co-Investigator — BSMMU — February 2022 to January 2024
- Climate Anxiety and Psychological Distress Among Medical Students in Bangladesh — Co-Investigator — Mugdha Medical College — February to November 2026
- Prevalence and Correlates of Post-Traumatic Stress Disorder Among Students in Dhaka Following the July 2024 Mass Revolt — Principal Investigator — Mugdha Medical College — May 2025 to present


## ResearchGate

ResearchGate has been added to the main navigation and contact area of the portfolio


## AI assistant toggle

The hero now includes a power-style animated toggle inspired by the supplied reference image

- OFF state uses a dark recessed switch
- ON state transitions into a warm orange illuminated state
- The thumb slides with spring-like easing
- Turning it ON opens the portfolio AI assistant
- Turning it OFF closes the assistant
- The control is keyboard accessible and responsive


## Clinical glass animation

The hero now includes two animated glass medical elements

- A translucent stethoscope card with a slow floating motion
- A translucent ECG monitor card with a continuously drawing waveform and scanning light
- Both elements use depth blur glow and glassmorphism
- The animation is responsive and respects reduced-motion settings


## Live daily dashboard

A colourful glass dashboard has been added with

- Live Dhaka clock and date
- Current weather and temperature
- Humidity
- Atmospheric pressure shown in both hPa and atm
- Sunrise and sunset
- Animated daylight progress
- Responsive colourful glass cards inspired by the supplied reference
- Live weather data via Open-Meteo with no API key required


## 2024 Feni Flood Response

The Amateur Radio section now includes the QST-documented 2024 Feni flood response, including the emergency communication network, 375+ rescue missions, 70 km communication radius, and the involvement of Dr Deepta Majumder with medical students and the temporary medical camp

The March 2026 QST feature is included in the website assets as a PDF source


## Capstone project

Added the MPH capstone project, Newcomer Settlement Orientation Program, as a concise education-section card covering its implementation and evaluation focus


## Additional Research Project

Added the ongoing co-investigator project “Measles Risk Factors And Vaccination Status Among Hospitalised Children During An Outbreak In Bangladesh: A Retrospective Study”

- Implemented by Shaheed Suhrawardy Medical College Hospital (ShSMCH)
- Project period: 1 April 2026 — present
- Focus: measles vaccination gaps, risk factors, immunisation outreach and outbreak response


## Volunteer & Community Service

Added a dedicated volunteer section highlighting Platform Doctors Foundation, CRIDA and Amateur Radio Society Bangladesh, together with selected service experiences in Sirajganj flood response, COVID-19 public-health communication, the 2024 Feni flood response and ongoing community health and humanitarian volunteering


## Visual refinement

- Removed the publication-source sentence from the Publications section
- Refined the hero stethoscope with animated tubing highlights, chestpiece pulse and subtle floating motion
- Reduced the live dashboard widgets and changed them to compact floating animated glass cards


## Latest visual update

- Removed the hero stethoscope animation
- Added a small animated black-hole visual
- Added live sunrise timing and countdown
- Added a dynamic moon-condition widget with phase and illumination
- Kept the dashboard compact floating and animated


- Repositioned the moon condition widget onto the same row as daylight and sunrise
- Added a subtle animated ECG signal running behind the dashboard cards


- Reworked the Explore deck with continuous staggered floating and dancing card motion
- Added a large standalone animated ECG signal behind the Explore deck
- Removed the smaller ECG glass card from the hero so the ECG has its own dedicated visual treatment
