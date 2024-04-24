import React, { useEffect, useState } from 'react';
import './product_style.css';
import Footer from './Footer';
import Headder from"./Navbar";
import { Link } from 'react-router-dom';

import { productData } from '../data/productData';
import { useNavigate } from 'react-router-dom';
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
  
let data = {
    breakfast: breakfastMixesData,
    breakfastMixPowders: breakfastMixesData.filter((each) => each.category === "Mix Powders"),
    breakfastCookPowders: breakfastMixesData.filter((each) => each.category === "Cook Powders"),
    breakfastChutneys: breakfastMixesData.filter((each) => each.category === "Chutney"),
    breakfastSambars: breakfastMixesData.filter((each) => each.category === "Sambhar"),
    nonVegMasalas: biryaniData.filter((each) => each.category === "non-veg masala"),
    vegMasalasdata: biryaniData.filter((each) => each.category === "veg masala"),
    teadata: teaConcentrationsData.filter((each) => each.category === "Tea"),
    beveragesdata: teaConcentrationsData.filter((each) => each.category === "beverages")
}
function Products() {
  const navigate=useNavigate()
  const [activeTab, setActiveTab] = useState('breakfast');

  const handleTabClick = (tabName) => {
      setActiveTab(tabName);
  };

  let activeName
  if (activeTab === "breakfast") {
      activeName = "Chutney"
  } else if (activeTab === "biryani") {
      activeName = "veg masala"
  } else {
      activeName = "cook"
  }

  const [activeFilter, setActiveFilter] = useState(activeName);

  const handleFilterClick = (filterName) => {
      setActiveFilter(filterName);
  };

  const handleBuyNowClick = (productId, category) => {
      // Set the product ID in localStorage
      localStorage.setItem('productId', productId);
      localStorage.setItem("category", category);
  };


    return (
        <>
       <Headder/>
       {/* <p style={{ fontWeight: 'bold', display: 'inline-block', textAlign: 'center', width: '100%' }}>products page</p> */}

       <div className='product-box'>

  <div className='product-filter'>
  <button className={`product-button-1 ${activeTab === 'breakfast' ? 'active' : ''}`} onClick={() => handleTabClick('breakfast')}>
                        <div className='btn-des'>
                            <div className='product-btn-icon'>
                                <img src='./product-btn-icon.png' alt='Breakfast icon'></img>
                            </div>
                            <div className='product-btn-des'>Breakfast</div>
                        </div>
                    </button>
                    <button className={`product-button-1 ${activeTab === 'biryani' ? 'active' : ''}`} onClick={() => handleTabClick('biryani')}>
                        <div className='btn-des'>
                            <div className='product-btn-icon'>
                                <img src='./product-btn-icon.png' alt='Biryani icon'></img>
                            </div>
                            <div className='product-btn-des'>Biryani Masala</div>
                        </div>
                    </button>
                    <button className={`product-button-1 ${activeTab === 'tea' ? 'active' : ''}`} onClick={() => handleTabClick('tea')}>
                        <div className='btn-des'>
                            <div className='product-btn-icon'>
                                <img src='./product-btn-icon.png' alt='Tea icon'></img>
                            </div>
                            <div className='product-btn-des'>Tea Concentrations</div>
                        </div>
                    </button>
  </div>
  <div className='product-more-filter'>
    <div className='filters-products'>
    {activeTab === "breakfast" && <div className='filters-products'>
                        <button className={`filters-btn ${activeFilter === 'mix' ? 'active' : ''}`} onClick={() => handleFilterClick('Mix Powders')}>
                            Mix Powders
                        </button>
                        <button className={`filters-btn ${activeFilter === 'cook' ? 'active' : ''}`} onClick={() => handleFilterClick('cook')}>
                            Cook Powders
                        </button>
                        <button className={`filters-btn ${activeFilter === 'chutney' ? 'active' : ''}`} onClick={() => handleFilterClick('Chutney')}>
                            Chutney
                        </button>
                        <button className={`filters-btn ${activeFilter === 'sambhar' ? 'active' : ''}`} onClick={() => handleFilterClick('Sambar')}>
                            Sambhar
                        </button>
                    </div>}

                    {activeTab === "biryani" && <div className='filters-products'>
                        <button className={`filters-btn ${activeFilter === 'Non-Veg' ? 'active' : ''}`} onClick={() => handleFilterClick('non-veg masala')}>
                            Non-Veg Biryani Masala's
                        </button>
                        <button className={`filters-btn ${activeFilter === 'Veg-biryani' ? 'active' : ''}`} onClick={() => handleFilterClick('veg masala')}>
                            Veg Biryani Masala's
                        </button>
                    </div>}

                    {activeTab === "tea" && <div className='filters-products'>
                        <button className={`filters-btn ${activeFilter === 'Tea' ? 'active' : ''}`} onClick={() => handleFilterClick('Tea')}>
                            Tea
                        </button>
                        <button className={`filters-btn ${activeFilter === 'beverages' ? 'active' : ''}`} onClick={() => handleFilterClick('beverages')}>
                            Beverages
                        </button>
                    </div>}

    </div>
    {/* < button className = 'btn-prod-card buynow-btn' ><a href='OrderPage.js'>
        Buy Now</a> </button> */}
    {/* <div className='products-sort'>
      <div className='total-products'>98 Products</div>
      <div className='products-dropdown'>
        <button onClick={() => {}} className='drop-btn'>Sort By</button>
        <div className='dropdown-content'>
          <a href='#'>Link 1</a>
          <a href='#'>Link 2</a>
          <a href='#'>Link 3</a>
        </div>
      </div>
    </div> */}
    </div>
    </div>
    <div className="prod-display">
        {/* ------breakfast filtering---- */}
    {activeTab === "breakfast" && activeFilter === "cook" && data.breakfastCookPowders.map((product) => {
                        const dataToSend = { id: product.sno }
                        return (
                            <div key={product.id} className='prod-display-1' style={{ position: 'relative' }}>
                                <div className='prod-card' >
                                    <div className='discount-tag'>10% Off</div>
                                    <img src={product.image} width={250} height={200} alt={product.productName}></img>
                                    <div className='prod-card-title'>{product.productName}</div>
                                    <Link to={{
                                        pathname: `/orderpage`,
                                        state: {
                                            data:{productName:product.productName,image:product.image,sno:product.sno}
                                        }
                                    }}>
                                        <button className='btn-prod-card buynow-btn' onClick={() => handleBuyNowClick(product.sno, "Breakfast")}>
                                            Buy Now
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        )
                    })}

                    {activeTab === "breakfast" && activeFilter === "Mix Powders" && data.breakfastMixPowders.map((product) => {
                        const dataToSend = { id: product.sno }
                        return (
                            <div key={product.id} className='prod-display-1' style={{ position: 'relative' }}>
                                <div className='prod-card' >
                                    <div className='discount-tag'>10% Off</div>
                                    <img src={product.image} width={250} height={200} alt={product.productName}></img>
                                    <div className='prod-card-title'>{product.productName}</div>
                                    <Link to={{
                                        pathname: `/orderpage`,
                                        state: {
                                            data:{productName:product.productName,image:product.image,sno:product.sno}
                                        }
                                    }}>
                                        <button className='btn-prod-card buynow-btn' onClick={() => handleBuyNowClick(product.sno, "Breakfast")}>
                                            Buy Now
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        )
                    })}

                    {activeTab === "breakfast" && activeFilter === "Chutney" && data.breakfastChutneys.map((product) => {
                        const dataToSend = { id: product.sno }
                        return (
                            <div key={product.id} className='prod-display-1' style={{ position: 'relative' }}>
                                <div className='prod-card' >
                                    <div className='discount-tag'>10% Off</div>
                                    <img src={product.image} width={250} height={200} alt={product.productName}></img>
                                    <div className='prod-card-title'>{product.productName}</div>
                                    <Link to={{
                                        pathname: `/orderpage`,
                                        state: {
                                            data:{productName:product.productName,image:product.image,sno:product.sno}
                                        }
                                    }}>
                                        <button className='btn-prod-card buynow-btn' onClick={() => handleBuyNowClick(product.sno, "Breakfast")}>
                                            Buy Now
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        )
                    })}

                    {activeTab === "breakfast" && activeFilter === "Sambar" && data.breakfastSambars.map((product) => {
                        const dataToSend = { id: product.sno }
                        return (
                            <div key={product.id} className='prod-display-1' style={{ position: 'relative' }}>
                                <div className='prod-card' >
                                    <div className='discount-tag'>10% Off</div>
                                    <img src={product.image} width={250} height={200} alt={product.productName}></img>
                                    <div className='prod-card-title'>{product.productName}</div>
                                    <Link to={{
                                        pathname: `/orderpage`,
                                        state: {
                                            data:{productName:product.productName,image:product.image,sno:product.sno}
                                        }
                                    }}>
                                        <button className='btn-prod-card buynow-btn' onClick={() => handleBuyNowClick(product.sno, "Breakfast")}>
                                            Buy Now
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        )
                    })}
                    {/* ----biryani filtering--- */}
                    {activeTab === "biryani" && activeFilter === "non-veg masala" && data.nonVegMasalas.map((product) => {
                        const dataToSend = { id: product.sno }
                        console.log(dataToSend, "datatpsend")
                        return (
                            <div key={product.id} className='prod-display-1' style={{ position: 'relative' }}>
                                <div className='prod-card' >
                                    <div className='discount-tag'>10% Off</div>
                                    {/* <div className='prod-card-image'> */}
                                    <img src={product.image} width={250} height={200} alt={product.productName}></img>
                                    {/* </div> */}
                                    <div className='prod-card-title'>{product.productName}</div>
                                    <Link to={{
                                        pathname: `/orderpage`,
                                        state: {
                                            data:{productName:product.productName,image:product.image,sno:product.sno}
                                        }
                                    }}>
                                        <button className='btn-prod-card buynow-btn' onClick={() => handleBuyNowClick(product.sno, "Biryani")}>
                                            Buy Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}

                    {activeTab === "biryani" && activeFilter === "veg masala" && data.vegMasalasdata.map((product) => {
                        const dataToSend = { id: product.sno }
                        console.log(dataToSend, "datatpsend")
                        return (
                            <div key={product.id} className='prod-display-1' style={{ position: 'relative' }}>
                                <div className='prod-card' >
                                    <div className='discount-tag'>10% Off</div>
                                    {/* <div className='prod-card-image'> */}
                                    <img src={product.image} width={250} height={200} alt={product.productName}></img>
                                    {/* </div> */}
                                    <div className='prod-card-title'>{product.productName}</div>
                                    <Link to={{
                                        pathname: `/orderpage`,
                                        state: {
                                            data:{productName:product.productName,image:product.image,sno:product.sno}
                                        }
                                    }}>
                                        <button className='btn-prod-card buynow-btn' onClick={() => handleBuyNowClick(product.sno, "Biryani")}>
                                            Buy Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}

                    {/* -----tea concentrations----- */}
                    { !teaConcentrationsData.length > 0 &&  activeTab === "tea" && data.vegMasalasdata.map((product) => {
                        const dataToSend = { id: product.sno }
                        console.log(dataToSend, "datatpsend")
                        return (
                            <div key={product.id} className='prod-display-1' style={{ position: 'relative' }}>
                                <div className='prod-card' >
                                    <div className='discount-tag'>10% Off</div>
                                    {/* <div className='prod-card-image'> */}
                                    <img src={product.image} width={250} height={200} alt={product.productName}></img>
                                    {/* </div> */}
                                    <div className='prod-card-title'>{product.productName}</div>
                                    <Link to={{
                                        pathname: `/orderpage`,
                                        state: {
                                            data:{productName:product.productName,image:product.image,sno:product.sno}
                                        }
                                    }}>
                                        <button className='btn-prod-card buynow-btn' onClick={() => handleBuyNowClick(product.sno, "Tea")}>
                                            Buy Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                    {teaConcentrationsData.length > 0 && activeTab === "tea" && activeFilter === "Tea"&& data.teadata.map((product) => {
                        const dataToSend = { id: product.sno }
                        console.log(dataToSend, "datatpsend")
                        return (
                            <div key={product.id} className='prod-display-1' style={{ position: 'relative' }}>
                                <div className='prod-card' >
                                    <div className='discount-tag'>10% Off</div>
                                    {/* <div className='prod-card-image'> */}
                                    <img src={product.image} width={250} height={200} alt={product.productName}></img>
                                    {/* </div> */}
                                    <div className='prod-card-title'>{product.productName}</div>
                                    <Link to={{
                                        pathname: `/orderpage`,
                                        state: {
                                            data:{productName:product.productName,image:product.image,sno:product.sno}
                                        }
                                    }}>
                                        <button className='btn-prod-card buynow-btn' onClick={() => handleBuyNowClick(product.sno, "Tea")}>
                                            Buy Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                    {teaConcentrationsData.length > 0 && activeTab === "tea" && activeFilter === "beverages" && data.beveragesdata.map((product) => {
                        const dataToSend = { id: product.sno }
                        console.log(dataToSend, "datatpsend")
                        return (
                            <div key={product.id} className='prod-display-1' style={{ position: 'relative' }}>
                                <div className='prod-card' >
                                    <div className='discount-tag'>10% Off</div>
                                    {/* <div className='prod-card-image'> */}
                                    <img src={product.image} width={250} height={200} alt={product.productName}></img>
                                    {/* </div> */}
                                    <div className='prod-card-title'>{product.productName}</div>
                                    <Link to={{
                                        pathname: `/orderpage`,
                                        state: {
                                            data:{productName:product.productName,image:product.image,sno:product.sno}
                                        }
                                    }}>
                                        <button className='btn-prod-card buynow-btn' onClick={() => handleBuyNowClick(product.sno, "Tea")}>
                                            Buy Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
    </div>
    {/* {
      products.length > 0 ? <div className='product-display'>
       {
        products.map((item,index)=>{
          return <div key={index} className='product-card'>
            <div className="card">
              <h3 className="title">{item.productName}</h3>
              <img src={item.image} alt='' style={{}}/>
              <button onClick={handleBuyNow}>Buy now</button>
            </div>
          </div>
        })
       }
      </div>:null
    } */}
{/*  
  <
        div className = 'prod-display' >
        <
        div className = 'prod-display-1' >
        <
        div className = 'prod-card' >
        <
        div className = 'prod-card-image' >
        <
        img src = './Frame 260 (2).png' /> < /
        div > <
        div className = 'prod-card-title' > Dosa Powder < /div> <
        button className = 'btn-prod-card buynow-btn' >
        Buy Now <
        /button> < /
        div > <
        div className = 'prod-card' >
        <
        div className = 'prod-card-image' >
        <
        img src = './Frame 260 (2).png' /> < /
        div > <
        div className = 'prod-card-title' > Dosa Powder < /div> <
        button className = 'btn-prod-card buynow-btn' >
        Buy Now <
        /button> < /
        div > <
        div className = 'prod-card' >
        <
        div className = 'prod-card-image' >
        <
        img src = './Frame 260 (2).png' /> < /
        div > <
        div className = 'prod-card-title' > Dosa Powder < /div> <
        button className = 'btn-prod-card buynow-btn' >
        Buy Now <
        /button> < /
        div > <
        div className = 'prod-card' >
        <
        div className = 'prod-card-image' >
        <
        img src = './Frame 260 (2).png' /> < /
        div > <
        div className = 'prod-card-title' > Dosa Powder < /div> <
        button className = 'btn-prod-card buynow-btn' >
        Buy Now <
        /button> < /
        div >

        <
        /div> <
        div className = 'prod-display-1' >
        <
        div className = 'prod-card' >
        <
        div className = 'prod-card-image' >
        <
        img src = './Frame 260 (2).png' /> < /
        div > <
        div className = 'prod-card-title' > Dosa Powder < /div> <
        button className = 'btn-prod-card buynow-btn' >
        Buy Now <
        /button> < /
        div > <
        div className = 'prod-card' >
        <
        div className = 'prod-card-image' >
        <
        img src = './Frame 260 (2).png' /> < /
        div > <
        div className = 'prod-card-title' > Dosa Powder < /div> <
        button className = 'btn-prod-card buynow-btn' >
        Buy Now <
        /button> < /
        div > <
        div className = 'prod-card' >
        <
        div className = 'prod-card-image' >
        <
        img src = './Frame 260 (2).png' /> < /
        div > <
        div className = 'prod-card-title' > Dosa Powder < /div> <
        button className = 'btn-prod-card buynow-btn' >
        Buy Now <
        /button> < /
        div > <
        div className = 'prod-card' >
        <
        div className = 'prod-card-image' >
        <
        img src = './Frame 260 (2).png' /> < /
        div > <
        div className = 'prod-card-title' > Dosa Powder < /div> <
        button className = 'btn-prod-card buynow-btn' >
        Buy Now <
        /button> < /
        div >

        <
        /div> <
        div className = 'prod-display-1' >
        <
        div className = 'prod-card' >
        <
        div className = 'prod-card-image' >
        <
        img src = './Frame 260 (2).png' /> < /
        div > <
        div className = 'prod-card-title' > Dosa Powder < /div> <
        button className = 'btn-prod-card buynow-btn' >
        Buy Now <
        /button> < /
        div > <
        div className = 'prod-card' >
        <
        div className = 'prod-card-image' >
        <
        img src = './Frame 260 (2).png' /> < /
        div > <
        div className = 'prod-card-title' > Dosa Powder < /div> <
        button className = 'btn-prod-card buynow-btn' >
        Buy Now <
        /button> < /
        div > <
        div className = 'prod-card' >
        <
        div className = 'prod-card-image' >
        <
        img src = './Frame 260 (2).png' /> < /
        div > <
        div className = 'prod-card-title' > Dosa Powder < /div> <
        button className = 'btn-prod-card buynow-btn' >
        Buy Now <
        /button> < /
        div > <
        div className = 'prod-card' >
        <
        div className = 'prod-card-image' >
        <
        img src = './Frame 260 (2).png' /> < /
        div > <
        div className = 'prod-card-title' > Dosa Powder < /div> <
        button className = 'btn-prod-card buynow-btn' >
        Buy Now <
        /button> < /
        div >

        <
        /div> <
        div className = 'prod-display-1' >
        <
        div className = 'prod-card' >
        <
        div className = 'prod-card-image' >
        <
        img src = './Frame 260 (2).png' /> < /
        div > <
        div className = 'prod-card-title' > Dosa Powder < /div> <
        button className = 'btn-prod-card buynow-btn' >
        Buy Now <
        /button> < /
        div > <
        div className = 'prod-card' >
        <
        div className = 'prod-card-image' >
        <
        img src = './Frame 260 (2).png' /> < /
        div > <
        div className = 'prod-card-title' > Dosa Powder < /div> <
        button className = 'btn-prod-card buynow-btn' >
        Buy Now <
        /button> < /
        div > <
        div className = 'prod-card' >
        <
        div className = 'prod-card-image' >
        <
        img src = './Frame 260 (2).png' /> < /
        div > <
        div className = 'prod-card-title' > Dosa Powder < /div> <
        button className = 'btn-prod-card buynow-btn' >
        Buy Now <
        /button> < /
        div > <
        div className = 'prod-card' >
        <
        div className = 'prod-card-image' >
        <
        img src = './Frame 260 (2).png' /> < /
        div > <
        div className = 'prod-card-title' > Dosa Powder < /div> <
        button className = 'btn-prod-card buynow-btn' >
        Buy Now <
        /button> < /
        div >

        <
        /div> < /
        div >  */}
        <Footer/>
        </>
    );
}

export default Products;