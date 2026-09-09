import kante from './KANTE.mp3'
import danger from './Danger.mp3'
import real_buda from './REAL-BUDA.mp3'
import zelle from './zelle.mp3'
import top_skanka from './TOP-SKANKA.mp3'
import karafu from './karafu.mp3'
import thumbnail from "../images/zula.webp"


export const tracks=[
    {
        _id:"t001",
        title:"kante",
        artist:"Original Zula",
        track:kante,
        thumbnail:thumbnail,
        date:new Date("2026-09-04T12:28:00.000Z"),
        featured:true
    },
    {
        _id:"t002",
        title:"Top Skanka",
        artist:"Original Zula x Sick Boss ft Kapitani",
        track:top_skanka,
        thumbnail:thumbnail,
        date:new Date("2026-09-04T12:28:00.000Z"),
        featured:true
    },
    {
        _id:"t003",
        title:"Zelle",
        artist:"Original Zula x Sick Boss",
        track:zelle,
        thumbnail:thumbnail,
        date:new Date("2026-09-04T12:28:00.000Z"),
        featured:true
    },
    {
        _id:"t004",
        title:"Danger",
        artist:"Original Zula x Sick Boss ft Metro Stunna",
        track:danger,
        thumbnail:thumbnail,
        date:new Date("2026-09-04T12:28:00.000Z"),
        featured:true
    },
    {
        _id:"t005",
        title:"real buda",
        artist:"Original Zula x Sick Boss ft Toxic Lyrikali",
        track:real_buda,
        thumbnail:thumbnail,
        date:new Date("2026-09-04T12:28:00.000Z"),
        featured:true
    },
    {
        _id:"t006",
        title:"Karafu",
        artist:"Original Zula",
        track:karafu,
        thumbnail:thumbnail,
        date:new Date("2026-09-04T12:28:00.000Z"),
        featured:true
    },
]

export const tracklist={
    kante,
    top_skanka,
    zelle,
    danger,
    real_buda,
    karafu
}