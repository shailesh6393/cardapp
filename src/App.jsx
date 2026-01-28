
import React, { useState } from 'react';


function App() {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [city, setCity] = useState("")
    const [color1, setColor1] = useState("black");
    const [color2, setColor2] = useState("black");
    const [color3, setColor3] = useState("black");
    const [color4, setColor4] = useState("black");
    const [color5, setColor5] = useState("white");
    const [color6, setColor6] = useState("white");
    const [color7, setColor7] = useState("white");
    const [color8, setColor8] = useState("white");
    
    
  return (
    <>
    <div className='main'>
    <div className='fdiv'>
        <h1>Card App</h1>
        <div>
            
            <input 
type="text" 
placeholder='Enter Name'
value={userName}
onChange={(e)=>setUserName(e.target.value)}
/>
<input id='col'
        type='color'
        value={color1}
        onChange={(e) => setColor1(e.target.value)}
      />
</div>
        <div>
       
        <input 
type="text" 
placeholder='Enter E-mail'
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
<input id='col'
        type='color'
        value={color2}
        onChange={(e) => setColor2(e.target.value)}
      />
        </div>
        <div>
        
        <input 
type="text" 
placeholder='Enter Mobile'
value={mobile}
onChange={(e)=>setMobile(e.target.value)}
/>
<input id='col'
        type='color'
        value={color3}
        onChange={(e) => setColor3(e.target.value)}
      />
        </div>
        <div>
       
        <input 
type="text" 
placeholder='Enter City'
value={city}
onChange={(e)=>setCity(e.target.value)}
/>
<input id='col'
        type='color'
        value={color4}
        onChange={(e) => setColor4(e.target.value)}
      />
        </div>
        <div className="cardcol">
            <input id='cal'type='color' value={color5} onChange={(e) => setColor5(e.target.value)} />
            <input id='cal'type='color' value={color6} onChange={(e) => setColor6(e.target.value)} />
            <input id='cal'type='color' value={color7} onChange={(e) => setColor7(e.target.value)} />
            <input id='cal'type='color' value={color8} onChange={(e) => setColor8(e.target.value)} />
      
        </div>

    </div>
    <div className='sdiv'>
        <div className="card" style={{ backgroundColor: color5 ||color6 || color7|| color8  }}>
        
    
            <h2 style={{ color: color1 }}>User Name: {userName}</h2>
            <h2 style={{ color: color2 }}>E-mail: {email}</h2>
            <h2 style={{ color: color3 }}>Mobile: {mobile}</h2>
            <h2 style={{ color: color4 }}>City: {city}</h2>
        </div>
    </div>
    </div>
    </>
  )
}

export default App