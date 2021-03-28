import Link from "next/link";
const Gallery=()=>{
    return(
        <div id="contact" style={{backgroundColor:"#ADB36E"}}>
            <title>gallery</title>
            <h1 >Bonjour! </h1><hr></hr>
        <table style={{width:"100%",textAlign: "center",backgroundColor:"#669966",borderStyle:"double",borderWidth: "12px",borderColor:"#000000"}}>
            <td> <Link href={"/home"}><p style={{textAlign:"center"}}> ABOUT ME </p></Link> </td>
            <td> <Link href={"/gallery"}><p style={{textAlign:"center"}}>My Gallery </p></Link> </td>
            <td> <Link href={"/calgpa"}><p style={{textAlign:"center"}}> CALCULATOR GPA </p></Link> </td>
            <td> <Link href={"/contact"}><p style={{textAlign:"center"}}> CONTACT </p></Link> </td>
            <td> <Link href={"/post"}><p style={{textAlign:"center"}}> POST </p></Link> </td>
        </table>
            <table style={{padding: "15px"}}></table> 
            <br></br><h1>Photos describe my life</h1>
            <td><br></br><img src="11.JPG" style={{width:"250px",height:"300px"}}></img><br></br></td>
                <td><br></br><img src="12.JPG" style={{width:"250px",height:"300px"}}></img><br></br></td>
                <td><br></br><img src="13.JPG" style={{width:"250px",height:"300px"}}></img><br></br></td>

            <table>  
                <h2> My Favourite film</h2>
                <br>
                </br>
                <td><br></br><img src="1.JPEG" style={{width:"450px",height:"400px"}}></img></td>
                <td><br></br><img src="2.JPEG" style={{width:"450px",height:"400px"}}></img></td>
                <td><br></br><img src="3.JPEG" style={{width:"450px",height:"400px"}}></img></td>
              

               
            </table>
        
        </div>
    )
}

export default Gallery;