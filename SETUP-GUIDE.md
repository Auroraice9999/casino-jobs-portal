# Hiring Portal — Complete Setup Guide (No Coding Experience Needed)

This guide takes you from zero to a live website that collects job applications.
Every application's details go into a **Google Sheet**, and every resume file goes into a **Google Drive folder** — all 100% free. No database, no paid hosting.

**Total time:** about 30 minutes. Just follow the numbered steps in order.

---

## What you have in this folder

| File | What it is |
|------|------------|
| `config.js` | **The only file you normally edit.** Your company name, Telegram, script link, and all jobs + descriptions live here. |
| `index.html` | The landing page — lists all open jobs. Clicking a job opens its own page. |
| `job.html` | The job page — shows the job description and the application form (with CV upload). |
| `about.html` | Your "About Us" page (company profile). Linked from the menu on every page. |
| `admin.html` | A private page where YOU view all applications. |
| `apps-script-Code.gs` | The code that saves data to your Drive + Sheet. |
| `SETUP-GUIDE.md` | This guide. |

### How candidates use the site
1. They land on `index.html` and see all open jobs.
2. They **click a job title** → it opens `job.html` showing that job's description + application form.
3. They fill the form (Telegram ID is required), upload their CV, and submit.
4. They see a **"Thanks for applying! Our HR team will contact you soon."** message with your Telegram contact.

---

## How it all connects (the simple picture)

```
Candidate fills form on your website (index.html)
        │  clicks Submit
        ▼
Google Apps Script (the free "middleman" you set up)
        │
        ├─► saves the resume file ──► your Google DRIVE folder
        └─► saves all the text data ──► your Google SHEET
                                              ▲
                              You view it in admin.html (or the Sheet itself)
```

---

# PART 1 — Set up your free Google storage

### Step 1: Create the Drive folder for resumes
1. Go to **drive.google.com** and sign in with your Google account.
2. Click **+ New** (top-left) → **New folder**.
3. Name it something like `Job Applications - Resumes`. Click **Create**.
4. Double-click the folder to open it.
5. Look at the web address (URL) at the top of your browser. It looks like:
   `https://drive.google.com/drive/folders/1AbCdEfGhIjKlMnOpQrStUvWxYz`
6. Copy the long code after `/folders/` (the part like `1AbCdEfGhIjKlMnOpQrStUvWxYz`).
   **This is your FOLDER ID.** Paste it somewhere safe (e.g. a notes app) for now.

### Step 2: Create the Google Sheet for the data
1. Go to **sheets.google.com** → click the **+ Blank** to make a new sheet.
2. Name it (top-left), e.g. `Job Applications - Data`.
3. Leave it empty — the code fills in the column titles automatically on the first application.
4. Look at the URL. It looks like:
   `https://docs.google.com/spreadsheets/d/1ZyXwVuTsRqPoNmLkJiHgFeDcBa/edit`
5. Copy the long code between `/d/` and `/edit` (like `1ZyXwVuTsRqPoNmLkJiHgFeDcBa`).
   **This is your SHEET ID.** Save it next to your Folder ID.

---

# PART 2 — Set up the free "middleman" (Google Apps Script)

This is the piece that does the saving. It's free and lives inside your Google account.

### Step 3: Create the script
1. Go to **script.google.com** → click **New project** (top-left).
2. You'll see a code box with a few lines (`function myFunction() {}`). **Select all of it and delete it.**
3. Open the file `apps-script-Code.gs` from this folder in any text editor (Notepad, TextEdit, etc.).
   Copy **everything** in it, and paste it into the empty code box on the website.
4. Near the top of the pasted code, fill in your 3 values (keep the quote marks):
   - `FOLDER_ID` → paste your **Folder ID** from Step 1.
   - `SHEET_ID` → paste your **Sheet ID** from Step 2.
   - `ADMIN_KEY` → make up a password (you'll use it on the admin page). Example: `myHiring2026`.
5. Click the **floppy-disk Save icon** (or press Ctrl+S / Cmd+S). Name the project `Hiring Portal` if asked.

### Step 4: Publish the script and get your link
1. Click the blue **Deploy** button (top-right) → **New deployment**.
2. Click the **gear icon** next to "Select type" → choose **Web app**.
3. Fill in:
   - **Description:** `Hiring portal` (anything is fine).
   - **Execute as:** **Me** (your email).
   - **Who has access:** **Anyone**.  ← Important. This lets your website talk to it.
4. Click **Deploy**.
5. Google will ask for permission ("Authorize access"):
   - Click **Authorize access** → choose your Google account.
   - You may see "Google hasn't verified this app." Click **Advanced** → **Go to Hiring Portal (unsafe)**.
     (This is YOUR own script — it is safe. Google just warns for all personal scripts.)
   - Click **Allow**.
6. You'll get a **Web app URL** like:
   `https://script.google.com/macros/s/AKfy....../exec`
   **Copy this URL.** This is the link that connects your website to your storage.

> Keep this URL private-ish — anyone with it could submit applications, but they cannot see your data without the admin password.

---

# PART 3 — Plug the link into your website (edit `config.js`)

**Good news:** there is only ONE file to edit for everything — `config.js`. The script link, your admin page, and both website pages all read from it.

### Step 5: Open `config.js` and fill in your settings
1. Open `config.js` in a text editor (Notepad, TextEdit, etc.).
2. Find this line and paste your Web app URL from Step 4 (keep the quotes):
   ```
   SCRIPT_URL: "https://script.google.com/macros/s/AKfy....../exec",
   ```
3. Set your branding:
   ```
   COMPANY_NAME: "Acme Recruiters",
   COMPANY_TAGLINE: "We are hiring! Pick a role below and apply in minutes.",
   ```
4. Set your **Telegram** (candidates see this on the site and in the thank-you message):
   ```
   TELEGRAM_ID:   "@AcmeHR",
   TELEGRAM_LINK: "https://t.me/AcmeHR",
   ```
   (Use your real Telegram username. The link is just `https://t.me/` + your username without the `@`.)
5. Save the file.

### Step 6: Add the link to the admin page
1. Open `admin.html`.
2. Find the `SCRIPT_URL` line near the top and paste the **same** Web app URL. Save.
   *(The admin page is the only page that doesn't read from `config.js`.)*

---

# PART 4 — Add/edit your jobs and branding

### Step 7: Edit the jobs (add unlimited roles, with descriptions)
1. In `config.js`, find the `JOBS:` list. Each job is one block that looks like this:
   ```
   {
     title: "Customer Care Executive",
     location: "On-site / Remote",
     type: "Full-time",
     openings: "100+",
     summary: "Short one-line summary shown on the card.",
     responsibilities: [
       "Task one",
       "Task two"
     ],
     requirements: [
       "Requirement one",
       "Requirement two"
     ]
   },
   ```
2. To **add a job:** copy one whole block (from `{` to `},` including the comma), paste it below, and change the text.
3. To **remove a job:** delete its whole block.
4. To **edit:** just change the words inside the quotes. Add or remove lines in the
   `responsibilities` / `requirements` lists freely.
5. Save. The jobs appear automatically on the landing page, and each gets its own
   description page and application form — no other files to touch.

> **Tip:** keep each `title` unique. The "Apply" link uses the title to open the right job page.

### Step 8: Change your logo (optional)
- **Easiest:** leave it as-is — the portal already includes a `logo.svg` (a green casino chip + spade) that shows on every page.
- **To use your own logo:** put your image file in this folder and name it `logo.svg`
  (overwriting the included one). It will appear automatically on all pages — no HTML editing needed.
  - Prefer a square image. A `.png` or `.jpg` works too: name it `logo.png`, then in
    `index.html`, `job.html` and `about.html` change every `src="logo.svg"` to `src="logo.png"`.
- **To change the main color:** in `index.html`, `job.html` and `about.html` find `--brand: #15803d;` and change the color code (also update `--brand-dark`).

---

# PART 5 — Put the website online (free)

Pick ONE option. **Netlify Drop is the easiest (no account juggling).**

### Option A — Netlify Drop (drag & drop, ~2 minutes)
1. Go to **app.netlify.com/drop**.
2. Drag your whole `hiring-portal` folder onto the page.
3. Wait a few seconds — you get a live link like `https://random-name.netlify.app`.
4. Done! Share that link (it opens `index.html`). Your admin page is at `.../admin.html`.
   - To get a nicer name or update later, create a free Netlify account and "claim" the site.

### Option B — GitHub Pages
1. Create a free account at **github.com**.
2. Make a new repository (e.g. `careers`), set it **Public**, click **Create**.
3. Click **Add file → Upload files**, drag in `index.html`, `job.html`, `about.html`, `config.js`, `admin.html` and `logo.svg`. Commit.
4. Go to **Settings → Pages** → under "Branch" pick `main` → **Save**.
5. After a minute your site is live at `https://yourname.github.io/careers/`.

### Option C — Vercel
1. Create a free account at **vercel.com** (sign in with GitHub).
2. Push your folder to a GitHub repo (see Option B), then in Vercel click **Add New → Project → Import** that repo.
3. Click **Deploy**. You get a live link.

> **Tip:** Upload `index.html`, `job.html`, `about.html`, `config.js`, `admin.html` and `logo.svg`. All are needed for the site to work. The `.gs` file and this guide stay on your computer.

---

# PART 6 — Test it works

### Step 9: Submit a test application
1. Open your live website link.
2. **Click any job title** to open its page, fill in every field (including Telegram ID), and upload a small PDF or Word file.
3. Click **Submit Application**. You should see the green **"Thanks for applying!"** popup with your Telegram contact.
4. Check your **Google Sheet** — a new row should appear with all the details.
5. Check your **Drive folder** — the resume file should be there.
6. Click the **Resume Link** in the sheet — it should open the uploaded file.

### Step 10: View applications in the admin page
1. Open `admin.html` (your live link `.../admin.html`).
2. Type your **admin password** (the `ADMIN_KEY` from Step 3) → **Load Applications**.
3. You'll see all candidates, newest first, with clickable resume links.
4. Click **Download CSV** to save a spreadsheet copy to your computer.

---

# PART 7 — Troubleshooting

### The submit button spins, then shows an error
- **Most common cause:** the `SCRIPT_URL` in `config.js` is wrong or still says `PASTE_...`.
  Re-copy the Web app URL from Apps Script (Deploy → Manage deployments) and paste it again.
- Make sure the URL ends in **`/exec`** (not `/dev`).

### "Setup not finished" message on the form
- You haven't pasted the Apps Script URL into `config.js` yet (Step 5).

### The job page says "Back to all jobs" but shows the wrong/first job
- The job is matched by its `title` in `config.js`. Make sure each `title` is unique and you
  didn't rename a job after sharing its link.

### Data is NOT appearing in the Sheet / Drive
- Open the script at script.google.com → **Deploy → Manage deployments** and confirm
  **Who has access = Anyone**. If you changed the code, you must **Deploy → New deployment** again
  (editing code alone doesn't update the live link unless you re-deploy or use "Manage deployments → Edit → New version").
- Double-check `FOLDER_ID` and `SHEET_ID` are correct (no extra spaces, inside the quotes).
- In Apps Script, click **Run** once on the `doGet` function and approve permissions if prompted.

### File upload fails or is rejected
- The file must be **PDF, DOC, or DOCX** and **under 5MB**. Larger files are blocked on purpose.
- If a big file fails to send, ask the candidate to compress the PDF or save Word as PDF.

### "Authorization" / "Google hasn't verified this app" warning
- This is normal for personal scripts. Click **Advanced → Go to (your project name) → Allow**.
  It's your own script, so it's safe.

### Admin page says "Wrong password"
- The password typed must exactly match `ADMIN_KEY` in your script (case-sensitive).
- If you change `ADMIN_KEY`, you must **re-deploy** the script (Deploy → Manage deployments → Edit → New version).

### Phone numbers losing the leading zero / showing as "1.23E+10"
- Already handled — the code stores the number as text. If you typed numbers directly into the
  Sheet yourself, format that column as **Plain text** (Format → Number → Plain text).

### Nothing happens when I edit the .gs code
- Apps Script serves the **last deployed version**. After editing, go to
  **Deploy → Manage deployments → (pencil/Edit) → Version: New version → Deploy** to push changes live.

---

# Quick reference — what you must fill in

| Where | What to paste |
|-------|---------------|
| `apps-script-Code.gs` | `FOLDER_ID`, `SHEET_ID`, your made-up `ADMIN_KEY` |
| `config.js` | `SCRIPT_URL` (Web app URL), `COMPANY_NAME`, `TELEGRAM_ID` / `TELEGRAM_LINK`, your `JOBS` |
| `admin.html` | the same `SCRIPT_URL` |

That's everything. Once Step 9 passes, your hiring portal is fully live and collecting applications.
