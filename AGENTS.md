<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- Keep the public company website as editorial sections on `/` with hash navigation, because each section is part of one continuous brand narrative.
- Reusable gallery, trust marquee, and location map live under `src/components/ui`; architecture assets and collection data are shared in a browser-safe module to avoid duplication.
- MapLibre is dynamically imported inside an effect, because its browser runtime must not execute during SSR.
- Contact actions use telephone, email, and map links rather than simulated form submissions, because no enquiry delivery service is connected.
- Architectural concepts are explicitly labeled as inspiration and trust cards as company principles, because no verified project or customer records were supplied.
