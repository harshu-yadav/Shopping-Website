import { useEffect, useState } from "react"
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
  import Footer from './Footer'
function Electronics()
{
    const[apidata,setdata]=useState([])
    useEffect(()=>
    {
        getData()
    },[])
    async function getData()
    {
        var result=await fetch("https://fakestoreapi.com/products/category/electronics")
        //console.log(result)
        var data=await result.json()
        console.log(data)

        setdata(data)
    }
    return(
    <div>
       < MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      {
        apidata.map((item)=>
        <MDBCol>
        <MDBCard>
          <MDBCardImage
            src= {item.image} style = {{width : "100px" , height : "150px"}}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle style = {{color : "red"}}>{item.price*80} Rs</MDBCardTitle>
            <MDBCardTitle style = {{color : "green"}}>{item.category} </MDBCardTitle>
            <MDBCardTitle style = {{color : "blue"}}>{item.rating.rate} </MDBCardTitle>
            <MDBCardText>

              {item.description}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>)
      }
     
    </MDBRow>
        
    <Footer></Footer>
    </div>
    )
}
export default Electronics