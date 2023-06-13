import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'

export const pageLinks=[
    {id :1, href : '#home' , text:'home'},
    {id:2 , href:'#about' , text:'About'},
    {id:3 , href:'#services' , text :'services'},
    {id:4 , href : '#tours' ,text:'tours'},
];

export const socialLinks =[
    {id:1 , href:'https://www.twitter.com', icon:'fab fa-squarespace'},
    { id :2 , href :'https://www.facebook.com' , icon :'fab fa-facebook'},
    {id : 3, href :'https://www.twitter.com',icon:'fab fa-twitter'},
];

export const services =[
    {
        id:1,
        icon:'fas fa-wallet fa-fw',
        title: 'saving money',
        text :' saving money in a text format'
    },
    {
        id:2,
        icon:'fas fa-tree fa-fw',
        title: 'endless hiking',
        text :'saving money in a hike of the money'

    },
    {
        id:3,
        icon:'fas fa-socks fa-fw',
        title: 'amazing comfort',
        text :'Amazing comfort for money download'
    },
];

export const tours=[
    {
        id:1,
        image :tour1,
        date : 'june 13th , 2023',
        title : 'Adventure',
        info: 'The info about the adventures available',
        location : 'india',
        duration : 3 ,
        cost: 2100,

    },

    {
        id:2,
        image :tour2,
        date : 'July 15th , 2023',
        title : 'best of kerala',
        info: 'The info about the adventures available',
        location : 'india',
        duration : 4 ,
        cost: 3400,

    },

    {
        id:3,
        image :tour3,
        date : 'may 23th , 2023',
        title : 'Explore of Canada',
        info: 'More about the places  available',
        location : 'Canada',
        duration : 2,
        cost: 2800,

    },

    {
        id:4,
        image :tour4,
        date : 'April 3rd, 2023',
        title : 'Mahabalipuram',
        info: 'The info about the Utopia available',
        location : 'Chennai',
        duration : 2 ,
        cost: 11100,

    },

];