import React from 'react';
import { Image } from '@/components/ui/image';
import TeamContactForm from './TeamContactForm';

const TEAM = [
  {
    name: 'Matt Van Bergen',
    role: 'Owner',
    email: 'Matt@Dimitexas.com',
    bio: [
      "Matt Van Bergen founded Diversified Insurance in 2012 with a simple philosophy: put the customer first and do what you say you're going to do. Since then, he has built the agency around transparency, responsiveness, and follow-through — making insurance easier to understand while helping clients protect what matters most.",
      "Matt graduated from Texas A&M University in 2002 with a degree from the Mays Business School. He brings more than a decade of experience as an agency owner and takes pride in building long-term relationships with his clients and serving as a trusted resource for their insurance needs. Outside the office, Matt married the love of his life in 2010, and together they're raising three kids who keep life busy, fun, and rarely boring. When he's not working, you'll usually find Matt and his family traveling somewhere new, spending time with friends and family, or planning their weekend around whatever football game happens to be on.",
    ],
  },
  {
    name: 'Art Sandoval',
    role: 'Agent',
    email: 'Art@Dimitexas.com',
    image: 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/d7788d1c4_sandoval.png',
    bio: [
      "A Texas native, born and raised in the small border town of Brownsville, and a proud father to his first baby boy. With 10 years of experience in the insurance industry, Art started his career as a CSR and worked his way through, learning the ins and outs of insurance from the ground up. Today, as an Agent, he uses that experience to help clients find the right coverage while making the insurance process simple, transparent, and personal.",
    ],
  },
  {
    name: 'Madison Hammond',
    role: 'Agent',
    email: 'Madison@Dimitexas.com',
    image: 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/0c8b9d4b7_hammond.png',
    bio: [
      "Born and raised in Buda and a proud Texas Tech graduate, Madison is excited to help her fellow Texans find insurance coverage that fits their needs and their budget. She believes insurance doesn't have to be complicated, and she's committed to making the process easy, straightforward, and personal. She looks forward to continuing to grow in the industry and building strong, lasting relationships with her clients.",
    ],
  },
  {
    name: 'Audrey Welu',
    role: 'Customer Service Representative',
    email: 'Audrey@Dimitexas.com',
    image: 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/e1402859b_welu.png',
    bio: [
      "Hello, there! My name is Audrey Welu, and I've worked as a customer service representative for Diversified Insurance since 2018. With prior experience in insurance and the corporate housing realm, I enjoy providing personalized support for both our valued customers and our dedicated DIMI crew. In a nutshell, personally, I'm a literature and music-loving, houseplant fanatic who enjoys staying active, practicing piano, and, above all, spending time with my precious family.",
    ],
  },
  {
    name: 'Ayanna Caballero',
    role: 'Customer Service Rep',
    email: 'ayanna@dimitexas.com',
    image: 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/d3a276154_caballero.png',
    bio: [],
  },
  {
    name: 'Ace',
    role: 'Chief Barketing Officer',
    email: '',
    image: 'https://media.base44.com/images/public/6a738b6cc9947068aaaec25d/4a6ee4209_ace.png',
    bio: [
      "Ace is our English Cream Golden Retriever and arguably the most overcompensated part-time employee at Diversified Insurance. His office hours are strictly Thursdays from 9–2, although his actual productivity window is considerably smaller. His primary responsibilities include greeting clients, boosting office morale, inspecting all incoming lunches, and taking several well-earned naps despite having accomplished very little. Ace specializes in Paw-sonal Lines. He has no email, refuses to answer the phone, frequently sleeps on the job, and maintains a perfect record of zero returned calls. Despite multiple documented performance issues, Ace remains extremely popular with clients and somehow continues to receive glowing annual reviews. Management suspects it's because he's handsome.",
    ],
  },
];

function initials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamDirectory() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-12 bg-muted/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand-blue tracking-wide uppercase">Our Team</span>
          <h2 className="text-3xl md:text-4xl text-brand-navy mt-3">
            Meet the people behind your coverage.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real people, real answers. Reach out to any of us directly — we're here to help.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="bg-white rounded-xl border border-border shadow-sm p-6 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={m.name}
                    fittingType="fill"
                    className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border border-brand-blue/10"
                  />
                ) : (
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <span className="font-display text-xl font-semibold text-brand-blue">
                      {initials(m.name)}
                    </span>
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-brand-navy leading-tight">{m.name}</h3>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
              </div>

              {m.email ? (
                <TeamContactForm memberName={m.name} memberEmail={m.email} />
              ) : (
                <p className="text-sm text-muted-foreground italic mb-3">
                  No email — Ace is off the clock.
                </p>
              )}

              {m.bio.length > 0 && (
                <details className="group mt-auto">
                  <summary className="text-sm font-semibold text-brand-blue cursor-pointer list-none inline-flex items-center gap-1 hover:text-brand-red transition-colors [&::-webkit-details-marker]:hidden">
                    Read bio
                  </summary>
                  <div className="mt-3 space-y-3 text-sm text-muted-foreground leading-relaxed">
                    {m.bio.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </details>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}