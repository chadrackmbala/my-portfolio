import '../../App.css'

function FirstComponent() {
    return (
        <div className="p-10 bg-[#1D3331] content-center h-full">
            <p className="text-center text-white text-[25px] font-semibold">
                Salut, je suis{" "}
                <span className="text-[#907E4B]">Chadrack Mbala</span>.{" "}
                <span className="text-[#907E4B]">Développeur web</span> fullstack basé à{" "}
                <span className="text-[#907E4B]">Kinshasa</span>, passionné par le{" "}
                <span className="text-[#907E4B]">web</span> et la science des{" "}
                <span className="text-[#907E4B]">données</span>.
            </p>


            <br />
            <p className="text-center text-lg text-[#907E4B]">
                J’aime coder des projets qui ont du sens et apporter ma
                touche aux idées qu’on me confie.
            </p>
            <br />#85AAB2
            <p className='text-lg text-center text-white'>Retrouvez-moi sur <a
                href="https://www.linkedin.com/in/chadrack-mbala-m-8b3a7326b/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="text-[#907E4B]">LinkedIn</span>
            </a>,
                <a
                    href="https://github.com/chadrackmbala"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="text-[#907E4B]"> GitHub</span>
                </a> ou <a
                    href="https://stackoverflow.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="text-[#907E4B]">StackOverFlow </span>
                </a>
                pour découvrir mon univers ou simplement discuter !</p><br />
            <a
                href="mailto:chadrackmbala20@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[18px] flex justify-center items-center w-[230px] h-[40px] border-2 border-[#907E4B] text-[#907E4B] rounded-[25px] cursor-pointer transition-all duration-300 hover:bg-[#907E4B] hover:text-[#1D3331] mx-auto">
                Travaillons ensemble
            </a>
        </div>
    )
}

export default FirstComponent;