import '../css/work.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { GiStrikingArrows } from "react-icons/gi";
function Work() {

    const [data1, getdata1] = useState([])
    useEffect(() => {
        fetch('work.json')
            .then((res) => { return (res.json()) })
            .then((item) =>
                getdata1(item.work)
            )
    }, [])
    const [data2, getdata2] = useState([])
    useEffect(() => {
        fetch('work.json')
            .then((res) => { return (res.json()) })
            .then((item) =>
                getdata2(item.internship)
            )
    }, [])
    const [data3, getdata3] = useState([])
    useEffect(() => {
        fetch('work.json')
            .then((res) => { return (res.json()) })
            .then((item) =>
                getdata3(item.certificate)
            )
    }, [])

    return (
        <>
            <section className="faq-section py-3">
                <div className="container">
                    <div className="w-lg-50 mx-auto">
                        <div className="accordion accordion-flush" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#coll1" aria-expanded="false" aria-controls="coll1">
                                        <h5> WORK <span className='button_float'><GiStrikingArrows className='fonticon' /></span></h5>
                                    </button>
                                </h2>
                                <div id="coll1" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="rowdata">
                                            {
                                                data1.map((e) => (

                                                    <div key={e.id} className="row rowdata1"  >
                                                        <div className="col-lg-1 col-md-1 col-sm-1 col-1 a12">
                                                            <img className='imgimg' src={e.img} alt="" />
                                                        </div>
                                                        <div className="col-lg-11 col-md-11 col-sm-11 col-12">
                                                            <div>
                                                                <span>{e.role}</span>
                                                                <span className='company_year'>{e.year}</span>
                                                            </div>
                                                            <div className='spanfont'>
                                                                <span>{e.comname}</span>
                                                                <span className='company_loc'>{e.location}</span>
                                                            </div>
                                                            <p className='company_des'>{e.des}</p>
                                                        </div>
                                                    </div>
                                                )
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="accordion accordion-flush" id="accordionExample">

                                <div className="accordion-item">
                                    <h2 className="accordion-header">

                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#coll2" aria-expanded="false" aria-controls="coll2">
                                            <h5>INTERNSHIP <span className='button_float'><GiStrikingArrows className='fonticon' /></span></h5>
                                        </button>
                                    </h2>
                                    <div id="coll2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="rowdata">
                                            {
                                                data2.map((e) => (

                                                    <div key={e.id} className="row rowdata1"  >
                                                        <div className="col-lg-1 col-md-1 col-sm-1 col-1 a12">
                                                            <img className='imgimg' src={e.img} alt="" />
                                                        </div>
                                                        <div className="col-lg-11 col-md-11 col-sm-11 col-12">
                                                            <div>
                                                                <span>{e.role}</span>
                                                                <span className='company_year'>{e.year}</span>
                                                            </div>
                                                            <div className='spanfont'>
                                                                <span>{e.comname}</span>
                                                                <span className='company_loc'>{e.location}</span>
                                                            </div>
                                                            <p className='company_des'>{e.des}</p>
                                                        </div>
                                                    </div>
                                                )
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="accordion accordion-flush" id="accordionExample">

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#coll3" aria-expanded="false" aria-controls="coll3">
                                            <h5>CERTIFICATE<span className='button_float'><GiStrikingArrows className='fonticon' /></span></h5>
                                        </button>
                                    </h2>
                                    <div id="coll3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="rowdata">
                                            {
                                                data3.map((e) => (

                                                    <div key={e.id} className="row rowdata1"  >
                                                        <div className="col-lg-1 col-md-1 col-sm-1 col-1 a12">
                                                            <img className='imgimg' src={e.img} alt="" />
                                                        </div>
                                                        <div className="col-lg-11 col-md-11 col-sm-11 col-12">
                                                            <div>
                                                                <span>{e.role}</span>
                                                                <span className='company_year'>{e.year}</span>
                                                            </div>
                                                            <div className='spanfont'>
                                                                <span>{e.comname}</span>
                                                                <span className='company_loc'>{e.location}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section >


        </>
    )
}

export default Work;