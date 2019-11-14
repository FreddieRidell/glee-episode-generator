const rge = require("@freddieridell/regex-generator-expander");

const generator = rge({
	root: ({ episodeId, episodeDescription, guestStar }) => [
		rge`${episodeId}\n${episodeDescription}.`,
		rge`${episodeId}\n${episodeDescription}.\nGuest starting ${guestStar}`,
		rge`${episodeId}\n${episodeDescription}.\nGuest starting ${guestStar} and ${guestStar}`,
		rge`${episodeId}\n${episodeDescription}.\nGuest starting ${guestStar}, ${guestStar}, and ${guestStar}`,
	],

	episodeId: () => [
		`S${Math.ceil(Math.random() * 8)}E${Math.ceil(Math.random() * 23)
			.toString()
			.padStart(2, "0")}.`,
	],

	episodeDescription: ({ majorPlot, choirPlot, groupPlot, minorPlot, soloPlot, doublePlot, tailPlot }) => [
		//rge`${majorPlot}`,
		//rge`${choirPlot}.\n${tailPlot}`,
		//rge`${groupPlot}.\n${tailPlot}`,
		rge`${soloPlot}.\n${tailPlot}`,
		//rge`${doublePlot}.\n${tailPlot}`,
	],

	majorPlot: () => ["__ majorPlot"],
	choirPlot: () => ["__choirPlot"],
	groupPlot: () => ["__groupPlot"],
	soloPlot: ({
		songDescription,
		emotion,
		mainCharacter,
		authorityFigure,
		teacher,
		group,
		socialIsm,
		musicalTheme,
		nationalTradgedy,
	}) => [
		//rge`${teacher} is shocked to discover that ${socialIsm} can be an everyday occourance at McKinley`,
		//rge`${mainCharacter} finaly experiences ${socialIsm} first hand`,
		//rge`${mainCharacter} experiences ${socialIsm} for the first time`,
		rge`${mainCharacter} discovered that ${musicalTheme} might be more relevant to their life than they knew`,
		rge`${authorityFigure} isn't happy that ${group} are performing ${musicalTheme}`,
		rge`${authorityFigure} finds out that ${group} don't know the significance ${musicalTheme}`,
		rge`${authorityFigure} teaches ${group} how ${musicalTheme} can help them process their feelings of ${emotion} for ${nationalTradgedy}`,
		rge`${group} are having a hard time processing their ${emotion}, but ${authorityFigure} thinks there's a ${songDescription} song that can help`,
	],

	doublePlot: ({ perfomanceDescription, mainCharacter, musicalTheme, genre }) => [
		rge`${mainCharacter} and ${mainCharacter} butt heads over their interpretation of ${musicalTheme}`,
		rge`${mainCharacter} and ${mainCharacter} can't aggree on what ${musicalTheme} means to them, but come together to perform a ${perfomanceDescription} mash-up duet`,
	],

	tailPlot: ({ mainCharacter, socialIsm, student, choir, nationalTradgedy, perfomanceDescription }) => [
		rge`${choir} perform a ${perfomanceDescription} musical tribute to ${nationalTradgedy}`,
		rge`${student} performs a ${perfomanceDescription} musical tribute to ${nationalTradgedy}`,
		rge`${mainCharacter} finaly confronts their own internalised ${socialIsm}`,
	],

	group: ({ choir }) => [
		...new Array(3).fill(rge`${choir}`),
		"the Football Team",
		"the Cheerios",
		"the girls and kurt",
		"the girls",
		"the boys",
	],
	choir: () => ["the New Directions", "the Warblers", "Vocal Adrenaline"],

	mainCharacter: ({ student, teacher }) => [rge`${student}`, rge`${teacher}`],
	student: () => [
		"Rachel",
		"Finn",
		"Kurt",
		"Blane",
		"Santana",
		"Mercedes",
		"Britany",
		"Artie",
		"Tina",
		"Mike Chang",
		"That One Irish Kid",
		"Sexy Dreadlock Christian",
		"Sam",
		"Lauren Zises",
	],
	teacher: () => ["Mr Shue", "Sue", "Ms Pillsbury", "Coach Beaste", "Principal Figgis"],
	parent: ({ derrivedParent }) => ["Burt", rge`${derrivedParent}`],
	derrivedParent: ({ student }) => [rge`${student}'s mom`, rge`${student}'s dad`],
	authorityFigure: ({ teacher, parent }) => [rge`${teacher}`, rge`${parent}`],

	musicalTheme: ({ genre, band, song }) => [rge`${genre}`, rge`${band}`, rge`${song}`, "a song"],
	songDescription: ({ genre, band }) => [rge`${genre}`, rge`${band}`],
	genre: () => ["funk", "soul", "black liberation music", "R&B", "clasic rock", "dancehall", "regae"],
	song: () => ["Trouty Mouth", "Born to Run", "Blured Lines"],
	band: () => ["Bruce Springstein", "Fall Out Boy", "Fleetwood Mac", "Robin Thicke", "Lady Gaga", "Barbra Striesand"],

	emotion: () => ["grief", "loss", "joy", "inappropriate sexual energy"],

	perfomanceDescription: ({ genre }) => [
		"funky",
		"heart-felt",
		"impassioned",
		"misguided",
		"moving",
		"somber",
		"un-informed",
		"upbeat",
		"woefully misguided",
		rge`${genre}`,
	],

	socialIssue: ({ socialIsm }) => [
		...new Array(4).fill(rge`${socialIsm}`),
		"cancel culture",
		"the incel uprising",
		"woke brands",
	],
	socialIsm: () => ["homophobia", "misoginy", "racism", "hetrophoboa", "cisphobia", "transphobia"],

	nationalTradgedy: () => [
		"9/11",
		"domestic abuse",
		"gang violence",
		"the LGBT community",
		"the american healthcare system",
		"the blind",
		"the deaf",
		"women",
	],

	guestStar: () => ["Lizzo", "Josh Groban", "Adele", "Malala", "Jared Leto"],
});

new Array(5).fill(null).forEach(() => {
	console.log(generator.root().replace(/\.\n./g, s => `.\t${s[2].toUpperCase()}`));
});
