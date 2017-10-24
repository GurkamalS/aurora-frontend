import embedImages from '@/assets/embedImages'
import Landing from '@/pages/Landing'
import Sigma from '@/pages/Sigma'
import Commands from '@/pages/Commands'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'
import Leaderboards from '@/pages/Leaderboards'

var api = 'https://api.lucia.moe/data'
var routing = [
  { path: '*', meta: { title: 'Lucia\'s Cipher - Not found' }, name: 'ap-notfound', component: NotFound },
  { path: '/', meta: { title: 'Lucia\'s Cipher' }, name: 'ap-landing', component: Landing },
  { path: '/sigma', meta: { title: 'Sigma: The Database Giant' }, name: 'sigma', component: Sigma },
  { path: '/sigma/commands', meta: { title: 'Sigma: Commands' }, name: 'sigma-commands', component: Commands },
  { path: '/sigma/about', meta: { title: 'Sigma: About' }, name: 'sigma-about', component: About },
  { path: '/sigma/leaderboards', meta: { title: 'Sigma: Leaderboards' }, name: 'sigma-leaderboards', component: Leaderboards }
]
var config = {
  api: api,
  store: null,
  navigation: {
    left: [
    { id: 'ap-landing', href: '/', text: 'Home' },
    { id: 'sigma-main', href: '/sigma', img: embedImages.logo.navigation }
    ],
    conditional: null,
    // Leave IDs empty for non router links
    right: [
    { id: 'sigma-about', href: '/sigma/about', text: 'About' },
    { id: 'sigma-commands', href: '/sigma/commands', text: 'Commands' },
    { id: 'sigma-commands', href: '/sigma/leaderboards', text: 'Leaderboards' },
    { id: '', href: 'https://github.com/lu-ci', text: 'Github', icon: 'gh' },
    { id: '', href: 'https://discordapp.com/invite/aEUCHwX', text: 'Discord', icon: 'discord' }
    ]
  },
  pages: {
    landing: {
      projects: [
        {id: 'sigma', title: 'Apex Sigma', description: 'A bot made to bring knowledge to your discord server.', target: '/#sigma'},
        {id: 'bdlinestickers', title: 'BetterDiscord LINE Stickers', description: 'A BetterDiscord plugin to add LINE stickers to the emote menu.', target: 'https://github.com/awaken1ng/bd-linestickers'},
        {id: 'wkbreezedark', title: 'WaniKani Breeze Dark', description: 'A dark Stylish theme for WaniKani based on KDE Breeze.', target: 'https://github.com/valeth/wanikani-breeze-dark'}
      ],
      others: null
    },
    sigma: {
      links: {
        invite: 'https://discordapp.com/oauth2/authorize?client_id=216437513709944832&scope=bot&permissions=8'
      },
      about: {
        makers: [
          { name: 'Alex', hype: 'lsCPcvjHNr', about: 'The lead developer and original creator of Sigma. The resident asshat of the group, pretty fun though.', avatar: 'https://i.imgur.com/P4G0fqE.gif', overlay: 'python' },
          { name: 'Awakening', about: 'A crazy Russian hacker. Talks the least, seriously silent like a shadow but has the biggest personality!', avatar: 'https://www.gravatar.com/avatar/77467fb9f03e2c5ebdccbc8a548a1147.png?s=128', overlay: 'js' },
          { name: 'Valeth', about: "Just popped up out of nowhere and started changing all the code! I haven't regretted it yet. He likes dry stuff.", avatar: 'https://www.gravatar.com/avatar/17d3a152085c9a4d08254acc7ee5d06e.png?s=128', overlay: 'ruby' }
        ],
        credits: [
          { name: 'WaniKani Community Discord', image: 'https://i.imgur.com/KmDVZ9a.jpg' },
          { name: 'Candy Kingdom 🍭', image: 'https://i.imgur.com/8c7Bg4U.png' },  // CK has non break space in the name, which is Alt+0160
          { name: 'Royal Destiny', image: 'https://i.imgur.com/gzhXXCD.png' }
        ]
      }
    }
  }
}

export { api, routing, config }
