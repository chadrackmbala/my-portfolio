import '../../App.css'
import chadrackImg from '../../Images/Chadrack.jpg';
import reactJs from '../../Images/react_original_logo_icon_146374.png';
import node from '../../Images/nodejs_original_wordmark_logo_icon_146412.png';
import npm from '../../Images/npm_icon_130871.png';
import tsx from '../../Images/file_type_typescript_official_icon_130107.png';
import js from '../../Images/js.png';
import html from '../../Images/html-5_174854.png';
import css from '../../Images/file_type_css_icon_130661.png';
import mysql from '../../Images/mysqlworkbench_93532.png';
import github from '../../Images/Github_icon-icons.com_66788.png';
import git from '../../Images/file_type_git_icon_130581.png';
import wp from '../../Images/wp_icon-icons.com_62788.png';
import figma from '../../Images/figma_5968705.png';
import vscode from '../../Images/file_type_vscode_icon_130084.png'

function RightSide() {
    return (
        <>
            <div className="bg-[#3A3A3A]  h-full">
                <img src={chadrackImg} alt="Chadrack" />
            </div>
            <div className='p-[10px] bg-white'>
                <p className='font-semibold text-[35px] pl-[30px]'>
                    À propos de moi
                </p>
                <p className='text-black p-[30px]'>
                    <span className='font-thin text-[25px] '>
                        Mbote na bino 👋 Je m'appelle Chadrack Mbala.
                        Ma passion pour la création numérique remonte à 2012, lorsque j’ai découvert les merveilles du HTML et du CSS. Depuis, je n’ai jamais cessé de coder.
                        Au fil des années, j’ai eu la chance de collaborer avec une start-up web pleine d’énergie, et de travailler en freelance sur des projets d'applications web modernes, fonctionnelles et bien pensées.
                        Ce que j’aime ? Donner vie aux idées sur le web, avec une touche de rigueur et de créativité.
                        Au fil des années, j’ai eu la chance de collaborer avec une start-up web pleine
                    </span>
                </p>
            </div>
            <div className='p-[10px] bg-[#F1F1F1]'>
                <p className='font-semibold text-[35px] pl-[30px]'>
                    Mon expertise
                </p>
                <div className='flex justify-center flex-wrap gap-10 w-[500px] mx-auto mt-[15px]'>
                    <div className='w-[90px] h-[90px] bg-white rounded-xl'>
                        <img src={reactJs} alt="react" />
                    </div>
                    <div className='w-[90px] h-[90px] bg-white rounded-xl'>
                        <img src={node} alt="node" />
                    </div>
                    <div className='w-[90px] h-[90px] bg-white rounded-xl'>
                        <img src={npm} alt="npm" />
                    </div>
                    <div className='w-[90px] h-[90px] bg-white rounded-xl'>
                        <img src={js} alt="js" />
                    </div>
                    <div className='w-[90px] h-[90px] bg-white rounded-xl'>
                        <img src={tsx} alt="tsx" />
                    </div>
                    <div className='w-[90px] h-[90px] bg-white rounded-xl'>
                        <img src={html} alt="html" />
                    </div>
                    <div className='w-[90px] h-[90px] bg-white rounded-xl'>
                        <img src={css} alt="css" />
                    </div>
                    <div className='w-[90px] h-[90px] bg-white rounded-xl'>
                        <img src={mysql} alt="mysql" />
                    </div>
                    <div className='w-[90px] h-[90px] bg-white rounded-xl'>
                        <img src={wp} alt="wp" />
                    </div>
                </div>
                <p className='font-semibold text-[35px] pl-[30px]'>
                    Mes outils
                </p>
                <div className='flex justify-center flex-wrap gap-10 w-[500px] mx-auto mt-[15px]'>
                    <div className='w-[90px] h-[90px] bg-white rounded-xl'>
                        <img src={vscode} alt="vscode" />
                    </div>
                    <div className='w-[90px] h-[90px] bg-white rounded-xl'>
                        <img src={figma} alt="figma" />
                    </div>
                    <div className='w-[90px] h-[90px] bg-white rounded-xl'>
                        <img src={github} alt="github" />
                    </div>
                    <div className='w-[90px] h-[90px] bg-white rounded-xl'>
                        <img src={git} alt="git" />
                    </div>
                </div>
            </div>
            <div className="p-[10px] bg-[#907E4B] text-white">
                <p className="font-semibold text-[35px] pl-[30px]">
                    What's next ?
                </p>
                <p className="p-[30px]">
                    <span className="font-thin text-[25px]">
                        Prêt à démarrer votre prochain projet ?
                        Envoyez-moi un e-mail pour que nous puissions en discuter et donner vie à vos idées.
                        Ce sera un réel plaisir de collaborer avec vous !
                    </span>
                </p>
                <a
                href="mailto:chadrackmbala20@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-[300px] h-[50px] border-2 border-[#907E4B] text-[#907E4B] rounded-[25px] cursor-pointer transition-all duration-300 hover:bg-[#907E4B] hover:text-[#1D3331] mx-auto"
            >
                Travaillons ensemble
            </a>
            </div>
        </>
    )
}

export default RightSide;