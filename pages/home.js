import {useEffect} from 'react';
import axios from 'axios'
import Link from "next/link";
const baseURL = 'https://dummyapi.io/data/api'
const password = '602a9b8ae38c9a1e9cf12c79'
const Home = () => {
  return (
    //   <h1>This is home page</h1>
    <div id="index" style={{backgroundColor:"#ADB36E"}}>
        <h1 >Bonjour! </h1><hr></hr>
        <table style={{width:"100%",textAlign: "center",backgroundColor:"#669966",borderStyle:"double",borderWidth: "12px",borderColor:"#000000"}}>
            <td> <Link href={"/home"}><p style={{textAlign:"center"}}> ABOUT ME </p></Link> </td>
            <td> <Link href={"/gallery"}><p style={{textAlign:"center"}}>My Gallery </p></Link> </td>
            <td> <Link href={"/calgpa"}><p style={{textAlign:"center"}}> CALCULATOR GPA </p></Link> </td>
            <td> <Link href={"/contact"}><p style={{textAlign:"center"}}> CONTACT </p></Link> </td>
            <td> <Link href={"/post"}><p style={{textAlign:"center"}}> POST </p></Link> </td>
        </table>
            <table style={{padding: "15px"}}>
            <h1> About Me </h1><br></br>
            <td ><br></br><img src="human.jpg" style={{width:"220px",height:"300px"}}/></td>
               
                <tr></tr>
                    <td><h2>General Info</h2>
                    <p >Name : Jetsada Jinaka    Nickname : Tang  Student code : 620612144
                        <br></br>ชื่อ : นายเจษฎา จินะกะ       ชื่อเล่น : ตังค์ <br></br>
                        <br></br> Currently Education : 2nd Year, Computer Engineering, Faculty of Engineering, Chaing Mai University.
                        <br></br>กำลังศึกษาชั้นปีที่ 2 คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์ มหาวิทลัยเชียงใหม่ <br></br>
                        <br></br> Graduated High School : Yupparaj Wittiyalai
                        <br></br>จบการศึกษาชั้นมัธยมปลายโรงเรียนยุพราชวิทยาลัย <br></br>
                        <br></br>238 ถนนพระปกเกล้า ตำบลศรีภูมิ อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200 <br></br>
                        </p></td>
                        <hr></hr>
                <tr>
                    <td>
                        <h2>skills</h2>
                    </td>
                    <td>
                        <ul>
                            <li>Play Guitar </li>
                            <li>Coding:C++,Phyton,Java,Html,JavaScripts</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Hobbies</h2>
                    </td>
                    <td>
                        <ul>
                        
                        <li>play basketball</li>
                        <li>running</li>
                        <li>play the guitar</li>
                        <li>listen music</li>
                    
                        </ul>
                    </td>
                </tr>
                <tr><td><h2>E-Mail</h2></td>
                    <td>
                    
                    <br></br><img src="gmail.png" style={{width:"35px",height:"25px"}}></img> Gmail : <a href="mailto:name@yourdomain.com">Jetsada.yrc05@gmail.com</a>
                    <p><img src="outlook.png" style={{width:"35px",height:"25px"}}></img>  Outlook : <a href="mailto:name@yourdomain.com">Jetsada_Jinaka@hotmail.com</a>
                    <br></br><img src="cmu.png" style={{width:"35px",height:"25px"}}></img> Campus : <a href="mailto:name@yourdomain.com">Jetsada_Jinaka@cmu.ac.th</a>
                    </p>
                    </td>
                </tr>
                <tr>
                    <td><h2>Application</h2></td>
                    <td><p><img src="line logo.png" style={{width:"25px",height:"25px"}}></img>  Line id : <a href="https://line.me/ti/p/tMsPJGtp7E">Tangnotsmall</a>
                    <br></br><img src="facebook.png" style={{width:"25px",height:"25px"}}></img> Facebook : <a href="https://web.facebook.com/wiz.sarinya"> Tang Jetsada</a>
                    <br></br><img src="insta.png" style={{width:"25px",height:"25px"}}></img> Instagram : <a href="https://www.instagram.com/wz.srny/">Thawinteriscoming</a>
                    </p>
                    </td>
                </tr>
                <tr>
                    <td><h2>PhoneCall</h2></td>
                    <td><p>(+66) 917051321</p></td>
                </tr>
               
        </table>
    </div>
  )
}

export default Home;