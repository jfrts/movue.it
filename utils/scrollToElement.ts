export const scrollToElement = (elementSelector: string) => {
	const element: HTMLElement | null = document.querySelector(elementSelector);
	const mediaQuery = window.matchMedia("(max-width: 639px)");

	if (element && mediaQuery.matches) {
		element.scrollIntoView({ block: "start", behavior: "smooth" });
	}
};
