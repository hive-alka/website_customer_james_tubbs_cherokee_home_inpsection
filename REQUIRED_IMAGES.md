# Required Image Assets for Cherokee Home Inspection Website

This document lists all the image assets that need to be collected and added to complete the website migration.

## Priority Images (Critical for Launch)

### 1. Logo & Branding
- **File**: `logo_img.jpg` or `logo.png`
- **Location**: `/public/`
- **Description**: Cherokee Home Inspection LLC logo
- **Recommended Size**: 300x80px (or scalable SVG)
- **Current**: Using First Class Home Inspections logo

### 2. Favicon
- **File**: `favicon.ico`
- **Location**: `/public/`
- **Description**: Small icon that appears in browser tabs
- **Recommended Size**: 32x32px or 64x64px
- **Current**: Generic favicon

### 3. Inspector Profile Photos
- **File**: `james_tubbs.jpg` or `james_tubbs_profile.jpg`
- **Location**: `/public/`
- **Description**: Professional headshot of James Tubbs
- **Recommended Size**: 400x400px (square) or 800x800px for high-res
- **Usage**: About page, team section, homepage hero
- **Current**: Using placeholder images

- **File**: `james_tubbs_hero.jpg` (optional alternative)
- **Location**: `/public/`
- **Description**: Hero/action shot of James conducting an inspection
- **Recommended Size**: 600x800px
- **Usage**: Homepage hero section

## Service Images

### 4. Property Images (Arkansas Homes)
- **Files**: Replace Pennsylvania properties with Arkansas homes
  - `single_family_ar.jpg` - Single family home in Cherokee Village area
  - `home_exterior_ar.jpg` - Arkansas home exterior
  - `property_inspection.jpg` - Home being inspected
- **Location**: `/public/`
- **Recommended Size**: 1200x800px
- **Usage**: Services page, homepage

### 5. Specialized Service Images

#### Thermal Imaging
- **File**: `thermal_imaging.jpg` or `infrared_scan.jpg`
- **Location**: `/public/`
- **Description**: Thermal imaging camera or thermal image example
- **Usage**: Services page

#### Radon Testing
- **File**: `radon_testing.jpg` or `radon_detector.jpg`
- **Location**: `/public/`
- **Description**: Radon testing equipment
- **Current**: `radon.png` (may need Arkansas-specific version)

#### Mold Inspection
- **File**: `mold_inspection.jpg` or `mold_testing.jpg`
- **Location**: `/public/`
- **Description**: Mold inspection/sampling equipment
- **Current**: `mold.png` (may need update)

#### Sewer Scope
- **File**: `sewer_scope.jpg` or `sewer_camera.jpg`
- **Location**: `/public/`
- **Description**: Sewer camera equipment
- **Current**: `sewer_cam.png` (may need update)

#### Septic Testing
- **File**: `septic_testing.jpg` or `septic_system.jpg`
- **Location**: `/public/`
- **Description**: Septic system or dye testing
- **Usage**: Services page

#### Well Water Testing
- **File**: `well_water_testing.jpg` or `water_sample.jpg`
- **Location**: `/public/`
- **Description**: Water testing equipment or well system
- **Current**: `water.png` (may need update)

#### Solar Inspection
- **File**: `solar_inspection.jpg` or `solar_panels.jpg`
- **Location**: `/public/`
- **Description**: Solar panel system
- **Usage**: Services page

## Location & Service Area

### 6. Arkansas Map
- **File**: `arkansas_map.jpg` or `ar_service_area.png`
- **Location**: `/public/`
- **Description**: Map showing Cherokee Home Inspection service area (Cherokee Village, Hardy, Ash Flat, Evening Shade, Cave City)
- **Recommended Size**: 800x600px
- **Usage**: Services page, contact page
- **Current**: Using Pennsylvania map (`pa.png`)

## Certification & Affiliation Logos

### 7. Certification Badges
All certification logos should be collected and placed in `/public/certifications/`

- **InterNACHI Logo**: `internachi.png` (likely already available)
- **IAC2 Certification**: `iac2.png`
- **AAREI Logo**: `aarei.png` (Arkansas Association of Real Estate Inspectors)
- **BBB Logo**: `bbb_a_rating.png` (Better Business Bureau A rating)
- **Solar Certification**: `solar_cert.png`
- **Arkansas State License Badge**: `ar_license.png` (if available)
- **Well Inspection Certification**: `well_inspection.png`
- **Septic Certification**: `septic_cert.png`
- **Drone Certification**: `drone_cert.png`

## Gallery Images (Medium Priority)

### 8. Inspection Gallery
- **Location**: `/public/gallery/`
- **Description**: Photos of inspections in progress, property examples, inspection equipment
- **Recommended Quantity**: 12-20 images
- **Categories**:
  - Exterior inspections
  - Interior inspections
  - Thermal imaging examples
  - Equipment photos
  - Before/after examples
  - Common issues found

## Optional But Recommended

### 9. Open Graph Image
- **File**: `og-image.jpg`
- **Location**: `/public/`
- **Description**: Image that appears when website is shared on social media
- **Recommended Size**: 1200x630px
- **Content**: Cherokee Home Inspection branding + key message

### 10. Testimonial Photos (Optional)
- **Location**: `/public/testimonials/`
- **Description**: Photos of satisfied clients (if they provide permission)
- **Note**: Most testimonials work well without photos

### 11. Video Content (If Available)
- Links to YouTube videos mentioned on original site:
  - "Why Hire a Certified Master Inspector?"
  - "Inspector Partners"
  - "Mold Inspection Promotional Video"
- **Note**: These should be embedded using YouTube embed codes

## Social Media Assets

### 12. Social Media Profile Images
- Facebook profile image
- Instagram profile image
- **Recommended Size**: 400x400px (square)

## Image Guidelines

### Quality Standards
- **Resolution**: Minimum 1920px width for full-width images
- **Format**: JPG for photos, PNG for logos/graphics with transparency
- **File Size**: Optimize to under 500KB per image when possible
- **Color Profile**: sRGB

### Photography Tips
- Use natural lighting when possible
- Show James Tubbs in action during inspections
- Capture Arkansas properties (local homes are more relatable)
- Include photos of inspection equipment and technology
- Professional photos work best, but high-quality smartphone photos are acceptable

## Next Steps

1. **Collect existing images** from Cherokee Home Inspection's current website and marketing materials
2. **Organize images** into the appropriate directories in `/public/`
3. **Name files** according to the naming convention above
4. **Optimize images** for web (compress to reduce file size while maintaining quality)
5. **Update image references** in the website code if filenames differ from those listed here

## Contact

If you have questions about image specifications or need help with image optimization, please reach out.

---

**Note**: The current website uses placeholder images from the template. These MUST be replaced with Cherokee Home Inspection's actual images before launch to avoid copyright issues and provide accurate representation of the business.
