export class Wallpaper {
  constructor(init?: Partial<Wallpaper>) {
    Object.assign(this, init);
  }
  dir?: string;
  fileName?: string;
  fileUrl?: string;
  filePath?: string;
  coverUrl?: string;
  meta: WallpaperMeta = new WallpaperMeta();
  setting: WallpaperSetting = new WallpaperSetting();
  runningInfo: WallpaperRunningInfo = new WallpaperRunningInfo();
  static getFileType(path?: string | null): "img" | "video" | "app" | "playlist" | null {
    if (!path)
      return null;
    //根据后缀名返回 img/video
    const imgExt = [".jpg", ".jpeg", ".bmp", ".png", ".jfif", ".avif"];
    const videoExt = [".mp4", ".flv", ".blv", ".avi", ".mov", ".webm", ".mkv"];
    const webExt = [".html", ".htm"];
    const appExt = [".exe"];
    const animatedImgExt = [".gif", ".webp"];
    const playlistExt = [".playlist"];
    const ext = path.substring(path.lastIndexOf(".")).toLowerCase();
    if (imgExt.includes(ext))
      return "img";
    if (videoExt.includes(ext))
      return "video";
    if (appExt.includes(ext))
      return "app";
    if (playlistExt.includes(ext))
      return "playlist";

    return null;
  }

  //是否包含传入的fileUrl
  static isSame(wallpaper: Wallpaper, targetWallpaper?: Wallpaper | null): boolean {
    if (!wallpaper || !wallpaper.fileUrl || !targetWallpaper)
      return false;
    const fileUrl = targetWallpaper.fileUrl;
    if (WallpaperMeta.isPlaylist(wallpaper.meta)) {
      return wallpaper.meta.wallpapers?.some(w => w.fileUrl === fileUrl) || false;
    }
    return wallpaper.fileUrl === fileUrl;
  }

  //查找真正播放的wallpaper
  static findPlayingWallpaper(wallpaper: Wallpaper): Wallpaper {
    if (!WallpaperMeta.isPlaylist(wallpaper.meta))
      return wallpaper;
    const wallpapers = wallpaper.meta.wallpapers;
    if (!wallpapers || wallpapers.length === 0)
      return wallpaper;
    const index = wallpaper.meta.playIndex || 0;
    return wallpapers[index];
  }

  //查找fileUrl匹配的wallpaper
  static findWallpaperByFileUrl(wallpapers: Wallpaper, fileUrl: string): Wallpaper | null {
    if (!wallpapers || !fileUrl)
      return null;
    if (wallpapers.fileUrl === fileUrl)
      return wallpapers;
    if (WallpaperMeta.isPlaylist(wallpapers.meta)) {
      return wallpapers.meta.wallpapers?.find(w => w.fileUrl === fileUrl) || null;
    }
    return null;
  }
};

export enum WallpaperType {
  NotSupported,
  Img,
  AnimatedImg,
  Video,
  Web,
  Exe,
  Playlist
};

export class WallpaperMeta {
  id?: string;
  title?: string;
  description?: string;
  cover?: string;
  author?: string;
  authorID?: string;
  createTime?: Date;
  updateTime?: Date;
  type?: WallpaperType;
  playIndex?: number = 0;
  wallpapers?: Wallpaper[] = [];
  static isPlaylist(meta: WallpaperMeta | undefined): boolean {
    return meta?.type === WallpaperType.Playlist;
  }
  
  constructor(init?: Partial<WallpaperMeta>) {
    Object.assign(this, init);
  }
};

export enum Fit {
  Center = 0,
  Tile,
  Stretch,
  Fit,
  Fill,
  Span,
}

export enum VideoPlayer {
  Default_Player,
  MPV_Player,
  System_Player
}
export enum PlayMode {
  //顺序播放
  Order,
  //随机播放
  Random,
  //定时切换
  Timer
}
export class WallpaperSetting {
  constructor(init?: Partial<WallpaperSetting>) {
    Object.assign(this, init);
  }
  //播放时长
  duration?: string;
  // exe||web
  enableMouseEvent: boolean = true;
  // video
  hardwareDecoding: boolean = true;
  isPanScan: boolean = true;
  videoPlayer: VideoPlayer = VideoPlayer.Default_Player;
  // volume: number = 0;
  // playlist
  playMode: PlayMode = PlayMode.Order;
  // img
  fit: Fit = Fit.Center;
  keepWallpaper: boolean = true;
};

export class WallpaperRunningInfo {
  screenIndexes: number[] = [];
  isPaused?: boolean = false;
}

export function getWallpaperTypeString(dictionary: any, type?: WallpaperType) {
  let key;
  switch (type) {
    case WallpaperType.Img:
      key = 'img';
      break;
    case WallpaperType.Video:
      key = 'video';
      break;
    case WallpaperType.Playlist:
      key = 'playlist';
      break;
  }
  if (!key) return '';
  return dictionary["local"][`wallpaper_type_${key}`];
}
