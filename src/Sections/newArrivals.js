const newArrivals = [
    {
        city: 'Home & Deco.',
        country: 'Nike',
        p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmj79Co_rZxC7fvpX65EYQATcKNV1JYr8aMQ&usqp=CAU',
      },
      {
        city: 'Shop - Gadgets',
        country: 'ADIDAS',
        p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
        img: 'https://blogsmedia.lse.ac.uk/blogs.dir/30/files/2015/11/Cool-Shades-image.png',
      },
      {
        city: 'Chanel',
        country: 'Milan ladies striped',
        p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
        img: 'https://www.evetech.co.za/repository/components/razer-kaira-wireless-gaming-headset-for-xbox-600px-v2.jpg',
      },
      {
        city: 'Schneider Electric',
        country: 'ladies striped T-SHIRT',
        p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
        img: 'https://techresearchonline.com/wp-content/uploads/2022/06/product1-1-1024x1024.webp',
      },
      {
        city: 'IFM',
        country: 'Unilever',
        p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
        img: 'https://media.takealot.com/covers_images/a6dca3b08d5d4f91aabd51fac842dda4/s-zoom.file',
      },
      {
          city: 'ACDC DYNAMICS',
          country: 'Mens Rillogio sweater',
          p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
          img: 'https://food-ubc.b-cdn.net/wp-content/uploads/2020/02/Save-Money-On-Groceries_UBC-Food-Services.jpg',
        },
        {
          city: 'EMERSON',
          country: 'Mens Rillogio sweater',
          p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROz2u6pNH1PlNh7UWxmS0oDtT6LFRshSE4gw&usqp=CAU',
        },
        {
          city: 'ABB',
          country: 'Mens Rillogio sweater',
          p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
          img: 'https://img.fruugo.com/product/0/23/369429230_max.jpg',
        },
        {
          city: 'SIEMENS',
          country: 'Mens Rillogio sweater',
          p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
          img: 'https://assets.new.siemens.com/siemens/assets/api/uuid:715a06fc-ab10-4a12-be43-b265083572e8/width:1125/quality:high/s7-1200-cpu1215fc.png',
        },
        {
          city: 'OMRON',
          country: 'Russia',
          p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
          img: 'https://www.dallasnews.com/resizer/KyYqb3PGBDnIHKxGT4KnckeIwmY=/arc-anglerfish-arc2-prod-dmn/public/HSCBEKO34KFHNXN725SQV6RWEU.jpg',
        },
        {
          city: 'SIEMENS',
          country: 'Huggies',
          p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
          img: 'https://images.assettype.com/fortuneindia%2F2022-05%2Fc30a8fcf-4412-4347-bd27-a93503764039%2FGold_1186102973_copy.jpg?rect=0,1,1061,597&w=1250&q=60',
        },
        {
          city: 'FESTO',
          country: 'Cadbury',
          p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
          img: 'https://johnosskateshop.co.za/wp-content/uploads/2021/02/Superstar_Shoes_White_FV3284_01_standard.jpg',
        },
        {
          city: 'SICK',
          country: 'Clothing',
          p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
          img: 'https://americanclothing.co.za/wp-content/uploads/2021/01/20201223-IMG_9623.jpg',
        },
        {
          city: 'ROCKWELL AUTOMATION',
          country: 'Clothing',
          p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
          img: 'https://i0.wp.com/www.freshdesignblog.com/wp-content/uploads/2016/08/art-deco-occasional-table-gold.jpg?resize=345%2C329&ssl=1',
        },
        {
          city: 'HellermannTyton',
          country: 'Russia',
          p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLnoxN9yl1uzEAGWBXAMDMZxBxrJmimSC8AQ&usqp=CAU',
        },
        {
            city: 'SONY',
            country: 'Furniture',
            p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
            img: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/716Hww-Ky7L._AC_SL1500_.jpg',
          },
          {
            city: 'HUAWEI',
            country: 'Tech',
            p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
            img: 'https://i.gifer.com/SpxP.gif',
          },
          {
            city: 'DELL',
            country: 'Clothing',
            p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
            img: 'https://www.seagullindustries.co.za/images/stock/small/GRG-GRO1008.png?=1668746223',
          },
          {
            city: 'LENOVO',
            country: 'Clothing',
            p_logo: 'https://www.misprincipes.com/A4TYGHESUYO6UOZ2/uploads/image_88396_104_20210910083828.jpg',
            img: 'https://img.fruugo.com/product/6/58/617932586_max.jpg',
          },
          {
            city: 'RAIN',
            country: 'Russia',
            p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
            img: 'https://thumbs.dreamstime.com/b/rolled-sleeping-bag-other-camping-gear-rolled-sleeping-bag-other-camping-gear-near-lake-159804491.jpg',
          },
          {
            city: 'MTN',
            country: 'Furniture',
            p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
            img: 'https://m.media-amazon.com/images/I/41058ksX4hL._AC_UF894,1000_QL80_.jpg',
          },
          {
            city: 'Shop - Gadgets',
            country: 'BVLGARI',
            p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
            img: 'https://uploads-ssl.webflow.com/5f1c9cd99129705b848a815a/6123cf0a1dad320b81494d58_5.jpg',
          },
          {
            city: 'Chanel',
            country: 'PRADA',
            p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
            img: 'https://img.fruugo.com/product/5/85/255898855_max.jpg',
          },
          {
            city: 'Schneider Electric',
            country: 'VERSACE',
            p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
            img: 'https://t4.ftcdn.net/jpg/03/68/09/49/360_F_368094934_RLbGLbrs68hPicpZd1vg7rn9njFgZRCr.jpg',
          },
          {
            city: 'IFM',
            country: 'Calvin Klein',
            p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
            img: 'https://www.howtoisolve.com/wp-content/uploads/2015/12/1-iPhone-controlled-home-automation.jpg',
          },
          {
              city: 'ACDC DYNAMICS',
              country: 'FENDI',
              p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
              img: 'https://www.aircomfortservice.com/wp-content/uploads/2018/04/home-automation2.jpg',
            },
            {
              city: 'EMERSON',
              country: 'Lacoste',
              p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
              img: 'https://opis.cz/prevodovky-bonfiglioli/video/BNSeries.gif',
            },
            {
              city: 'ABB',
              country: 'Ralph Lauren',
              p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
              img: 'https://www.motorpowerco.com/media/1pdlbpy2/servomotore-con-drive-integrato-duet-flexi_1.jpg?rmode=min&width=1200&rnd=133136800548300000',
            },
            {
              city: 'SIEMENS',
              country: 'Hollister',
              p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
              img: 'https://m.media-amazon.com/images/I/71xk9blHJEL._AC_SL1500_.jpg',
            },
            {
              city: 'OMRON',
              country: 'Champion',
              p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
              img: 'https://cdn.shopify.com/s/files/1/0027/4664/6579/products/Game-The-Boredom-Busting-Box-Indoor-Puzzles-And-Games-Image-5_700x700.jpg?v=1658520430',
            },
            {
              city: 'SIEMENS',
              country: 'louis Vuitton',
              p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
              img: 'https://cdn.shopify.com/s/files/1/0503/9485/7670/products/Classique8kgpackshot.jpg?v=1677509114&width=1946',
            },
            {
              city: 'FESTO',
              country: 'LEVIS',
              p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
              img: 'https://img.fruugo.com/product/3/86/567818863_max.jpg',
            },
            {
              city: 'ROCKWELL AUTOMATION',
              country: 'Clothing',
              p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
              img: 'https://www.foodbusinessnews.net/ext/galleries/new-food-and-beverage-products-for-children/full/LesserEvil_Slide.jpg?t=1612367347&width=900',
            },
            {
              city: 'HellermannTyton',
              country: 'Amplify',
              p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
              img: 'https://cdn-prd-02.pnp.co.za/sys-master/images/hf3/hd9/10772079607838/silo-product-image-v2-15Mar2022-180418-5449000054227-Straight_on-12839-20645_400Wx400H',
            },
            {
                city: 'SONY',
                country: 'VOLKANO',
                p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
                img: 'https://images.saymedia-content.com/.image/t_share/MTk0NTEwMzY4MzA1ODQ5OTY2/best-crafts-using-newspaper.jpg',
              },
              {
                city: 'HUAWEI',
                country: 'Timberland',
                p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
                img: 'https://cdn.shopify.com/s/files/1/2101/9939/products/Mont_Marte_Signature_Creative_Art_Craft_Station_1_600x600_crop_center.jpg?v=1620274115',
              },
              {
                city: 'RAIN',
                country: 'Bathu',
                p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
                img: 'https://www.fvpparts.com/application/files/4415/3310/6028/AntiFreeze.jpg',
              },
              {
                city: 'MTN',
                country: 'BECKHOF',
                p_logo: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
                img: 'https://karite.co.za/wp-content/uploads/2023/02/anti-freeze-450x450.png',
              }
  ];

  export default newArrivals