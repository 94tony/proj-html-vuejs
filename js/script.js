const app = new Vue({
    el: '#app',
    data: {
       
                home:
                    {
                      primo: " 01. Home Minimal",
                      secondo:" 02. Home Season" ,
                      terzo:" 03. Home Classic",
                      quarto:"04. Home Collection",
                      quinto:"005. Home Categories",
                      sesto:"06. Home Best Selling",
                      settimo:"07. Home Lookbook",
                      ottavo:"  08. Home Strong",
                      nono:"09. Home Stylish",
                      decimo:" 10. Home Sticky Menu"
                    },

                   
               

                shop:
                    {
                            
                        a:"SHOP STYLE",
                        b:"Shop – Fullwidth",
                        c:"SHOP STYLE",
                        d:"Shop – Fullwidth",
                        e:"Shop – Sidebar",
                        f:"Shop – Listview",
                        g:"PRODUCT STYLE",
                        h:"Product Style 1",
                        i: "Product Style 2",
                        l:"Product Style 3",
                        m:"PRODUCT LAYOUTS",
                        n:"Vertical Thumbnail",
                        o:"Horizontal Thumbnail",
                        p:"Gallery Thumbnail",
                        q:"Flat Thumbnail",
                        r:"OTHER PAGES",
                        s:"Cart",
                        u:"Wishlist",
                        w:"checkout",
                        z:"My account"
                    

                    },


                page:
                    {
                        a:"About us",
                        b:"Faq",
                        c:"404",
                        d:"icons"

                    } ,
               
               
                blog:
                    {
                        a:"Blog Standard",
                        b:"Blog list",
                        c:"Blog Overlay",
                        d:"Blog Masonry",
                        e:"Single Blog",
                        

                    },   
                
                
                product:[
                    {   
                        id:1,
                        img:'https://demo2wpopal.b-cdn.net/woncep/wp-content/uploads/2020/11/product-63.jpg',
                        name:"Printed A-Line Top",
                        price:"£299-£330"

                    },
                    
                    {
                        id:2,
                        img:'https://demo2wpopal.b-cdn.net/woncep/wp-content/uploads/2020/11/product-03.jpg',
                        name:"Printed A-Line Top",
                        price:"£299-£330"

                    },
                    {
                        id:3,
                        img:'https://demo2wpopal.b-cdn.net/woncep/wp-content/uploads/2020/11/product-05.jpg',
                        name:"Printed A-Line Top",
                        price:"£299-£330"

                    },
                    {
                        id:4,
                        img:'https://demo2wpopal.b-cdn.net/woncep/wp-content/uploads/2020/11/product-60.jpg',
                        name:"Printed A-Line Top",
                        price:"£299-£330"

                    },
                    
                   

                   
                ],

                productB:[
                    {
                        id:5,
                        img:'https://demo2wpopal.b-cdn.net/woncep/wp-content/uploads/2020/11/product-31.jpg',
                        name:"Printed A-Line Top",
                        price:"£299-£330"
    
                    },
                    {
                        id:6,
                        img:'https://demo2wpopal.b-cdn.net/woncep/wp-content/uploads/2020/11/product-32.jpg',
                        name:"Printed A-Line Top",
                        price:"£299-£330"

                    },
                    {
                        id:7,
                        img:'https://demo2wpopal.b-cdn.net/woncep/wp-content/uploads/2020/11/product-28.jpg',
                        name:"Printed A-Line Top",
                        price:"£299-£330"

                    },
                    {
                        id:8,
                        img:'https://demo2wpopal.b-cdn.net/woncep/wp-content/uploads/2020/11/product-30-1.jpg',
                        name:"Printed A-Line Top",
                        price:"£299-£330"

                    },
                ],    

                whishList:[],
                   
                    
             },
    
    methods: {
                 pushWishList(index){
                        
                        
                         this.whishList.push(this.product [index])
                         
                    },

                 remove(index){
                     this.whishList.splice(index,1)
                 }   
            },  
    
  })