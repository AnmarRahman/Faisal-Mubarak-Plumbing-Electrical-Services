# Image Guide for Faisal Mubarak Plumbing & Electrical Services

This guide provides specifications for all images needed for the website.

## Directory Structure

Create the following directory structure in the `public` folder:

```
public/
├── hero-bg.jpg
└── services/
    ├── plumbing.jpg
    ├── electrical.jpg
    ├── maintenance.jpg
    ├── water-heaters.jpg
    ├── water-network.jpg
    └── generators.jpg
```

## Image Requirements

### Hero Background Image

**File:** `public/hero-bg.jpg`

**Specifications:**
- **Resolution:** Minimum 1920x1080px (Full HD)
- **Aspect Ratio:** 16:9
- **Format:** JPEG (optimized for web)
- **File Size:** Maximum 500KB (compressed)
- **Content:** Professional photo showing:
  - Saudi technicians at work in clean uniforms
  - Modern plumbing or electrical equipment
  - Professional workshop or service vehicle
  - Bright, well-lit environment
  - High-quality, professional appearance

**Style Guidelines:**
- Professional and trustworthy
- Well-lit with good contrast
- Shows actual work/equipment
- Avoid overly staged photos
- Consider using a slight blue or teal tint for consistency

---

### Service Images

All service images should follow these specifications:

**General Specifications:**
- **Resolution:** Minimum 800x600px
- **Aspect Ratio:** 4:3
- **Format:** JPEG (optimized for web)
- **File Size:** Maximum 200KB each (compressed)
- **Style:** Professional, well-lit, showing actual work scenarios

---

#### 1. Plumbing Services (`public/services/plumbing.jpg`)

**Content Ideas:**
- Technician installing or repairing pipes
- Modern plumbing fixtures
- Leak detection equipment in use
- Professional plumber with tools
- Clean, organized workspace

**Key Elements:**
- Professional uniform with company branding (if available)
- Modern tools and equipment
- Saudi setting (local pipes, fixtures)
- Clean and professional appearance

---

#### 2. Electrical Services (`public/services/electrical.jpg`)

**Content Ideas:**
- Electrician working on electrical panel
- Wiring installation or inspection
- LED lighting installation
- Testing equipment in use
- Circuit breaker installation

**Key Elements:**
- SEC-compliant electrical components
- Safety equipment visible (gloves, meters)
- Professional uniform
- Modern electrical materials
- Saudi electrical standards visible

---

#### 3. Maintenance & Emergency (`public/services/maintenance.jpg`)

**Content Ideas:**
- Technician with emergency toolkit
- Service vehicle with equipment
- Quick response scenario
- 24/7 service badge/sign
- Emergency repair in progress

**Key Elements:**
- Urgency and professionalism
- Well-stocked tool kit
- Professional appearance
- May include service vehicle
- Shows readiness to respond

---

#### 4. Water Heaters (`public/services/water-heaters.jpg`)

**Content Ideas:**
- Modern tankless or traditional water heater
- Installation process
- Technician adjusting settings
- Various water heater models
- Energy-efficient models

**Key Elements:**
- Clean, modern equipment
- Professional installation
- Safety features visible
- Saudi-appropriate models
- Quality brands

---

#### 5. Water Networks (`public/services/water-network.jpg`)

**Content Ideas:**
- Pipe network installation
- Water distribution system
- Pressure testing equipment
- Underground pipe work
- Blueprint/planning with pipes

**Key Elements:**
- Modern PVC or copper piping
- Professional installation
- Clean, organized layout
- Saudi building standards
- Quality materials

---

#### 6. Generators (`public/services/generators.jpg`)

**Content Ideas:**
- Industrial or residential generator
- Generator installation
- Technician performing maintenance
- Modern generator unit
- Generator control panel

**Key Elements:**
- Professional-grade equipment
- Safe installation practices
- Modern, reliable models
- Outdoor or indoor installation
- Proper ventilation visible

---

## Image Optimization Guidelines

### Compression

1. Use tools like:
   - TinyPNG (https://tinypng.com/)
   - ImageOptim
   - Squoosh (https://squoosh.app/)

2. Target compression:
   - Hero image: 400-500KB
   - Service images: 150-200KB each

### Format Considerations

- **JPEG**: Best for photographs with many colors
- **WebP**: Modern format (consider converting later for better performance)
- Ensure compatibility across all browsers

### Alternative Text (Already Implemented)

The website code already includes proper alt text for SEO and accessibility.

---

## Image Sources

### Recommended Sources:

1. **Own Photography (Best Option)**
   - Take photos of actual company work
   - Shows real technicians and equipment
   - Most authentic and trustworthy
   - Free to use without licensing issues

2. **Stock Photo Sites (Free):**
   - Unsplash (https://unsplash.com/)
   - Pexels (https://www.pexels.com/)
   - Pixabay (https://pixabay.com/)
   
   Search terms:
   - "plumber Saudi Arabia"
   - "electrician working"
   - "plumbing repair"
   - "electrical panel"
   - "water heater installation"
   - "generator maintenance"

3. **Stock Photo Sites (Paid):**
   - Shutterstock
   - Getty Images
   - Adobe Stock
   - iStock

### Licensing

- Ensure you have the right to use all images
- For stock photos, verify commercial use is allowed
- Credit photographers if required by license
- Own photography is always the safest option

---

## Implementation Steps

1. **Gather or create images** according to specifications above

2. **Optimize images** using compression tools

3. **Create directory structure** in the public folder:
   ```bash
   mkdir -p public/services
   ```

4. **Place images** in correct locations:
   - `public/hero-bg.jpg`
   - `public/services/plumbing.jpg`
   - `public/services/electrical.jpg`
   - `public/services/maintenance.jpg`
   - `public/services/water-heaters.jpg`
   - `public/services/water-network.jpg`
   - `public/services/generators.jpg`

5. **Test the website** locally to ensure images load correctly

6. **Verify mobile responsiveness** with all images in place

---

## Current Implementation

The website code already includes:

✅ Proper image paths
✅ Alt text for accessibility
✅ Responsive image containers
✅ Fallback styling if images don't load
✅ Hover effects and animations
✅ Background gradients as placeholders

**All you need to do is add the actual image files!**

---

## Testing Checklist

After adding images, verify:

- [ ] All images load correctly on desktop
- [ ] All images load correctly on mobile
- [ ] Images are properly sized (not too large)
- [ ] Page loads quickly (under 3 seconds)
- [ ] Images look professional and high-quality
- [ ] All service cards display images properly
- [ ] Hero background image displays with proper opacity
- [ ] Images work in both Arabic and English versions

---

## Need Help?

If you need assistance:

1. Check the browser console for image loading errors
2. Verify file paths are correct
3. Ensure file names match exactly (case-sensitive)
4. Check file sizes aren't too large
5. Test with different browsers

For professional photography services in Saudi Arabia, consider hiring a local photographer to capture authentic images of your company's work.
