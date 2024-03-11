import  LowerMenuIcons  from './../components/LowerMenuIcons'
import UpperMenu from './../components/UpperMenu'
import Profile from './../container/Profile'
import './PageProfile.css'

const dataTest = {
    "picture":"https://unavatar.io/oficial_mav",
    "username":"oficial_mav",
    "name":"Maria Alejandra Villegas",
    "type":"Figura publica",
    "description":["Influencer, modelo, creadora de contenido","Unico perfil real de facebook"],
    "url":"https://www.facebook.com/soyoficialmav?mibextid=LQQJ4d",
    "threads": "https://www.threads.net/@oficial_mav",
    "follower":["juana.valentina3103","westcol","valeriamontoya","sara.arangoo","elizadurangos","apg_04"],
    "highlights":[
        {
            "picture":"https://previews.123rf.com/images/man64/man642006/man64200600008/149778202-ciudad-vieja-del-canal-de-la-ciudad-de-%C3%A1msterdam-pa%C3%ADses-bajos-hermosa-vista-ic%C3%B3nica-iluminada-por.jpg",
            "description":"NLD"
        },
        {
            "picture":"https://static.vecteezy.com/system/resources/previews/016/166/035/non_2x/the-iconic-eiffel-tower-on-a-drizzly-evening-from-the-champ-de-mars-in-paris-france-2022-free-photo.jpg",
            "description":"FRA"
        },
        {
            "picture":"https://scontent.feoh8-1.fna.fbcdn.net/v/t1.6435-9/83339038_3061648413859898_9053240488110325760_n.jpg?stp=dst-jpg_s640x640&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKOTOgf1tOHXwtYaqSs9o7CRNq-4gIVB4JE2r7iAhUHusAZTg1HlsS194EjQAlsOBXar5z_nkmONBrc53Tetf8&_nc_ohc=MJdZ77nwSuQAX9_ywv9&_nc_ht=scontent.feoh8-1.fna&oh=00_AfBeT3Fgv_JSXW70bJuUc31jwK0yISLTaLDYEf5oBO0wsg&oe=6615E8F1",
            "description":"FIN"
        },
        {
            "picture":"https://media.istockphoto.com/id/499643129/es/foto/gran-v%C3%ADa-en-madrid-espa%C3%B1a-europa.webp?s=612x612&w=is&k=20&c=Uy5_iUiwmfboX1cH7LZqfdVafKSJntKw9ogNLZytrYs=",
            "description":"ESP"
        },
        {
            "picture":"https://s7g10.scene7.com/is/image/barcelo/Dubai-turismo?&&fmt=webp-alpha&qlt=75&wid=1900&fit=crop,1",
            "description":"EAU"
        },
        {
            "picture":"https://previews.123rf.com/images/czekma13/czekma131601/czekma13160100049/51042072-playa-del-caribe-y-la-bandera-de-rep%C3%BAblica-dominicana-en-la-isla-saona.jpg",
            "description":"RD"
        },
        {
            "picture":"https://i.pinimg.com/736x/3b/b6/b3/3bb6b3a487b0331c736d0122970fd042.jpg",
            "description":"MX"
        },
    ],
    "publications":[
        {
            "picture":"https://scontent.feoh8-1.fna.fbcdn.net/v/t39.30808-6/431323071_268376329641411_5842363018569538846_n.jpg?stp=c0.17.206.206a_dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHM48ywYxi9klYYIAFSU6CZdNHiiY8pWTx00eKJjylZPME18LxCkNt4j1QcavVShAf8yQCCajI6Sbuo5KeBb38O&_nc_ohc=G5nKqUQ_caYAX8-8wgM&_nc_ht=scontent.feoh8-1.fna&oh=00_AfA5gK1lTZLMgIPdRD6_CaeWih6AX4K3Xty169Ibp2r2pQ&oe=65F2A6D8",
        },
        {
            "picture":"https://scontent.feoh8-1.fna.fbcdn.net/v/t39.30808-6/421450182_242582332220811_3548842690485789629_n.jpg?stp=c0.23.206.206a_cp6_dst-jpg_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEIbHCq4KjUjdUhGobF77Jb02x_wcPmhEzTbH_Bw-aETNh-w9xJHNS6WZYZxne2mI9SF7UzNhK3IQ0eIE7ASpti&_nc_ohc=a4sjjUGpAqMAX9fa4ut&_nc_ht=scontent.feoh8-1.fna&oh=00_AfAOAe17VW-fbLKFA5__2BMT1HB0Vx-eBwMcEHcsTK8Q2g&oe=65F33620",
        },
        {
            "picture":"https://scontent.feoh8-1.fna.fbcdn.net/v/t39.30808-6/419738606_238060359339675_4890763820194627321_n.jpg?stp=c0.23.206.206a_cp6_dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHNt-dFAIOW6qdBpoj1k5vEMGBdCvS6NTUwYF0K9Lo1NYNIVF3IBggGarcwh3Xq9sAbbXtwE1IFiy5hx39c5vwU&_nc_ohc=QS4gPyGWnsAAX-0RVFX&_nc_ht=scontent.feoh8-1.fna&oh=00_AfB1bFi8cycuPIu-IKvCKAt3jLK_b1I_075EY9MC0Pk6Lw&oe=65F3DE8F",
        },
        {
            "picture":"https://scontent.feoh8-1.fna.fbcdn.net/v/t39.30808-6/400132534_200034953142216_4563374704119446881_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFph1R_pgvUQfZgvCw6vQ1VYV9W2-DqslZhX1bb4OqyVqFrKgXrydqWWE3ZRA2yNUInocmZJHuu93sWkI9Q8gN_&_nc_ohc=uHHHrPmP6zgAX-7UBGF&_nc_ht=scontent.feoh8-1.fna&oh=00_AfCFRePIiA9vY_7Kj8TYx7MUk_kcN33ToDW5q4mtqTRlcg&oe=65F42BD5",
        },
        {
            "picture":"https://scontent.feoh8-1.fna.fbcdn.net/v/t39.30808-6/398913153_196187496860295_8181713469024590724_n.jpg?stp=cp6_dst-jpg_p206x206&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE-r1looCeRJi0p9BU3fRpmscEtfeIX8XWxwS194hfxdQIBEqenl5MzZc81NOPkXACE4OXGr0FV28Eb0jb7nnAm&_nc_ohc=YZxH_EBUvFUAX9GRjrx&_nc_ht=scontent.feoh8-1.fna&oh=00_AfAL2Z6fgtIDOyMzooSZqIQMXTAY8MeMk2GuFVMzx2on4Q&oe=65F2E2DD",
        },
        {
            "picture":"https://scontent.feoh8-1.fna.fbcdn.net/v/t39.30808-6/397174551_194104250401953_2379487247654426198_n.jpg?stp=c0.23.206.206a_cp6_dst-jpg_p206x206&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHL6BMND6eAMBzYHIBOMyk4cpJlZJJwSwxykmVkknBLDMUOIeoJHg5L5syE8UU77AmrNqconprEhh-gv3IW7MV9&_nc_ohc=KP6uDZUKYh4AX_omvMv&_nc_ht=scontent.feoh8-1.fna&oh=00_AfAOcyIYziNrPYDrbJDCy6psOM1w_3apEzPf3hDbRuBO9g&oe=65F2C35B",
        },
        {
            "picture":"https://scontent.feoh8-1.fna.fbcdn.net/v/t39.30808-6/391613215_184328871379491_8066190339585907920_n.jpg?stp=c0.25.206.206a_cp6_dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGgUZNoTgBRYP5_ROnHmlE74faP7FrQNAXh9o_sWtA0BRRszuxCZFHCRgVsf7cXuDc5gVX6GVagSCEouwA9Zoif&_nc_ohc=ZYWr2IUDRgYAX8jpJ1j&_nc_ht=scontent.feoh8-1.fna&oh=00_AfCYQ58mufrTn4-AC7NLo4F9JYpV68pm5JRS3U3Pn3LeIg&oe=65F35008",
        },
    ],
    "reels":[
        {
            "picture":"https://scontent.feoh8-1.fna.fbcdn.net/v/t39.30808-6/391745771_182248328254212_8853733519966516103_n.jpg?stp=c0.53.206.206a_cp6_dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEa-hj_9NYk3fwVV127z79InMXihf5c9eycxeKF_lz17KS2Hd-vOEL7sRwOykcvpLDJajKIicTSBJVAuXV8aKxh&_nc_ohc=oftPnpsC2H4AX8flDZh&_nc_ht=scontent.feoh8-1.fna&oh=00_AfAXxziCc7rPZK_TD91XKEknBFhhMlwlv4yJCGmKOc3XTw&oe=65F39F3E",
        },
        {
            "picture":"https://scontent.feoh8-1.fna.fbcdn.net/v/t39.30808-6/378097016_162427270236318_8463702360467029925_n.jpg?stp=c0.17.206.206a_dst-jpg_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHUYV4rFp7YA0WRhLQBVn6VDr0PAe2eTCUOvQ8B7Z5MJawB8D02kfxwBrwG62md8Y74by1lcVAsQNXnTJGMZSkJ&_nc_ohc=N3RXUVEPjIgAX_7i2wX&_nc_ht=scontent.feoh8-1.fna&oh=00_AfD5JU0tGBf6-BtDDGDGoIKIbFrUCjB2BRTY3j38OMTSOA&oe=65F330F0",
        },
    ],
    "tag":[
        {
            "picture":"https://scontent.feoh8-1.fna.fbcdn.net/v/t39.30808-6/378287895_162427140236331_126698724049514996_n.jpg?stp=c168.0.206.206a_dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHVE4ouG_rixlWRIvg09JrmTccjCaClz_BNxyMJoKXP8Prs3i9TMRu_IgTcgKKUUtj5DeHrYpDpm8jCyD6nsgV3&_nc_ohc=w4JBhJvsFggAX_EfnlX&_nc_ht=scontent.feoh8-1.fna&oh=00_AfC9iS7CraZDu3lIknzeNPWbEUI1ILkrnSLsr-O_YoFYrw&oe=65F2C049",
        },
    ],
    "followers":3800000,
    "seguidos":185
}

function PageProfile(  ) {
    return (
        <div className='PageProfile'>
            <UpperMenu name={dataTest.username}/>
            <Profile dataTest={dataTest}/>
            <LowerMenuIcons/>
        </div>
    )
}

export default PageProfile