import React from "react";
import './history.css';
import { Parallax, Background } from "react-parallax";
import header from "../asset/history/header.png";
import back from "../asset/history/back.png";
import dots from "../asset/about/ryb3.png";
import line from "../asset/history/line.png";
import homea from "../asset/history/homea.png";
import styles from "./history.module.css";

const insideStyles = {
  border: "2px solid #ef0000",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

export default function history() {
  return (
   
      <div className="history">
      <Parallax
        bgImage={header}
        bgImageStyle={{
          height: `${
            window.innerHeight > window.innerWidth ? "13.2vh" : "13.2"
          }`,

          width: `${window.innerHeight > window.innerWidth ? "120vw" : "120vw"}`,
        }}
        strength={300}
        renderLayer={(percentage) => (
          <div>
            <div
              style={{
                height: "13.2vh",
                position: "relative",
                overflow: "hidden",
              }}
            > 
            <br/><br/><br/><br/>
            <div className="wrap">
                <div className="headerlefta">
              <b style={{ color: "white" , fontSize:40}}>
              <a href="./history"> HISTORY </a>
                </b>
                </div>
                
             <a href="."><img src={homea} height="50" /></a>
                <div style={{ color: "white" , fontSize:25}}>
                -{'> '}
                <a href="./about"> 동아리 </a>  
                -{'>'} <a href="./history"> 연혁 </a>
                  </div>
                
          </div>
          <div className="wrap">
                <div className="headerleftb">
                <div style={{ color: "lightgray" , fontSize:15}}>
                  _ 한소리연혁 </div>
                <img src={line} height="35" /></div>
                </div>
         </div>
         </div>
         
        
         
        )}
      ></Parallax>
     {/*위의 부분은 맨위 헤더?에 관한 것-링크 완료*/}

  <Parallax
        bgImage={back}
        bgImageStyle={{
          height: `${
            window.innerHeight > window.innerWidth ? "250vh" : "100vh"
          }`,

          width: `${window.innerHeight > window.innerWidth ? "100vw" : "100vw"}`,
        }}
        strength={5500}
        style={{ height: "550vh", position: "relative", overflow: "hidden" }}
        renderLayer={(percentage) => (
          <div style={{
            height: "550vh",
            position: "relative",
          }}>
            
            <div>
            <br/><br/> <br/>

           {/*1990*/}
            <div className="wrap">
              <div style={{ color: "chacole" , fontSize:30}}>
              <div className="headerleftr">
              
               <div className={styles.absoluteg}>
                 <div>3월: 한소리 창단</div>
                 <div className="headerlefto">
                 <div>4월: 패장 홍길동 선출</div></div>
               </div> 
              </div></div>
            </div>

            <div style={{ color: "white" , fontSize:30}}>
            <div className="wrap"> <div className="headerleftq"><div className={styles.roundg}>1990</div></div></div>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/*1991*/}
            <div className="wrap">
               <div className="headerleftl">
               <div style={{ color: "chacol" , fontSize:30}}>
               <div className={styles.absolutey}><div>3월: 패장 김영희 선출</div>
               <div className="headerleftj">
                 <div>4월: {'<'}div{'>'} 대회 참가</div></div>
                 </div></div>
              </div> 
              </div>
              <div className="headerleftu">
              <div style={{ color: "white" , fontSize:30}}>
             <div className="wrap"> <div className="headerleftu"><div className={styles.roundy}>1991</div></div></div>
             </div></div>
              </div>
              <div>


              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/*1992*/}
            <div className="wrap">
              <div style={{ color: "chacole" , fontSize:30}}>
              <div className="headerleftr">
              
               <div className={styles.absoluteo}>
                 <div>4월: 패장 박철수 선출</div>
                 <div className="headerlefto">
                 <div>5월: 제1회 정기공연 개최</div></div>
               </div> 
              </div></div>
            </div>

            <div style={{ color: "white" , fontSize:30}}>
            <div className="wrap"> <div className="headerleftq"><div className={styles.roundo}>1992</div></div></div>
            </div>
              
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/*1993*/}
            <div className="wrap">
               <div className="headerleftl">
               <div style={{ color: "chacol" , fontSize:30}}>
               <div className={styles.absoluteb}><div>3월: 패장 아코 선출</div>
               <div className="headerleftj">
                 <div>4월: {'<'}살려줘{'>'} 대회 참가</div></div>
                 </div></div>
              </div> 
              </div>
              <div className="headerleftu">
              <div style={{ color: "white" , fontSize:30}}>
             <div className="wrap"> <div className="headerleftu"><div className={styles.roundb}>1993</div></div></div>
             </div></div>

             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             {/*1994*/}
            <div className="wrap">
              <div style={{ color: "chacole" , fontSize:30}}>
              <div className="headerleftr">
              
               <div className={styles.absoluteg}>
                 <div>3월: 한소리 창단</div>
                 <div className="headerlefto">
                 <div>4월: 패장 홍길동 선출</div></div>
               </div> 
              </div></div>
            </div>

            <div style={{ color: "white" , fontSize:30}}>
            <div className="wrap"> <div className="headerleftq"><div className={styles.roundg}>1994</div></div></div>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/*1995*/}
            <div className="wrap">
               <div className="headerleftl">
               <div style={{ color: "chacol" , fontSize:30}}>
               <div className={styles.absolutey}><div>3월: 패장 김영희 선출</div>
               <div className="headerleftj">
                 <div>4월: {'<'}div{'>'} 대회 참가</div></div>
                 </div></div>
              </div> 
              </div>
              <div className="headerleftu">
              <div style={{ color: "white" , fontSize:30}}>
             <div className="wrap"> <div className="headerleftu"><div className={styles.roundy}>1995</div></div></div>
             </div></div>
              </div>
              <div>


              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             {/*1996*/}
            <div className="wrap">
              <div style={{ color: "chacole" , fontSize:30}}>
              <div className="headerleftr">
              
               <div className={styles.absoluteo}>
                 <div>4월: 패장 박철수 선출</div>
                 <div className="headerlefto">
                 <div>5월: 제1회 정기공연 개최</div></div>
               </div> 
              </div></div>
            </div>

            <div style={{ color: "white" , fontSize:30}}>
            <div className="wrap"> <div className="headerleftq"><div className={styles.roundo}>1996</div></div></div>
            </div>
              
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/*1997*/}
            <div className="wrap">
               <div className="headerleftl">
               <div style={{ color: "chacol" , fontSize:30}}>
               <div className={styles.absoluteb}><div>3월: 패장 아코 선출</div>
               <div className="headerleftj">
                 <div>4월: {'<'}살려줘{'>'} 대회 참가</div></div>
                 </div></div>
              </div> 
              </div>
              <div className="headerleftu">
              <div style={{ color: "white" , fontSize:30}}>
             <div className="wrap"> <div className="headerleftu"><div className={styles.roundb}>1997</div></div></div>
             </div></div>
              
             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             {/*1998*/}
            <div className="wrap">
              <div style={{ color: "chacole" , fontSize:30}}>
              <div className="headerleftr">
              
               <div className={styles.absoluteg}>
                 <div>3월: 한소리 창단</div>
                 <div className="headerlefto">
                 <div>4월: 패장 홍길동 선출</div></div>
               </div> 
              </div></div>
            </div>

            <div style={{ color: "white" , fontSize:30}}>
            <div className="wrap"> <div className="headerleftq"><div className={styles.roundg}>1998</div></div></div>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/*1999*/}
            <div className="wrap">
               <div className="headerleftl">
               <div style={{ color: "chacol" , fontSize:30}}>
               <div className={styles.absolutey}><div>3월: 패장 김영희 선출</div>
               <div className="headerleftj">
                 <div>4월: {'<'}div{'>'} 대회 참가</div></div>
                 </div></div>
              </div> 
              </div>
              <div className="headerleftu">
              <div style={{ color: "white" , fontSize:30}}>
             <div className="wrap"> <div className="headerleftu"><div className={styles.roundy}>1999</div></div></div>
             </div></div>
              </div>
              <div>


              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/*2000*/}
            <div className="wrap">
              <div style={{ color: "chacole" , fontSize:30}}>
              <div className="headerleftr">
              
               <div className={styles.absoluteo}>
                 <div>4월: 패장 박철수 선출</div>
                 <div className="headerlefto">
                 <div>5월: 제1회 정기공연 개최</div></div>
               </div> 
              </div></div>
            </div>

            <div style={{ color: "white" , fontSize:30}}>
            <div className="wrap"> <div className="headerleftq"><div className={styles.roundo}>2000</div></div></div>
            </div>
              
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/*2001*/}
            <div className="wrap">
               <div className="headerleftl">
               <div style={{ color: "chacol" , fontSize:30}}>
               <div className={styles.absoluteb}><div>3월: 패장 아코 선출</div>
               <div className="headerleftj">
                 <div>4월: {'<'}살려줘{'>'} 대회 참가</div></div>
                 </div></div>
              </div> 
              </div>
              <div className="headerleftu">
              <div style={{ color: "white" , fontSize:30}}>
             <div className="wrap"> <div className="headerleftu"><div className={styles.roundb}>2001</div></div></div>
             </div></div>

             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             {/*2002*/}
            <div className="wrap">
              <div style={{ color: "chacole" , fontSize:30}}>
              <div className="headerleftr">
              
               <div className={styles.absoluteg}>
                 <div>3월: 한소리 창단</div>
                 <div className="headerlefto">
                 <div>4월: 패장 홍길동 선출</div></div>
               </div> 
              </div></div>
            </div>

            <div style={{ color: "white" , fontSize:30}}>
            <div className="wrap"> <div className="headerleftq"><div className={styles.roundg}>2002</div></div></div>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/*2003*/}
            <div className="wrap">
               <div className="headerleftl">
               <div style={{ color: "chacol" , fontSize:30}}>
               <div className={styles.absolutey}><div>3월: 패장 김영희 선출</div>
               <div className="headerleftj">
                 <div>4월: {'<'}div{'>'} 대회 참가</div></div>
                 </div></div>
              </div> 
              </div>
              <div className="headerleftu">
              <div style={{ color: "white" , fontSize:30}}>
             <div className="wrap"> <div className="headerleftu"><div className={styles.roundy}>2003</div></div></div>
             </div></div>
              </div>
              <div>


              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             {/*2004*/}
            <div className="wrap">
              <div style={{ color: "chacole" , fontSize:30}}>
              <div className="headerleftr">
              
               <div className={styles.absoluteo}>
                 <div>4월: 패장 박철수 선출</div>
                 <div className="headerlefto">
                 <div>5월: 제1회 정기공연 개최</div></div>
               </div> 
              </div></div>
            </div>

            <div style={{ color: "white" , fontSize:30}}>
            <div className="wrap"> <div className="headerleftq"><div className={styles.roundo}>2004</div></div></div>
            </div>
              
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/*2005*/}
            <div className="wrap">
               <div className="headerleftl">
               <div style={{ color: "chacol" , fontSize:30}}>
               <div className={styles.absoluteb}><div>3월: 패장 아코 선출</div>
               <div className="headerleftj">
                 <div>4월: {'<'}살려줘{'>'} 대회 참가</div></div>
                 </div></div>
              </div> 
              </div>
              <div className="headerleftu">
              <div style={{ color: "white" , fontSize:30}}>
             <div className="wrap"> <div className="headerleftu"><div className={styles.roundb}>2005</div></div></div>
             </div></div>

             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           {/*2006*/}
           <div className="wrap">
              <div style={{ color: "chacole" , fontSize:30}}>
              <div className="headerleftr">
              
               <div className={styles.absoluteg}>
                 <div>3월: 한소리 창단</div>
                 <div className="headerlefto">
                 <div>4월: 패장 홍길동 선출</div></div>
               </div> 
              </div></div>
            </div>

            <div style={{ color: "white" , fontSize:30}}>
            <div className="wrap"> <div className="headerleftq"><div className={styles.roundg}>2006</div></div></div>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/*2007*/}
            <div className="wrap">
               <div className="headerleftl">
               <div style={{ color: "chacol" , fontSize:30}}>
               <div className={styles.absolutey}><div>3월: 패장 김영희 선출</div>
               <div className="headerleftj">
                 <div>4월: {'<'}div{'>'} 대회 참가</div></div>
                 </div></div>
              </div> 
              </div>
              <div className="headerleftu">
              <div style={{ color: "white" , fontSize:30}}>
             <div className="wrap"> <div className="headerleftu"><div className={styles.roundy}>2007</div></div></div>
             </div></div>
              </div>
              <div>


              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/*2008*/}
            <div className="wrap">
              <div style={{ color: "chacole" , fontSize:30}}>
              <div className="headerleftr">
              
               <div className={styles.absoluteo}>
                 <div>4월: 패장 박철수 선출</div>
                 <div className="headerlefto">
                 <div>5월: 제1회 정기공연 개최</div></div>
               </div> 
              </div></div>
            </div>

            <div style={{ color: "white" , fontSize:30}}>
            <div className="wrap"> <div className="headerleftq"><div className={styles.roundo}>2008</div></div></div>
            </div>
              
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/*2009*/}
            <div className="wrap">
               <div className="headerleftl">
               <div style={{ color: "chacol" , fontSize:30}}>
               <div className={styles.absoluteb}><div>3월: 패장 아코 선출</div>
               <div className="headerleftj">
                 <div>4월: {'<'}살려줘{'>'} 대회 참가</div></div>
                 </div></div>
              </div> 
              </div>
              <div className="headerleftu">
              <div style={{ color: "white" , fontSize:30}}>
             <div className="wrap"> <div className="headerleftu"><div className={styles.roundb}>2009</div></div></div>
             </div></div>

             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             {/*2010*/}
            <div className="wrap">
              <div style={{ color: "chacole" , fontSize:30}}>
              <div className="headerleftr">
              
               <div className={styles.absoluteg}>
                 <div>3월: 한소리 창단</div>
                 <div className="headerlefto">
                 <div>4월: 패장 홍길동 선출</div></div>
               </div> 
              </div></div>
            </div>

            <div style={{ color: "white" , fontSize:30}}>
            <div className="wrap"> <div className="headerleftq"><div className={styles.roundg}>2010</div></div></div>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/*2011*/}
            <div className="wrap">
               <div className="headerleftl">
               <div style={{ color: "chacol" , fontSize:30}}>
               <div className={styles.absolutey}><div>3월: 패장 김영희 선출</div>
               <div className="headerleftj">
                 <div>4월: {'<'}div{'>'} 대회 참가</div></div>
                 </div></div>
              </div> 
              </div>
              <div className="headerleftu">
              <div style={{ color: "white" , fontSize:30}}>
             <div className="wrap"> <div className="headerleftu"><div className={styles.roundy}>2011</div></div></div>
             </div></div>
              </div>
              <div>


              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             {/*2012*/}
            <div className="wrap">
              <div style={{ color: "chacole" , fontSize:30}}>
              <div className="headerleftr">
              
               <div className={styles.absoluteo}>
                 <div>4월: 패장 박철수 선출</div>
                 <div className="headerlefto">
                 <div>5월: 제1회 정기공연 개최</div></div>
               </div> 
              </div></div>
            </div>

            <div style={{ color: "white" , fontSize:30}}>
            <div className="wrap"> <div className="headerleftq"><div className={styles.roundo}>2012</div></div></div>
            </div>
              
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/*2013*/}
            <div className="wrap">
               <div className="headerleftl">
               <div style={{ color: "chacol" , fontSize:30}}>
               <div className={styles.absoluteb}><div>3월: 패장 아코 선출</div>
               <div className="headerleftj">
                 <div>4월: {'<'}살려줘{'>'} 대회 참가</div></div>
                 </div></div>
              </div> 
              </div>
              <div className="headerleftu">
              <div style={{ color: "white" , fontSize:30}}>
             <div className="wrap"> <div className="headerleftu"><div className={styles.roundb}>2013</div></div></div>
             </div></div>
              
             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             {/*2014*/}
            <div className="wrap">
              <div style={{ color: "chacole" , fontSize:30}}>
              <div className="headerleftr">
              
               <div className={styles.absoluteg}>
                 <div>3월: 한소리 창단</div>
                 <div className="headerlefto">
                 <div>4월: 패장 홍길동 선출</div></div>
               </div> 
              </div></div>
            </div>

            <div style={{ color: "white" , fontSize:30}}>
            <div className="wrap"> <div className="headerleftq"><div className={styles.roundg}>2014</div></div></div>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/*2015*/}
            <div className="wrap">
               <div className="headerleftl">
               <div style={{ color: "chacol" , fontSize:30}}>
               <div className={styles.absolutey}><div>3월: 패장 김영희 선출</div>
               <div className="headerleftj">
                 <div>4월: {'<'}div{'>'} 대회 참가</div></div>
                 </div></div>
              </div> 
              </div>
              <div className="headerleftu">
              <div style={{ color: "white" , fontSize:30}}>
             <div className="wrap"> <div className="headerleftu"><div className={styles.roundy}>2015</div></div></div>
             </div></div>
              </div>
              <div>


              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/*2016*/}
            <div className="wrap">
              <div style={{ color: "chacole" , fontSize:30}}>
              <div className="headerleftr">
              
               <div className={styles.absoluteo}>
                 <div>4월: 패장 박철수 선출</div>
                 <div className="headerlefto">
                 <div>5월: 제1회 정기공연 개최</div></div>
               </div> 
              </div></div>
            </div>

            <div style={{ color: "white" , fontSize:30}}>
            <div className="wrap"> <div className="headerleftq"><div className={styles.roundo}>2016</div></div></div>
            </div>
              
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/*2017*/}
            <div className="wrap">
               <div className="headerleftl">
               <div style={{ color: "chacol" , fontSize:30}}>
               <div className={styles.absoluteb}><div>3월: 패장 아코 선출</div>
               <div className="headerleftj">
                 <div>4월: {'<'}살려줘{'>'} 대회 참가</div></div>
                 </div></div>
              </div> 
              </div>
              <div className="headerleftu">
              <div style={{ color: "white" , fontSize:30}}>
             <div className="wrap"> <div className="headerleftu"><div className={styles.roundb}>2017</div></div></div>
             </div></div>

             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             {/*2018*/}
            <div className="wrap">
              <div style={{ color: "chacole" , fontSize:30}}>
              <div className="headerleftr">
              
               <div className={styles.absoluteg}>
                 <div>3월: 한소리 창단</div>
                 <div className="headerlefto">
                 <div>4월: 패장 홍길동 선출</div></div>
               </div> 
              </div></div>
            </div>

            <div style={{ color: "white" , fontSize:30}}>
            <div className="wrap"> <div className="headerleftq"><div className={styles.roundg}>2018</div></div></div>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/*2019*/}
            <div className="wrap">
               <div className="headerleftl">
               <div style={{ color: "chacol" , fontSize:30}}>
               <div className={styles.absolutey}><div>3월: 패장 김영희 선출</div>
               <div className="headerleftj">
                 <div>4월: {'<'}div{'>'} 대회 참가</div></div>
                 </div></div>
              </div> 
              </div>
              <div className="headerleftu">
              <div style={{ color: "white" , fontSize:30}}>
             <div className="wrap"> <div className="headerleftu"><div className={styles.roundy}>2019</div></div></div>
             </div></div>
              </div>
              <div>


              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             {/*2020*/}
            <div className="wrap">
              <div style={{ color: "chacole" , fontSize:30}}>
              <div className="headerleftr">
              
               <div className={styles.absoluteo}>
                 <div>4월: 패장 박철수 선출</div>
                 <div className="headerlefto">
                 <div>5월: 제1회 정기공연 개최</div></div>
               </div> 
              </div></div>
            </div>

            <div style={{ color: "white" , fontSize:30}}>
            <div className="wrap"> <div className="headerleftq"><div className={styles.roundo}>2020</div></div></div>
            </div>
              
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/*2021*/}
            <div className="wrap">
               <div className="headerleftl">
               <div style={{ color: "chacol" , fontSize:30}}>
               <div className={styles.absoluteb}><div>3월: 패장 아코 선출</div>
               <div className="headerleftj">
                 <div>4월: {'<'}살려줘{'>'} 대회 참가</div></div>
                 </div></div>
              </div> 
              </div>
              <div className="headerleftu">
              <div style={{ color: "white" , fontSize:30}}>
             <div className="wrap"> <div className="headerleftu"><div className={styles.roundb}>2021</div></div></div>
             </div></div>

             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             {/*2022*/}
            <div className="wrap">
              <div style={{ color: "chacole" , fontSize:30}}>
              <div className="headerleftr">
              
               <div className={styles.absolutebp}>
                 <div>2월: 홈페이지 제작</div>
                 <div className="headerlefto">
                 <div>진행중......</div></div>
               </div> 
              </div></div>
            </div>

            <div style={{ color: "white" , fontSize:45}}>
            <div className="wrap"> <div className="headerleftq"><div className={styles.roundbp}>2022</div></div></div>
            </div>

             {/*마무리 끝맺음말*/}
             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             <div className="headerleftu">
             <div style={{ color: "yellow" , fontSize:36}}>
             <div className="wrap"> <div className="headerlef"><div className={styles.last}>🐘 앞으로 채워갈 한소리의 빛나는 나날들을 위하여... 🐘</div></div></div>
             </div></div>



             </div> 
           </div>  
        )}
      ></Parallax>


{/*마무리 중앙점3개*/}
   <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
<img className="dots" src={dots} />
</div>
</div>
 
    )}
   

