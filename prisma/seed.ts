import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function createNews(data: Prisma.NewsCreateInput) {
  const news = await prisma.news.upsert({
    where: {
      slug: data.slug,
    },
    update: {
      ...data,
    },
    create: {
      ...data,
    },
  })

  console.log(`Upserted (id: "${news.id}", name: "${news.title}").`)
}

async function main() {
  const t0 = performance.now()
  console.log("\nSeeding started. \n")

  await Promise.all([
    // HEALTH
    createNews({
      slug: "mason-branstrator-paralyzed-at-17-completes-marathon-in-wheelchair",
      title: "Paralyzed at 17, Mason Branstrator Completes Marathon in Wheelchair",
      description: "After a paralyzing skiing accident at 17, Mason Branstrator defied the odds by completing a marathon in his wheelchair, inspiring many with his resilience and dedication.",
      content: "<p>At 17, Mason Branstrator's life changed dramatically after a skiing accident left him paralyzed from the waist down. An experienced skier from Minnesota, Mason misjudged a jump, resulting in a T-12 vertebra injury that affected his lower body functions. Doctors informed him he might never walk again, a devastating prognosis for the avid athlete.</p><p>He spent nine days in the ICU in Duluth before being transferred to Craig Hospital in Colorado, renowned for paralysis rehabilitation, where he underwent four months of intensive therapy. Embracing his situation, Mason viewed his wheelchair not as a limitation but as a means to regain freedom and independence.</p><p>Returning home, Mason resumed his education, becoming homecoming king and later enrolling at the University of Denver. There, he engaged in adaptive sports, including tennis, basketball, swimming, and surfing. Training rigorously with hand-powered equipment, Mason set his sights on marathon racing.</p><p>In June 2024, Mason participated in Grandma's Marathon in Duluth, completing the wheelchair race in 2 hours, 3 minutes, and 52 seconds. Beyond personal achievements, he shares his journey on Instagram, amassing nearly 270,000 followers, aiming to inspire others facing similar challenges.</p>",
      image: `${process.env.NEXT_PUBLIC_SITE_URL!}/icon2.png`,
      imageAlt: "ALTERNATE_TEXT_FOR_AN_IMAGE",
      imageCaption: "CAPTION_TEXT_FOR_AN_IMAGE",
      readTime: 2,
      category: "HEALTH",
      createdAt: new Date("2025-03-03"),
      updatedAt: new Date("2025-03-03"),
    }),
    createNews({
      slug: "NHS-approves-first-daily-endometriosis-pill",
      title: "NHS Approves First Daily Pill for Endometriosis Treatment",
      description: "The NHS has approved relugolix combination therapy, a daily pill for endometriosis, offering hope to around 1,000 women annually who haven't responded to other treatments.",
      content: "<p>The National Health Service (NHS) in England has approved relugolix combination therapy, a daily pill for treating endometriosis. This medication combines relugolix, a GnRH antagonist, with estradiol and norethisterone acetate to manage symptoms effectively.</p><p>Endometriosis affects approximately 1.5 million women in the UK, causing severe pain, heavy periods, and fertility issues. Relugolix combination therapy offers an alternative for patients who have not found relief from other medical or surgical treatments. It is estimated that around 1,000 women annually will benefit from this new treatment option.</p><p>Unlike existing injectable treatments that may require clinic visits and can initially exacerbate symptoms, this oral medication can be taken at home and provides a quicker onset of relief. The NHS has stated that the drug will be available for patients whose previous treatments have failed. The 28-day supply is priced at £72, excluding VAT. </p><p>While this approval is a significant advancement, Endometriosis UK notes that the pill will assist only a relatively small number of women. They emphasize the importance of consulting healthcare providers to determine suitability and to discuss potential side effects.</p>",
      image: `${process.env.NEXT_PUBLIC_SITE_URL!}/icon2.png`,
      imageAlt: "ALTERNATE_TEXT_FOR_AN_IMAGE",
      imageCaption: "CAPTION_TEXT_FOR_AN_IMAGE",
      readTime: 2,
      category: "HEALTH",
      createdAt: new Date("2025-03-10"),
      updatedAt: new Date("2025-03-10"),
    }),
    createNews({
      slug: "scientists-discover-new-immune-system-part",
      title: "Scientists Identify New Component of the Immune System",
      description: "Researchers from Israel's Weizmann Institute have uncovered a previously unknown aspect of the immune system that recycles proteins, producing chemicals capable of killing bacteria and viruses, potentially leading to novel antibiotics.",
      content: "<p>Researchers at Israel's Weizmann Institute of Science have discovered a previously unknown part of the immune system involved in protein recycling. This mechanism produces chemicals capable of killing bacteria and viruses, offering potential for new antibiotics. Professor Yifat Merbl noted that these findings could lead to novel diagnostic and therapeutic strategies against infectious diseases. The study was published in the journal <i>Nature</i>.</p>",
      image: `${process.env.NEXT_PUBLIC_SITE_URL!}/icon2.png`,
      imageAlt: "ALTERNATE_TEXT_FOR_AN_IMAGE",
      imageCaption: "CAPTION_TEXT_FOR_AN_IMAGE",
      readTime: 1,
      category: "HEALTH",
      createdAt: new Date("2025-03-17"),
      updatedAt: new Date("2025-03-17"),
    }),
    createNews({
      slug: "worlds-smallest-pacemaker-activated-by-light",
      title: "World's Smallest Pacemaker Activated by Light",
      description: "Researchers have developed a pacemaker smaller than a grain of rice, activated by light, offering a groundbreaking solution for newborns with congenital heart defects.",
      content: "<p>Researchers at Northwestern University have developed an innovative pacemaker that is smaller than a grain of rice and can be implanted using a syringe. This groundbreaking device is particularly beneficial for newborns with congenital heart defects, offering a less invasive and safer alternative to traditional pacemakers.</p><p>The pacemaker operates in conjunction with a soft, flexible, wireless wearable patch placed on the patient's chest. This patch detects irregular heartbeats and emits pulses of infrared light that penetrate the body to activate the pacemaker, which then delivers the necessary electrical stimulation to regulate the heart's rhythm. The use of light activation allows for precise control without the need for external wires or invasive procedures.</p><p>One of the most remarkable features of this pacemaker is its bioresorbable design. Constructed from materials that naturally dissolve in the body over time, the device eliminates the need for surgical removal once it is no longer needed. This characteristic is especially advantageous for pediatric patients, as it reduces the risks associated with additional surgeries and long-term implantation.</p><p>Traditional temporary pacemakers often require leads or wires that protrude from the body, posing risks of infection and other complications. The wireless and dissolvable nature of this new pacemaker addresses these issues, providing a safer and more comfortable experience for patients.</p><p>While the device has shown promising results in preclinical studies involving animal models and human hearts from deceased organ donors, further research and clinical trials are necessary before it becomes widely available for human use. The development of this tiny, light-activated, and bioresorbable pacemaker represents a significant advancement in cardiac care, particularly for vulnerable populations such as newborns with congenital heart conditions.</p>",
      image: `${process.env.NEXT_PUBLIC_SITE_URL!}/icon2.png`,
      imageAlt: "ALTERNATE_TEXT_FOR_AN_IMAGE",
      imageCaption: "CAPTION_TEXT_FOR_AN_IMAGE",
      readTime: 2,
      category: "HEALTH",
      createdAt: new Date("2025-04-07"),
      updatedAt: new Date("2025-04-07"),
    }),
    // ENTERTAINMENT
    createNews({
      slug: "good-omens-star-michael-sheen-spends-his-own-cash-to-write-off-1-3-million-in-debt-owed-by-900-residents-in-his-hometown",
      title: "Michael Sheen Uses Own Funds to Erase $1.3 Million Debt for 900 Hometown Residents",
      description: "Actor Michael Sheen invested £100,000 of his own money to clear £1 million in debts for over 900 individuals in his native South Wales, aiming to spotlight the injustices within the high-cost credit system.",
      content: "<p>Michael Sheen, well known for his roles in <em>Good Omens</em> and <em>Masters of Sex</em>, has taken a remarkable step to support people in his hometown of South Wales. The actor personally invested &pound;100,000 (around $129,000) to purchase and erase &pound;1 million (about $1.3 million) in debts that burdened over 900 local residents. His efforts are part of a larger initiative to draw attention to the exploitative nature of high-interest credit systems, which often trap financially vulnerable individuals in endless cycles of debt.</p><p>Sheen executed this initiative by establishing a debt acquisition company, allowing him to legally buy outstanding debts at a fraction of their original cost. Instead of collecting payments, he forgave the debts entirely, providing significant financial relief to those affected. Due to privacy laws, he is unable to personally know who benefited from his actions, but his intervention has undoubtedly made a substantial difference in many lives.</p><p>His decision to act came from his deep concern for the unfair financial burdens imposed on low-income communities. By publicly addressing this issue, Sheen hopes to push for meaningful reforms in the lending industry, ensuring that fewer people fall victim to predatory financial practices.</p><p>This is not the first time Sheen has demonstrated his commitment to social causes. He has previously declared himself a \"not-for-profit\" actor, using his earnings to fund charitable efforts and advocate for systemic change. His latest action reinforces his dedication to making a tangible impact on the lives of those in need.</p>",
      image: `${process.env.NEXT_PUBLIC_SITE_URL!}/icon2.png`,
      imageAlt: "ALTERNATE_TEXT_FOR_AN_IMAGE",
      imageCaption: "CAPTION_TEXT_FOR_AN_IMAGE",
      readTime: 2,
      category: "ENTERTAINMENT",
      createdAt: new Date("2025-03-03"),
      updatedAt: new Date("2025-03-03"),
    }),
    createNews({
      slug: "amanda-knox-finds-freedom-through-resilience-and-forgiveness",
      title: "Amanda Knox: Creating Freedom Through Resilience and Forgiveness",
      description: "Amanda Knox, wrongfully convicted in 2007, spent four years in an Italian prison. Since her acquittal, she has embraced Stoicism, Zen Buddhism, and meditation to reclaim her narrative and now shares her journey in her memoir, \"Free: My Search for Meaning.\".",
      content: "<p>Amanda Knox's life took an unexpected turn when she was wrongfully convicted in 2007 for the murder of her roommate, Meredith Kercher, leading to four years of imprisonment in Italy. Since her acquittal, Knox has embarked on a journey of personal healing and forgiveness, drawing from Stoicism, Zen Buddhism, and meditation to reclaim her narrative. Her experiences culminate in her memoir, \"Free: My Search for Meaning\" offering insights into resilience and the pursuit of personal freedom.</p>",
      image: `${process.env.NEXT_PUBLIC_SITE_URL!}/icon2.png`,
      imageAlt: "ALTERNATE_TEXT_FOR_AN_IMAGE",
      imageCaption: "CAPTION_TEXT_FOR_AN_IMAGE",
      readTime: 2,
      category: "ENTERTAINMENT",
      createdAt: new Date("2025-03-10"),
      updatedAt: new Date("2025-03-10"),
    }),
    createNews({
      slug: "mackenzie-scott-2024-donations",
      title: "MacKenzie Scott Announces Additional $2 Billion in Donations for 2024",
      description: "Philanthropist MacKenzie Scott has contributed an additional $2 billion in 2024, bringing her total charitable donations to over $19 billion since 2019, focusing on economic security and opportunity.",
      content: "<p>Philanthropist MacKenzie Scott has announced an additional $2 billion in charitable donations for the year 2024, bringing her total contributions since 2019 to over $19 billion. This year's donations have primarily focused on enhancing economic security and expanding opportunities for underserved communities.</p><p>Scott's philanthropic approach emphasizes large, unrestricted grants to nonprofit organizations, allowing them the flexibility to allocate funds where they are most needed. To date, she has supported over 2,450 nonprofits addressing issues such as economic mobility, racial equity, public health, and climate change.</p><p>In 2024, Scott initiated an \"open call\" for nonprofit applications, committing $640 million to 360 organizations selected from over 6,300 applicants. This initiative underscores her commitment to broadening the reach of her philanthropy and supporting a diverse array of causes.</p><p>Beyond her charitable giving, Scott has directed her investment team to focus on mission-aligned ventures, moving away from traditional banking and stock portfolios. This strategic shift reflects her dedication to ensuring that her investments contribute positively to societal challenges.</p><p>Despite her substantial donations, Scott's wealth, primarily derived from Amazon shares received during her divorce from Jeff Bezos, continues to grow. Forbes estimates her current net worth at approximately $31.7 billion, maintaining her position among the world's wealthiest individuals.</p><p>Scott's philanthropic model, characterized by trust-based giving and minimal public disclosure, has garnered both praise and scrutiny. While many commend her generosity and the autonomy she grants recipient organizations, some experts express concerns about the long-term sustainability of such large, unrestricted gifts and their impact on the nonprofit sector.</p>",
      image: `${process.env.NEXT_PUBLIC_SITE_URL!}/icon2.png`,
      imageAlt: "ALTERNATE_TEXT_FOR_AN_IMAGE",
      imageCaption: "CAPTION_TEXT_FOR_AN_IMAGE",
      readTime: 2,
      category: "ENTERTAINMENT",
      createdAt: new Date("2025-03-17"),
      updatedAt: new Date("2025-03-17"),
    }),
    // SCIENCE
    createNews({
      slug: "microsoft-breakthrough-quantum-chip-majorana-1",
      title: "Microsoft Unveils Majorana 1: A Quantum Computing Breakthrough",
      description: "Microsoft's new Majorana 1 chip, leveraging topological qubits, promises to revolutionize quantum computing by enabling the development of ultra-powerful computers capable of solving complex problems within years, not decades.",
      content: "<p>Microsoft has announced a significant advancement in quantum computing with the introduction of the Majorana 1 chip. This groundbreaking technology utilizes a novel topological core architecture, enabling the creation of more stable and scalable qubits—the fundamental units of quantum information.</p><p>At the heart of Majorana 1 is the world's first 'topoconductor,' a material capable of generating a new state of matter that is neither solid, liquid, nor gas. This innovation paves the way for integrating up to one million qubits on a single, compact chip, potentially leading to a supercomputer with processing power surpassing that of all current classical computers combined.</p><p>Such a quantum computer could address highly complex societal challenges, including:</p><ul><li>Breaking down microplastics into harmless byproducts</li><li>Inventing self-healing materials for use in construction, manufacturing, or healthcare</li></ul><p>Microsoft's development of Majorana 1 represents a pivotal moment in the quest for practical quantum computing solutions, with the potential to deliver transformative, real-world applications in the near future.</p>",
      image: `${process.env.NEXT_PUBLIC_SITE_URL!}/icon2.png`,
      imageAlt: "ALTERNATE_TEXT_FOR_AN_IMAGE",
      imageCaption: "CAPTION_TEXT_FOR_AN_IMAGE",
      readTime: 1,
      category: "SCIENCE",
      createdAt: new Date("2025-03-03"),
      updatedAt: new Date("2025-03-03"),
    }),
    createNews({
      slug: "australian-man-lives-100-days-with-artificial-titanium-heart",
      title: "Australian Man Lives 100 Days with Artificial Titanium Heart",
      description: "An Australian man became the first person to live for 100 days with an artificial titanium heart while awaiting a donor transplant, marking a significant advancement in cardiac care.",
      content: "<p>An Australian man in his mid-40s has made medical history by surviving for 100 days with an artificial titanium heart while awaiting a donor transplant. This achievement represents the longest duration a patient has lived with such a device before receiving a donor heart.</p><p>The patient, whose identity remains confidential, suffered from end-stage heart failure and was implanted with the BiVACOR Total Artificial Heart at St. Vincent's Hospital in Sydney. The device, developed by BiVACOR, features a spinning disc suspended in a magnetic field that continuously propels blood, reducing wear and tear. This design was inspired by Japan's magnetic levitation trains.</p><p>After being discharged from the hospital, the patient lived at home for approximately a month before receiving a donor heart on November 22, 2024, following a six-hour surgery. The successful use of the artificial heart during this period underscores its potential as a viable alternative for patients awaiting donor transplants.</p><p>Daniel Timms, the engineer behind the BiVACOR heart, was inspired to develop the device after his father's battle with heart disease. The artificial heart weighs 650 grams and is currently undergoing clinical trials, with the goal of improving its power supply for better portability. Timms aims to achieve a fully implantable, long-lasting artificial heart within six years, addressing critical needs for millions suffering from heart failure globally.</p><p>This milestone in cardiac care offers hope to patients worldwide, potentially reducing dependence on donor organs and transforming treatment approaches for severe heart conditions.</p>",
      image: `${process.env.NEXT_PUBLIC_SITE_URL!}/icon2.png`,
      imageAlt: "ALTERNATE_TEXT_FOR_AN_IMAGE",
      imageCaption: "CAPTION_TEXT_FOR_AN_IMAGE",
      readTime: 2,
      category: "SCIENCE",
      createdAt: new Date("2025-03-10"),
      updatedAt: new Date("2025-03-10"),
    }),
    createNews({
      slug: "nasa-astronauts-return-after-9-months-in-space",
      title: "NASA Astronauts Return After 9 Months Stranded in Space",
      description: "NASA astronauts Butch Wilmore and Suni Williams have returned to Earth after an unexpected 286-day mission aboard the International Space Station, following technical issues with Boeing's Starliner capsule.",
      content: "<p>NASA astronauts Butch Wilmore and Suni Williams have safely returned to Earth after spending over nine months aboard the International Space Station (ISS). Their mission, initially planned for approximately one week, extended to 286 days due to technical malfunctions with Boeing's Starliner capsule.</p><p>Launched on June 5, 2024, the duo encountered thruster malfunctions and helium leaks upon reaching the ISS, rendering the Starliner capsule inoperable for their return journey. Consequently, Wilmore and Williams remained on the ISS, contributing to various scientific experiments and participating in spacewalks while awaiting a viable return solution.</p><p>NASA coordinated their return via a SpaceX capsule, which successfully landed in the Gulf of Mexico. Upon arrival, both astronauts underwent standard medical evaluations and were reunited with their families. Their extended mission underscores the complexities and challenges inherent in human spaceflight and highlights the resilience and adaptability required of astronauts in unforeseen circumstances.</p>",
      image: `${process.env.NEXT_PUBLIC_SITE_URL!}/icon2.png`,
      imageAlt: "ALTERNATE_TEXT_FOR_AN_IMAGE",
      imageCaption: "CAPTION_TEXT_FOR_AN_IMAGE",
      readTime: 1,
      category: "SCIENCE",
      createdAt: new Date("2025-03-17"),
      updatedAt: new Date("2025-03-17"),
    }),
    // BUSINESS
    createNews({
      slug: "fehmarnbelt-tunnel-connecting-denmark-and-germany",
      title: "Fehmarnbelt Tunnel: World's Longest Immersed Tunnel to Connect Denmark and Germany",
      description: "The Fehmarnbelt Tunnel, set to open in 2029, will be the world's longest immersed tunnel, connecting Denmark and Germany, significantly reducing travel times and enhancing European connectivity.",
      content: "<p>The Fehmarnbelt Tunnel is an ambitious infrastructure project that will link Denmark and Germany beneath the Baltic Sea. Upon completion, it will be the world's longest immersed tunnel, spanning 18 kilometers (11 miles) between the Danish island of Lolland and the German island of Fehmarn.</p><p>Construction involves assembling 89 massive precast concrete segments, each measuring 217 meters in length and weighing 73,500 tonnes. These segments will be submerged and connected to form the tunnel, which will descend up to 40 meters beneath the sea. This method minimizes marine disturbance by constructing the segments on land before submersion.</p><p>The tunnel will accommodate both road and rail traffic, featuring a four-lane motorway and a double-track railway. This development is expected to significantly reduce travel times; the journey across the Fehmarnbelt Strait will take approximately seven minutes by train and ten minutes by car. Consequently, the rail travel time between Copenhagen and Hamburg will be reduced from 4.5 hours to 2.5 hours.</p><p>Beyond improving transportation efficiency, the Fehmarnbelt Tunnel symbolizes European unity and cross-border collaboration. The project is slated for completion in 2029, marking a significant milestone in enhancing connectivity between Scandinavia and Central Europe.</p>",
      image: `${process.env.NEXT_PUBLIC_SITE_URL!}/icon2.png`,
      imageAlt: "ALTERNATE_TEXT_FOR_AN_IMAGE",
      imageCaption: "CAPTION_TEXT_FOR_AN_IMAGE",
      readTime: 2,
      category: "BUSINESS",
      createdAt: new Date("2025-03-03"),
      updatedAt: new Date("2025-03-03"),
    }),
    createNews({
      slug: "all-50-states-introduce-right-to-repair-legislation",
      title: "All 50 States Introduce Right to Repair Legislation",
      description: "Every U.S. state has now introduced right-to-repair legislation, aiming to empower consumers and reduce electronic waste.",
      content: "<p>As of February 2025, all 50 U.S. states have introduced right-to-repair legislation, marking a significant milestone in the consumer rights movement. These laws are designed to grant consumers the ability to repair their own electronic devices, agricultural equipment, and medical devices, thereby reducing electronic waste and promoting sustainability.</p><p>Right-to-repair laws typically require manufacturers to provide repair parts, tools, and manuals to consumers and independent repair shops. This ensures that repairs are not exclusively controlled by manufacturers, fostering competition and potentially lowering repair costs.</p><p>Advocates argue that such legislation empowers consumers, extends product lifespans, and mitigates environmental impacts associated with electronic waste. The widespread introduction of these bills reflects growing public demand for repairable products and transparent repair practices.</p><p>While the introduction of legislation is a positive step, the passage and implementation of these laws vary across states. Consumers and stakeholders are encouraged to stay informed about the progress of right-to-repair bills in their respective states.</p>",
      image: `${process.env.NEXT_PUBLIC_SITE_URL!}/icon2.png`,
      imageAlt: "ALTERNATE_TEXT_FOR_AN_IMAGE",
      imageCaption: "CAPTION_TEXT_FOR_AN_IMAGE",
      readTime: 1,
      category: "BUSINESS",
      createdAt: new Date("2025-03-10"),
      updatedAt: new Date("2025-03-10"),
    }),
    createNews({
      slug: "ohio-lawmakers-propose-free-school-meals",
      title: "Ohio Lawmakers Propose Free Breakfast and Lunch for All Students",
      description: "A bipartisan bill in Ohio aims to provide free breakfast and lunch to all public and chartered nonpublic school students, addressing student hunger and promoting better academic performance.",
      content: "<p>In a significant move to combat student hunger and enhance educational outcomes, Ohio legislators have introduced a bipartisan bill to provide free breakfast and lunch to all students in public and chartered nonpublic schools. This initiative seeks to alleviate the financial burden on families and ensure that every child has access to nutritious meals during the school day.</p><p>Data from Feeding America indicates that one in five children in Ohio faces food insecurity, underscoring the pressing need for such measures. Advocates argue that well-fed students are more likely to excel academically and maintain better health, leading to long-term societal benefits.</p><p>Recently, a group of high school students from across the state rallied at the Statehouse, sharing personal stories to emphasize the importance of free school meals. Corbin Eaton, a junior at Antwerp High School, highlighted how school meals served as a crucial support system during challenging times at home.</p><p>The proposed legislation has garnered support from various stakeholders, including educators and retailers. A coalition featuring entities like CVS Pharmacy, Kroger, and the Ohio Education Association is actively lobbying for the inclusion of universal free school meal funding in the state budget, reflecting a growing recognition of the issue's importance.</p><p>As the bill progresses through the legislative process, supporters remain hopeful that Ohio will join other states in implementing universal free meal programs, ensuring that no student has to learn on an empty stomach.</p>",
      image: `${process.env.NEXT_PUBLIC_SITE_URL!}/icon2.png`,
      imageAlt: "ALTERNATE_TEXT_FOR_AN_IMAGE",
      imageCaption: "CAPTION_TEXT_FOR_AN_IMAGE",
      readTime: 1,
      category: "BUSINESS",
      createdAt: new Date("2025-03-17"),
      updatedAt: new Date("2025-03-17"),
    }),
  ])

  const t1 = performance.now()
  console.log(`\nSeeding finished (${t1 - t0} milliseconds).`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error(error)

    await prisma.$disconnect()

    process.exit(1)
  })
