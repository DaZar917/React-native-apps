
export default function () {
    return [
        {
            id: 1,
            title: 'Wall Street',
            titlefull: 'The Wall Street Journal',
            author: 'Gigot',
            authorfull: 'Paul A. Gigot',
            uri: 'data:image/png;base64,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',
            locations: [
                {
                    id: 1,
                    title: 'Books Inc.',
                    location: '317 Castro St',
                    icon: 'lock-closed',
                    uri: 'https://lh5.googleusercontent.com/p/AF1QipNTDfJFyqMMaFw4aaXY4tSfyHOLESdhI7BK6yDz=w408-h346-k-no',
                    workHours: {
                        monday: '10:00–7:00',
                        tuesday: '10:00–7:00',
                        wednesday: '10:00–7:00',
                        thursday: '10:00–7:00',
                        friday: '10:00–7:00',
                    },
                    phonenumber: '+16504281234',
                    email: 'weborders@booksinc.net',
                    rating: 4.7,
                    website: "http://www.booksinc.net/",
                    coordinates: {
                        latitude: 37.3621206,
                        longitude: -122.1027532,
                    }
                },
                {
                    id: 2,
                    title: 'Linden Tree Children\'s Books',
                    location: '265 State St',
                    icon: 'lock-closed',
                    uri: 'https://lh5.googleusercontent.com/p/AF1QipOO9sn9KPlpXBjNvDYrggRzEqvSFmlDZAWKCrqr=w408-h284-k-no',
                    workHours: {
                        monday: '12:00 - 18:00',
                        tuesday: '12:00 - 18:00',
                        wednesday: '12:00 - 18:00',
                        thursday: '12:00 - 18:00',
                        friday: '12:00 - 18:00',
                    },
                    phonenumber: '+16509493390',
                    email: 'shop@lindentreebooks.com',
                    rating: 4.8,
                    website: "http://www.lindentreebooks.com/",
                    coordinates:
                    {
                        latitude: 37.3621206,
                        longitude: -122.1027532,
                    }
                },
                {
                    id: 3,
                    title: 'Green Street Books',
                    location: '460 E Middlefield Rd',
                    icon: 'lock-closed',
                    uri: 'https://lh3.googleusercontent.com/proxy/0rTqJzP1YtCS7vsLabzO3s2fKV2idhLpbp-f-SIaGruuHkEp7du-c8WxasySYtE8QRefMXu3MS5p56KZ2iPfTPgQg8hu1t6wgWA0yAuzfLz0jT9cb_oWlio',
                    workHours: {
                        monday: '8:30–16:00',
                        tuesday: '8:30–16:00',
                        wednesday: '8:30–16:00',
                        thursday: '8:30–16:00',
                        friday: '8:30–16:00',
                    },
                    phonenumber: '+14083205057',
                    email: 'info@greenstreetbooks.org',
                    rating: 5,
                    website: "http://www.greenstreetbooks.org/",
                    coordinates:
                    {
                        latitude: 37.3731189,
                        longitude: -122.0815182,
                    }
                },
                {
                    id: 4,
                    title: 'Leigh\'s Favorite Books',
                    location: '121 S Murphy Ave',
                    icon: 'lock-closed',
                    uri: 'https://lh5.googleusercontent.com/p/AF1QipOnDVcJTvluQf63TOEQ7Jl5_kFpSlaHqwqK6PRM=w408-h408-k-no',
                    workHours: {
                        monday: '10:00 - 18:00',
                        tuesday: '10:00 - 18:00',
                        wednesday: '10:00 - 18:00',
                        thursday: '10:00 - 18:00',
                        friday: '10:00 - 18:00',
                    },
                    phonenumber: '+14087362665',
                    email: 'info@leighsbooks.com',
                    rating: 4,
                    website: "http://www.leighsbooks.com/",
                    coordinates: {
                        latitude: 37.3443625,
                        longitude: -122.0615055,
                    }
                },
            ],
            description: "The Wall Street Journal is an American business-focused, English-language international daily newspaper based in New York City, with international editions also available in Chinese and Japanese. The Journal, along with its Asian editions, is published six days a week by Dow Jones & Company, a division of News Corp.",
            publication: 1921,
            price: 3,
            leaseperiod: 0,
        }, {
            id: 2,
            title: 'New York',
            titlefull: 'The New York Times',
            author: 'Sulzberger',
            authorfull: 'A.G. Sulzberger',
            uri: 'https://i.pinimg.com/originals/f5/b6/52/f5b652d29f34f52466e10fca10c962eb.jpg',
            locations: [
                {
                    id: 1,
                    title: 'Books Inc.',
                    location: '317 Castro St',
                    icon: 'lock-closed',
                    uri: 'https://lh5.googleusercontent.com/p/AF1QipNTDfJFyqMMaFw4aaXY4tSfyHOLESdhI7BK6yDz=w408-h346-k-no',
                    workHours: {
                        monday: '10:00–7:00',
                        tuesday: '10:00–7:00',
                        wednesday: '10:00–7:00',
                        thursday: '10:00–7:00',
                        friday: '10:00–7:00',
                    },
                    phonenumber: '+16504281234',
                    email: 'weborders@booksinc.net',
                    rating: 4.7,
                    website: "http://www.booksinc.net/",
                    coordinates: {
                        latitude: 37.3621206,
                        longitude: -122.1027532,
                    }
                },
                {
                    id: 2,
                    title: 'Linden Tree Children\'s Books',
                    location: '265 State St',
                    icon: 'lock-closed',
                    uri: 'https://lh5.googleusercontent.com/p/AF1QipOO9sn9KPlpXBjNvDYrggRzEqvSFmlDZAWKCrqr=w408-h284-k-no',
                    workHours: {
                        monday: '12:00 - 18:00',
                        tuesday: '12:00 - 18:00',
                        wednesday: '12:00 - 18:00',
                        thursday: '12:00 - 18:00',
                        friday: '12:00 - 18:00',
                    },
                    phonenumber: '+16509493390',
                    email: 'shop@lindentreebooks.com',
                    rating: 4.8,
                    website: "http://www.lindentreebooks.com/",
                    coordinates:
                    {
                        latitude: 37.3621206,
                        longitude: -122.1027532,
                    }
                },
                {
                    id: 3,
                    title: 'Green Street Books',
                    location: '460 E Middlefield Rd',
                    icon: 'lock-closed',
                    uri: 'https://lh3.googleusercontent.com/proxy/0rTqJzP1YtCS7vsLabzO3s2fKV2idhLpbp-f-SIaGruuHkEp7du-c8WxasySYtE8QRefMXu3MS5p56KZ2iPfTPgQg8hu1t6wgWA0yAuzfLz0jT9cb_oWlio',
                    workHours: {
                        monday: '8:30–16:00',
                        tuesday: '8:30–16:00',
                        wednesday: '8:30–16:00',
                        thursday: '8:30–16:00',
                        friday: '8:30–16:00',
                    },
                    phonenumber: '+14083205057',
                    email: 'info@greenstreetbooks.org',
                    rating: 5,
                    website: "http://www.greenstreetbooks.org/",
                    coordinates:
                    {
                        latitude: 37.3731189,
                        longitude: -122.0815182,
                    }
                },
                {
                    id: 4,
                    title: 'Leigh\'s Favorite Books',
                    location: '121 S Murphy Ave',
                    icon: 'lock-closed',
                    uri: 'https://lh5.googleusercontent.com/p/AF1QipOnDVcJTvluQf63TOEQ7Jl5_kFpSlaHqwqK6PRM=w408-h408-k-no',
                    workHours: {
                        monday: '10:00 - 18:00',
                        tuesday: '10:00 - 18:00',
                        wednesday: '10:00 - 18:00',
                        thursday: '10:00 - 18:00',
                        friday: '10:00 - 18:00',
                    },
                    phonenumber: '+14087362665',
                    email: 'info@leighsbooks.com',
                    rating: 4,
                    website: "http://www.leighsbooks.com/",
                    coordinates: {
                        latitude: 37.3443625,
                        longitude: -122.0615055,
                    }
                },
            ],
            description: "The New York Times is an American daily newspaper based in New York City with a worldwide readership. The Times has been regarded within the industry as a national 'newspaper of record'. Founded in 1851, the paper has won 130 Pulitzer Prizes. It is ranked 18th in the world by circulation and 3rd in the U.S.",
            publication: 1851,
            price: 4,
            leaseperiod: 0,
        }, {
            id: 3,
            title: 'USA Today',
            titlefull: 'USA Today',
            author: 'Neuharth',
            authorfull: 'Al Neuharth',
            uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/USA_Today_cover_page.jpg/220px-USA_Today_cover_page.jpg',
            locations: [
                {
                    id: 1,
                    title: 'Books Inc.',
                    location: '317 Castro St',
                    icon: 'lock-closed',
                    uri: 'https://lh5.googleusercontent.com/p/AF1QipNTDfJFyqMMaFw4aaXY4tSfyHOLESdhI7BK6yDz=w408-h346-k-no',
                    workHours: {
                        monday: '10:00–7:00',
                        tuesday: '10:00–7:00',
                        wednesday: '10:00–7:00',
                        thursday: '10:00–7:00',
                        friday: '10:00–7:00',
                    },
                    phonenumber: '+16504281234',
                    email: 'weborders@booksinc.net',
                    rating: 4.7,
                    website: "http://www.booksinc.net/",
                    coordinates: {
                        latitude: 37.3621206,
                        longitude: -122.1027532,
                    }
                },
                {
                    id: 2,
                    title: 'Linden Tree Children\'s Books',
                    location: '265 State St',
                    icon: 'lock-closed',
                    uri: 'https://lh5.googleusercontent.com/p/AF1QipOO9sn9KPlpXBjNvDYrggRzEqvSFmlDZAWKCrqr=w408-h284-k-no',
                    workHours: {
                        monday: '12:00 - 18:00',
                        tuesday: '12:00 - 18:00',
                        wednesday: '12:00 - 18:00',
                        thursday: '12:00 - 18:00',
                        friday: '12:00 - 18:00',
                    },
                    phonenumber: '+16509493390',
                    email: 'shop@lindentreebooks.com',
                    rating: 4.8,
                    website: "http://www.lindentreebooks.com/",
                    coordinates:
                    {
                        latitude: 37.3621206,
                        longitude: -122.1027532,
                    }
                },
                {
                    id: 3,
                    title: 'Green Street Books',
                    location: '460 E Middlefield Rd',
                    icon: 'lock-closed',
                    uri: 'https://lh3.googleusercontent.com/proxy/0rTqJzP1YtCS7vsLabzO3s2fKV2idhLpbp-f-SIaGruuHkEp7du-c8WxasySYtE8QRefMXu3MS5p56KZ2iPfTPgQg8hu1t6wgWA0yAuzfLz0jT9cb_oWlio',
                    workHours: {
                        monday: '8:30–16:00',
                        tuesday: '8:30–16:00',
                        wednesday: '8:30–16:00',
                        thursday: '8:30–16:00',
                        friday: '8:30–16:00',
                    },
                    phonenumber: '+14083205057',
                    email: 'info@greenstreetbooks.org',
                    rating: 5,
                    website: "http://www.greenstreetbooks.org/",
                    coordinates:
                    {
                        latitude: 37.3731189,
                        longitude: -122.0815182,
                    }
                },
                {
                    id: 4,
                    title: 'Leigh\'s Favorite Books',
                    location: '121 S Murphy Ave',
                    icon: 'lock-closed',
                    uri: 'https://lh5.googleusercontent.com/p/AF1QipOnDVcJTvluQf63TOEQ7Jl5_kFpSlaHqwqK6PRM=w408-h408-k-no',
                    workHours: {
                        monday: '10:00 - 18:00',
                        tuesday: '10:00 - 18:00',
                        wednesday: '10:00 - 18:00',
                        thursday: '10:00 - 18:00',
                        friday: '10:00 - 18:00',
                    },
                    phonenumber: '+14087362665',
                    email: 'info@leighsbooks.com',
                    rating: 4,
                    website: "http://www.leighsbooks.com/",
                    coordinates: {
                        latitude: 37.3443625,
                        longitude: -122.0615055,
                    }
                },
            ],
            description: "USA Today is an internationally distributed American daily middle-market newspaper that is the flagship publication of its owner, Gannett. Founded by Al Neuharth on September 15, 1982, it operates from Gannett's corporate headquarters in Tysons, Virginia.",
            publication: 1982,
            price: 3,
            leaseperiod: 0,
        }, {
            id: 4,
            title: 'Daily Mail',
            titlefull: 'Daily Mail',
            author: 'Harmsworth',
            authorfull: 'Alfred Harmsworth',
            uri: 'https://www.newstatesman.com/sites/default/files/styles/cropped_article_image/public/blogs_2018/05/mail_front_page_booming.jpg?itok=j0aoVbFM',
            locations: [
                {
                    id: 1,
                    title: 'Books Inc.',
                    location: '317 Castro St',
                    icon: 'lock-closed',
                    uri: 'https://lh5.googleusercontent.com/p/AF1QipNTDfJFyqMMaFw4aaXY4tSfyHOLESdhI7BK6yDz=w408-h346-k-no',
                    workHours: {
                        monday: '10:00–7:00',
                        tuesday: '10:00–7:00',
                        wednesday: '10:00–7:00',
                        thursday: '10:00–7:00',
                        friday: '10:00–7:00',
                    },
                    phonenumber: '+16504281234',
                    email: 'weborders@booksinc.net',
                    rating: 4.7,
                    website: "http://www.booksinc.net/",
                    coordinates: {
                        latitude: 37.3621206,
                        longitude: -122.1027532,
                    }
                },
                {
                    id: 2,
                    title: 'Linden Tree Children\'s Books',
                    location: '265 State St',
                    icon: 'lock-closed',
                    uri: 'https://lh5.googleusercontent.com/p/AF1QipOO9sn9KPlpXBjNvDYrggRzEqvSFmlDZAWKCrqr=w408-h284-k-no',
                    workHours: {
                        monday: '12:00 - 18:00',
                        tuesday: '12:00 - 18:00',
                        wednesday: '12:00 - 18:00',
                        thursday: '12:00 - 18:00',
                        friday: '12:00 - 18:00',
                    },
                    phonenumber: '+16509493390',
                    email: 'shop@lindentreebooks.com',
                    rating: 4.8,
                    website: "http://www.lindentreebooks.com/",
                    coordinates:
                    {
                        latitude: 37.3621206,
                        longitude: -122.1027532,
                    }
                },
                {
                    id: 3,
                    title: 'Green Street Books',
                    location: '460 E Middlefield Rd',
                    icon: 'lock-closed',
                    uri: 'https://lh3.googleusercontent.com/proxy/0rTqJzP1YtCS7vsLabzO3s2fKV2idhLpbp-f-SIaGruuHkEp7du-c8WxasySYtE8QRefMXu3MS5p56KZ2iPfTPgQg8hu1t6wgWA0yAuzfLz0jT9cb_oWlio',
                    workHours: {
                        monday: '8:30–16:00',
                        tuesday: '8:30–16:00',
                        wednesday: '8:30–16:00',
                        thursday: '8:30–16:00',
                        friday: '8:30–16:00',
                    },
                    phonenumber: '+14083205057',
                    email: 'info@greenstreetbooks.org',
                    rating: 5,
                    website: "http://www.greenstreetbooks.org/",
                    coordinates:
                    {
                        latitude: 37.3731189,
                        longitude: -122.0815182,
                    }
                },
                {
                    id: 4,
                    title: 'Leigh\'s Favorite Books',
                    location: '121 S Murphy Ave',
                    icon: 'lock-closed',
                    uri: 'https://lh5.googleusercontent.com/p/AF1QipOnDVcJTvluQf63TOEQ7Jl5_kFpSlaHqwqK6PRM=w408-h408-k-no',
                    workHours: {
                        monday: '10:00 - 18:00',
                        tuesday: '10:00 - 18:00',
                        wednesday: '10:00 - 18:00',
                        thursday: '10:00 - 18:00',
                        friday: '10:00 - 18:00',
                    },
                    phonenumber: '+14087362665',
                    email: 'info@leighsbooks.com',
                    rating: 4,
                    website: "http://www.leighsbooks.com/",
                    coordinates: {
                        latitude: 37.3443625,
                        longitude: -122.0615055,
                    }
                },
            ],
            description: "The Daily Mail is a British daily middle-market newspaper published in London in a tabloid format. Founded in 1896, it is the United Kingdom's highest-circulated daily newspaper. ",
            publication: 1896,
            price: 3,
            leaseperiod: 0,
        }, {
            id: 5,
            title: 'Nekkei',
            titlefull: 'Nekkei',
            author: 'Shimbun',
            authorfull: 'The Asahi Shimbun',
            uri: 'https://lh3.googleusercontent.com/proxy/4MUIwH0zpD4Mp2I9IFYuX-Pk5STtGug3RpYJy3Yc2xYvIi80nXvvaK5PdUQF6uPguKyCv35qiwAMBoUSQrSWBgw9rI0SKzl4fc_scrPaToCOGj6QSsazagJaL8LBWQ',
            locations: [
                {
                    id: 1,
                    title: 'Books Inc.',
                    location: '317 Castro St',
                    icon: 'lock-closed',
                    uri: 'https://lh5.googleusercontent.com/p/AF1QipNTDfJFyqMMaFw4aaXY4tSfyHOLESdhI7BK6yDz=w408-h346-k-no',
                    workHours: {
                        monday: '10:00–7:00',
                        tuesday: '10:00–7:00',
                        wednesday: '10:00–7:00',
                        thursday: '10:00–7:00',
                        friday: '10:00–7:00',
                    },
                    phonenumber: '+16504281234',
                    email: 'weborders@booksinc.net',
                    rating: 4.7,
                    website: "http://www.booksinc.net/",
                    coordinates: {
                        latitude: 37.3621206,
                        longitude: -122.1027532,
                    }
                },
                {
                    id: 2,
                    title: 'Linden Tree Children\'s Books',
                    location: '265 State St',
                    icon: 'lock-closed',
                    uri: 'https://lh5.googleusercontent.com/p/AF1QipOO9sn9KPlpXBjNvDYrggRzEqvSFmlDZAWKCrqr=w408-h284-k-no',
                    workHours: {
                        monday: '12:00 - 18:00',
                        tuesday: '12:00 - 18:00',
                        wednesday: '12:00 - 18:00',
                        thursday: '12:00 - 18:00',
                        friday: '12:00 - 18:00',
                    },
                    phonenumber: '+16509493390',
                    email: 'shop@lindentreebooks.com',
                    rating: 4.8,
                    website: "http://www.lindentreebooks.com/",
                    coordinates:
                    {
                        latitude: 37.3621206,
                        longitude: -122.1027532,
                    }
                },
                {
                    id: 3,
                    title: 'Green Street Books',
                    location: '460 E Middlefield Rd',
                    icon: 'lock-closed',
                    uri: 'https://lh3.googleusercontent.com/proxy/0rTqJzP1YtCS7vsLabzO3s2fKV2idhLpbp-f-SIaGruuHkEp7du-c8WxasySYtE8QRefMXu3MS5p56KZ2iPfTPgQg8hu1t6wgWA0yAuzfLz0jT9cb_oWlio',
                    workHours: {
                        monday: '8:30–16:00',
                        tuesday: '8:30–16:00',
                        wednesday: '8:30–16:00',
                        thursday: '8:30–16:00',
                        friday: '8:30–16:00',
                    },
                    phonenumber: '+14083205057',
                    email: 'info@greenstreetbooks.org',
                    rating: 5,
                    website: "http://www.greenstreetbooks.org/",
                    coordinates:
                    {
                        latitude: 37.3731189,
                        longitude: -122.0815182,
                    }
                },
                {
                    id: 4,
                    title: 'Leigh\'s Favorite Books',
                    location: '121 S Murphy Ave',
                    icon: 'lock-closed',
                    uri: 'https://lh5.googleusercontent.com/p/AF1QipOnDVcJTvluQf63TOEQ7Jl5_kFpSlaHqwqK6PRM=w408-h408-k-no',
                    workHours: {
                        monday: '10:00 - 18:00',
                        tuesday: '10:00 - 18:00',
                        wednesday: '10:00 - 18:00',
                        thursday: '10:00 - 18:00',
                        friday: '10:00 - 18:00',
                    },
                    phonenumber: '+14087362665',
                    email: 'info@leighsbooks.com',
                    rating: 4,
                    website: "http://www.leighsbooks.com/",
                    coordinates: {
                        latitude: 37.3443625,
                        longitude: -122.0615055,
                    }
                },
            ],
            description: "The Nikkei, formally known as The Nihon Keizai Shimbun, is Nikkei, Inc.'s flagship publication and the world's largest financial newspaper, with a daily circulation exceeding three million. The Nikkei 225, a stock market index for the Tokyo Stock Exchange, has been calculated by the newspaper since 1950.",
            publication: 1950,
            price: 3,
            leaseperiod: 0,
        }
    ]
}