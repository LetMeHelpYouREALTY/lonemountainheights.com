import Script from "next/script";

const REALSCOUT_SCRIPT_SRC =
	"https://em.realscout.com/widgets/realscout-web-components.umd.js";

/** Load once per page when listings render (lazyOnload). */
export function RealScoutScript() {
	return (
		<Script
			id="realscout-web-components"
			src={REALSCOUT_SCRIPT_SRC}
			strategy="lazyOnload"
			type="module"
		/>
	);
}