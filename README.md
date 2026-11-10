# Creator page — free on GitHub Pages

Your creator page, support short link, and the app's privacy policy, all free.

| Address | What it is |
|---|---|
| `https://champappdev.github.io/` | Creator page (about you, projects, support buttons) |
| `https://champappdev.github.io/support` | **Short link**: jumps straight to the support section |
| `https://champappdev.github.io/champs-companion/privacy/` | Privacy policy (paste into the Play Console) |

No third-party link shortener is used, so nothing can expire or show ads, and
you can change where everything points by editing one file.

## 1. Publish it (about 5 minutes, $0)

1. On GitHub, create a **public** repository named exactly
   `champappdev.github.io`.
2. Upload this folder's contents to it, with `index.html` at the top level.
   Use **Add file → Upload files**, or git:
   ```
   git init -b main && git add . && git commit -m "Creator page"
   git remote add origin https://github.com/champappdev/champappdev.github.io.git
   git push -u origin main
   ```
3. Go to **Settings → Pages**, set the source to **Deploy from a branch →
   `main` / `/ (root)`**, and save. The site is live at
   `https://champappdev.github.io/` in about a minute.

## 2. Set up donations (free)

You need at least one of these. Empty options never appear on the page.

- **GitHub Sponsors.** No platform fee on sponsorships from personal
  accounts; payment processing fees still apply. Apply at
  github.com/sponsors; approval takes a few days. GitHub Sponsors does not
  take PayPal.
- **Ko-fi.** No platform fee on one-time tips on the free plan (5% on
  monthly support). It's an instant signup, and supporters can pay with
  PayPal or card.
- Buy Me a Coffee (5% fee) and PayPal.me are also supported.

Put your **usernames** (not full links) in `config.js` under `support`. Using
GitHub Sponsors and Ko-fi together covers both card and PayPal supporters at
the lowest cost.

## 3. Fill in `config.js`

Set your name, tagline, bio, socials, and `contactEmail`. The email appears on
the creator page and in the privacy policy; Google Play requires a way to
contact you. Once the app is published, add its Play Store link as
`"Get the app"`. To list your other open-source apps, copy the commented
project block.

**Review the privacy policy** (`champs-companion/privacy/index.html`) before
publishing. It describes exactly what the app does today: on-device storage,
the data feed from GitHub Pages, on-device screenshot scanning with the
engine downloaded from cdnjs/jsDelivr, AdMob ads with consent, and the
floating pill. Update it if the app's behavior changes. This is a template,
not legal advice.

## 4. Point the app at it

- **Android builds.** In your project's `eas.json`, add
  `"EXPO_PUBLIC_CREATOR_URL": "https://champappdev.github.io/"` to the `env` of
  **both** profiles, then rebuild. Never leave it as `""`; EAS rejects empty
  values.
- **Web demo build** (optional):
  `node champs-data/scripts/embed-feed.js --app=champs-web/app.jsx --creator=https://champappdev.github.io/`
- **Google Play listing.** Set the privacy policy URL to
  `https://champappdev.github.io/champs-companion/privacy/`.

The **preview** (sideloaded) build shows "Support the creator ♥", which opens
`/support`. The **production** (Play Store) build shows a neutral "Creator page"
link, because Google Play has removed apps over in-app donation links.
Linking to a general creator page is the common approach, but it's still a
judgment call. If a Play review objects, set `EXPO_PUBLIC_SUPPORT_MODE` to
`"off"` in production and rebuild; no code changes are needed.

## Optional: a shorter custom address, still free

[is-a.dev](https://github.com/is-a-dev/register) gives free `<name>.is-a.dev`
subdomains through a pull request (reviewed by volunteers, so it can take a
few days). Point it at your GitHub Pages site, then add the domain under
**Settings → Pages → Custom domain**. Follow their docs to verify the domain
with GitHub, which prevents subdomain takeover.

## Bonus: a Sponsor button on your open-source repos

In each repo, add `.github/FUNDING.yml`:
```
github: [champappdev]
ko_fi: <your-kofi-username>
custom: ["https://champappdev.github.io/support"]
```
