# FinPay — Landing Page (self-initiated concept)

Static landing page: HTML5, CSS3, vanilla JavaScript. No build step, no dependencies (only the Inter font from Google Fonts).

## Run
Open `index.html`, or serve the folder (`npx serve .`). Deploy to Vercel, Netlify or GitHub Pages by uploading the folder.

## Structure
- `index.html`: Hero, Features, Goals, App, Security, Pricing, Testimonials, FAQ, final CTA, footer
- `css/style.css`: styles; colors and fonts are CSS variables at the top (`:root`). Includes dark-mode tokens
- `js/main.js`: mobile drawer, active nav, fade-in reveal, email dialog
- `assets/images/`: `hero-devices.jpg`, `phone-app.webp` (transparent phone cut-out), `shield.jpg`, `favicon.svg`. Replace a file with one of the same name and size ratio to swap an image

## Notes
- Every Get Started / Sign In / plan / app-store button opens a prototype dialog with email validation. Nothing is sent or stored. To collect real emails, connect the form in `js/main.js` (`#df` submit handler) to a service such as Formspree or EmailJS.
- The 1M+ users, 4.8/5 rating and the two testimonials are illustrative design content from the concept, not real data. The FAQ and footer say this is a concept.
