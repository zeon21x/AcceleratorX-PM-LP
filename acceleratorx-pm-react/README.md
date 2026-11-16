# AcceleratorX AI Product Management — React + Tailwind CSS v3

Converted from `AcceleratorX_PM_Antigravity_Project/index.html` into a modular React 18 + Vite + Tailwind CSS v3 application.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Notes
- `public/AI_PM_Nano_Degree_Brochure.pdf` is included so the gated brochure download works after submitting the enquiry modal.
- Form submission currently validates client-side and opens the thank-you modal; connect `handleFormSuccess` in `src/App.jsx` (or `ApplicationForm.jsx`) to your admissions CRM/API before production deployment.
