import React from 'react'

function Greeding() {

    const userInfo = [
        {
            userName: "VishalBabar",
            email: "VishalBabar@gmzil.com",
            add: "India"
        },
        {
            userName: "VishwasBabar",
            email: "VishwasBabar@gmzil.com",
            add: "IndiaMaharastra"
        },
        {
            userName: "DineshArekar",
            email: "DineshAr@gmzil.com",
            add: "India"
        }
    ];
  return (
    <div>
     {
        userInfo.map((user) => (
            <ul key={Math.random()*10}>
             <li>{user.userName}</li>
             <li>{user.email}</li>
             <li>{user.add}</li>
            </ul>
        ))
     }
    </div>
  )
}

export default Greeding
