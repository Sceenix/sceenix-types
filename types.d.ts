/**
 * Supported device types for rendering video mockups and frames.
 * Selecting a device configures default dimensions, scaling, and mobile flags.
 */
export type DeviceType = 'None' | 'MacBookPro' | 'iPhone18ProMax' | 'iPadProPortrait' | 'iPadProLandscape' | 'GalaxyS26' | 'GalaxyTab' | 'WindowsLaptop';
/**
 * Physical and rendering properties associated with a specific device type.
 */
export type DeviceProperties = {
    /** The native width of the device frame in pixels */
    width: number;
    /** The native height of the device frame in pixels */
    height: number;
    /** The standard identifier string used for layout and rendering assets */
    name: string;
    /** The video scaling factor applied for high-DPI rendering */
    videoScaleFactor: number;
    /** Flag indicating whether the device is a mobile form factor */
    isMobile: boolean;
};
/**
 * A mapping of valid devices (excluding 'None') to their corresponding physical and rendering properties.
 */
export declare const Devices: Record<Exclude<DeviceType, 'None'>, DeviceProperties>;
/** Controls the vertical alignment of elements (e.g., text blocks inside a container). */
export type VerticalAlignment = 'top' | 'center' | 'bottom';
/** Specifies which side of the screen the sidebar is positioned on. */
export type SidebarPosition = 'left' | 'right';
/**
 * Precise alignment positions for watermarks and branding elements.
 * Supports standard inner alignments as well as full canvas-relative positions.
 */
export type WatermarkPosition = 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center-center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'canvas-top-left' | 'canvas-top-center' | 'canvas-top-right' | 'canvas-center-left' | 'canvas-center-center' | 'canvas-center-right' | 'canvas-bottom-left' | 'canvas-bottom-center' | 'canvas-bottom-right';
/** Configuration options for the video sidebar layout and behavior. */
export interface SidebarConfig {
    /** The side of the screen where the sidebar is rendered */
    position?: SidebarPosition;
    /** The width of the sidebar in pixels (can be 0 to hide or collapse) */
    width?: number;
    /** Default sidebar color code (e.g., '0xDC143C' or '0x1e1e2f') */
    color?: string;
    /** Automatically push sidebar in or out when captions have long timestamp gaps (default: true) */
    animateOnGaps?: boolean;
    /** The push-in / push-out transition duration in seconds (default: 0.6) */
    transitionDuration?: number;
}
/** Configuration options for the main output canvas dimensions and background. */
export interface CanvasConfig {
    /** Customizable canvas background color code (e.g., hex or color name) */
    color?: string;
    /** Customizable output width in pixels (e.g., 3840 for 4K or 1080 for shorts) */
    width?: number;
    /** Customizable output height in pixels (e.g., 2160 for 4K or 1920 for shorts) */
    height?: number;
}
/** Configuration for background music tracks accompanying the video. */
export interface MusicConfig {
    /** Optional background music audio file path (omit if not needed) */
    file?: string;
    /** Background music volume level from 0.0 to 1.0 (default: 0.25) */
    volume?: number;
}
/** Represents an individual styled piece of text within a caption block. */
export interface TextBlock {
    /** The text content to display */
    text: string;
    /** Font size in pixels */
    fontSize: number;
    /** Font color, supports hex/names with optional opacity (e.g., 'white' or 'white@0.8') */
    fontColor?: string;
    /** Whether the text should be rendered in a bold weight */
    isBold?: boolean;
    /** Optional custom font file path (.ttf, .otf) */
    fontFilePath?: string;
}
/** Represents a timed caption segment shown in the sidebar or video. */
export interface Caption {
    /** Array of text blocks making up the caption line */
    blocks: TextBlock[];
    /** Start timestamp of the caption in seconds */
    start: number;
    /** End timestamp of the caption in seconds */
    end: number;
    /** Optional per-scene custom sidebar color override (e.g., '0x1e1e2f' or '0x0f3d3e') */
    sidebarColor?: string;
}
/** Configuration options for rendering a watermark or logo overlay. */
export interface WatermarkConfig {
    /** Master switch to enable or disable this watermark */
    enabled: boolean;
    /** URL or local file path to the watermark image */
    imageUrl?: string;
    /** Scaling factor applied to resize the watermark image */
    imageScaleFactor?: number;
    /** Positioning preset from the available WatermarkPosition options */
    position?: WatermarkPosition;
    /** The margin distance from the edge in pixels */
    margin?: number;
    /** Opacity level of the watermark ranging from 0.0 (fully transparent) to 1.0 (fully opaque) */
    opacity?: number;
}
/** Configuration for a branded outro screen displayed at the end of the video. */
export interface VanityOutroConfig {
    /** Enable or disable the vanity outro screen */
    enabled: boolean;
    /** Scaling factor for the outro branding image/logo */
    imageScaleFactor: number;
    /** Total duration of the outro screen in seconds (e.g., 3) */
    duration: number;
}
/** Configuration for automatically exporting YouTube chapter timestamps. */
export interface YouTubeChaptersConfig {
    /** Enable or disable YouTube chapters generation */
    enabled: boolean;
    /** Destination file path where the generated YouTube chapters text file will be saved */
    path: string;
}
/** Configuration for embedding multi-language subtitle tracks. */
export interface SubtitleTrackConfig {
    /** Path to the UTF-8 encoded .srt subtitle file */
    filePath: string;
    /** ISO 639-2 3-letter language code: e.g., 'eng' (English), 'fra' (French), 'spa' (Spanish), 'jpn' (Japanese) */
    language?: string;
    /** Optional human-readable display label in the video player (e.g., 'Français', 'Español', '日本語') */
    title?: string;
    /** Whether this subtitle track should be selected by default when subtitles are enabled */
    isDefault?: boolean;
}
/** Configuration container for sidebar captions and alignment. */
export interface CaptionConfig {
    /** Optional list of timed sidebar caption objects (defaults to []) */
    items?: Caption[];
    /** Vertical alignment of the captions within the sidebar container */
    align?: VerticalAlignment;
}
/**
 * Root configuration object defining a complete video rendering and packaging job.
 */
export interface JobConfig {
    /** Source video file path (.webm or .mp4) */
    videoFile: string;
    /** Optional voiceover audio file path (omit if not needed) */
    voiceoverFile?: string;
    /** Optional background music configuration settings */
    music?: MusicConfig;
    /** Voiceover volume multiplier/boost level (default: 1.5) */
    voiceVolume?: number;
    /** Optional FFmpeg chapters metadata input file (;FFMETADATA1 format) */
    chaptersFilePath?: string;
    /** Optional configuration for generating YouTube-compatible chapter files */
    generateYouTubeChapters?: YouTubeChaptersConfig;
    /** Optional array of multi-language .srt subtitle tracks (e.g., French, Spanish, Japanese) */
    subtitles?: SubtitleTrackConfig[];
    /** The target device frame type to wrap around the video content */
    deviceType: DeviceType;
    /** File path for the final rendered output video */
    outputFile: string;
    /** Optional configuration for sidebar captions */
    captions?: CaptionConfig;
    /** Optional configuration for the video sidebar layout */
    sidebar?: SidebarConfig;
    /** Optional configuration for the background canvas */
    canvas?: CanvasConfig;
    /** Optional center watermark / overlay object supporting 18 placement positions */
    sceenixWatermark?: WatermarkConfig;
    /** Optional corner branding logo object supporting 18 placement positions */
    applicationWatermark?: WatermarkConfig;
    /** Optional branded outro screen configuration with smooth transition fade */
    vanityOutro?: VanityOutroConfig;
}
/**
 * Configuration parameters for generating and stitching composite voiceover audio files.
 */
export interface VoiceoverGenerateConfig {
    /** An ordered list of individual voice recording file paths used to build the composite voiceover */
    voiceFiles: string[];
    /** Destination file path to save the generated composite .ogg audio file (including extension) */
    saveTo: string;
}
/**
 * Configuration parameters for automatically generating synchronized subtitles from voice recordings.
 */
export interface SubtitleGenerateConfig {
    /** An ordered list of voice recording file paths used as the source for subtitle transcription */
    voiceFiles: string[];
    /** Destination file path to save the generated .srt subtitle file (including extension) */
    saveTo: string;
    /** The full human-readable language name (e.g., 'English', 'French', 'Spanish', 'Japanese', etc.) */
    language: string;
}
