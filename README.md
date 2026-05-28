# চিহ্ন (Chinho)

**Chinho** (চিহ্ন, Bengali for "sign / mark") is a web page that reveals what your browser gives away without permission or exceptions. It demonstrates browser fingerprinting in real-time, showing location, device information, fonts, GPU, battery status, and behavioral patterns — all from standard JavaScript APIs.

🔗 **Live site:** [chinho.netlify.app](https://chinho.netlify.app)

---

## How It Works

- **No data is stored** — no cookies, no localStorage, no sessionStorage.
- **All fingerprinting happens locally** in your browser.
- **Location is retrieved via a secure Netlify Function** (server-side proxy), avoiding CORS and ad-blocker issues.
- **Your IP address is masked** on screen (e.g., `103.xxx.xxx.14`).
- **Nothing is sent to third parties** except a single anonymous request from the Netlify function to `ipapi.co` (no logs retained).

---

## Features

- 🔍 **Real‑time fingerprinting** – screen resolution, browser, OS, language, GPU, installed fonts, battery status, and more.
- 📍 **Location detection** – city, region, country, ISP (via server‑side proxy).
- ✏️ **Cursor trail** – faint pencil‑like marks that follow your mouse or touch.
- 📡 **Radar scanning animation** – replaced the static fingerprint icon.
- 📊 **Live counter** – shows elapsed time, scroll depth, tab switches, movements, clicks.
- 🔗 **Share modal** – post to Twitter, Bluesky, LinkedIn, Facebook, Reddit, WhatsApp, or copy link.
- 📜 **Sources modal** – explains every API and technique used, with links to research.

---

## File Structure

```
chinho/
├── index.html                     # Main page (all frontend code)
├── netlify.toml                   # Netlify configuration
├── netlify/
│   └── functions/
│       └── geo/
│           └── geo.js             # Serverless function for geolocation
└── README.md                      # This file
```

---

## Deployment on Netlify

1. **Clone or fork this repository** to your GitHub/GitLab account.
2. **Log in to [Netlify](https://app.netlify.com)**.
3. Click **"Add new site" → "Import an existing project"**.
4. Connect your Git provider and select the repository.
5. Netlify will automatically detect the settings from `netlify.toml`. No extra build command is needed.
6. Click **"Deploy site"**.
7. Your site will be live at `your-app-name.netlify.app`. You can rename it to `chinho.netlify.app` in Netlify's site settings.

> The Netlify Function (`/.netlify/functions/geo`) will be deployed automatically.

---

## Running Locally (with Netlify CLI)

To test the serverless function locally:

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. From the project root, run:
   ```bash
   netlify dev
   ```

3. Open `http://localhost:8888` – the function will be available at `/.netlify/functions/geo`.

---

## Credits

- **Inspired by** [`sinceyouarrived.world/taken`](https://sinceyouarrived.world/taken) by [Matt](https://bsky.app/profile/sinceyouarrived.world) at Rise Up Labs. Used with gratitude.
- **Geolocation API** – [ipapi.co](https://ipapi.co) (free tier, no API key required).
- **Fonts** – [EB Garamond](https://fonts.google.com/specimen/EB+Garamond) and [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) from Google Fonts.

---

## License

This project is open source for educational purposes. You may use, modify, and distribute it freely. Attribution to the original inspiration and to `@hello2himel` is appreciated.

---

## Why This Exists

Most websites silently collect and share your browser’s fingerprint. This page makes that invisible process visible. No data is collected or retained. **Open the source (`Cmd+U` / `Ctrl+U`)** – everything is there for you to read.

---

Made with 🖋️ by [@hello2himel](https://hello2himel.netlify.app) – to spread awareness about browser fingerprinting.
```