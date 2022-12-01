import { ClassNames } from '@emotion/react';
import React from 'react';
import Card from 'react-bootstrap/Card';
const data = [
  { Id: 1, Title: "Life is like a cup of coffee", Img: "https://i0.wp.com/www.invajy.com/wp-content/uploads/2018/12/Inspirational-Story-1-2.jpg?resize=768%2C432&ssl=1", Story: "Life is like a cup of coffee is an inspirational short story of a university professor and his students, who gather at professor’s home after a long time. This is a classical example of how can we have a different perspective about life. The short story communicates a very powerful message that the true meaning of life is not the materialistic achievements, but going that extra mile in the journey of life which enlighten you the real purpose of it. A must read for everyone, specially the middle age group." },
  { Id: 2, Title: "Nail on the fence", Img: "https://i0.wp.com/www.invajy.com/wp-content/uploads/2019/01/Inspirational-Story.jpg?resize=768%2C512&ssl=1", Story: "Nail on the fence is a short story of a father and his arrogant son. In this story; father communicates the lessons on anger management very powerfully. This is an old motivational short story and one of my favorite. The story motivates  to bring a change in your personality trait which will make a noticeable impact on your relationships and interpersonal skills.  A perfect short inspirational story to share with your kids and make them understand how anger can ruin their life." },
  { Id: 3, Title: "Is the jar of your time full ? ", Img: "https://i0.wp.com/www.invajy.com/wp-content/uploads/2018/06/JF1.jpg?w=360&ssl=1", Story: "Is the jar of your time full ? This Time Management Story teaches the skills of prioritization  in a wonderful way. A must read for the readers looking for improve on decision making skills, prioritization of things and achieve achieve balance in life.  The story explains of importance of time in a simple way and give insights on how to use smaller time gaps for completing small – small jobs." },
  { Id: 4, Title: "The Starfish Story ", Img: "https://i0.wp.com/www.invajy.com/wp-content/uploads/2019/02/The-Starfish-Story.jpg?resize=768%2C512&ssl=1", Story: "Inspirational Short Story # 4 – The Starfish Story is a story of starfishes and a little girl. This story explains the importance of hope, perseverance and being the change. This is a story of confidence about taking an initiative to bring the change. It’s about how one step towards changing the world can make the difference. I read this story again n again; every time I read it, I get energized with a new energy to bring the change in the society." },
  { Id: 5, Title: "Empty your Cup", Img: "https://i0.wp.com/www.invajy.com/wp-content/uploads/2019/03/empty-cup.jpg?resize=768%2C513&ssl=1", Story: "Empty Your Cup is a classic Zen Story and very close to my heart.  This is a story of a university professor, who meets a Zen Master to learn the pearls of Zen wisdom. What an incredible lesson professor learnt from the meet. We all behave like professor in day to day, so go on and learn the strong message this short story communicates in very simple words." }
]
function SummaryPage() {
  return (
    <div style={{ width: '100%', height:'98vh'}} >
      <Card.Title style={{ fontFamily:'sans-serif', fontWeight:'bolder', }}>Today Summary For You</Card.Title>
      <Card style={{ width: '100%', height:'95vh', overflow:'scroll', display:'flex', flexDirection:'column', gap:'16px'}} className="NoteItem">
        {data.map(item => (
          <Card style={{ width: '100%', minHeight:'95vh' }} key={item.Id}>
            <Card.Img variant="top" src={item.Img} style={{ width: '100%', height:'40vh' }}/>
            <Card.Body>
              <Card.Title style={{ fontFamily:'fantasy', fontWeight:'bolder', fontSize:'50px' }}>{item.Title}</Card.Title>
              <Card.Text style={{ fontFamily:'fantasy', fontSize:'35px' }}>{item.Story}</Card.Text>
            </Card.Body>
          </Card>
        ))

        }
      </Card>
    </div>
  )
}

export default SummaryPage;