import React from 'react'
import writergadget from '/public/images/wg_dark.png';

const WriterGadget = () => {
  return (
    <>
        <section id="writerGadget">
          <div className="section-content">
          <img className="wgImage" src={writergadget} />
          </div>
        </section>
    </>
  )
}

export default WriterGadget