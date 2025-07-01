import '../../App.css'

function OverLeftSide() {
    return (
        <div className="bg-[#1D3331] w-1/2 h-full pt-[30px] p-[65px]">
            <p className='text-white text-[35px] font-semibold'>
                <span className='text-[#907E4B]'>Salut, je suis</span> Chadrack Mbala.
                Développeur web fullstack <span className='text-[#907E4B]'>basé à Kinshasa</span> ,
                passionné par le <span className='text-[#907E4B]'>web</span>  et la science des
                <span className='text-[#907E4B]'> données</span>.
            </p><br />
            <p className='text-lg text-[#907E4B]'>J’aime coder des projets qui ont du sens
                et apporter ma touche aux idées qu’on me confie.</p><br />
            <p className='text-white'>Retrouvez-moi sur <a
                href="https://www.linkedin.com/in/chadrack-mbala-m-8b3a7326b/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="hover:underline text-[#907E4B]">LinkedIn</span>
            </a>,&nbsp;
                <a
                    href="https://github.com/chadrackmbala"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="hover:underline text-[#907E4B]">GitHub</span>
                </a> ou <a
                    href="https://stackoverflow.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="hover:underline text-[#907E4B]">StackOverFlow</span>&nbsp;
                </a>
                pour découvrir mon univers ou simplement discuter !</p><br />
            <a
                href="mailto:chadrackmbala20@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-[300px] h-[50px] border-2 border-[#907E4B] text-[#907E4B] rounded-[25px] cursor-pointer transition-all duration-300 hover:bg-[#907E4B] hover:text-[#1D3331] mx-auto"
            >
                Travaillons ensemble
            </a>

        </div>
    )
}

export default OverLeftSide;