const CONFIG = new Config({
  crypto: {
    coin: 'LTC',
    currency: 'SGD',
    refreshIn: 5,
  },
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Singapore, Singapore',
    scale: 'C',
  },
  clock: {
    format: 'h:i p',
    iconColor: '#ff7b95',
  },
  search: {
    engines: {
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia'],
    },
  },
  keybindings: {
    t: 'todo-list',
    s: 'search-bar',
  },
  disabled: [],
  openLastVisitedTab: false,
  tabs: [
    {
      name: 'dev',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [{
        name: 'gh',
        links: [
          {
            url: 'https://github.com/begleitpanzer',
            name: 'GitHub',
          },
          {
            name: 'gitea',
            url: 'https://git.begleitpanzer.site',
            icon: 'cup',
            icon_color: '#64876d',
          },
          {
            name: 'cockpit',
            url: 'https://begleitpanzer.site:9090',
          },
        ],
      },
      {
        name: 'Technology',
        links: [
          {
            name: '/g/',
            url: 'https://4chan.org/g/',
          },
          {
            name: '/Δ/',
            url: 'https://archive.arisuchan.jp/%CE%94/catalog.html',
          },
          {
            name: '/λ/',
            url: 'https://www.lainchan.org/%CE%BB/catalog.html',
          },
          {
            name: '/sec/',
            url: 'https://www.lainchan.org/sec/catalog.html',
          },
          {
            name: '/prog/',
            url: 'https://boards.420chan.org/prog/',
            icon: 'code',
          },
        ],
      },
      ],
    },
    {
      name: 'music',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {
          name: 'music services',
          links: [
            {
              url: 'https://soundcloud.com/',
              icon: 'brand-soundcloud',
              icon_color: '#c57750',
            },
            {
              url: 'https://youtu.be/',
              icon: 'brand-youtube',
              icon_color: '#996767',
            },
            {
              url: 'https://r-a-d.io/',
              icon: 'radio',
            },
          ],
        },
        {
          name: 'music boards',
          links: [
            {
              name: '/music/',
              url: 'https://lainchan.org/music/',
              icon: 'disc',
            },
            {
              name: '/mu/',
              url: 'https://boards.4channel.org/mu/',
            },
          ],
        },
      ],
    },
    {
      name: 'tech',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          name: 'subreddits',
          links: [
            {
              name: 'r/startpages/',
              url: 'https://www.reddit.com/r/startpages/',
            },
            {
              name: 'r/unixporn',
              url: 'https://www.reddit.com/r/unixporn/',
            },
            {
              name: 'r/mechkbds/',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/',
              icon: 'keyboard',
              icon_color: '#a57685',
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/',
            },
          ],
        },
        {
          name: 'blogs',
          links: [
            {
              name: 'fasterthanli',
              url: 'https://fasterthanli.me/articles',
              icon: 'anchor',
            },
            {
              name: 'dev.to',
              url: 'https://dev.to',
            },
            {
              name: 'mataroa.blog',
              url: 'https://collection.mataroa.blog',
            },
          ],
        },
        {
          name: 'misc',
          links: [
            {
              name: 'post office',
              url: 'http://afternoon.dynu.com/letterbox.html',
              icon: 'mailbox',
            },
            {
              name: 'rust docs',
              url: 'https://doc.rust-lang.org/book/',
              icon: 'notebook',
              icon_color: '#977a3a',
            },
          ],
        },
      ],
    },
  ],
});
