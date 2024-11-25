import "./Assignment.css" 

function RentalHome(){
    return(
        <div>
    <div className="heading">
    <h1>Find Your Perfect <span>Rental Home</span></h1>
      <p>Beautifully curted Rental home that perfectly matche your style and needs , making your need for serching for the ideal space
        effortless and enjoyable Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam reprehenderit alias voluptatum dignissimos veniam magni, atque doloribus odit labore at tenetur quo non eligendi quibusdam dolores quasi odio, ullam possimus! Cumque id quae culpa dicta deleniti enim ex dignissimos harum autem architecto odio vero modi voluptas perferendis quibusdam, neque esse incidunt sapiente optio dolorum animi illo unde nulla blanditiis. Magni nostrum ducimus voluptatem nam, ut ipsum incidunt unde reprehenderit. </p>
    </div>
    <div className="citys">
        <button>Goa</button>
        <button>Mumbai</button>
        <button>Kolkata</button>
        <button>Jaipur</button>
        <button>Banglore</button>
        <button>Kerala</button>
        <button>Pune</button> 
        <input type="search" placeholder="find your city" />
    </div>
    
    <div className="imgbtn">
    <div className="imgp">
      <div className="img1">  <img src="https://www.bing.com/images/blob?bcid=S.8ND89YCMgHe40JEdW.nToeMEtA.....-I" alt="" />
      <h2>Flat in North Goa </h2>
      <p>Goan Studio near Vagator Beach <br />
      2beds <br />
      48.186 <h4>43.788 month</h4></p>
      </div>
      <div className="img2">  <img src="https://th.bing.com/th/id/OIP.3r_ZE71JGdNR2XOM214ilQHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" /><h2>Flat in Arombol </h2>
      <p>Studio Apartment <br />
      1bed <br />
      51.592 <h4>43.788 month</h4></p></div>
      <div className="img3">  <img src="https://th.bing.com/th/id/OIP.bi6zyRvb8D_5YlS2ZUeZegHaFs?w=270&h=208&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" /><h2>Flat in Stay in Solium</h2>
      <p>Jennys'Home <br />
      2beds <br />
      35.976 <h4>26.968 month</h4></p></div>
      
    </div>
    <button>View All</button>
    </div>
    
    <div className="body">
        <div>
            <h1>Discover The <span>Benefits</span> of Renting with us </h1>
            <p>
            Beautifully curted Rental home that perfectly matche your style and needs , making your need for serching for the ideal space
            effortless and enjoyable Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque facere ea ipsam architecto quo maiores similique blanditiis voluptate a delectus nesciunt omnis facilis exercitationem, quos mollitia rem beatae suscipit eligendi deserunt veritatis! Vero, recusandae quibusdam nesciunt odit est corporis, minus magni quasi cupiditate numquam laborum a quis officiis odio earum.
            </p>
            <div className="cnt"><button>Renters</button> <h3>Landlords/Property Mangers</h3><h3>Agents</h3></div>
        </div>
        <div className="bimgp">
            <div className="bimg1"><img src="https://th.bing.com/th/id/OIP.KIUIgAy-uInAGMnTKTOswwHaPK?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" /> <br /><h3>Match With Your Ideal RoomMate</h3></ div>
            <div className="bimg2"><img src="https://th.bing.com/th/id/OIP.9p1bemUJd7WFl0giZunN5AAAAA?pid=ImgDet&w=178&h=315&c=7&dpr=1.5" alt="" /><br /><h3>Semless Connection</h3></div>
            <div className="bimg3"><img src="https://th.bing.com/th/id/OIP.fmcD9Z1SWruVxKuaoNw0SwHaNJ?pid=ImgDet&w=178&h=315&c=7&dpr=1.5" alt="" /><br /><h3>Discover Activites Around You</h3></div>
        </div>
    </div>
    <div className="fotter">
        <div><h1>Leading <span>Loacalities</span> To Explore </h1>
        <p>Explore a selection of the most desirable neighborhoods, where vibrant communinities
            and excepitional aminities come together to create your perfect living envinorment Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus temporibus totam obcaecati placeat facere, deleniti repellendus nostrum, perspiciatis itaque error cumque rerum, architecto et quis atque eligendi quam! Earum eius impedit voluptatum facilis, sapiente minima mollitia qui iure laudantium recusandae fuga est provident veritatis. Optio maiores quaerat illo voluptatem qui. </p>
            <button>Popular</button>
            <button>Investment Hotspots</button>
            <button>Affordable</button>
            <button>Great Life style </button>
            </div>
    </div>
    <div id="fotter">
        <div>
        <table rules="all">
        <tbody>
        <tr><td>Mira Road 9.6k/sq.ft</td> <td>1.57%</td></tr>
        <tr><td>Andheri West 28.1k/sq.ft</td><td>-4.8%</td></tr>
        <tr><td>Chembur 20.9k/sq.ft</td><td>10.7%</td></tr>
        <tr><td>Borivali West 22.3k/sq.ft</td>-1.00%<td></td></tr>
        <tr><td>Mlad West 18.8k/sq.ft</td>4.67%<td></td></tr>
        <tr><td>Kandivali West 20.4k/sq.ft</td><td>8.7%</td></tr>
        </tbody>
        </table>
        </div>
        <div><img src="https://th.bing.com/th/id/OIP.8_FoeAjsVxFMBIJJqH4WhgAAAA?w=170&h=198&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" /></div>
    </div>
    </div>
    )
}
export default RentalHome;