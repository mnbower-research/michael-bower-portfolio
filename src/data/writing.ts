export type RelatedResearch = {
  title: string;
  href: string;
};

export type Post = {
  title: string;
  seoTitle?: string;
  slug: string;
  date: string;
  description: string;
  author: string;
  tags: string[];
  draft: boolean;
  featured?: boolean;
  relatedResearch?: RelatedResearch[];
  body: { heading?: string; text: string }[];
};

export const posts: Post[] = [
  {
    title: "The Corner Didn’t Move",
    seoTitle: "The Corner Didn’t Move | Things I Noticed | Michael Bower",
    slug: "the-corner-didnt-move",
    date: "2026-10-02",
    description: "Stubbing a toe becomes a thought experiment about consciousness, memory, internal models and the invisible boundaries experience creates.",
    author: "Michael Bower",
    tags: ["Consciousness", "Memory", "Learning", "Systems", "Human Agency"],
    draft: true,
    featured: true,
    relatedResearch: [
      { title: "Alignment Theory", href: "/research/alignment-theory" },
      { title: "Human Agency Infrastructure", href: "/research/human-agency-infrastructure" },
    ],
    body: [
      {
        text: "I stubbed my toe on the corner of a piece of furniture. Not lightly. It was the kind of impact that interrupts whatever thought was in progress and replaces it with one extremely specific piece of information: there is a corner here, and my toe has found it.",
      },
      {
        text: "The pain passed. The furniture stayed where it was. Nothing about the room’s physical layout had changed, but the next time I walked by that corner I gave it more space. I may not even have looked directly at it. My foot simply took a slightly different path, as if the room had acquired a boundary that had not existed the day before.",
      },
      {
        heading: "A boundary that wasn’t in the room",
        text: "The corner did not move. What changed was my internal representation of it. Before the collision, the corner was physically present but carried weak behavioral significance. After contact and pain, it became important in a new way. The same object now produced a different pattern of movement because experience had changed the map I was using to move through it.",
      },
      {
        text: "I do not mean that the brain literally drew a neat geometric buffer around the furniture. “Invisible boundary” is only a metaphor. But it is a useful one. Something learned from the impact began influencing behavior before I needed to stop and form a sentence such as, “Remember to avoid the southwest corner of that cabinet.” The adjustment could happen earlier and more quietly than verbal reasoning.",
      },
      {
        text: "The progression seems simple: a corner exists, contact occurs, pain creates a strong learning signal, and later navigation changes. What caught my attention was the separation between the stable object and the changing model. Reality remained fixed while the relationship between me and that reality changed.",
      },
      {
        heading: "The other world we navigate",
        text: "That small accident made me wonder how much of ordinary movement depends on things that are not visible in the room itself. We do not navigate only tables, doorways, stairs, and parked cars. We also navigate expectations, remembered pain, predicted consequences, habits, meanings, and social associations. The physical environment provides one set of boundaries. Experience draws another set around and between them.",
      },
      {
        text: "A place can feel safe to one person and threatening to another even when both are standing in the same coordinates. A conversation can appear ordinary to an observer while carrying years of history for the people inside it. A particular sound can be background noise for one person and a warning for someone who has learned to associate it with what comes next. The shared physical world has not disappeared, but it is being approached through different internal landscapes.",
      },
      {
        text: "That does not mean the corner is subjective. The corner is objectively there. If I forget it, I can hit it again. The distinction is that an objective thing and my way of relating to it are not identical. My model can help me navigate the thing without becoming the thing itself.",
      },
      {
        heading: "When a useful map becomes a bad one",
        text: "Internal boundaries can be protective. They can also become stale, distorted, or too broad. One painful collision might teach me to avoid the actual corner. A different learning process might teach me to avoid an entire room, or anything that resembles the furniture, long after the original conditions have changed. Experience gives the map practical value, but experience does not guarantee that every line it draws remains accurate.",
      },
      {
        text: "This is where the observation begins to touch intelligent systems. A capable system also needs internal representations that let previous experience shape future behavior. Without that continuity, every situation would arrive as if nothing had ever happened before. But a learned representation is still not reality. It can be useful, incomplete, overgeneralized, or based on conditions that no longer hold.",
      },
      {
        text: "That creates a governance question as much as a learning question: when should an internal boundary keep guiding behavior, and when should it be reconsidered? If a model treats every past signal as permanent, it may preserve old mistakes along with useful lessons. If it forgets too easily, it may repeatedly collide with the same corner.",
      },
      {
        text: "The strange part of stubbing my toe was realizing that the furniture never moved. The room did not gain a new wall. The change happened in the map I carried through it, and that map began shaping my movement before I had much to say about it. Since then I have kept returning to a larger question: how much of everyday life is spent navigating reality, and how much is spent navigating the invisible boundaries experience has drawn around it?",
      },
    ],
  },
  {
    title: "The Tire Pressure Light",
    seoTitle: "The Tire Pressure Light | Things I Noticed | Michael Bower",
    slug: "the-tire-pressure-light",
    date: "2026-10-02",
    description: "A tire-pressure sensor becomes a way to think about reality, measurement, representation, recognition and the signals humans use to make decisions.",
    author: "Michael Bower",
    tags: ["Systems", "Truth", "Representation", "AI", "Evidence"],
    draft: true,
    featured: true,
    relatedResearch: [
      { title: "Alignment Theory", href: "/research/alignment-theory" },
      { title: "Alignment Governance Stack", href: "/projects/alignment-governance-stack" },
    ],
    body: [
      {
        text: "A tire has some actual amount of pressure in it whether I know that amount or not. The rubber, air, temperature, road, and small indignities of daily driving are all doing whatever they are doing. Meanwhile I am sitting in the cabin, separated from that physical state by metal, distance, and my limited ability to detect subtle changes through the steering wheel.",
      },
      {
        text: "So the car gives me a warning light. A sensor measures something, a signal moves through the vehicle, software interprets it, and a symbol appears on the dashboard. A hidden condition has been translated into a form that can enter my awareness while I am driving.",
      },
      {
        text: "The light is useful precisely because I cannot inspect the underlying reality directly every moment. But the light is not the tire pressure. The sensor is not the tire pressure either. They are parts of a chain attempting to preserve information about something happening elsewhere.",
      },
      {
        heading: "Recognition is not truth",
        text: "Thinking about that chain led me to a distinction I now find useful: recognition is not the same thing as truth. A sensor can be correctly registered with the vehicle and still malfunction. The system can know exactly which sensor produced a message without establishing that the measurement is accurate.",
      },
      {
        text: "The reverse can also happen. A sensor might be capable of measuring correctly while failing to pair with the car. The system rejects or ignores the source, but that rejection does not make the physical reading false. It means the reading has not satisfied a different requirement: being accepted as a recognized participant in the system.",
      },
      {
        text: "Authentication asks some version of, “Is this the source we think it is?” Accuracy asks, “Does this representation correspond well enough to the underlying state?” Those questions can support one another, but they are not interchangeable. A recognized source can be wrong. An unrecognized source can occasionally be right. Knowing the identity of the messenger does not settle the truth of the message.",
      },
      {
        heading: "The long distance between a tire and a decision",
        text: "The complete path is longer than it first appears: reality becomes measurement; measurement becomes representation; representation is transmitted; transmission is interpreted; interpretation becomes awareness; awareness may finally become action. At each handoff, information can be preserved. At each handoff, it can also be delayed, filtered, distorted, amplified, misidentified, or lost.",
      },
      {
        text: "That does not make relays suspicious by default. Without the sensor and dashboard, the hidden state of the tire would be much less accessible during ordinary driving. Mediation is what makes action possible. The problem begins when the representation becomes so familiar that I stop remembering it is a representation.",
      },
      {
        text: "Much of modern life works this way. We rely on dashboards, statistics, news reports, scientific instruments, institutions, software interfaces, and language itself. Memory is also a kind of mediation: an earlier event is no longer present, so we act using a representation that has survived it. We rarely touch every underlying state directly. We usually meet a signal that has traveled.",
      },
      {
        text: "Once I started seeing the pattern, a set of questions followed. What was the original signal? How was it measured? What transformed it? What was discarded because the interface had no place to display it? Why do I trust this particular representation? Does recognition establish authenticity, and if it does, what additional work would be needed to establish accuracy?",
      },
      {
        heading: "AI in the middle of the chain",
        text: "AI systems increasingly occupy the middle of these paths. The world becomes data, data enters a model, the model produces an interpretation or recommendation, and a person acts. In an agent workflow, human intent may be interpreted, translated into tool use, and turned into a consequence. A fluent answer can make the chain feel shorter than it is. Polish can make a representation feel like direct access to reality.",
      },
      {
        text: "But the chain remains. The model may be working with incomplete observations. The observation may already be an interpretation. The recommendation may combine evidence with inference in a way the person cannot easily see. This is one reason provenance matters: not because every relay is untrustworthy, but because trustworthy action often requires knowing what kind of thing each relay contributed.",
      },
      {
        text: "The analogy once pushed me toward larger questions about truth, belief, revelation, and how people distinguish an underlying thing from the systems that represent it. I do not think a dashboard settles those questions. I only think it offers a small, practical model of the difficulty.",
      },
      {
        text: "The tire-pressure light can be extremely useful. Ignoring it because it is “only a representation” would miss the point. Treating it as identical to the tire would miss a different point. Learning to hold both ideas at once—to value the signal while remembering what it is not—may be one of the most basic habits of systems thinking.",
      },
    ],
  },
  {
    title: "The Caretaker",
    seoTitle: "The Caretaker | Things I Noticed | Michael Bower",
    slug: "the-caretaker",
    date: "2026-10-02",
    description: "A simple caretaker analogy explores delegated authority, responsibility, bounded autonomy and why representation does not make the delegate the source.",
    author: "Michael Bower",
    tags: ["Human Agency", "Delegation", "Authority", "AI Agents", "Governance"],
    draft: true,
    featured: true,
    relatedResearch: [
      { title: "Human Agency Infrastructure", href: "/research/human-agency-infrastructure" },
      { title: "Alignment Governance Stack", href: "/projects/alignment-governance-stack" },
    ],
    body: [
      {
        text: "Imagine I am a parent who needs to leave for a while. I place my child in the care of a caretaker and give that person real responsibilities: keep the child safe, make sure they are fed, stop them from doing something dangerous, and enforce certain boundaries until I return.",
      },
      {
        text: "The caretaker now has authority. They can say no to something the child wants. They can decide that it is time to come inside, or that a particular game has become unsafe. Their authority is not pretend, and the responsibility would be difficult to carry if every tiny decision required a phone call.",
      },
      {
        text: "But where did that authority come from? The caretaker did not become its source. It was delegated by someone who remained connected to the responsibility even while absent. The caretaker can exercise authority without becoming identical to the person from whom it came.",
      },
      {
        heading: "Source, representative, and subject",
        text: "The analogy separates three roles that are easy to blur. There is a source of authority: the parent who establishes the relationship and entrusts responsibility. There is a representative of authority: the caretaker who acts within that entrusted role. And there is the recipient or subject of authority: the child whose safety and behavior are being governed.",
      },
      {
        text: "Those roles interact, but they do not collapse into one another. The caretaker may speak with delegated authority, enforce rules, and represent the parent in particular situations. None of that makes the caretaker the child’s parent or the original source of the relationship.",
      },
      {
        text: "For a slightly strange extension, imagine the caretaker makes faces at the child. The child somehow concludes, “The caretaker must be my father.” The conclusion is still false. Face-making does not establish parenthood, and neither does competent rule enforcement. Representation can be legitimate and meaningful without erasing the distinction between source and delegate.",
      },
      {
        heading: "A caretaker is not a cage",
        text: "There is another part of the analogy that matters to me. A good caretaker does not preserve safety by eliminating all movement. A cage can prevent movement. Caretaking is harder: it creates conditions in which movement remains possible without abandoning the boundaries that make the situation safe.",
      },
      {
        text: "That means good governance is not necessarily maximum restriction. If the child is learning, demonstrating judgment, and operating in a safer environment, supervision may become lighter. The caretaker can allow meaningful room for action while remaining ready to intervene when the entrusted boundaries are at risk.",
      },
      {
        text: "The delegated relationship still matters as discretion grows. More room to act does not transform the caretaker into the source of authority. It changes how authority is exercised within the relationship. Capability can justify a different form of supervision without silently rewriting where the responsibility came from.",
      },
      {
        heading: "What this made me notice about agents",
        text: "This thought experiment became important to how I think about AI agents. When a person delegates a task to an agent, the agent may need meaningful discretion. A travel agent cannot be useful if it must ask permission to compare every flight. A scheduling agent may need to resolve small conflicts. A personal assistant may eventually buy routine items, contact people, organize work, or remember procedures.",
      },
      {
        text: "Useful discretion does not make the agent the source of authority. The task may pass from a person to one agent, then to another agent, and finally to an external tool. Each step can add capability, interpretation, and distance. The original delegation still needs to remain connected to the action that eventually occurs.",
      },
      {
        text: "This is where boundaries, revocation, and handoff integrity become practical rather than abstract. If I entrusted one system to book a hotel within a limit, a downstream system should not silently turn that into authority to redesign the trip. If conditions change, previously valid permission may need to be checked again. Delegation should survive the transfer without expanding simply because more systems became involved.",
      },
      {
        heading: "Responsibility without replacement",
        text: "The personal-agent version of the problem can sound deceptively friendly. An assistant learns my routines, understands how I communicate, and becomes increasingly good at anticipating what I need. That can reduce a great deal of cognitive load. It can also tempt the system—or the people designing it—to confuse accurate prediction with permission.",
      },
      {
        text: "“I entrusted you to handle this” and “You now decide what is best for me” are different relationships. The first delegates work inside a boundary. The second risks replacing authorship. A capable assistant should be able to do more while remaining clear about which decisions still belong to the person.",
      },
      {
        text: "The best caretaker in this analogy is not weak. They are capable enough to notice danger, exercise judgment, and carry responsibility when the parent is not present. Their value comes partly from that power. But they are also constrained enough to remember whose responsibility they are carrying and why it was entrusted to them.",
      },
      {
        text: "Delegation can transfer work, discretion, and genuine responsibility. What it should not do silently is transfer the source of authority itself.",
      },
    ],
  },
  {
    title: "The Ant Trail",
    seoTitle: "The Ant Trail | Things I Noticed | Michael Bower",
    slug: "the-ant-trail",
    date: "2026-10-02",
    description: "A short field note about obstacles, adaptation, and the difference between following a pattern and authorizing a decision.",
    author: "Michael Bower",
    tags: ["Agency", "Systems", "Field Note"],
    draft: true,
    relatedResearch: [
      { title: "Alignment Theory", href: "/research/alignment-theory" },
      { title: "Human Agency Infrastructure", href: "/research/human-agency-infrastructure" },
    ],
    body: [
      { text: "A line of ants is a small system with a surprisingly visible memory. One ant lays down a trace; other ants follow it; the trace becomes easier to follow because more ants use it." },
      { heading: "When the path changes", text: "Put an obstacle in the way and the trail does not simply disappear. The ants search nearby, reinforce a new route, and gradually turn an interruption into a changed pattern. The system has adapted, but adaptation is not the same thing as authorization." },
      { text: "An assistant can learn that I usually take a certain route, prefer a certain coffee, or answer a certain way. That knowledge can reduce the work of asking. It does not, by itself, grant permission to act in every future situation. A trail is evidence about what has happened before. It is not necessarily a permit." },
      { text: "This distinction feels small in ordinary life. It becomes structural when a system can act on our behalf: the difference between recognizing a likely path and being allowed to take it." },
    ],
  },
];
