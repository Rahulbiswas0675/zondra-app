import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
const DNF = "https://cdn2.wpbeginner.com/wp-content/uploads/2016/02/notfound.jpg";
function Newsitem() {
   const [newsitem, setNewsitem] = useState();
   useEffect(() => {
         setNewsitem(
            <Card className="newsitem">
               <Card.Img variant="top" src={DNF} />
               <Card.Body>
                  <Card.Title>Data Not Found!</Card.Title>
                  <Card.Text>
                     You have reached your request limit for today
                  </Card.Text>
               </Card.Body>
            </Card>
         );
   }, []);

   return (
      <div className="news-cont">
         {newsitem}
      </div>
   )
}

export default Newsitem;
