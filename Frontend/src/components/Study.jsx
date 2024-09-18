import React, { useEffect, useState } from 'react'
import '../css/study.css'

const Study = () => {

    const [data, getdata] = useState([])
    useEffect(() => {
        fetch('work.json')
            .then((res) => { return (res.json()) })
            .then((item) =>
                getdata(item.education)
            )
    }, [])
    return (
        <>
            {
                data.map((e) => (
                    <div key={e.id} className="accordion-body accordbody">
                        <div className="rowdata">
                            <div  className="row rowdata1"  >
                                <div className="col-lg-1 col-md-1 col-sm-1 col-1 imgall">
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
                        </div>
                    </div>
                )
                )
            }
        </>
    )
}

export default Study