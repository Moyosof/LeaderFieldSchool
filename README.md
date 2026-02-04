# Leaders' Field Int'l School Website

A complete, responsive website for **Leaders' Field Int'l School** - Creche, Pre-School & Primary.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🎯 About The School

**Leaders' Field Int'l School** is committed to high-quality education that delivers transformative learning to all pupils.

### Our Mission
To be committed to high quality education that delivers transformative learning to all pupils. To nurture individual talents and emphasize the importance of raising the TOTAL CHILD with specific attention to their physical, emotional, social and spiritual development. To raise Leaders who will impact their generation positively.

### Our Vision
To be one of the foremost, outstanding and value-based schools with a strong sense of ethical responsibility geared towards developing the TOTAL CHILD.

### Core Values
- **Integrity** - Upholding honesty and strong moral principles
- **Accountability** - Taking responsibility for our actions
- **Vision** - Seeing the future and working towards it
- **Godliness** - Instilling spiritual values
- **Commitment** - Dedication to excellence
- **Values** - Teaching strong ethical principles
- **Intellectual Development** - Nurturing academic excellence

## 📁 Project Structure

```
LeaderSchoolWebsite/
├── index.html          # Home/Landing page
├── about.html          # About Us page
├── academics.html      # Academic programs
├── admissions.html     # Admission information
├── gallery.html        # Photo gallery
├── news.html           # News and events
├── contact.html        # Contact form
├── README.md           # This file
├── css/
│   ├── style.css       # Main stylesheet
│   └── responsive.css  # Responsive breakpoints
└── js/
    ├── main.js         # Core JavaScript
    └── form-handler.js # Contact form handler
```

## 🚀 Features

- ✅ **Fully Responsive** - Works on all devices (desktop, tablet, mobile)
- ✅ **Modern Design** - Clean, professional UI with smooth animations
- ✅ **7 Complete Pages** - Home, About, Academics, Admissions, Gallery, News, Contact
- ✅ **Working Contact Form** - Integrated with Web3Forms for email delivery
- ✅ **Photo Gallery** - Filterable gallery with lightbox
- ✅ **Mobile Menu** - Hamburger menu for mobile devices
- ✅ **Smooth Scrolling** - Enhanced user experience
- ✅ **Animated Counters** - Statistics with count-up animation
- ✅ **SEO Optimized** - Meta tags and semantic HTML

## 📧 Contact Form Setup

The contact form uses **Web3Forms** to send emails to `iamthaizzie@gmail.com`.

### To activate the contact form:

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter your email address: `iamthaizzie@gmail.com`
3. Check your inbox for the **access key**
4. Open `contact.html` and find this line:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
5. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key

## 🎨 Customization

### Colors
The color scheme is defined in `css/style.css` using CSS variables:

```css
:root {
    --primary-color: #1e40af;    /* Blue */
    --secondary-color: #f59e0b;  /* Orange */
    --accent-color: #10b981;     /* Green */
}
```

### Images
All images are currently placeholders from Unsplash. To replace:
1. Add your images to an `images/` folder
2. Update the `src` attributes in the HTML files

### Fonts
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

## 🖥️ How to Run

1. Simply open `index.html` in a web browser
2. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```
3. Navigate to `http://localhost:8000`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📄 Pages Overview

| Page | Description |
|------|-------------|
| **Home** | Hero section, features, programs, testimonials, news preview |
| **About** | School history, mission, vision, core values, leadership team |
| **Academics** | Educational programs (Creche, Pre-School, Primary), curriculum |
| **Admissions** | 8-step admission process, requirements, fee structure, FAQ |
| **Gallery** | Filterable photo gallery with lightbox view |
| **News** | Upcoming events, news articles, announcements |
| **Contact** | Contact form, location map, department contacts |

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, CSS Variables, Animations
- **JavaScript** - Vanilla JS (no frameworks)
- **Font Awesome 6.4.2** - Icons
- **Google Fonts** - Poppins & Inter
- **Web3Forms** - Contact form email delivery

## 📝 License

This project is created for Leaders' Field Int'l School.

---

**Developed with ❤️ for Leaders' Field Int'l School**

*Raising Leaders Who Impact Their Generation*
