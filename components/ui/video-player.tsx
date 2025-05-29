'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  src: string;
  title: string;
  description: string;
  className?: string;
}

export function VideoPlayer({
  src,
  title,
  description,
  className,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [supportsFullscreen, setSupportsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if fullscreen is supported
    if (typeof document !== 'undefined') {
      const hasFullscreenAPI = !!(
        document.fullscreenEnabled ||
        (document as any).webkitFullscreenEnabled ||
        (document as any).mozFullScreenEnabled ||
        (document as any).msFullscreenEnabled
      );
      setSupportsFullscreen(hasFullscreenAPI);
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    try {
      if (document.fullscreenElement) {
        // Exit fullscreen
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          (document as any).webkitExitFullscreen();
        } else if ((document as any).mozCancelFullScreen) {
          (document as any).mozCancelFullScreen();
        } else if ((document as any).msExitFullscreen) {
          (document as any).msExitFullscreen();
        }
      } else {
        // Enter fullscreen with browser compatibility
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if ((video as any).webkitRequestFullscreen) {
          (video as any).webkitRequestFullscreen();
        } else if ((video as any).webkitEnterFullscreen) {
          // iOS Safari specific
          (video as any).webkitEnterFullscreen();
        } else if ((video as any).mozRequestFullScreen) {
          (video as any).mozRequestFullScreen();
        } else if ((video as any).msRequestFullscreen) {
          (video as any).msRequestFullscreen();
        } else {
          // Fallback: open video in new tab for mobile browsers that don't support fullscreen
          window.open(video.src, '_blank');
        }
      }
    } catch (error) {
      console.warn('Fullscreen not supported on this device/browser:', error);
      // Fallback: open video in new tab
      window.open(video.src, '_blank');
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && videoRef.current) {
      const progressRect = progressRef.current.getBoundingClientRect();
      const clickPositionInPixels = event.clientX - progressRect.left;
      const clickPositionInPercentage =
        clickPositionInPixels / progressRect.width;
      const newTime = videoRef.current.duration * clickPositionInPercentage;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only toggle play if the click is directly on the overlay div itself,
    // and not on any of its children (like control buttons or the progress bar).
    if (e.target === e.currentTarget) {
      togglePlay();
    }
  };

  return (
    <div className={cn('space-y-4', className)}>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div
        className="relative group rounded-lg overflow-hidden bg-black shadow-lg"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(isPlaying ? false : true)}
      >
        <video
          ref={videoRef}
          className="w-full h-auto"
          preload="metadata"
          muted={isMuted}
          playsInline
          onEnded={handleVideoEnd}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          poster={`${src.replace('.mp4', '-poster.jpg')}`}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Controls Overlay */}
        <div
          className={cn(
            'absolute inset-0 bg-black/20 transition-opacity duration-300',
            showControls || !isPlaying ? 'opacity-100' : 'opacity-0',
          )}
          onClick={handleOverlayClick}
        >
          {/* Center Play Button */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                onClick={togglePlay}
                size="lg"
                className="rounded-full w-16 h-16 bg-white/90 hover:bg-white text-black hover:scale-110 transition-all"
              >
                <Play className="w-6 h-6 ml-1" />
              </Button>
            </div>
          )}

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  onClick={togglePlay}
                  size="sm"
                  variant="secondary"
                  className="rounded-full bg-white/90 hover:bg-white text-black"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 ml-0.5" />
                  )}
                </Button>

                <Button
                  onClick={toggleMute}
                  size="sm"
                  variant="secondary"
                  className="rounded-full bg-white/90 hover:bg-white text-black"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </Button>
                <span className="text-xs font-medium text-white">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              {supportsFullscreen && (
                <Button
                  onClick={toggleFullscreen}
                  size="sm"
                  variant="secondary"
                  className="rounded-full bg-white/90 hover:bg-white text-black"
                >
                  <Maximize2 className="w-4 h-4" />
                </Button>
              )}
            </div>
            {/* Progress Bar */}
            <div
              ref={progressRef}
              onClick={handleProgressClick}
              className="w-full h-2 bg-[var(--muted)] rounded-full mt-2 cursor-pointer group"
            >
              <div
                style={{ width: `${(currentTime / duration) * 100}%` }}
                className="h-full bg-[var(--primary)] rounded-full transition-all duration-150 ease-linear group-hover:bg-[var(--ring)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
