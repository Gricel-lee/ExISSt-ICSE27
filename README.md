## Structure

```
index.html               ← Home / About page
invited/index.html       ← Invited Speakers (gray placeholders, "To be defined")
committee/index.html     ← Organising Committee (2-column grid)
schedule/schedule.pdf    ← Schedule placeholder PDF
assets/style.css         ← Shared stylesheet
assets/stars.js          ← Animated star-field for hero banner
```

## Deploying GitHub Page

1. Create a new GitHub repository (e.g. `my-workshop`).
2. Upload all files preserving the folder structure above.
3. Go to **Settings → Pages**, set Source to **Deploy from a branch**, branch `main`, folder `/` (root).
4. Your site will be live at `https://<username>.github.io/<repo>/`.

## Customising

| What to change | Where |
|---|---|
| Workshop title / date | `<h1 class="hero-title">` and `<p class="hero-date">` in every `*.html` |
| Nav links | `<nav class="hero-nav">` block in every `*.html` |
| Speaker info | `invited/index.html` — fill in name, org, title, abstract; replace `<div class="speaker-photo-placeholder">` with `<img class="speaker-photo" src="…">` |
| Committee members | `committee/index.html` — duplicate/remove `.committee-card` blocks |
| Colors / fonts | `assets/style.css` — CSS variables at `:root` |
