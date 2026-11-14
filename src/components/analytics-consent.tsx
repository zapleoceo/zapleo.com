"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ID = "G-DKW7C84LRB";
const KEY = "zapleo-analytics-consent-v1";
const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
type Choice = "granted" | "denied";
type AnalyticsWindow = Window & {
	dataLayer?: unknown[];
	gtag?: (...args: unknown[]) => void;
	"ga-disable-G-DKW7C84LRB"?: boolean;
};
let initialized = false;
let lastPage = "";
const copy = {
	en: [
		"Optional analytics",
		"Allow Google Analytics to measure page visits and email-link clicks? Google receives device/network data and uses analytics cookies. No advertising profiles, email contents or form values are sent. Rejecting does not affect the site. Your choice is saved for 180 days; change it here anytime.",
		"Allow analytics",
		"Reject analytics",
		"Analytics settings",
		"Close",
	],
	ru: [
		"Необязательная аналитика",
		"Разрешить Google Analytics измерять посещения и клики по ссылке email? Google получает данные устройства/сети и использует аналитические cookies. Без рекламных профилей, содержимого писем и полей форм. Отказ не влияет на сайт. Выбор хранится 180 дней; изменить его можно здесь.",
		"Разрешить аналитику",
		"Отклонить аналитику",
		"Настройки аналитики",
		"Закрыть",
	],
	uk: [
		"Необов’язкова аналітика",
		"Дозволити Google Analytics вимірювати відвідування та натискання email? Google отримує дані пристрою/мережі й використовує аналітичні cookies. Без рекламних профілів, вмісту листів і полів форм. Відмова не впливає на сайт. Вибір зберігається 180 днів; змінити можна тут.",
		"Дозволити аналітику",
		"Відхилити аналітику",
		"Налаштування аналітики",
		"Закрити",
	],
	id: [
		"Analitik opsional",
		"Izinkan Google Analytics mengukur kunjungan halaman dan klik email? Google menerima data perangkat/jaringan dan memakai cookie analitik. Tanpa profil iklan, isi email atau isian formulir. Penolakan tidak memengaruhi situs. Pilihan disimpan 180 hari dan dapat diubah di sini.",
		"Izinkan analitik",
		"Tolak analitik",
		"Pengaturan analitik",
		"Tutup",
	],
} as const;

function readChoice(): Choice | null {
	try {
		const value = JSON.parse(localStorage.getItem(KEY) || "null");
		if (
			value &&
			(value.choice === "granted" || value.choice === "denied") &&
			typeof value.at === "number" &&
			value.at <= Date.now() &&
			Date.now() - value.at < MAX_AGE
		)
			return value.choice;
	} catch {
		/* Storage unavailable: default to no collection. */
	}
	return null;
}

function stopAnalytics() {
	const w = window as AnalyticsWindow;
	w["ga-disable-G-DKW7C84LRB"] = true;
	// Disable before deletion/reload; do not send a denied-consent ping.
	const domains = ["", location.hostname, ".zapleo.com"];
	for (const cookie of document.cookie.split(";")) {
		const name = cookie.trim().split("=")[0];
		if (name !== "_ga" && !name.startsWith("_ga_")) continue;
		for (const domain of domains)
			document.cookie =
				name + "=; Max-Age=0; Path=/" + (domain ? "; Domain=" + domain : "");
	}
}

export function AnalyticsConsent() {
	const pathname = usePathname() || "/";
	const locale = pathname.split("/")[1] as keyof typeof copy;
	const text = copy[locale] || copy.en;
	const [choice, setChoice] = useState<Choice | null>(null);
	const [ready, setReady] = useState(false);
	const [open, setOpen] = useState(false);
	// Restrict measurement to public commercial routes. No private/AI-Dima pages.
	const cleanPath =
		pathname.replace(/^\/(ru|uk|id)(?=\/|$)/, "").replace(/\/$/, "") || "/";
	const measurable =
		/^\/(?:about|work|contact|revenue-recovery|colophon|journal|journey|now)?$/.test(
			cleanPath,
		);
	const pageLocation = "https://zapleo.com" + pathname.replace(/\/$/, "") + "/";

	useEffect(() => {
		const saved = readChoice();
		setChoice(saved);
		setOpen(saved === null);
		setReady(true);
		const sync = (event: StorageEvent) => {
			if (
				(event.key === KEY || event.key === null) &&
				readChoice() !== "granted"
			) {
				stopAnalytics();
				location.reload();
			}
		};
		window.addEventListener("storage", sync);
		return () => window.removeEventListener("storage", sync);
	}, []);

	useEffect(() => {
		const w = window as AnalyticsWindow;
		if (
			!ready ||
			choice !== "granted" ||
			!measurable ||
			readChoice() !== "granted"
		) {
			w["ga-disable-G-DKW7C84LRB"] = true;
			lastPage = "";
			return;
		}
		w["ga-disable-G-DKW7C84LRB"] = false;
		if (!initialized) {
			initialized = true;
			w.dataLayer = w.dataLayer || [];
			w.gtag = function () {
				w.dataLayer!.push(arguments);
			};
			w.gtag("consent", "default", {
				analytics_storage: "granted",
				ad_storage: "denied",
				ad_user_data: "denied",
				ad_personalization: "denied",
			});
			w.gtag("js", new Date());
			w.gtag("config", ID, {
				send_page_view: false,
				allow_google_signals: false,
				allow_ad_personalization_signals: false,
				cookie_expires: 15552000,
				cookie_update: false,
				page_location: pageLocation,
				page_referrer: "",
				page_title: cleanPath,
			});
			const script = document.createElement("script");
			script.id = "zapleo-ga4";
			script.async = true;
			script.referrerPolicy = "origin";
			script.src = "https://www.googletagmanager.com/gtag/js?id=" + ID;
			document.head.appendChild(script);
		}
		if (lastPage !== pageLocation) {
			lastPage = pageLocation;
			w.gtag?.("event", "page_view", {
				send_to: ID,
				page_location: pageLocation,
				page_referrer: "",
				page_title: cleanPath,
			});
		}
		const click = (event: MouseEvent) => {
			if (readChoice() !== "granted" || w["ga-disable-G-DKW7C84LRB"]) return;
			const anchor =
				event.target instanceof Element ? event.target.closest("a") : null;
			if (anchor?.getAttribute("href")?.startsWith("mailto:")) {
				w.gtag?.("event", "contact_email_click", {
					send_to: ID,
					page_location: pageLocation,
					page_referrer: "",
					page_title: cleanPath,
				});
			}
		};
		document.addEventListener("click", click);
		return () => document.removeEventListener("click", click);
	}, [choice, ready, measurable, pageLocation, cleanPath]);

	useEffect(() => {
		if (choice !== "granted") return;
		let timer: ReturnType<typeof setTimeout>;
		const check = () => {
			clearTimeout(timer);
			if (readChoice() !== "granted") {
				stopAnalytics();
				location.reload();
				return;
			}
			try {
				const saved = JSON.parse(localStorage.getItem(KEY) || "null");
				const remaining = saved.at + MAX_AGE - Date.now();
				timer = setTimeout(check, Math.max(1, Math.min(remaining, 2147483647)));
			} catch {
				stopAnalytics();
				location.reload();
			}
		};
		check();
		window.addEventListener("focus", check);
		document.addEventListener("visibilitychange", check);
		return () => {
			clearTimeout(timer);
			window.removeEventListener("focus", check);
			document.removeEventListener("visibilitychange", check);
		};
	}, [choice]);

	function choose(next: Choice) {
		try {
			localStorage.setItem(
				KEY,
				JSON.stringify({ choice: next, at: Date.now() }),
			);
		} catch {
			stopAnalytics();
			setChoice("denied");
			setOpen(false);
			return;
		}
		if (next === "denied" && initialized) {
			stopAnalytics();
			location.reload();
			return;
		}
		setChoice(next);
		setOpen(false);
	}
	if (!ready) return null;
	const button = {
		border: "1px solid currentColor",
		borderRadius: 4,
		padding: "8px 12px",
		cursor: "pointer",
		background: "transparent",
		color: "inherit",
	} as const;
	return (
		<aside
			aria-label={text[0]}
			style={{
				position: "fixed",
				zIndex: 100,
				bottom: 12,
				right: 12,
				maxWidth: "min(440px, calc(100vw - 24px))",
				padding: open ? 18 : 0,
				background: "#f4f0e8",
				color: "#212121",
				borderRadius: 6,
				boxShadow: "0 2px 12px #0002",
				fontSize: 14,
			}}
		>
			{open ? (
				<>
					<h2 style={{ fontSize: 18, marginBottom: 8 }}>{text[0]}</h2>
					<p>{text[1]}</p>
					<p style={{ margin: "8px 0" }}>
						<a
							href="https://policies.google.com/privacy"
							target="_blank"
							rel="noopener noreferrer"
						>
							Google Privacy
						</a>
					</p>
					<div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
						<button
							type="button"
							style={button}
							onClick={() => choose("granted")}
						>
							{text[2]}
						</button>
						<button
							type="button"
							style={button}
							onClick={() => choose("denied")}
						>
							{text[3]}
						</button>
						{choice && (
							<button
								type="button"
								style={button}
								onClick={() => setOpen(false)}
							>
								{text[5]}
							</button>
						)}
					</div>
				</>
			) : (
				<button type="button" style={button} onClick={() => setOpen(true)}>
					{text[4]}
				</button>
			)}
		</aside>
	);
}
