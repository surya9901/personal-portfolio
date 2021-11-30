import chatapp from '../images/proImgs/chat app.PNG';
import covidtracker from '../images/proImgs/covid tracker.PNG';
import videochat from '../images/proImgs/videochat.PNG';
import netflixClone from '../images/proImgs/netflixClone.png';
import animeapi from '../images/proImgs/animeapi.PNG';
import githubSearch from '../images/proImgs/github.PNG';
import dairyManager from '../images/proImgs/dairyManager.png';
import myPortfolio from '../images/proImgs/portfolio.PNG';
import moneyManager from '../images/proImgs/expenseManager.jpg';






const portfolios = [
	{
		id: 13,
		category: 'MERN',
		deploy: 'https://chat-app-video-rss.netlify.app/',
		repo: 'https://github.com/Ramachandran-2524/video-chat-application',
		icon1: 'D',
		icon2: 'G',
		image: videochat,
		description: 'videochat application',
		title: 'videochat'
	},
	{
		id: 12,
		category: 'MERN',
		deploy: 'https://expense-tracker-25.netlify.app',
		repo: 'https://github.com/Ramachandran-2524/Expense-tracker',
		icon1: 'D',
		icon2: 'G',
		image: moneyManager,
		description: 'Manage your expenses and Know your savings!',
		title: 'Expense Manager'
	},
	{
		id: 10,
		category: 'MERN',
		deploy: 'https://diary-manager.netlify.app/',
		repo: 'https://github.com/Ramachandran-2524/Dairy-manager',
		icon1: 'D',
		icon2: 'G',
		image: dairyManager,
		description: 'write your memories with me!',
		title: 'Dairy Manager'
	},
	{
		id: 11,
		category: 'React Js',
		deploy: 'https://ramportfolio-2524.netlify.app/',
		repo: 'https://github.com/Myilvaganan/myilportfolio',
		icon1: 'D',
		icon2: 'G',
		image: myPortfolio,
		description: 'My Portfolio website',
		title: 'My Portfolio'
	},
	{
		id: 2,
		category: 'React Js',
		deploy: 'https://chat-app-application-mastery.netlify.app/',
		repo: 'https://github.com/Ramachandran-2524/Chat-application',
		icon1: 'D',
		icon2: 'G',
		image: chatapp,
		description: 'Basic chat application',
		title: 'Chat Application'
	},
	{
		id: 3,
		category: 'React Js',
		deploy: 'https://covid-19-tracker-application-rc.netlify.app/',
		repo: 'https://github.com/Ramachandran-2524/covid_19_tracker',
		icon1: 'D',
		icon2: 'G',
		image: covidtracker,
		description: 'Basic Covid Tracker',
		title: 'Covid Tracker'
	},
	{
		id: 4,
		category: 'React Js',
		deploy: 'https://netflix-app-ram.netlify.app/',
		repo: 'https://github.com/Ramachandran-2524/Netflix-clone',
		icon1: 'D',
		icon2: 'G',
		image: netflixClone,
		description: 'Netflix Clone with stunning posters',
		title: 'Netflix Clone'
	},
	{
		id: 5,
		category: 'JavaScript',
		deploy: 'https://anime-app-2425.netlify.app/',
		repo: 'https://github.com/Ramachandran-2524/Anime-api',
		icon1: 'D',
		icon2: 'G',
		image: animeapi,
		description: 'animeapi',
		title: 'animeapi'
	},
	{
		id: 6,
		category: 'JavaScript',
		deploy: 'https://githup-app-2425.netlify.app/',
		repo: 'https://github.com/Ramachandran-2524/github-app',
		icon1: 'D',
		icon2: 'G',
		image: githubSearch,
		description: 'Search GitHub profiles of worldwide GitHub users',
		title: 'GitHub Profile Search'
	}
];

export default portfolios;
