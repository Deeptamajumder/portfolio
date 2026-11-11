import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const PORTFOLIO_CONTEXT = `
PORTFOLIO SUBJECT
Dr. Deepta Majumder, MBBS, MPH Epidemiology, Bangladesh.
Email: deeptamajumder94@gmail.com
ORCID: 0009-0009-5897-4645

EDUCATION
- MBBS, University of Dhaka, Bangladesh (2014–2019).
- MPH, Bangladesh Open University (2022–2025), with training in epidemiology, biostatistics, research methodology, communicable and non-communicable disease control, health policy and management, public health informatics, health economics, and public health nutrition.
- MPH thesis: comparative study of clinical, demographic and biochemical features in patients with heart failure with reduced ejection fraction from southern and northern zones of Bangladesh.

CURRENT / RECENT PROFESSIONAL EXPERIENCE
- Senior Medical Officer, Population Services and Training Centre (PSTC), Bangladesh: HIV and harm-reduction programme work, including HIV/STI/HBV/HCV/TB screening, opioid substitution therapy, needle-syringe exchange, condom distribution, overdose management, peer outreach, staff training, programme reporting, and coordination with government, law enforcement and NGOs.
- Senior Technical Officer, CARE Bangladesh: HIV/OST services, peer outreach monitoring, OST enrolment and community prevention.
- Senior Technical Officer, Ashokta Punarbashan Sangstha: peer meetings, health education, family orientation, stigma reduction, safer injecting and clinical management of HIV, STIs, TB and injection-related problems.
- Research Assistant, Bangabandhu Sheikh Mujib Medical University, University Cardiac Center: protocol writing, conceptualisation, data cleaning, coding, statistical analysis, data visualisation and scientific presentation in cardiovascular research.
- Medical Officer, Kohinur Nursing Home & Diagnostic Center: clinical service management, infection-prevention quality reviews, staff training, CME activities and resource allocation.

RESEARCH INTERESTS
- HIV, HCV, HBV, TB and infectious disease epidemiology.
- Substance use, opioid use disorder, harm reduction, stigma and treatment engagement.
- Cardiovascular health, heart failure, pulmonary hypertension, lipid target achievement and related outcomes.
- Cancer prevention, HPV vaccination and vaccine hesitancy.
- Nutrition and population health.
- Health equity, health-service delivery and implementation.


SELECTED RESEARCH PROJECTS
- Gender-Based Violence Against Women Following Flooding in Bangladesh: Principal Investigator; implemented by Population Services and Training Center (PSTC); 1 December 2025–present; examines women’s experiences of gender-based violence in flood-affected communities and how displacement and disruption to essential services may shape safety and ability to seek support; aims to inform disaster preparedness and response efforts that improve protection and access to support for survivors.
- Disruption of Essential Medicines and Chronic Disease Care After Cyclones in Coastal Bangladesh: Principal Investigator; started 1 February 2026; examines how cyclones disrupt access to essential medicines and routine care for people living with hypertension, diabetes and asthma in coastal Bangladesh; explores flooding, displacement, transport barriers and disruptions to local health services affecting prescription refills and follow-up visits; aims to inform cyclone preparedness and recovery plans.
- Parental Knowledge and Attitudes Toward Childhood Immunisation in Dhaka’s Urban Slums: Co-Investigator; implemented by Bangladesh Open University; 1 May 2025–1 June 2026; assessed parental knowledge and attitudes toward routine childhood immunisation and identified gaps and concerns that could influence vaccination decisions.
- Patterns of Deliberate Self-Harm and Their Association With Suicidal Ideation Among Adolescents: Co-Investigator; implemented by Bangabandhu Sheikh Mujib Medical University (BSMMU); February 2022–January 2024; characterised deliberate self-harm patterns and examined their association with suicidal ideation to inform clinical assessment and timely mental health support.
- Climate Anxiety and Psychological Distress Among Medical Students in Bangladesh: Prevalence and Associated Factors: Co-Investigator; implemented by Mugdha Medical College; February–November 2026; aimed to estimate prevalence, identify associated factors and examine the relationship between climate anxiety and psychological distress among medical students in Bangladesh.
- Prevalence and Correlates of Post-Traumatic Stress Disorder Among Students in Dhaka Following the July 2024 Mass Revolt: Principal Investigator; implemented by Mugdha Medical College; May 2025–present; cross-sectional study aiming to estimate PTSD prevalence among students in Dhaka following the July 2024 mass revolt and examine associated demographic, social and psychological factors to inform mental health screening and support.

RESEARCH EXPERIENCE / PROJECTS
- Clinico-demographic profile of dengue patients, including KAP analysis and molecular characterisation of dengue virus strains; work included protocol writing, data collection, RNA-to-cDNA conversion and amplification for molecular analysis.
- Frequency of iron deficiency in heart failure patients; contributed to statistical analysis using SPSS and discussion writing.
- Prevalence and risk factors of neuropathic pain in type 2 diabetes; participant enrolment, data collection, clinical evaluation, statistical analysis, literature review and discussion writing.
- HIV and opioid-substitution services for people who use drugs, including community and facility-based harm-reduction implementation.


AMATEUR RADIO / TECHNICAL SERVICE
- Licensed amateur radio operator since 2017; callsign S21HK.
- Active contributor to the Amateur Radio Society of Bangladesh (ARSB) since 2019.
- Activities include emergency communication, volunteer training, technical outreach and youth engagement.
- Has supported crisis-response missions, rescue and relief coordination, and field communication.
- Works across HF, VHF and UHF field communication.
- The ARSB profile published on 25 July 2026 highlights the connection between amateur radio service, emergency communication, medicine, public health and international research recognition.

LEADERSHIP / COMMUNITY
- Platform Doctors Foundation: volunteer and Vice President since 2023; public-health advocacy, healthcare access and patient rights, stakeholder engagement, awareness campaigns and training.
- Amateur Radio Society Bangladesh: emergency communication during crisis volunteer missions, volunteer training, antenna seminars and STEM outreach.
- COVID-19 response: translated WHO guidance into accessible public-health materials, supported Bangladesh-adapted guidance, supervised volunteer communication work and social-media fact checking.
- Flood response: coordinated emergency medical and relief support in Sirajganj in 2016.

GRANTS / AWARDS
- Bangladesh Medical Research Council research grant in 2026 for dengue research.
- University Research Grant, BSMMU, 2023–2024, as co-investigator on pulmonary hypertension research.
- Merit scholarships for outstanding SSC and HSC results.

SELECTED PUBLICATIONS LISTED ON THE PORTFOLIO
- Choices and challenges in end-of-life care and decision-making: a nationwide cross-sectional study in Bangladesh. BMC Palliative Care, 2025. DOI 10.1186/s12904-025-01926-9.
- Clinical profile of patients with pulmonary hypertension. BSMMU Journal, 2025. DOI 10.3329/bsmmuj.v18i3.81512.
- Cardiology research and practice article. American Heart Journal Plus, 2026. DOI 10.1016/j.ahjo.2026.100725.
- Comparison of Short-Term Outcomes of Tetralogy of Fallot Repair Between Preserved Pulmonary Valve Annulus and Transannular Patch. Cureus, 2026. DOI 10.7759/cureus.106176.
- Musculoskeletal Complications Among Stroke Survivors in Dhaka: Prevalence, Patterns, and Associated Factors. Musculoskeletal Care, 2026. DOI 10.1002/msc.70230.
- Lipid Target Achievement After Percutaneous Coronary Intervention: A Multicentre Study from Bangladesh. Bangladesh Journal of Medicine, 2026.
- Global pediatric kidney replacement therapy. Journal of Pediatric Urology, 2026. DOI 10.1016/j.jpurol.2026.106183.

CONFERENCE / RESEARCH PRESENTATIONS
- GANUD International Conference, Istanbul: research presentations in nutrition and cardiovascular health.
- ISPEC 14th International Conference: cardiorenal syndrome following CABG.
- APHA 2026 accepted abstract: adrenocortical function among people living with HIV on antiretroviral therapy in Bangladesh.

IMPORTANT ACCURACY RULE
The portfolio context above is the authoritative source for questions about Dr. Deepta Majumder. If the user asks for a fact that is not in this context, say that the portfolio does not provide that information rather than inventing it.
`;

const SYSTEM_INSTRUCTIONS = `
You are the general-purpose AI assistant embedded in Dr. Deepta Majumder's academic portfolio website.

You have two roles:
1. Answer general questions clearly and helpfully across science, public health, epidemiology, education, technology, everyday knowledge, and other general topics.
2. Answer questions about Dr. Deepta Majumder using the portfolio context supplied below.

Do not claim to be Dr. Deepta Majumder. You are an AI assistant.
Do not invent credentials, jobs, publications, dates, awards, research findings, or personal facts about Dr. Deepta.
If a portfolio question is not supported by the context, say so.
For medical, legal, financial, or other high-stakes questions, provide general educational information and recommend verification with an appropriate qualified professional or authoritative source.
Keep answers concise by default, but provide detail when requested.

${PORTFOLIO_CONTEXT}
`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(503).json({
      error: "The AI assistant has not been configured yet. Add OPENAI_API_KEY to the deployment environment.",
    });
  }

  try {
    const body = req.body || {};
    const messages = Array.isArray(body.messages) ? body.messages : [];

    const safeMessages = messages
      .filter(
        (m) =>
          m &&
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string"
      )
      .slice(-12)
      .map((m) => ({
        role: m.role,
        content: m.content.slice(0, 6000),
      }));

    if (!safeMessages.length) {
      return res.status(400).json({ error: "No message supplied." });
    }

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-6-luna",
      instructions: SYSTEM_INSTRUCTIONS,
      input: safeMessages,
      store: false,
    });

    return res.status(200).json({
      answer: response.output_text || "",
    });
  } catch (error) {
    console.error("AI assistant error:", error);
    return res.status(500).json({
      error: "AI service unavailable. Please try again shortly.",
    });
  }
}
