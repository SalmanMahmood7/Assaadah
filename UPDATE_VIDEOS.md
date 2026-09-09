# How to Update YouTube Videos

## Quick Instructions

To add your actual YouTube videos from https://youtube.com/@assadahofficial123:

1. **Open your YouTube channel**: https://youtube.com/@assadahofficial123
2. **Click on any video** you want to add
3. **Copy the video ID** from the URL:
   - Look at the URL: `https://www.youtube.com/watch?v=XXXXX`
   - The video ID is the part after `v=` (shown as XXXXX above)
4. **Update the file**: `/components/YouTubeSection.js`
5. **Replace** `VIDEO_ID_1`, `VIDEO_ID_2`, etc. with your actual video IDs

## Example

If your video URL is:
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

Then your video ID is: `dQw4w9WgXcQ`

In the code, change:
```javascript
{
  id: "1",
  videoId: "VIDEO_ID_1", // ← Change this
  title: "Your Video Title"
}
```

To:
```javascript
{
  id: "1",
  videoId: "dQw4w9WgXcQ", // ← Like this
  title: "Your Video Title"
}
```

## Video List Template

Here's the structure for each video:

```javascript
const videos = [
  {
    id: "1",
    videoId: "YOUR_VIDEO_ID_HERE",
    title: "Your Video Title Here"
  },
  // Add more videos...
];
```

## Features

Once you add your video IDs, the website will:
- ✅ Automatically fetch thumbnails from YouTube
- ✅ Display videos in an auto-scrolling carousel
- ✅ Show video titles on hover
- ✅ Link to your videos when clicked
- ✅ Apply your orange theme color (#cd871f)

## Need Help?

The website currently shows a helpful placeholder with instructions until you add real video IDs.