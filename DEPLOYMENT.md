# Running & Deploying Leaders' Field Int'l School Website

This guide covers how to run the website locally and deploy it to various hosting platforms.

---

## 🖥️ Running Locally

### Method 1: Direct Browser Opening (Simplest)

Simply double-click on `index.html` to open it in your default browser.

```
📁 LeaderSchoolWebsite
 └── index.html  ← Double-click this file
```

> **Note:** Some features like form submissions require a web server to work properly.

---

### Method 2: Using VS Code Live Server (Recommended for Development)

1. **Install Live Server Extension**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Live Server" by Ritwick Dey
   - Click Install

2. **Run the Website**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Browser will open at `http://127.0.0.1:5500`

3. **Benefits**
   - Auto-refresh on file changes
   - Proper localhost environment
   - Better testing experience

---

### Method 3: Using Python HTTP Server

If you have Python installed:

```powershell
# Navigate to the project folder
cd C:\Users\shitt\source\LeaderSchoolWebsite

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

---

### Method 4: Using Node.js

If you have Node.js installed:

```powershell
# Install serve globally (one-time)
npm install -g serve

# Navigate to project folder
cd C:\Users\shitt\source\LeaderSchoolWebsite

# Run the server
serve
```

Then open the URL shown in the terminal (usually `http://localhost:3000`).

---

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free - Recommended)

**Best for:** Free hosting, easy setup, automatic HTTPS

1. **Create GitHub Repository**
   ```powershell
   cd C:\Users\shitt\source\LeaderSchoolWebsite
   git init
   git add .
   git commit -m "Initial commit - Leaders' Field Int'l School website"
   ```

2. **Push to GitHub**
   - Create a new repository on [github.com](https://github.com/new)
   - Name it `leadersfield-website` (or any name)
   - Follow the instructions to push:
   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/leadersfield-website.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/leadersfield-website/`

---

### Option 2: Netlify (Free - Easy Drag & Drop)

**Best for:** Simple deployment, form handling, custom domains

1. **Deploy via Drag & Drop**
   - Go to [netlify.com](https://www.netlify.com/)
   - Sign up / Log in
   - Drag the `LeaderSchoolWebsite` folder onto the deploy area
   - Done! You'll get a URL like `random-name.netlify.app`

2. **Deploy via GitHub (Auto-deploy)**
   - Connect your GitHub account
   - Select your repository
   - Click "Deploy site"
   - Every push to GitHub will auto-deploy

3. **Custom Domain**
   - Go to Site Settings → Domain Management
   - Add your custom domain (e.g., `www.leadersfield.edu`)

---

### Option 3: Vercel (Free)

**Best for:** Fast global CDN, easy GitHub integration

1. Go to [vercel.com](https://vercel.com/)
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Your site will be live at `your-project.vercel.app`

---

### Option 4: Firebase Hosting (Free Tier)

**Best for:** Google ecosystem, reliable hosting

1. **Install Firebase CLI**
   ```powershell
   npm install -g firebase-tools
   ```

2. **Login and Initialize**
   ```powershell
   firebase login
   cd C:\Users\shitt\source\LeaderSchoolWebsite
   firebase init hosting
   ```
   - Select "Use an existing project" or create new
   - Set public directory to `.` (current directory)
   - Configure as single-page app: **No**
   - Don't overwrite index.html

3. **Deploy**
   ```powershell
   firebase deploy
   ```

Your site will be at `your-project.web.app`

---

### Option 5: Traditional Web Hosting (cPanel)

**Best for:** Shared hosting, existing hosting plans

1. **Prepare Files**
   - Zip all files in the `LeaderSchoolWebsite` folder
   
2. **Upload via cPanel**
   - Login to your hosting cPanel
   - Go to File Manager → `public_html`
   - Upload and extract the zip file
   
3. **Upload via FTP**
   - Use FileZilla or similar FTP client
   - Connect with your FTP credentials
   - Upload all files to `public_html` or `www` folder

---

### Option 6: Cloudflare Pages (Free)

**Best for:** Fast CDN, DDoS protection, free SSL

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com/)
2. Connect your GitHub account
3. Select your repository
4. Configure build settings:
   - Build command: (leave empty)
   - Build output directory: `/`
5. Click "Save and Deploy"

---

## 🌐 Custom Domain Setup

### Purchasing a Domain
Recommended domain registrars:
- [Namecheap](https://www.namecheap.com/)
- [Google Domains](https://domains.google/)
- [GoDaddy](https://www.godaddy.com/)

**Suggested domains:**
- `leadersfield.edu.ng`
- `leadersfieldinternational.com`
- `leadersfield.school`

### Connecting Domain to Hosting

**For GitHub Pages:**
1. Add a `CNAME` file with your domain
2. Update DNS records at your registrar:
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```

**For Netlify/Vercel:**
1. Add domain in dashboard
2. Update nameservers or add DNS records as instructed

---

## 📧 Contact Form Configuration

Before deploying, set up the contact form:

1. Go to [web3forms.com](https://web3forms.com/)
2. Enter: `iamthaizzie@gmail.com`
3. Check your email for the access key
4. Open `contact.html`, find line ~135:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
5. Replace `YOUR_ACCESS_KEY_HERE` with your actual key
6. Save and deploy

---

## ✅ Pre-Deployment Checklist

- [ ] Contact form access key configured
- [ ] All images loading correctly
- [ ] All links working (no broken links)
- [ ] Mobile responsiveness tested
- [ ] Contact information updated (address, phone, email)
- [ ] Social media links updated
- [ ] Google Maps embed added (optional)
- [ ] Favicon displays correctly
- [ ] Meta descriptions are accurate

---

## 🔧 Post-Deployment

### Verify Deployment
1. Visit your live URL
2. Test all navigation links
3. Submit a test contact form
4. Check on mobile devices
5. Run [Google PageSpeed](https://pagespeed.web.dev/) test

### Set Up Analytics (Optional)
Add Google Analytics to track visitors:
1. Create account at [analytics.google.com](https://analytics.google.com/)
2. Get your tracking code
3. Add to all HTML files before `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

---

## 💰 Hosting Cost Comparison

| Platform | Cost | Custom Domain | SSL | Best For |
|----------|------|---------------|-----|----------|
| GitHub Pages | Free | ✅ | ✅ | Simple sites |
| Netlify | Free | ✅ | ✅ | Forms, easy deploy |
| Vercel | Free | ✅ | ✅ | Fast CDN |
| Firebase | Free | ✅ | ✅ | Google ecosystem |
| Cloudflare | Free | ✅ | ✅ | Security, speed |
| Shared Hosting | $3-10/mo | ✅ | ✅ | Traditional hosting |

---

## 🆘 Troubleshooting

### Site not loading
- Check if files are in correct directory
- Verify `index.html` exists in root folder
- Clear browser cache

### Contact form not working
- Verify Web3Forms access key
- Check browser console for errors
- Ensure form action URL is correct

### Images not showing
- Check file paths (case-sensitive on Linux servers)
- Verify image files are uploaded
- Check for CORS issues

### CSS/JS not loading
- Check file paths in HTML
- Verify files are uploaded
- Check browser console for 404 errors

---

**Need Help?** Contact your web developer or hosting provider's support team.

---

*Leaders' Field Int'l School - Raising Leaders Who Impact Their Generation*
