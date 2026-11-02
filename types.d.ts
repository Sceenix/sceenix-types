export type DeviceType = 'None' | 'MacBookPro' | 'iPhone18ProMax' | 'iPadProPortrait' | 'iPadProLandscape' | 'GalaxyS26' | 'GalaxyTab' | 'WindowsLaptop';
export type DeviceProperties = {
    width: number;
    height: number;
    name: string;
    videoScaleFactor: number;
    isMobile: boolean;
};
export declare const Devices: Record<Exclude<DeviceType, 'None'>, DeviceProperties>;
export type VerticalAlignment = 'top' | 'center' | 'bottom';
export type SidebarPosition = 'left' | 'right';
export type WatermarkPosition = 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center-center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'canvas-top-left' | 'canvas-top-center' | 'canvas-top-right' | 'canvas-center-left' | 'canvas-center-center' | 'canvas-center-right' | 'canvas-bottom-left' | 'canvas-bottom-center' | 'canvas-bottom-right';
export interface SidebarConfig {
    position?: SidebarPosition;
    width?: number;
    color?: string;
    animateOnGaps?: boolean;
    transitionDuration?: number;
}
export interface CanvasConfig {
    color?: string;
    width?: number;
    height?: number;
}
export interface TextBlock {
    text: string;
    fontSize: number;
    fontColor?: string;
    isBold?: boolean;
}
export interface Scene {
    blocks: TextBlock[];
    start: number;
    end: number;
    sidebarColor?: string;
}
export interface WatermarkConfig {
    enabled: boolean;
    imageUrl?: string;
    imageScaleFactor?: number;
    position?: WatermarkPosition;
    margin?: number;
    opacity?: number;
}
export interface VanityOutroConfig {
    enabled: boolean;
    imageScaleFactor: number;
    duration: number;
}
export interface YouTubeChaptersConfig {
    enabled: boolean;
    path: string;
}
export interface SubtitleTrackConfig {
    filePath: string;
    language?: string;
    title?: string;
    isDefault?: boolean;
}
export interface JobConfig {
    videoFile: string;
    voiceoverFile?: string;
    musicFile?: string;
    musicVolume?: number;
    voiceVolume?: number;
    chaptersFilePath?: string;
    generateYouTubeChapters?: YouTubeChaptersConfig;
    subtitles?: SubtitleTrackConfig[];
    deviceType: DeviceType;
    outputFile: string;
    scenes?: Scene[];
    captionAlign?: VerticalAlignment;
    sidebar?: SidebarConfig;
    canvas?: CanvasConfig;
    sceenixWatermark?: WatermarkConfig;
    applicationWatermark?: WatermarkConfig;
    vanityOutro?: VanityOutroConfig;
}
