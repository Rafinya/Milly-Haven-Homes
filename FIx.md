# MASTER DEVELOPMENT TASK: WEENA LOFT — ANIMATION RESTORATION, IMMERSIVE PROPERTY SHOWCASE & CINEMATIC VIDEO BACKGROUND

I want you to perform a comprehensive restoration and enhancement of my Milly Haven Homes Accommodations website.

This is a precision-sensitive task. I want you to inspect the existing project, understand how the website currently works, identify previously existing features that have stopped functioning, and restore them before implementing the new features.

**IMPORTANT: Do not redesign the website or change its established identity. Preserve the current colour palette, typography, branding, layouts, navigation, and overall visual direction.**

The objective is to make the website feel like a premium, modern accommodation experience, with the smooth visual storytelling and cinematic presentation associated with high-end websites such as Sanity.io.

Work carefully and verify every implementation.

# PHASE 1: RESTORE THE ORIGINAL SCROLL-BASED LOFT ANIMATION

This is one of the most important requirements.

Previously, the homepage had a beautiful scroll-driven animation:

- As the visitor scrolled down, the loft appeared to rise.
- The loft's visual presentation changed progressively with scrolling.
- Text displayed on the LEFT side of the screen changed dynamically as the visitor scrolled.
- The changing text corresponded to the different stages or features being presented.
- The loft and the accompanying text worked together to create an immersive storytelling experience.

This functionality has disappeared or stopped working correctly.

I want the ORIGINAL EXPERIENCE RESTORED.

### Required implementation:

1. Investigate the previous implementation in the project.
2. Check Git history, previous components, CSS, JavaScript and animation libraries for the original scroll interaction.
3. Identify why the loft no longer rises as the visitor scrolls.
4. Restore the relationship between scroll position and loft movement.
5. Restore the changing text on the left.
6. Ensure each text change corresponds to the correct stage of the loft presentation.
7. Ensure the animation progresses naturally rather than jumping between positions.
8. Ensure the loft remains properly positioned while the storytelling section is active.
9. Ensure the animation finishes naturally and the visitor can continue scrolling into the next section.

Use an appropriate scroll-driven implementation, such as Framer Motion's useScroll/useTransform, GSAP ScrollTrigger, or the existing animation architecture.

Do not introduce a new library if the existing implementation can be repaired.

**Critical:** Do not replace this experience with ordinary fade-in animations. I specifically want the loft-rising and left-side changing-text interaction restored.

# PHASE 2: RESTORE THE LOADING ANIMATION

The original loading experience has stopped functioning correctly.

Previously, when:
- Reloading the website.
- Opening the homepage.
- Navigating from one page to another.

The Milly Haven Homes logo had a spinning animation, accompanied by a moving loading/progress bar.

Both features have stopped working.

I want their original behaviour restored.

### A. Milly Haven Homes logo

- Restore the spinning animation.
- Preserve the original logo dimensions, proportions and appearance.
- Ensure the rotation is smooth and consistent.
- Avoid sudden stops, flickering or jerky movement.
- Ensure the logo animation works on both page reloads and page transitions.

### B. Loading progress bar

- Restore the animated loading bar.
- It must visibly move and progress during the loading experience.
- Ensure it does not remain frozen.
- Ensure it does not disappear before the transition completes.
- Synchronize its behaviour with the actual loading or navigation lifecycle.
- Avoid displaying a fake 100% completion while the page is still loading.

### C. Page transition integration

Ensure the loading animation works consistently across all routes.

Avoid:
- Black-screen flashes.
- Unnecessary loading delays.
- Double-loading animations.
- Broken navigation.
- Animation restarts caused by unnecessary component re-renders.

Check the existing routing architecture before implementing the restoration.

# PHASE 3: MILLIE BNB — ASSET DISCOVERY AND PROPERTY IMAGE INTEGRATION

There is a folder in the project named:

**Millie BNB**

I have installed this folder specifically because I want its images and video assets integrated into the Milly Haven Homes website.

First, inspect the entire folder recursively.

Do not assume that all images represent the same property.

### A. Asset inventory

Identify:
- All available property photographs.
- Bedrooms.
- Sitting rooms/living rooms.
- Kitchens.
- Bathrooms.
- Exterior views.
- Building photographs.
- Balcony and other accommodation features.
- Videos.
- Different property types and room configurations.

Create an internal asset inventory that records each file's name, format, dimensions and likely visual category.

Visually inspect the images where necessary.

### B. Match images to the correct properties

I want the existing accommodation listings to use appropriate, visually similar images from the Millie BNB folder.

For example:

If the website has a property called **1B Loft**, identify the photographs in Millie BNB that most closely resemble that particular property.

Select images based on:
- Interior design.
- Furniture.
- Room configuration.
- Colour scheme.
- Bedroom arrangement.
- Living room layout.
- Kitchen appearance.
- Overall architectural style.

Do not simply assign random photographs to accommodation cards.

Do not use photographs of completely different properties as though they belong to the same accommodation.

Where multiple photographs clearly represent the same property, group them together.

### C. Property image consistency

For every accommodation listing:

- Use a suitable primary photograph for its listing card.
- Create a consistent gallery of images for that particular property.
- Group bedroom images with the corresponding bedroom.
- Group sitting-room images with the corresponding sitting room.
- Keep kitchen and bathroom photographs correctly associated.
- Avoid duplicated images.
- Maintain consistent image quality and aspect ratios.

If an image cannot confidently be matched to a particular property, do not guess. Flag it for review.

Do not delete or overwrite the original Millie BNB assets.

# PHASE 4: IMMERSIVE PROPERTY EXPLORATION AND SCROLL TRANSITIONS

I want visitors to have a much more engaging way of exploring individual accommodations.

When someone opens a property, such as 1B Loft, they should be able to experience the different spaces through a beautifully animated visual presentation.

### Desired experience

Imagine a visitor opening 1B Loft.

As they scroll through the property showcase:

1. The bedroom appears as the first visual section.
2. As the visitor scrolls, the bedroom transitions smoothly into the sitting room.
3. Continuing to scroll introduces the kitchen.
4. The bathroom follows.
5. Additional property features appear in their appropriate sequence.

Each transition should feel like moving through a carefully presented property tour.

### Animation requirements

- Use smooth scroll-driven transitions.
- Keep the main property image visually prominent.
- Introduce subtle zoom, fade, scale and positional transitions where appropriate.
- Ensure the transitions feel continuous.
- Avoid abrupt image replacements.
- Avoid flickering or white flashes.
- Avoid unnecessary image loading delays.
- Preload the next image where appropriate.
- Use appropriately optimized images.
- Maintain a consistent visual position during the scroll sequence.

### Information presentation

Each room should have:
- A clear room title.
- A short description where appropriate.
- Its corresponding photograph.
- A smooth transition into the next room.

The presentation should feel like an interactive digital property tour rather than an ordinary collection of static photographs.

### Important

Do not make every accommodation display the same gallery.

Each property's gallery must use its own correctly matched photographs.

If a property does not have enough verified photographs, use the available images without inventing missing rooms or misrepresenting another property.

# PHASE 5: CINEMATIC HOMEPAGE VIDEO BACKGROUND

Inside the Millie BNB folder, there is a video that I want integrated into the homepage.

Use that actual video as the homepage background.

I want a cinematic video-background experience inspired by the visual presentation of Sanity.io.

Reference: https://www.sanity.io/

Do not copy their website. Use it as inspiration for the immersive video presentation.

### Video background requirements

- Use the actual video supplied in Millie BNB.
- Make it play automatically when the homepage loads.
- It should be muted.
- Enable autoplay, loop and playsinline.
- Ensure it covers the intended hero background area.
- Preserve the video's aspect ratio.
- Use object-fit: cover where appropriate.
- Avoid stretching or distorting the video.
- Ensure it loads without causing unnecessary layout shifts.
- Use an appropriate poster image or fallback while the video loads.
- Add a subtle dark overlay if necessary to maintain text readability.

### Homepage presentation

The existing homepage content should remain visible above the video.

The following elements must remain readable:
- Milly Haven Homes branding.
- Main heading.
- Supporting description.
- Navigation.
- Call-to-action buttons.

The video should enhance the existing homepage rather than obscure its content.

### Performance requirements

- Optimize the video for web delivery.
- Avoid unnecessarily large video downloads.
- Use an appropriate compressed format supported by modern browsers.
- Consider responsive video behaviour.
- Prevent the video from interfering with scrolling or clicking.
- Provide a graceful fallback if autoplay is blocked.
- Respect prefers-reduced-motion settings.
- On mobile devices, use an appropriate fallback or optimized playback strategy.

Do not introduce a different stock video or an unrelated external video.

**Use the actual video from Millie BNB.**

# PHASE 6: ANIMATION PERFORMANCE AND RESPONSIVENESS

All restored and newly implemented animations must work together without compromising performance.

Inspect:
- CSS animation conflicts.
- JavaScript animation loops.
- Scroll event listeners.
- Component re-rendering.
- Animation library conflicts.
- Image loading.
- Video loading.
- Memory leaks.
- Layout shifts.
- Browser console errors.

Prioritize:
- Transform and opacity animations.
- requestAnimationFrame where appropriate.
- Proper cleanup of event listeners.
- Efficient scroll observation.
- Image preloading where beneficial.
- Lazy loading for content outside the initial viewport.

Ensure the website remains responsive on:
- Desktop.
- Tablets.
- Mobile devices.

Pay particular attention to the scroll-driven loft animation, which may need a different presentation on smaller screens.

Respect reduced-motion accessibility preferences.

# PHASE 7: DESIGN CONSISTENCY

Throughout this implementation:

- Preserve the existing Milly Haven Homes identity.
- Maintain the current typography.
- Maintain the existing colour palette.
- Preserve the current navigation and page structure.
- Avoid unnecessary redesigns.
- Keep transitions consistent.
- Avoid excessive animation.
- Maintain a premium, elegant accommodation presentation.

Every animation should have a purpose.

The website should feel smooth, sophisticated and intentional rather than overloaded with effects.

# PHASE 8: TESTING AND VERIFICATION

Do not declare the task complete immediately after writing the code.

Test the actual website.

### Homepage testing
- Reload the homepage.
- Confirm the logo spins.
- Confirm the loading bar moves.
- Confirm the homepage video plays.
- Confirm the existing content remains visible.
- Scroll through the loft storytelling section.
- Confirm the loft rises progressively.
- Confirm the left-side text changes at the correct scroll positions.

### Property testing
- Open 1B Loft.
- Confirm its primary photograph is correct.
- Scroll through the property.
- Confirm bedroom, sitting room, kitchen and bathroom transitions work.
- Verify that images belong to the correct property.
- Repeat the process for other accommodation listings.

### Navigation testing
- Navigate between pages.
- Confirm the loading animation works.
- Confirm the logo spins.
- Confirm the progress bar moves.
- Confirm there are no blank screens or broken transitions.

### Technical testing
- Check the browser console.
- Check for broken image paths.
- Check for missing video files.
- Check responsive behaviour.
- Check for layout shifts.
- Check for unnecessary network requests.
- Verify that existing website functionality has not been broken.

# IMPLEMENTATION SAFETY RULES

Before making changes:

1. Inspect the entire project structure.
2. Check the current Git status.
3. Identify existing animation components.
4. Identify the original loft scroll implementation.
5. Identify the loading animation implementation.
6. Locate and inspect the Millie BNB folder.
7. Identify the actual video file.
8. Map the available photographs to the existing properties.
9. Understand the current routing and component architecture.

Preserve existing work.

Do not overwrite unrelated components.

Do not delete original assets.

Do not replace working features unnecessarily.

Do not deploy the website without my explicit permission.

If you encounter missing files, ambiguous property images, or conflicting implementations, explain the issue instead of making unsupported assumptions.

# FINAL EXPECTATION

I want the final website to deliver three major experiences:

**1. Cinematic homepage:** A beautiful video background, with the original Milly Haven Homes branding and content presented elegantly.

**2. Interactive loft storytelling:** The loft progressively rises as visitors scroll, with the left-side text changing in synchronization. Restore the original behaviour.

**3. Immersive property tours:** Visitors can explore each accommodation through properly matched photographs and smooth transitions between bedrooms, sitting rooms, kitchens, bathrooms and other spaces.

Additionally, restore the original spinning logo and moving loading bar during reloads and page transitions.

This must be implemented carefully, with attention to the existing architecture, asset accuracy, animation performance and visual consistency.

Do not simply make the website look different. Restore what was lost, integrate the new assets intelligently, and elevate the overall experience.

**Before finishing, provide a concise implementation report listing:**
- Features successfully restored.
- New features implemented.
- Millie BNB images mapped to each property.
- Video file selected and its homepage implementation.
- Files and components modified.
- Any outstanding issues.
- Tests performed and their results.

Only report features as completed after verifying them in the running website.

1. The rising loft animation

This should be a scroll-controlled storytelling experience, not a collection of ordinary animations. The text and loft movement must be synchronized.












2. The cinematic homepage

The video should occupy the hero background, with the existing website content layered above it. It must not slow down the initial page experience.












3. The property tours

Each accommodation should feel like its own carefully curated visual experience. Correct image matching is more important than filling every gallery.
