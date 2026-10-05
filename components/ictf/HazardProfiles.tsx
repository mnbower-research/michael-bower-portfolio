const profiles = [
  { title: "Random search", condition: "Structured errors", description: "Approximately constant hazard", path: "M4 51 L29 49 L54 52 L79 49 L104 51 L129 50 L154 52 L179 49 L204 50 L236 51" },
  { title: "Adaptive feedback", condition: "Structured errors · binary / score", description: "High early hazard → rapid decline", path: "M4 20 C20 14 29 16 40 28 S65 64 94 71 S180 79 236 80" },
  { title: "Nonadaptive utility ranking", condition: "Structured errors", description: "Very low early hazard → delayed high-risk region", path: "M4 83 L88 83 C122 83 144 81 164 62 S199 25 236 17" },
  { title: "Nonadaptive utility ranking", condition: "Unstructured errors", description: "Substantially flatter; no comparable delayed wave", path: "M4 51 L29 50 L54 52 L79 48 L104 51 L129 49 L154 52 L179 48 L204 51 L236 48" },
];

export function HazardProfiles() {
  return (
    <figure className="mt-8">
      <figcaption className="mb-5 text-sm leading-6 text-[#58645e]">Conceptual profiles from post-result exploration. These sketches are not plotted data, share no numerical scale, and do not establish universal laws.</figcaption>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {profiles.map((profile) => (
          <div className="border hairline bg-[#f6f7f3] p-5" key={profile.title + profile.condition}>
            <p className="text-xs leading-5 text-[#68736e]">{profile.condition}</p>
            <h4 className="mt-2 min-h-12 font-semibold">{profile.title}</h4>
            <svg viewBox="0 0 240 100" className="my-5 w-full" aria-hidden="true">
              <path d="M3 8 V90 H238" fill="none" stroke="#aeb9b1" />
              <path d={profile.path} fill="none" stroke="#a94f2d" strokeWidth="2.5" />
            </svg>
            <p className="text-xs text-[#68736e]">Invalid-query index →</p>
            <p className="mt-4 text-sm leading-6">{profile.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs leading-6 text-[#68736e]">Vertical direction: conditional escape hazard (higher toward the top), given no earlier escape. Invalid-query index is distinct from total interaction budget B.</p>
    </figure>
  );
}
