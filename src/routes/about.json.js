import experience from './_edit/_cv.js';

const contents = JSON.stringify(experience.map(entry => {
	return {
		start: entry.start,
		end: entry.end,
		title: entry.title,
		description: entry.description
	};
// }, education.map(entry => {
// 	return {
// 		title: entry.title,
// 		description: entry.description
// 	};
// })
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}