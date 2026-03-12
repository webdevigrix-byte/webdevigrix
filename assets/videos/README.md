# Videos Folder

Place your video assets here for the Igrix website.

## Recommended Videos:

- **hero-background.mp4** - Subtle background video for hero section (1920x1080px, 10-30 seconds)
- **demo-reel.mp4** - Portfolio showcase video
- **testimonial-video.mp4** - Client testimonial videos
- **process-animation.mp4** - Development process animations

## Video Optimization Tips:

1. Keep videos under 5MB for background videos
2. Use MP4 format (H.264 codec) for best compatibility
3. Compress videos using HandBrake or similar tools
4. Provide poster images (first frame) for faster loading
5. Consider using video hosting (YouTube, Vimeo) for longer videos
6. Add WebM format as fallback for better compression

## Usage Example:

```html
<!-- Hero Background Video -->
<video autoplay muted loop playsinline class="video-bg">
    <source src="assets/videos/hero-background.mp4" type="video/mp4">
    <source src="assets/videos/hero-background.webm" type="video/webm">
</video>
```

## Performance Notes:

- Background videos should be subtle and not distract from content
- Always include `muted` attribute for autoplay to work
- Use `playsinline` for mobile compatibility
- Consider lazy loading for videos below the fold
- Provide fallback images for slow connections
