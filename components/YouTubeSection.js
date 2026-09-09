import { useState, useEffect, useRef } from 'react';
import supabase from '../lib/supabaseClient';

function extractYouTubeId(url) {
  if (!url) return null;
  const match = url.match(/(?:v=|youtu\.be\/)([\w-]{6,})/);
  return match ? match[1] : url;
}

// IMPORTANT: To add your actual videos from https://www.youtube.com/@assaadah-offcial
// 1. Go to your channel
// 2. Click on a video
// 3. Copy the video ID from the URL (the part after "v=")
// 4. Replace the videoId below
// Example: If URL is https://www.youtube.com/watch?v=abc123xyz
// Then videoId is: abc123xyz

const FALLBACK_VIDEOS = [
    {
      id: "1",
      videoId: "qsKcLtGzPpI", // Real video from As-Sa'adah channel
      title: "As-Sa'adah Introduction"
    },
    {
      id: "2", 
      videoId: "PQ1CmWGAUck", // Real video from As-Sa'adah channel
      title: "Free Digital Education Program"
    },
    {
      id: "3",
      videoId: "OT_ew0Gh8Hc", // Real video from As-Sa'adah channel
      title: "Community Bootcamp Session"
    },
    {
      id: "4",
      videoId: "91PhCsCa1fk", // Real video from As-Sa'adah channel (YouTube Shorts)
      title: "Student Success Stories"
    },
    {
      id: "5",
      videoId: "VIDEO_ID_5", // Replace with actual video ID
      title: "Web Development Training"
    },
    {
      id: "6",
      videoId: "VIDEO_ID_6", // Replace with actual video ID
      title: "Python Programming Course"
    },
    {
      id: "7",
      videoId: "VIDEO_ID_7", // Replace with actual video ID
      title: "Career Development Workshop"
    },
    {
      id: "8",
      videoId: "VIDEO_ID_8", // Replace with actual video ID
      title: "Mobile App Development"
    },
    {
      id: "9",
      videoId: "VIDEO_ID_9", // Replace with actual video ID
      title: "Data Science Fundamentals"
    },
    {
      id: "10",
      videoId: "VIDEO_ID_10", // Replace with actual video ID
      title: "AI and Machine Learning Basics"
    },
    {
      id: "11",
      videoId: "VIDEO_ID_11", // Replace with actual video ID
      title: "Cybersecurity Awareness"
    },
    {
      id: "12",
      videoId: "VIDEO_ID_12", // Replace with actual video ID
      title: "Cloud Computing Introduction"
    },
    {
      id: "13",
      videoId: "VIDEO_ID_13", // Replace with actual video ID
      title: "Database Management Systems"
    },
    {
      id: "14",
      videoId: "VIDEO_ID_14", // Replace with actual video ID
      title: "UI/UX Design Principles"
    },
    {
      id: "15",
      videoId: "VIDEO_ID_15", // Replace with actual video ID
      title: "Digital Marketing Basics"
    },
    {
      id: "16",
      videoId: "VIDEO_ID_16", // Replace with actual video ID
      title: "Final Project Showcase"
    }
];

export default function YouTubeSection() {
  const carouselRef = useRef(null);
  const [videos, setVideos] = useState(FALLBACK_VIDEOS);

  useEffect(() => {
    supabase
      .from('videos')
      .select('*')
      .eq('placement', 'Homepage')
      .order('display_order', { ascending: true })
      .then(({ data, error }) => {
        if (error || !data || data.length === 0) return;
        setVideos(
          data.map((row, index) => ({
            id: String(row.id ?? index),
            videoId: extractYouTubeId(row.videoUrl),
            title: row.title
          }))
        );
      });
  }, []);

  // Filter out placeholder videos (you can remove this once you add real video IDs)
  const validVideos = videos.filter(video => video.videoId && !video.videoId.includes('VIDEO_ID'));
  const displayVideos = validVideos.length > 0 ? validVideos : videos;

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId;
    let position = 0;
    const speed = 1; // pixels per frame
    const slideWidth = 255; // 250px width + 5px margin
    const totalWidth = displayVideos.length * slideWidth;

    const animate = () => {
      position -= speed;
      
      // Reset position when first set of videos is out of view
      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }
      
      carousel.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      if (carousel) {
        carousel.removeEventListener('mouseenter', handleMouseEnter);
        carousel.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [displayVideos.length]);

  return (
    <section className="youtube-section">
      <div className="youtube-container">
        <div className="youtube-content">
          <div className="youtube-text-container">
            <div className="text-container">
              <span className="text-front">Watch Our Videos</span>
            </div>
            <p className="youtube-description">
              Dive into a collection of insightful videos that provide knowledge, inspiration, and practical guidance for learners of all levels.
            </p>
            <a 
              href="https://www.youtube.com/@assaadah-offcial" 
              className="youtube-watch-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Now
            </a>
          </div>
          
          <div className="youtube-carousel-wrapper">
            {validVideos.length === 0 ? (
              <div className="youtube-placeholder">
                <div className="placeholder-content">
                  <h3>📺 Ready to Display Your Videos!</h3>
                  <p>To add your YouTube videos:</p>
                  <ol>
                    <li>Go to <a href="https://www.youtube.com/@assaadah-offcial" target="_blank" rel="noopener noreferrer">your channel</a></li>
                    <li>Click on any video</li>
                    <li>Copy the video ID from the URL (after v=)</li>
                    <li>Update the videoId in YouTubeSection.js</li>
                  </ol>
                  <p className="example">
                    Example: If your video URL is:<br/>
                    <code>https://www.youtube.com/watch?v=dQw4w9WgXcQ</code><br/>
                    Then your video ID is: <code>dQw4w9WgXcQ</code>
                  </p>
                </div>
              </div>
            ) : (
              <div className="youtube-carousel-container">
                <div className="youtube-carousel" ref={carouselRef}>
                  {/* Duplicate videos array for seamless infinite scroll */}
                  {[...displayVideos, ...displayVideos].map((video, index) => (
                    <div data-aos="fade-up" data-aos-delay={Math.min(index * 80, 400)} key={`${video.id}-${index}`} className="youtube-slide">
                      <a 
                        href={`https://www.youtube.com/watch?v=${video.videoId}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="youtube-slide-link"
                        title={video.title}
                      >
                        <img 
                          src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                          alt={video.title}
                          className="youtube-thumbnail"
                          loading="lazy"
                          onError={(e) => {
                            // Try different thumbnail qualities
                            if (e.target.src.includes('mqdefault')) {
                              e.target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                            } else if (e.target.src.includes('hqdefault')) {
                              e.target.src = `https://img.youtube.com/vi/${video.videoId}/default.jpg`;
                            } else {
                              // Final fallback - placeholder image
                              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWEzZDBmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFzLXNhYWRhaCBWaWRlbzwvdGV4dD48L3N2Zz4=';
                            }
                          }}
                        />
                        <div className="youtube-play-overlay">
                          <svg className="youtube-play-icon" viewBox="0 0 68 48" width="68" height="48">
                            <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#1a472a"/>
                            <path d="M 45,24 27,14 27,34" fill="#FFFFFF"/>
                          </svg>
                        </div>
                        <div className="video-title-overlay">
                          <span>{video.title}</span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .youtube-section {
          background: #ffffff;
        }

        .youtube-placeholder {
          background: white;
          border-radius: 15px;
          padding: 3rem;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          border: 2px dashed #1a472a;
        }
        
        .placeholder-content {
          text-align: center;
        }
        
        .placeholder-content h3 {
          color: #1a472a;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .placeholder-content ol {
          text-align: left;
          max-width: 400px;
          margin: 1rem auto;
        }
        
        .placeholder-content li {
          margin: 0.5rem 0;
          color: #666;
        }
        
        .placeholder-content a {
          color: #1a472a;
          text-decoration: underline;
        }
        
        .example {
          background: #f5f5f5;
          padding: 1rem;
          border-radius: 8px;
          margin-top: 1rem;
          font-size: 0.9rem;
          text-align: left;
        }
        
        .example code {
          background: #1a472a;
          color: white;
          padding: 2px 6px;
          border-radius: 3px;
          font-family: monospace;
        }
        
        .youtube-play-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.9;
          transition: all 0.3s ease;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.5));
        }
        
        .youtube-slide-link {
          position: relative;
          display: block;
          overflow: hidden;
          border-radius: 8px;
        }
        
        .youtube-thumbnail {
          width: 250px;
          height: 250px;
          object-fit: cover;
          border: 3px solid #1a472a;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .video-title-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          color: white;
          padding: 1rem 0.5rem 0.5rem;
          font-size: 0.85rem;
          font-weight: 500;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        \n        /* Mobile responsive styles */\n        @media (max-width: 991px) {\n          .youtube-content {\n            flex-direction: column;\n            gap: 2rem;\n            text-align: center;\n          }\n          \n          .youtube-text-container {\n            max-width: 100%;\n          }\n          \n          .youtube-carousel-wrapper {\n            max-width: 100%;\n            width: 100%;\n          }\n        }\n        \n        @media (max-width: 768px) {\n          .youtube-placeholder {\n            padding: 2rem;\n          }\n          \n          .placeholder-content h3 {\n            font-size: 1.3rem;\n          }\n          \n          .placeholder-content ol {\n            max-width: 100%;\n          }\n          \n          .youtube-thumbnail {\n            height: 200px;\n          }\n        }\n        \n        @media (max-width: 480px) {\n          .youtube-placeholder {\n            padding: 1.5rem;\n          }\n          \n          .placeholder-content h3 {\n            font-size: 1.2rem;\n          }\n          \n          .youtube-thumbnail {\n            height: 180px;\n          }\n          \n          .youtube-play-icon {\n            width: 50px;\n            height: 35px;\n          }\n        }\n      `}</style>
    </section>
  );
}
