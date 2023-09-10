// Button inspired by the download button in this project https://github.com/Maclinz/JS_CSS_PortfolioProject
// Made by Solano Milano Diaz

const Download = () => {

    const integrity_key = process.env.INT_KEY;
 
        return (
            <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="${integrity_key}" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <div className='btn_con py-5 justify-center'>
                <a href="" className='main_btn'>
                    <span className='btn_text'>Download My Resume</span>
                    <span className='btn_icon'><i className="fa-solid fa-download"></i></span>
                </a>
            </div>
            </>
        )
}

export default Download;