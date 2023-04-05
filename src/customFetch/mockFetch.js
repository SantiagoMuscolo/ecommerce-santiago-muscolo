const productos = [
    {id: 1, categoria: 'Shōnen', name: 'One Piece', price: 1200, stock: 10, img: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpe'},
    {id: 2, categoria: 'Seinen', name: 'Code Geass', price: 1500, stock: 5, img: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/efb29ad752e647212b3e199da7748e9e.jpe'},
    {id: 3, categoria: 'Kodomo', name: 'Pokemon', price: 2000, stock: 2, img: 'https://lzd-img-global.slatic.net/g/p/51ab4db427f4f43035ee4d6ac95978ad.jpg_720x720q80.jpg_.webp'},
    {id: 5, categoria: 'Shōjo', name: 'Toradora!', price: 800, stock: 20, img: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/6503d5063921785f0d94b33d26b5e4cc.jpe'},
    {id: 6, categoria: 'Shōnen', name: 'Naruto', price: 1300, stock: 12, img: 'https://i.pinimg.com/564x/96/59/e3/9659e30be69e55f9f3cfc442d4d5bba3.jpg'},
    {id: 7, categoria: 'Seinen', name: 'Vinland Saga', price: 1200, stock: 8, img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/318/183/products/20thcenturyboys05-1991-3c9fb2215cb22955c516673344732383-480-0.webp'},
    {id: 8, categoria: 'Kodomo', name: 'Bakugan', price: 800, stock: 30, img: 'https://i.pinimg.com/564x/3d/93/de/3d93de90c7d5093195610f7042935908.jpg'},
    {id: 9, categoria: 'Shōjo', name: 'Banana Fish', price: 1000, stock: 40, img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/318/183/products/whatsapp_image_2020-10-02_at_11-21-4715608b1baf82e3bd16726922687470-480-0.webp'},
]

export let mockFetch = (time) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, time)
    })
}