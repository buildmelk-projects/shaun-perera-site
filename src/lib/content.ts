export const artist = {
  name: 'Shaun Perera',
  fullName: 'Shaun Perera-de Mel',
  tagline: 'Music is a communication tool. It is how I communicate.',
  shortBio:
    'Colombo-born singer-songwriter. Voice of Magic Box Mixup. Going solo since 2021 with bilingual originals that blur the line between indie-pop and raw human feeling.',
  longBio: [
    `Shaun Perera-de Mel grew up surrounded by music his father was the first lead singer of The Gypsies, one of Sri Lanka's most celebrated bands. That lineage wasn't a blueprint; it was a foundation. Shaun took his own winding path, studying forensic science in England and biotechnology in Malaysia, before music pulled him back irresistibly.`,
    `In 2005 he co-founded Magic Box Mixup, a seven-piece alternative-pop ensemble that would go on to win the People's Choice Award and Best Musician honours at TNL Onstage in 2006, and send their original "Here I Go" to the top of YES FM's Home Grown Charts for three weeks straight.`,
    `His solo career began in August 2021 with "Obamai" a Sinhala-language meditation on love in its broadest sense, written in a language that holds a different kind of weight for him. It arrived as both a debut and a declaration: that music, for Shaun, is less about performance and more about connection. About making whoever is listening feel a little less alone.`,
    `He teaches sports at Elizabeth Moir School and engineers sound at Mixalot Studio. He writes in English and in Sinhala. He plays in a band and sings by himself. All of it, somehow, is the same conversation.`,
  ],
}

export type Track = {
  title: string
  titleSinhala?: string
  type: 'Solo' | 'Band'
  language: 'English' | 'Sinhala' | 'Bilingual'
  year: number
  description?: string
  genre?: string
  image?: string
  links: {
    youtube?: string
    appleMusic?: string
    spotify?: string
  }
  accentColor: string
}

export const discography: Track[] = [
  {
    title: 'Obamai',
    titleSinhala: 'ඔබමයි',
    type: 'Solo',
    language: 'Sinhala',
    year: 2021,
    genre: 'Sinhala Soul',
    description: 'Debut solo single. A meditation on love beyond romance, universal, quiet, true.',
    links: {
      youtube: 'https://www.youtube.com/watch?v=NKO6ox4BbTY',
      appleMusic: 'https://music.apple.com/lk/song/obamai/1579630793',
    },
    accentColor: '#c8834a',
  },
  {
    title: 'Teenage Boy',
    type: 'Solo',
    language: 'English',
    year: 2021,
    genre: 'Indie Pop',
    description: 'Written twelve years before it was released. About a crush, studied in England, and the vulnerability of being young.',
    links: {
      appleMusic: 'https://music.apple.com/lk/artist/shaun-perera/795042956',
    },
    accentColor: '#6b8dad',
  },
  {
    title: 'Amma',
    titleSinhala: 'ඉරණමට',
    type: 'Solo',
    language: 'Sinhala',
    year: 2020,
    genre: 'Sinhala Folk',
    description: 'A song for his mother.',
    links: {
      appleMusic: 'https://music.apple.com/lk/artist/shaun-perera/795042956',
    },
    accentColor: '#b85c7a',
  },
  {
    title: 'Yaluwe',
    type: 'Solo',
    language: 'Sinhala',
    year: 2020,
    genre: 'Sinhala Original',
    description: 'Sinhala original.',
    links: {
      appleMusic: 'https://music.apple.com/lk/artist/shaun-perera/795042956',
    },
    accentColor: '#4a9b76',
  },
  {
    title: 'Uren Ura',
    type: 'Solo',
    language: 'Sinhala',
    year: 2020,
    genre: 'Sinhala Original',
    description: 'Sinhala original.',
    links: {
      appleMusic: 'https://music.apple.com/lk/artist/shaun-perera/795042956',
    },
    accentColor: '#6b7db8',
  },
  {
    title: 'Get Up and Dance',
    type: 'Band',
    language: 'English',
    year: 2020,
    genre: 'Alt Pop',
    description: 'Magic Box Mixup original, released during the first lockdown. Produced by Shamin De Silva.',
    links: {
      youtube: 'https://www.youtube.com/@ShaunMBM',
    },
    accentColor: '#c87440',
  },
  {
    title: 'Here I Go',
    type: 'Band',
    language: 'English',
    year: 2006,
    genre: 'Alternative Rock',
    description: 'Magic Box Mixup original. Spent 3 weeks at #1 on YES FM Home Grown Charts.',
    links: {
      youtube: 'https://www.youtube.com/@ShaunMBM',
    },
    accentColor: '#8b62b8',
  },
  {
    title: 'Talk Is Cheap',
    type: 'Solo',
    language: 'English',
    year: 2020,
    genre: 'R&B',
    description: "Featured on Romaine Willis' track.",
    links: {
      youtube: 'https://www.youtube.com/watch?v=nd7E9q0dK-g',
      spotify: 'https://www.amazon.com/Talk-Cheap-feat-Shaun-Perera/dp/B08HRDSTQL',
    },
    accentColor: '#3d9b8b',
  },
]

export const comingSoon = true

export type PressQuote = {
  publication: string
  quote: string
  url: string
  year?: number
  image?: string
}

export const pressQuotes: PressQuote[] = [
  {
    publication: 'The Morning',
    quote: 'For me, music is a communication tool and it is how I communicate.',
    url: 'https://www.themorning.lk/for-me-music-is-a-communication-tool-and-it-is-how-i-communicate-shaun-perera',
    year: 2021,
    image: '/images/shaun-expressive.jpg',
  },
  {
    publication: 'Decibel.lk',
    quote: 'Simple, soothing and exactly what Sri Lanka and Lankans all over the world need today. A big ol hug!',
    url: 'https://decibel.lk/new-music-obamai-i-%E0%B6%94%E0%B6%B6%E0%B6%B8%E0%B6%BA%E0%B7%92-i-shaun-perera-official-music-video/',
    year: 2021,
    image: '/images/shaun-expressive.jpg',
  },
  {
    publication: 'Life.lk',
    quote: 'I was not thinking of any particular person when I wrote the lyrics... it was merely what I feel people know, feel and believe being in love is.',
    url: 'https://www.life.lk/article/buzz_with_danu/Buzz-with-Danu---Shaun-Perera/35/19873',
    year: 2021,
  },
  {
    publication: 'The Morning',
    quote: 'Life is too short; go ahead and do what you have to do!',
    url: 'https://www.themorning.lk/life-is-too-short-go-ahead-and-do-what-you-have-to-do-magic-box-mixup',
    year: 2020,
  },
  {
    publication: 'The Sunday Times',
    quote: 'Magical music from Magic Box Mixup. A band that has earned every note of their reputation.',
    url: 'https://www.sundaytimes.lk/141019/magazine/magical-music-from-magic-box-mixup-122458.html',
    year: 2014,
    image: '/images/shaun-about.jpg',
  },
  {
    publication: 'The Morning',
    quote: 'if it fills your soul and makes you love your life... then do it. Just go for it.',
    url: 'https://www.themorning.lk/for-me-music-is-a-communication-tool-and-it-is-how-i-communicate-shaun-perera',
    year: 2021,
  },
]

export type Video = {
  title: string
  description: string
  youtubeId: string
}

export const videos: Video[] = [
  {
    title: 'Obamai (ඔබමයි) Official Music Video',
    description: 'Debut solo single. August 2021.',
    youtubeId: 'NKO6ox4BbTY',
  },
  {
    title: 'Talk Is Cheap (Romaine Willis ft. Shaun Perera)',
    description: 'Good Groove Society collaboration. September 2020.',
    youtubeId: 'nd7E9q0dK-g',
  },
  {
    title: 'Shaun Perera on His Debut Solo Single',
    description: 'In conversation about "Obamai" and the journey to going solo.',
    youtubeId: 'PI2G89bserM',
  },
  {
    title: 'Curtain Call',
    description: 'A live performance session.',
    youtubeId: 'oPRxVOPx-iE',
  },
]

export const socials = {
  youtube: 'https://www.youtube.com/c/ShaunPerera',
  youtubeBand: 'https://www.youtube.com/@ShaunMBM',
  facebook: 'https://www.facebook.com/artist.shaunp/',
  instagram: 'https://www.instagram.com/shaunagain/',
  instagramBand: 'https://www.instagram.com/magicboxmixup/',
  appleMusic: 'https://music.apple.com/lk/artist/shaun-perera/795042956',
  whatsapp: 'https://wa.me/94771533277',
  whatsappQr: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https%3A%2F%2Fwa.me%2F94771533277&color=c8a96e&bgcolor=0c0c0c&margin=10',
}
