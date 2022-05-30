import React from 'react';
import "./css/SearchPage.css";
import SearchResult from "./SearchResult";
import { Button} from '@material-ui/core';
import flat1 from "./assets/img/flatPic/flat1.jpg";
import flat2 from "./assets/img/flatPic/flat2.jpg";
import flat3 from "./assets/img/flatPic/flat3.jpg";
import flat4 from "./assets/img/flatPic/flat4.jpg";
import flat5 from "./assets/img/flatPic/flat5.jpg";
import flat6 from "./assets/img/flatPic/flat6.jpg";
import flat7 from "./assets/img/flatPic/flat7.jpg";

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage_info'>
<p> +60 stays - 26 to 30 april - 2 guests</p>
<h1>Stays Nearby</h1> 
< Button variant="outlined"> Free Cancellation</Button>
< Button variant="outlined">Type of place</Button>
< Button variant="outlined">Price</Button>
< Button variant="outlined">Rooms and bed</Button>
< Button variant="outlined">More filters</Button>
       
        </div>
< SearchResult
img={flat1}
location="Private room in center of London"
title="Stay at this spacious Edwardian House"
description="2 guests - 1 bedroom - 1 bed - Shared bathroom - Kitchen -
Free parking - Washing machine"
star={4.74}
price="30€ / night"
total="117€ total" />   

<SearchResult 
img={flat2}
location="Hotel room - Greater London"
title="Private double room with suite facilitie"
description="2 guests - 1 bedroom - 1 bed - 1 bath"
star={4.61}
price="111€ / night"
total="444€ total" />   
<SearchResult
img={flat3}
location="Entire rental unit in London"
title="Bright 1 Bedroom flat with private patio"
description="4 guests - 1 bedroom - 2 beds - 1 bath - Wifi - Kitchen"
star={4.56}
price="201€ / night"
total="804€ total"  />
<SearchResult 
img={flat4}
location="Entire rental unit in Greater London"
title="Modern studio apartment near Harrods"
description="2 guests - Studio - 1 bed - 1 bath - Wifi - Kitchen - Washer"
star={4.17}
price="201€ / night"
total="804€ total"/>
<SearchResult 
img={flat5}
location="Entire condo in Greater London"
title="Beautiful and comfy Central London Flat"
description="5 guests - 2 bedrooms - 2 bed - 1 bath - Wifi - Kitchen - Washer"
star={4.50}
price="274€ / night"
total="1086€ total"/>
<SearchResult 
img={flat6}
location="Private room in Greater London"
title="Double bedroom in quiet house"
description="2 guests - 1 bedroom - 1 bed - Shared baths - Wifi - Kitchen - Washer"
star={4.57}
price="72€ / night"
total="288€ total"/>
<SearchResult
img={flat7}
location="Entire condo in Greater London"
title="A lovely Chelsea studio"
description="2 guests - Studio - 1 bed - 1 bath - Wifi - Kitchen - Washer"
star={4.40}
price="150€ / night"
total="600€ total" />
    </div>
  )
}

export default SearchPage