import { useEffect, useState } from "react"

function Body()
{

    const [Profile, setProfile] = useState([])
    const [numberOfProfile , setNumberOfProfile] = useState(0)

    async function generateProfile(count)
    {
        try
        {
        const response = await fetch(`https://api.github.com/users?per_page=${count}`)
        if(response.status == 403)
        {
            return
        }
        else {
        const data = await response.json()
        console.log(response.status)
        setProfile(data)
        }

        }
        catch(error)
        {
            console.log(error)
        }
    }

    useEffect(()=> {
        
        generateProfile(10) 
        console.log(typeof generateProfile)
    }, [])

    return (
        <>
            <input placeholder="Enter ID" type="number" name="id" value={numberOfProfile} onChange={(e) => setNumberOfProfile(e.target.value)}></input>
            <button onClick={() => generateProfile(numberOfProfile)}>Search</button>
            <div className="profiles">
                {
                    
                    Profile.map(
                        (profile , index) => 
                        {
                            return <div key={profile.id} className="cards">
                                <img src={profile.avatar_url}></img>
                                <h1>{profile.login}</h1>
                                <a href={profile.html_url} target="_blank">Profile</a>
                            </div>
                        }
                    )
                }
                
            </div>
        </>
    )
}

export default Body