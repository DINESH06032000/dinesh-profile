import React from 'react'

function TCS() {
  return (
    <>
      <div>
        <h4 className='contacth4 tcstopic'>TCS-NQT-IT (Score card)</h4>
        <div className="container">
          <div className="row">
            <div className="col-lg-4  col-12 "></div>
            <div className="col-lg-4 col-12 px-4 ">
              <div className='tcspad'>
                <table>
                  <tbody>
                  <tr >
                    <td >Foundation Section</td>
                    <td className='tcsmark'>66.33%</td>
                  </tr>
                  <tr>
                    <td>Advanced Section</td>
                    <td className='tcsmark'>85.41%</td>
                  </tr>
                  <tr>
                    <td>Programming Score <b className='language'>Java</b></td>
                    <td className='tcsmark'>94.77%</td>
                  </tr>
                  <tr>
                    <td className='a123'>Overall Percentage</td>
                    <td className='tcsmark a123'>75.83%</td>
                  </tr>
                  </tbody>
                </table>
              </div>

            </div>
            <div className="col-lg-4  col-12 tcscol">
              <a href="tcs score card.pdf" className='downloadcv downloadcv1' download>View Score Card</a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default TCS
