import React, { useEffect, useState } from 'react'
import './order.css'
import { useLocation } from 'react-router-dom'
let breakfastMixesData=[
  {
    "sno": "1",
    "productName": "Dosa Powder",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712836356/Frame_260_rb5rrn.png",
    "category": "Mix Powders"
  },
  {
    "sno": "2",
    "productName": "Idli Powder",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712839189/Frame_260_2_nnknvh.png",
    "category": "Mix Powders"
  },
  {
    "sno": "3",
    "productName": "Millet Idli Powder",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712839180/Frame_260_3_qxz1la.png",
    "category": "Mix Powders"
  },
  {
    "sno": "4",
    "productName": "Millet Dosa Powder",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712839113/Frame_260_4_toelvr.png",
    "category": "Mix Powders"
  },
  {
    "sno": "5",
    "productName": "Brown Rice Dosa Powder",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713849194/IMG-20240422-WA0039_ezplyj.jpg",
    "category": "Mix Powders"
  },
  {
    "sno": "6",
    "productName": "Red Rice Dosa Powder",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713849193/IMG-20240422-WA0036_pvsnb6.jpg",
    "category": "Mix Powders"
  },
  {
    "sno": "7",
    "productName": "Black Rice Dosa Powder",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713849193/IMG-20240422-WA0037_ox0p3m.jpg",
    "category": "Mix Powders"
  },
  {
    "sno": "8",
    "productName": "Brown Rice Idly Powder",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713849194/IMG-20240422-WA0040_maev7g.jpg",
    "category": "Mix Powders"
  },
  {
    "sno": "9",
    "productName": "Red Rice Idly Powder",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713849193/IMG-20240422-WA0035_k7kpje.jpg",
    "category": "Mix Powders"
  },
  {
    "sno": "10",
    "productName": "Black Rice Idly Powder",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713849193/IMG-20240422-WA0034_aumqvv.jpg",
    "category": "Mix Powders"
  },
  {
    "sno": "11",
    "productName": "Vegetable Khichdi Mix",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712839773/Frame_260_5_yngim5.png",
    "category": "Cook Powders"
  },
  {
    "sno": "12",
    "productName": "Sambar Rice Mix",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712839772/Frame_260_6_pyondw.png",
    "category": "Cook Powders"
  },
  {
    "sno": "13",
    "productName": "Bisibelebath Mix",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712839772/Frame_260_7_jgg317.png",
    "category": "Cook Powders"
  },
  {
    "sno": "14",
    "productName": "Ground Nut Chutney",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712840506/Frame_260_11_ycdhrf.png",
    "category": "Chutney"
  },
  {
    "sno": "15",
    "productName": "Red Chutney",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712840509/Frame_260_12_-_Copy_lnwkti.png",
    "category": "Chutney"
  },
  {
    "sno": "16",
    "productName": "Allam Chutney",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712840508/Frame_260_8_xbbux3.png",
    "category": "Chutney"
  },
  {
    "sno": "17",
    "productName": "Red Chutney Spread for Dosa",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713849702/IMG-20240422-WA0048_y9pidc.jpg",
    "category": "Chutney"
  },
  {
    "sno": "18",
    "productName": "Ghee Powder for Idly",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712840507/Frame_260_9_mmwuow.png",
    "category": "Chutney"
  },
  {
    "sno": "19",
    "productName": "Sambhar Dal",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713850983/sambhar_dal_hophpp.jpg",
    "category": "Sambhar"
  },
  {
    "sno": "20",
    "productName": "Sambhar Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713850984/sambhar_masala_lxm7zx.jpg",
    "category": "Sambhar"
  },
]
let biryaniData=[
  {
    "sno": "21",
    "productName": "Chicken Dum Biryani Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712842020/Frame_260_14_kcpooj.png",
    "category": "non-veg masala"
  },
  {
    "sno": "22",
    "productName": "Mutton Dum Biryani Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712842056/Frame_260_15_e9a4g8.png",
    "category": "non-veg masala"
  },
  {
    "sno": "23",
    "productName": "Chicken Roast Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712842056/Frame_260_16_tsc5bd.png",
    "category": "non-veg masala"
  },
  {
    "sno": "24",
    "productName": "Mutton Roast Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712842056/Frame_260_17_adsp89.png",
    "category": "non-veg masala"
  },
  {
    "sno": "25",
    "productName": "Chicken Marination Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712842056/Frame_260_18_inhfsg.png",
    "category": "non-veg masala"
  },
  {
    "sno": "26",
    "productName": "Mutton Marination Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712842055/Frame_260_19_sd5ncj.png",
    "category": "non-veg masala"
  },
  {
    "sno": "27",
    "productName": "Biryani Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712842055/Frame_260_20_u6e2y8.png",
    "category": "non-veg masala"
  },
  {
    "sno": "28",
    "productName": "Garam Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712842055/Frame_260_21_xodaty.png",
    "category": "non-veg masala"
  },
  {
    "sno": "29",
    "productName": "Sambar Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712842055/Frame_260_23_hkj7qa.png",
    "category": "veg masala"
  },
  {
    "sno": "30",
    "productName": "Rasam Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712842054/Frame_260_24_iw3g91.png",
    "category": "veg masala"
  },
  {
    "sno": "31",
    "productName": "Garam Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712842054/Frame_260_25_xn8b04.png",
    "category": "veg masala"
  },
  {
    "sno": "32",
    "productName": "Veg Biryani Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712842054/Frame_260_26_we5aek.png",
    "category": "veg masala"
  },
  {
    "sno": "33",
    "productName": "Vangibath Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712842054/Frame_260_27_fgifvg.png",
    "category": "veg masala"
  },
  {


    "sno": "34",
    "productName": "Pulihora Masala Powder",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713849721/IMG-20240422-WA0068_lveti5.jpg",
    "category": "veg masala"
  },
  {
    "sno": "35",
    "productName": "Bisi Bele Bath Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712842054/Frame_260_29_wsotiq.png",
    "category": "veg masala"
  },
]
let teaConcentrationsData=[
  {
    "sno": "36",
    "productName": "Ginger Flavored Tea Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712842054/Frame_260_30_hwxds5.png",
    "category": "Tea"
  },
  {
    "sno": "37",
    "productName": "Cardamom Flavored Tea Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712843824/Frame_260_38_a1iqkh.png",
    "category": "Tea"
  },
  {
    "sno": "38",
    "productName": "Rose Flavored Tea Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712843823/Frame_260_39_khj95h.png",
    "category": "Tea"
  },
  {
    "sno": "39",
    "productName": "Jasmine Flavored Tea Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712843823/Frame_260_40_roymch.png",
    "category": "Tea"
  },
  {
    "sno": "40",
    "productName": "Vanilla Flavored Tea Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712843460/Frame_260_37_ynccn3.png",
    "category": "Tea"
  },
  {
    "sno": "41",
    "productName": "Chocolate Flavored Tea Masala",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1712842053/Frame_260_32_zb60gq.png",
    "category": "Tea"
  },
  {
    "sno": "42",
    "productName": "Green Tea(Mango)",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713851693/Green_Tea_Mango_jwsos7.jpg",
    "category": "beverages"
  },
  {
    "sno": "43",
    "productName": "Green Tea(Pineapple)",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713851694/Green_Tea_Pine_apple_g0p4ft.jpg",
    "category": "beverages"
  },
  {
    "sno": "44",
    "productName": "Green Tea(Banana)",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713851698/Green_Tea_Banana_jr6kx6.jpg",
    "category": "beverages"
  },
  {
    "sno": "45",
    "productName": "Green Tea(Sweet Almond)",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713851696/Green_Tea_Almond_iezhsr.jpg",
    "category": "beverages"
  },
  {
    "sno": "46",
    "productName": "Green Tea(Jasmine)",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713851694/Green_Tea_Jasmine_tkwjr0.jpg",
    "category": "beverages"
  },
  {
    "sno": "47",
    "productName": "Green Tea(Muskmelon)",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713851708/Green_Tea_Musk_melon_rdhtgo.jpg",
    "category": "beverages"
  },
  {
    "sno": "48",
    "productName": "Green Tea(Blue berry)",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713851700/Green_Tea_Bleberry_jq7jyf.jpg",
    "category": "beverages"
  },
  {
    "sno": "49",
    "productName": "Green Tea(Guava)",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713851700/Green_Tea_Gauva_tqdlbj.jpg",
    "category": "beverages"
  },
  {
    "sno": "50",
    "productName": "Green Tea(Orange)",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713851747/Green_Tea_Orange_qwzjtz.jpg",
    "category": "beverages"
  },
  {
    "sno": "51",
    "productName": "Green Tea(Passion fruit)",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713851750/Green_Tea_....._y6g5tz.jpg",
    "category": "beverages"
  },
  {
    "sno": "52",
    "productName": "Green Tea(Resin)",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713851753/Green_Tea_Resin_t4ipk9.jpg",
    "category": "beverages"
  },
  {
    "sno": "53",
    "productName": "Green Tea(Lemon Lime)",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713853094/WhatsApp_Image_2024-04-22_at_20.39.23_74f4af48_ggdwhy.jpg",
    "category": "beverages"
  },
  {
    "sno": "54",
    "productName": "Green Tea(Chocolate)",
    "image": "https://res.cloudinary.com/dqngbsszn/image/upload/v1713851748/Green_Tea_Choco_kyaji2.jpg",
    "category": "beverages"
  }
]
let totalData=[...breakfastMixesData,...biryaniData,...teaConcentrationsData]
function OrderPage() {
  const sno=Number(localStorage.getItem("productId")) 
  const category=(localStorage.getItem("category"))
  const [formdata, setFormdata] = useState({
    name:"",email:""
  });
  const handleChange= (e) => {
    const {name,value}=e.currentTarget
    setFormdata(prevData=>({...prevData, [name]: value}))
  }
  
  console.log(totalData)
  let selectedData;
  totalData.map((item,index)=>{
    if(item.sno==sno) {
      selectedData=item;
    }
  })
  const data=totalData.find(item=> item.sno===(sno) && item.category==category )
  console.log(data)
  useEffect(()=>{
    console.log("selectedData",selectedData)
  },[])

  const handleSubmit =(e) => {
    e.preventDefault();//prevent loading
    if(formdata.name.length > 0 && formdata.email.length > 0 ) {
    console.log("entered handleSubmit")
    alert("Ordered Successfully!!!")
    const ownerPhoneNumber = '7036987151'; // owner's actual phone number(change value if needed)
    //  WhatsApp message
    const message = `Order Details:\nProduct Name: ${selectedData.productName}\nName: ${formdata.name}\nEmail: ${formdata.email}`;
     console.log("message",message)
    // WhatsApp link with the owner's phone number and message
    const whatsappLink = `https://wa.me/${ownerPhoneNumber}?text=${encodeURIComponent(message)}`;
    // Opening WhatsApp
    window.open(whatsappLink, '_blank');
    console.log('Form submitted:', formdata);
    setFormdata({
      name:"",email:""
    })
  }else{
    alert("enter form data before submitting")
  }
  }
  
  return (
    <div>
  <div className='order'>
    <div className='order-image' onSubmit={handleSubmit}>
      <img src={selectedData && selectedData.image}></img>
      <div className='order-name'>
      {selectedData && selectedData.productName}
      </div>
    </div>
    <div className='order-form'>
      <form className='form-order' onSubmit={handleSubmit}>
        <div className='form-input'>
        <input value={formdata.name} onChange={(e)=>handleChange(e)} className='order-input'type='text' name='name' placeholder='Enter name'></input>
        <input value={formdata.email} onChange={(e)=>handleChange(e)} className='order-input'type='email' name='email' placeholder='Enter email'></input>
        </div>
      {/* <div className='whatsapp-order-button'> */}
        <button className='order-btn' type="submit">
          <div className='order-btn-des'>
             <div className='whatsapp-img'>
              <img src='./whatsapp-img.png'></img>
             </div>
             <div className='btn-text' >Order Now!</div>
          </div>
        </button>
      {/* </div> */}
      </form>
    </div>
  </div>
        </div>
  )
}

export default OrderPage