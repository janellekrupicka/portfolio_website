import Link from 'next/link';

const Header = () => {
    const integrity_key = process.env.INT_KEY;

    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="${integrity_key}" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <div className="w-screen px-0 sticky top-0 bg-white text-burnt-orange font-main font-bold text-lg z-10">
            <header className='grid md:grid-cols-2'>
                <ul className="list-none flex px-5 gap-5 justify-center md:justify-start">
                    <Link href="#home" className="hover:italic p-4">Home</Link>
                    <Link href="#about" className="hover:italic p-4">About</Link>
                    <Link href="#experience" className="hover:italic p-4">Experience</Link>
                    <Link href="#projects" className="hover:italic p-4">Projects</Link>
                </ul>
                <ul className="list-none flex gap-10 justify-center md:justify-end items-center px-5 text-3xl">
                    <Link href="https://www.linkedin.com/in/janelle-krupicka/"><i className="fa-brands fa-linkedin"></i></Link>
                    <Link href="https://github.com/janellekrupicka"><i className="fa-brands fa-github"></i></Link>
                </ul>
            </header>
        </div>
        </>
    );
};
export default Header;