// Pages where my work was cited: press, talks, workshops and awards.
// Listed compactly under the blog cards in the "Writing & Talks" section.
// Before adding one, check it isn't already a blog post (src/data/blogPosts.ts):
// "Meet Yann", the Barcelona Work Fair chatbot workshop and the DMK Tribe
// "AI beyond ChatGPT" talk live there.

export interface FeatureLink {
  label: string;
  url: string;
}

export interface Feature {
  id: string;
  // "YYYY", "YYYY-MM" or "YYYY-MM-DD"; also used for sorting
  date: string;
  kind: 'Press' | 'Talk' | 'Workshop' | 'Award' | 'Teaching' | 'Milestone';
  source: string;
  title: string;
  description: string;
  url: string;
  extraLinks?: FeatureLink[];
}

const linkedinPost = (activityId: string) =>
  `https://www.linkedin.com/feed/update/urn:li:activity:${activityId}/`;

export const features: Feature[] = [
  {
    id: 'kyoto-startup-summer-school-2021',
    date: '2021',
    kind: 'Workshop',
    source: 'Kyoto Startup Summer School',
    title: 'Build your landing page in 2 hours',
    description:
      'A hands-on HTML, CSS and Bootstrap workshop for the summer school students, as Le Wagon Tokyo’s lead teacher.',
    url: 'https://www.kyotostartupschool.org/program-2021-website',
  },
  {
    id: 'japan-product-camp',
    date: '2024-10',
    kind: 'Teaching',
    source: 'Japan Product Camp',
    title: 'Instructor at Japan Product Camp',
    description:
      'Teaching future product managers to code and build their projects, in 2022 and again in 2024.',
    url: linkedinPost('7254682663163232256'),
    extraLinks: [{ label: '2022', url: linkedinPost('6957188316152692736') }],
  },
  {
    id: 'le-wagon-tokyo-demo-days',
    date: '2025-03',
    kind: 'Milestone',
    source: 'Le Wagon Tokyo',
    title: '1,000 Le Wagon Tokyo graduates',
    description:
      'Sending off bootcamp batches, up to the demo day at Google for Startups where the campus passed 1,000 graduates.',
    url: linkedinPost('7304734639284178944'),
    extraLinks: [{ label: 'Dec 2024 batch', url: linkedinPost('7273192995384958976') }],
  },
  {
    id: 'le-wagon-tokyo-2025-in-figures',
    date: '2025-12',
    kind: 'Milestone',
    source: 'Le Wagon Tokyo',
    title: 'Le Wagon Tokyo’s 2025 in figures',
    description: 'The Tokyo campus’s year in numbers, from the team I was part of.',
    url: linkedinPost('7407692946663325696'),
  },
  {
    id: 'n8n-slack-ai-agent-workshop',
    date: '2026-01',
    kind: 'Workshop',
    source: 'Le Wagon',
    title: 'Build an AI agent with n8n & Slack',
    description:
      'Remote hands-on workshop: Slack as the interface, n8n for orchestration, OpenAI for reasoning, publishing to LinkedIn.',
    url: linkedinPost('7415067416033910784'),
  },
  {
    id: 'matinno-beyond-award-2026',
    date: '2026-01',
    kind: 'Award',
    source: 'Business Insider Japan',
    title: 'Matinno among the BEYOND AWARD 2026 winners',
    description:
      'Matinno, the circular building-materials platform I build as a software engineer, was recognised for making construction CO2 visible.',
    url: 'https://www.businessinsider.jp/article/2601-beyond-award-2026-winners-and-companies/',
    extraLinks: [{ label: 'LinkedIn', url: linkedinPost('7420820086707449856') }],
  },
  {
    id: 'dmk-tribe-ai-automate-workshop',
    date: '2026-03',
    kind: 'Workshop',
    source: 'Le Wagon Spain × DMK Tribe',
    title: 'AI-automate your world',
    description:
      'Connecting an AI agent to Slack/Teams, LinkedIn and company data to build a marketing content generator.',
    url: linkedinPost('7436908427689316352'),
  },
  {
    id: 'le-wagon-make-sql-reporting-webinar',
    date: '2026-09-16',
    kind: 'Workshop',
    source: 'Le Wagon',
    title: 'Automate your reporting with Make & SQL',
    description:
      'Webinar as external speaker: pulling data with SQL, automating the workflow with Make and publishing clean reports to Google Sheets.',
    url: 'https://app.livestorm.co/lewagon/automate-your-reporting-with-make-and-sql',
  },
];
