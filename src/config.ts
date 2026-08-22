import type {
	AnnouncementConfig,
	CommentConfig,
	ExpressiveCodeConfig,
	FooterConfig,
	FullscreenWallpaperConfig,
	LicenseConfig,
	MusicPlayerConfig,
	NavBarConfig,
	PermalinkConfig,
	ProfileConfig,
	RandomPostsConfig,
	RelatedPostsConfig,
	SakuraConfig,
	ShareConfig,
	SidebarLayoutConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

// 定义站点语言与时区
const SITE_LANG = "zh_CN";
const SITE_TIMEZONE = 8;

export const siteConfig: SiteConfig = {
	title: "CPer's Blog",
	subtitle: "技术分享与实践",
	siteURL: "https://blog.510904.xyz",
	siteStartDate: "2025-12-18",
	timeZone: SITE_TIMEZONE,
	lang: SITE_LANG,

	themeColor: {
		hue: 200,
		fixed: false,
	},

	// 【保留特色功能】所有特色页面开关均已开启
	featurePages: {
		anime: true, // 番剧页面
		diary: true, // 日记页面
		friends: true, // 友链页面
		projects: true, // 项目页面
		skills: true, // 技能页面
		timeline: true, // 时间线页面
		albums: true, // 相册页面
		devices: true, // 设备页面
	},

	navbarTitle: {
		mode: "text-icon",
		text: "CPer's Blog",
		icon: "assets/home/home.png",
		logo: "assets/home/default-logo.webp",
	},

	pageScaling: {
		enable: true,
		targetWidth: 2000,
	},

	bangumi: {
		userId: "sai",
		fetchOnDev: false,
	},

	bilibili: {
		vmid: "604160647", // 在此处设置你的Bilibili用户ID (uid)，例如 "1129280784"
		fetchOnDev: true, // 是否在开发环境下获取 Bilibili 数据（默认 false）
		coverMirror: "", // 封面图片镜像源（可选，如果需要使用镜像源，例如 "https://images.weserv.nl/?url="）
		useWebp: true, // 是否使用WebP格式（默认 true）
	},

	// 番剧模式选择
	anime: {
		mode: "bilibili", // 番剧页面模式："bangumi" 使用Bangumi API，"local" 使用本地配置，"bilibili" 使用Bilibili API
	},
	postListLayout: {
		defaultMode: "list",
		allowSwitch: true,
		categoryBar: {
			enable: true,
		},
	},

	tagStyle: {
		useNewStyle: false,
	},

	wallpaperMode: {
		defaultMode: "banner",
		showModeSwitchOnMobile: "both",
	},

	banner: {
		src: {
			desktop: ["https://t.alcy.cc/ycy"],
			mobile: ["https://t.alcy.cc/ycy"],
		},
		position: "center",
		carousel: {
			enable: true,
			interval: 15,
		},
		waves: {
			enable: true,
			performanceMode: false,
			mobileDisable: false,
		},
		imageApi: {
			enable: false,
			url: "http://domain.com/api_v2.php?format=text&count=4",
		},
		homeText: {
			enable: true,
			title: " “Hello world”",
			subtitle: [
				"特別なことはないけど、君がいると十分です",
				"今でもあなたは私の光",
				"君ってさ、知らないうちに我的每天になってたよ",
				"君と话すと、なんか毎日がちょっと楽しくなるんだ",
				"今日はなんでもない日。でも、ちょっとだけいい日",
			],
			typewriter: {
				enable: true,
				speed: 100,
				deleteSpeed: 50,
				pauseTime: 2000,
			},
		},
		credit: {
			enable: false,
			text: "Describe",
			url: "",
		},
		navbar: {
			transparentMode: "semifull",
		},
	},
	toc: {
		enable: true,
		mobileTop: true,
		desktopSidebar: true,
		floating: true,
		depth: 2,
		useJapaneseBadge: true,
	},
	showCoverInContent: true,
	generateOgImages: false,
	favicon: [],

	font: {
		asciiFont: {
			fontFamily: "ZenMaruGothic-Medium",
			fontWeight: "400",
			localFonts: ["ZenMaruGothic-Medium.ttf"],
			enableCompress: true,
		},
		cjkFont: {
			fontFamily: "loli",
			fontWeight: "500",
			localFonts: ["loli.ttf"],
			enableCompress: true,
		},
	},
	showLastModified: true,
	pageProgressBar: {
		enable: true,
		height: 3,
		duration: 6000,
	},
	thirdPartyAnalytics: {
		enable: false,
		clarityId: "",
	},
};

export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	src: {
		desktop: ["https://eopfapi.acofork.com/pic?img=ua"],
		mobile: ["https://eopfapi.acofork.com/pic?img=ua"],
	},
	position: "center",
	carousel: {
		enable: true,
		interval: 5,
	},
	zIndex: -1,
	opacity: 0.8,
	blur: 1,
};

// 【顶栏配置】已保留特色功能链接并修复图标前缀
export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "我的",
			url: "#",
			icon: "material-symbols:person",
			children: [
				{
					name: "我的追番",
					url: "/anime/",
					icon: "material-symbols:movie",
				},
				{
					name: "我的日记",
					url: "/diary/",
					icon: "material-symbols:book",
				},
				{
					name: "我的相册",
					url: "/albums/",
					icon: "material-symbols:photo-library",
				},
				{
					name: "我的设备",
					url: "/devices/",
					icon: "material-symbols:devices",
				},
			],
		},
		{
			name: "其他",
			url: "#",
			icon: "material-symbols:more-horiz",
			children: [
				{
					name: "项目",
					url: "/projects/",
					icon: "material-symbols:work",
				},
				{
					name: "技能",
					url: "/skills/",
					icon: "material-symbols:psychology",
				},
				{
					name: "时间线",
					url: "/timeline/",
					icon: "material-symbols:timeline",
				},
				{
					name: "统计",
					url: "https://cloud.umami.is/analytics/us/share/k1rR4VXVvnK01ETV",
					external: true,
					icon: "material-symbols:show-chart",
				},
			],
		},
		{
			name: "关于",
			url: "#",
			icon: "material-symbols:info",
			children: [
				{
					name: "关于我",
					url: "/about/",
					icon: "material-symbols:person",
				},
				{
					name: "友链",
					url: "/friends/",
					icon: "material-symbols:group",
				},
			],
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.webp",
	name: "CPer",
	bio: "你好！我是CPer",
	typewriter: {
		enable: true,
		speed: 80,
	},
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/i5114514kf",
		},
		{
			name: "Telegram",
			icon: "fa7-brands:telegram",
			url: "https://t.me/lu1145",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const permalinkConfig: PermalinkConfig = {
	enable: false,
	format: "%postname%",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
	hideDuringThemeTransition: true,
};

export const commentConfig: CommentConfig = {
	enable: true,
	system: "twikoo",
	twikoo: {
		envId: "https://twikoo.510904.xyz/",
		lang: SITE_LANG,
	},
};

export const shareConfig: ShareConfig = {
	enable: true,
};

export const announcementConfig: AnnouncementConfig = {
	title: "公告",
	content: "欢迎来到我的博客,目前正在开荒中",
	closable: true,
	link: {
		enable: true,
		text: "前往导航页",
		url: "https://www.510904.xyz",
		external: true,
	},
};

export const musicPlayerConfig: MusicPlayerConfig = {
	enable: true,
	showFloatingPlayer: true,
	floatingEntryMode: "fab",
	mode: "meting",
	meting_api:
		"https://music.zhheo.com/meting-api/?server=:server&type=:type&id=:id",
	id: "432486474",
	server: "netease",
	type: "song",
};

export const footerConfig: FooterConfig = {
	enable: true,
	customHtml: "",
};

export const sidebarLayoutConfig: SidebarLayoutConfig = {
	properties: [
		{
			type: "profile",
			position: "top",
			class: "onload-animation",
			animationDelay: 0,
		},
		{
			type: "announcement",
			position: "top",
			class: "onload-animation",
			animationDelay: 50,
		},
		{
			type: "music-sidebar",
			position: "sticky",
			class: "onload-animation",
			animationDelay: 100,
		},
		{
			type: "categories",
			position: "sticky",
			class: "onload-animation",
			animationDelay: 150,
			responsive: { collapseThreshold: 5 },
		},
		{
			type: "tags",
			position: "top",
			class: "onload-animation",
			animationDelay: 250,
			responsive: { collapseThreshold: 20 },
		},
		{
			type: "site-stats",
			position: "top",
			class: "onload-animation",
			animationDelay: 200,
		},
		{
			type: "calendar",
			position: "top",
			class: "onload-animation",
			animationDelay: 250,
		},
	],
	components: {
		left: ["profile", "announcement", "categories", "tags"],
		right: ["site-stats", "calendar", "music-sidebar"],
		drawer: ["profile", "announcement", "categories", "tags"],
	},
	defaultAnimation: { enable: true, baseDelay: 0, increment: 50 },
	responsive: { breakpoints: { mobile: 768, tablet: 1280, desktop: 1280 } },
};

export const sakuraConfig: SakuraConfig = {
	enable: false,
	sakuraNum: 21,
	limitTimes: -1,
	size: { min: 0.5, max: 1.1 },
	opacity: { min: 0.3, max: 0.9 },
	speed: {
		horizontal: { min: -1.7, max: -1.2 },
		vertical: { min: 1.5, max: 2.2 },
		rotation: 0.03,
		fadeSpeed: 0.03,
	},
	zIndex: 100,
};

export const pioConfig: import("./types/config").PioConfig = {
	enable: false,
	models: ["/pio/models/pio/model.json"],
	position: "left",
	width: 280,
	height: 250,
	mode: "draggable",
	hiddenOnMobile: true,
	dialog: {
		welcome: "Welcome to CPer's Blog",
		touch: ["你在做什么？", "别碰我！", "色狼！", "不要这样欺负我！"],
		home: "点击返回主页",
		skin: ["想看看我的新装吗？看起来超棒的~", "这是我的新装扮！"],
		close: "QWQ 下次见~",
		link: "https://github.com/i5114514kf",
	},
};

export const relatedPostsConfig: RelatedPostsConfig = {
	enable: true,
	maxCount: 5,
};

export const randomPostsConfig: RandomPostsConfig = {
	enable: true,
	maxCount: 5,
};

export const widgetConfigs = {
	profile: profileConfig,
	announcement: announcementConfig,
	music: musicPlayerConfig,
	layout: sidebarLayoutConfig,
	sakura: sakuraConfig,
	fullscreenWallpaper: fullscreenWallpaperConfig,
	pio: pioConfig,
	share: shareConfig,
	relatedPosts: relatedPostsConfig,
	randomPosts: randomPostsConfig,
} as const;
